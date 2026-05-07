$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

$ToolsDir = Join-Path $Root ".tools"
$NgrokDir = Join-Path $ToolsDir "ngrok"
$NgrokExe = Join-Path $NgrokDir "ngrok.exe"
$PythonExe = Join-Path $Root ".venv\Scripts\python.exe"
$FlaskLog = Join-Path $Root "server.err.log"
$FlaskOut = Join-Path $Root "server.out.log"
$NgrokLog = Join-Path $Root "ngrok.err.log"
$NgrokOut = Join-Path $Root "ngrok.out.log"

function Get-ListeningPid {
    param([int]$Port)

    $line = netstat -ano -p tcp | Select-String ":$Port " | Select-Object -First 1
    if (-not $line) {
        return $null
    }

    $parts = ($line.ToString() -split "\s+") | Where-Object { $_ }
    return [int]$parts[-1]
}

function Wait-ForHttp {
    param(
        [string]$Url,
        [hashtable]$Headers = @{},
        [int]$TimeoutSeconds = 20
    )

    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
    while ((Get-Date) -lt $deadline) {
        try {
            return Invoke-RestMethod -Uri $Url -Headers $Headers
        }
        catch {
            Start-Sleep -Milliseconds 500
        }
    }

    throw "Timed out waiting for $Url"
}

Write-Host "== Call Agent launcher =="

if (-not (Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "Created .env from .env.example. Fill it in, then run this script again."
    exit 1
}

if (-not (Test-Path $PythonExe)) {
    Write-Host "Creating Python virtual environment..."
    python3.13 -m venv .venv
}

Write-Host "Installing Python dependencies..."
& $PythonExe -m pip install -r requirements.txt | Out-Host

if (-not (Test-Path $NgrokExe)) {
    Write-Host "Downloading ngrok..."
    New-Item -ItemType Directory -Force $ToolsDir | Out-Null
    Invoke-WebRequest `
        -Uri "https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip" `
        -OutFile (Join-Path $ToolsDir "ngrok.zip")
    Expand-Archive -Path (Join-Path $ToolsDir "ngrok.zip") -DestinationPath $NgrokDir -Force
}

if ($env:NGROK_AUTHTOKEN) {
    Write-Host "Saving ngrok authtoken from NGROK_AUTHTOKEN..."
    & $NgrokExe config add-authtoken $env:NGROK_AUTHTOKEN | Out-Host
}

$flaskPid = Get-ListeningPid -Port 5000
if ($flaskPid) {
    Write-Host "Stopping existing Flask listener on port 5000 (PID $flaskPid)..."
    Stop-Process -Id $flaskPid -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
}

$ngrokPid = Get-ListeningPid -Port 4040
if ($ngrokPid) {
    Write-Host "Stopping existing ngrok API listener on port 4040 (PID $ngrokPid)..."
    Stop-Process -Id $ngrokPid -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
}

Write-Host "Starting Flask on http://127.0.0.1:5000 ..."
$flask = Start-Process `
    -FilePath $PythonExe `
    -ArgumentList "app.py" `
    -WorkingDirectory $Root `
    -WindowStyle Hidden `
    -RedirectStandardOutput $FlaskOut `
    -RedirectStandardError $FlaskLog `
    -PassThru

Wait-ForHttp -Url "http://127.0.0.1:5000/health" | Out-Null

Write-Host "Starting ngrok tunnel to port 5000 ..."
$ngrok = Start-Process `
    -FilePath $NgrokExe `
    -ArgumentList "http 5000" `
    -WorkingDirectory $Root `
    -WindowStyle Hidden `
    -RedirectStandardOutput $NgrokOut `
    -RedirectStandardError $NgrokLog `
    -PassThru

Start-Sleep -Seconds 3

try {
    $tunnels = Invoke-RestMethod -Uri "http://127.0.0.1:4040/api/tunnels"
}
catch {
    Write-Host ""
    Write-Host "ngrok did not start. Check ngrok.err.log."
    Write-Host "If it says an authtoken is required, run:"
    Write-Host '$env:NGROK_AUTHTOKEN="your_token_here"'
    Write-Host ".\start-all.ps1"
    exit 1
}

$publicUrl = ($tunnels.tunnels | Where-Object { $_.proto -eq "https" } | Select-Object -First 1).public_url
if (-not $publicUrl) {
    throw "ngrok started but did not return an HTTPS tunnel."
}

Wait-ForHttp `
    -Url "$publicUrl/health" `
    -Headers @{ "ngrok-skip-browser-warning" = "true" } `
    -TimeoutSeconds 20 | Out-Null

Write-Host ""
Write-Host "Ready."
Write-Host "Flask PID: $($flask.Id)"
Write-Host "ngrok PID: $($ngrok.Id)"
Write-Host ""
Write-Host "Local dashboard:"
Write-Host "  http://127.0.0.1:5000/events"
Write-Host ""
Write-Host "ngrok inspector:"
Write-Host "  http://127.0.0.1:4040"
Write-Host ""
Write-Host "Twilio URLs:"
Write-Host "  Voice webhook:        $publicUrl/voice"
Write-Host "  Status callback URL:  $publicUrl/missed-call"
Write-Host ""
Write-Host "Leave this PowerShell window open if you want to keep seeing these URLs."
Write-Host "The app and tunnel are running in the background. Stop them with .\stop-all.ps1."
