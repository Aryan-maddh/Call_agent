"""
Missed Call Auto-Responder
--------------------------
When someone calls and you miss it, Twilio triggers this webhook.
It automatically sends them an SMS with your Cal.com booking link.
"""

import os
import sqlite3
from datetime import datetime, timezone

from dotenv import load_dotenv
from flask import Flask, abort, render_template_string, request
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse

load_dotenv()

app = Flask(__name__)

# Twilio credentials (from .env)
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE = os.getenv("TWILIO_PHONE")

# Your details
YOUR_NAME = os.getenv("YOUR_NAME", "Alex")
CAL_BOOKING_URL = os.getenv("CAL_BOOKING_URL")
DASHBOARD_TOKEN = os.getenv("DASHBOARD_TOKEN")
DB_PATH = os.getenv("DB_PATH", "event_log.sqlite3")
OWNER_PHONE = os.getenv("OWNER_PHONE")
AUTO_SMS_ON_INCOMING = os.getenv("AUTO_SMS_ON_INCOMING", "1") == "1"
VOICE_MESSAGE = os.getenv(
    "VOICE_MESSAGE",
    "Hi, you've reached {YOUR_NAME}. I can't take your call right now. "
    "I just sent you a text with a link to book a meeting.",
)
CONNECT_MESSAGE = os.getenv(
    "CONNECT_MESSAGE",
    "Please wait while I connect you to {YOUR_NAME}.",
)
SMS_MESSAGE = os.getenv(
    "SMS_MESSAGE",
    "Hi! Sorry I missed your call - I'm {YOUR_NAME}.\\n\\n"
    "Book a time to talk here:\\n{CAL_BOOKING_URL}\\n\\n"
    "I'll confirm within minutes!",
)

required = {
    "TWILIO_ACCOUNT_SID": TWILIO_ACCOUNT_SID,
    "TWILIO_AUTH_TOKEN": TWILIO_AUTH_TOKEN,
    "TWILIO_PHONE": TWILIO_PHONE,
    "CAL_BOOKING_URL": CAL_BOOKING_URL,
}
missing = [name for name, value in required.items() if not value]
if missing:
    raise RuntimeError(
        "Missing required environment variables: "
        + ", ".join(missing)
        + ". Create a .env file (see .env.example) and restart the app."
    )

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)


def render_message(template: str) -> str:
    """Render a message from .env; supports \n plus common placeholders."""
    return template.replace("\\n", "\n").format(
        YOUR_NAME=YOUR_NAME,
        CAL_BOOKING_URL=CAL_BOOKING_URL,
        TWILIO_PHONE=TWILIO_PHONE,
        OWNER_PHONE=OWNER_PHONE or "",
    )


def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                created_at TEXT NOT NULL,
                event_type TEXT NOT NULL,
                phone TEXT,
                call_status TEXT,
                sms_status TEXT,
                sms_sid TEXT,
                error TEXT
            )
            """
        )


def log_event(event_type, phone=None, call_status=None, sms_status=None, sms_sid=None, error=None):
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            INSERT INTO events (
                created_at, event_type, phone, call_status, sms_status, sms_sid, error
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (
                datetime.now(timezone.utc).isoformat(timespec="seconds"),
                event_type,
                phone,
                call_status,
                sms_status,
                sms_sid,
                error,
            ),
        )


def get_events(limit=100):
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            """
            SELECT id, created_at, event_type, phone, call_status, sms_status, sms_sid, error
            FROM events
            ORDER BY id DESC
            LIMIT ?
            """,
            (limit,),
        ).fetchall()
    return [dict(row) for row in rows]


def require_dashboard_access():
    forwarded_for = request.headers.get("X-Forwarded-For")
    token = request.args.get("token") or request.headers.get("X-Dashboard-Token")
    is_local = request.remote_addr in ("127.0.0.1", "::1") and not forwarded_for

    if is_local:
        return
    if DASHBOARD_TOKEN and token == DASHBOARD_TOKEN:
        return
    abort(403)


init_db()


@app.get("/")
def index():
    """Basic landing response for quick local/browser checks."""
    return {
        "app": "Missed Call Auto-Responder",
        "status": "running",
        "webhooks": ["/voice", "/missed-call"],
    }


@app.get("/health")
def health():
    """Health check endpoint for local checks and hosting platforms."""
    return {"status": "ok"}


@app.get("/api/events")
def api_events():
    require_dashboard_access()
    return {"events": get_events()}


@app.get("/events")
def events_dashboard():
    require_dashboard_access()
    events = get_events()
    return render_template_string(
        """
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Call Agent Events</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 24px; color: #17202a; }
                h1 { font-size: 24px; margin-bottom: 16px; }
                table { width: 100%; border-collapse: collapse; font-size: 14px; }
                th, td { padding: 10px; border-bottom: 1px solid #d8dee4; text-align: left; }
                th { background: #f6f8fa; font-weight: 700; }
                .sent { color: #116329; font-weight: 700; }
                .error { color: #b42318; font-weight: 700; }
                .muted { color: #667085; }
            </style>
        </head>
        <body>
            <h1>Call Agent Events</h1>
            <table>
                <thead>
                    <tr>
                        <th>Time UTC</th>
                        <th>Type</th>
                        <th>Phone</th>
                        <th>Call Status</th>
                        <th>SMS Status</th>
                        <th>SMS SID</th>
                        <th>Error</th>
                    </tr>
                </thead>
                <tbody>
                    {% for event in events %}
                    <tr>
                        <td>{{ event.created_at }}</td>
                        <td>{{ event.event_type }}</td>
                        <td>{{ event.phone or "" }}</td>
                        <td>{{ event.call_status or "" }}</td>
                        <td class="{{ 'sent' if event.sms_status == 'sent' else 'error' if event.sms_status == 'error' else 'muted' }}">
                            {{ event.sms_status or "" }}
                        </td>
                        <td>{{ event.sms_sid or "" }}</td>
                        <td>{{ event.error or "" }}</td>
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
        </body>
        </html>
        """,
        events=events,
    )


@app.route("/missed-call", methods=["POST"])
def missed_call():
    """
    Twilio calls this URL when a call is not answered (set as the
    Status Callback URL on your Twilio number, triggered on no-answer).
    """
    caller_number = request.form.get("From") or request.form.get("Caller")
    call_status = request.form.get("DialCallStatus") or request.form.get("CallStatus")

    print(f"[Missed call] From: {caller_number} | Status: {call_status}")

    sms_result = {"status": "not_triggered", "sid": None, "error": None}
    if call_status in ("no-answer", "busy", "failed", "canceled") and caller_number:
        sms_result = send_booking_sms(caller_number)

    log_event(
        "missed_call",
        phone=caller_number,
        call_status=call_status,
        sms_status=sms_result["status"],
        sms_sid=sms_result["sid"],
        error=sms_result["error"],
    )

    # Twilio expects a TwiML response even for status callbacks.
    response = VoiceResponse()
    return str(response), 200


@app.route("/voice", methods=["POST"])
def voice():
    """
    Handle an incoming call. If OWNER_PHONE is configured, ring that number
    first and let /missed-call send SMS when the dial is not answered.
    Otherwise, send the booking SMS immediately for the current simple setup.
    """
    caller_number = request.form.get("From")
    call_status = request.form.get("CallStatus")
    log_event("voice", phone=caller_number, call_status=call_status)

    response = VoiceResponse()

    if OWNER_PHONE:
        response.say(render_message(CONNECT_MESSAGE), voice="Polly.Joanna")
        dial = response.dial(timeout=20, action="/missed-call", method="POST")
        dial.number(OWNER_PHONE)
        return str(response), 200

    sms_result = {"status": "not_triggered", "sid": None, "error": None}
    if AUTO_SMS_ON_INCOMING and caller_number:
        sms_result = send_booking_sms(caller_number)
        log_event(
            "incoming_sms",
            phone=caller_number,
            call_status=call_status,
            sms_status=sms_result["status"],
            sms_sid=sms_result["sid"],
            error=sms_result["error"],
        )

    response.say(render_message(VOICE_MESSAGE), voice="Polly.Joanna")
    response.hangup()
    return str(response), 200


def send_booking_sms(to_number: str):
    """Send an auto-reply SMS with the Cal.com booking link."""
    message_body = render_message(SMS_MESSAGE)

    try:
        msg = client.messages.create(
            body=message_body,
            from_=TWILIO_PHONE,
            to=to_number,
        )
        print(f"[SMS sent] SID: {msg.sid} -> {to_number}")
        return {"status": "sent", "sid": msg.sid, "error": None}
    except Exception as exc:
        print(f"[SMS error] {exc}")
        return {"status": "error", "sid": None, "error": str(exc)}


if __name__ == "__main__":
    app.run(
        debug=os.getenv("FLASK_DEBUG", "0") == "1",
        host=os.getenv("HOST", "127.0.0.1"),
        port=int(os.getenv("PORT", "5000")),
        use_reloader=False,
    )
