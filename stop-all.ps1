$ErrorActionPreference = "SilentlyContinue"

function Stop-ListeningPid {
    param([int]$Port)

    $lines = netstat -ano -p tcp | Select-String ":$Port "
    foreach ($line in $lines) {
        $parts = ($line.ToString() -split "\s+") | Where-Object { $_ }
        $pidToStop = [int]$parts[-1]
        if ($pidToStop -gt 0) {
            Stop-Process -Id $pidToStop
            Write-Host "Stopped process $pidToStop on port $Port"
        }
    }
}

Stop-ListeningPid -Port 5000
Stop-ListeningPid -Port 4040
Get-Process -Name ngrok | Stop-Process

Write-Host "Stopped Flask/ngrok processes."
