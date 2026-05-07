$ErrorActionPreference = "Stop"

$ngrok = ".\.tools\ngrok\ngrok.exe"
if (-not (Test-Path $ngrok)) {
    New-Item -ItemType Directory -Force .tools | Out-Null
    Invoke-WebRequest `
        -Uri "https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip" `
        -OutFile ".\.tools\ngrok.zip"
    Expand-Archive -Path ".\.tools\ngrok.zip" -DestinationPath ".\.tools\ngrok" -Force
}

if ($env:NGROK_AUTHTOKEN) {
    & $ngrok config add-authtoken $env:NGROK_AUTHTOKEN
}

& $ngrok http 5000
