# Missed Call Auto-Responder

Automatically sends an SMS with your Cal.com booking link when someone calls
and you do not pick up. Built with Python, Flask, and Twilio.

## Run everything

From this folder in PowerShell:

```powershell
.\start-all.ps1
```

This creates the Python environment if needed, installs dependencies, starts
Flask, starts ngrok, tests both, and prints your Twilio webhook URLs.

Stop everything with:

```powershell
.\stop-all.ps1
```

The local app runs on:

```text
http://127.0.0.1:5000
```

Useful local checks:

```text
http://127.0.0.1:5000/
http://127.0.0.1:5000/health
http://127.0.0.1:5000/events
```

## Manual setup

```powershell
python3.13 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py
```

## Environment

Create a `.env` file using `.env.example` as the template:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE=+17014197373
YOUR_NAME=Your Name
CAL_BOOKING_URL=https://cal.com/yourname/30min
AUTO_SMS_ON_INCOMING=1
VOICE_MESSAGE=Hi, you've reached {YOUR_NAME}. I can't take your call right now. I just sent you a text with a link to book a meeting.
SMS_MESSAGE=Hi! Sorry I missed your call - I'm {YOUR_NAME}.\n\nBook a time to talk here:\n{CAL_BOOKING_URL}\n\nI'll confirm within minutes!
```

The real `.env` file is intentionally ignored by git.

By default, the app sends the booking SMS as soon as the Twilio number receives
a call. If you want Twilio to ring your real phone first and only send SMS when
you do not answer, add this:

```env
OWNER_PHONE=+1xxxxxxxxxx
```

Optional dashboard token for viewing `/events` through the public ngrok URL:

```env
DASHBOARD_TOKEN=choose-a-private-token
```

## Twilio setup

Expose the local app so Twilio can reach it:

```powershell
.\start-ngrok.ps1
```

Use the generated HTTPS URL in the Twilio Console:

| Field | Value |
|---|---|
| Voice webhook, "A call comes in" | `https://your-ngrok-url/voice` |
| Status callback URL | `https://your-ngrok-url/missed-call` |
| Status callback events | `no-answer`, `busy`, `failed` |

## Customize the SMS

Edit `SMS_MESSAGE` in `.env`. Use `\n` for line breaks.

## Customize the spoken call message

Edit `VOICE_MESSAGE` in `.env`, then restart with:

```powershell
.\stop-all.ps1
.\start-all.ps1
```

You can use these placeholders in `VOICE_MESSAGE` and `SMS_MESSAGE`:

```text
{YOUR_NAME}
{CAL_BOOKING_URL}
{TWILIO_PHONE}
```

## View missed calls and SMS attempts

Open the local dashboard:

```text
http://127.0.0.1:5000/events
```

Raw JSON is available at:

```text
http://127.0.0.1:5000/api/events
```

The app stores this history locally in `event_log.sqlite3`.
