$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

foreach ($program in @("xelatex", "biber")) {
    if (-not (Get-Command $program -ErrorAction SilentlyContinue)) {
        throw "$program is not available. Check MiKTeX installation."
    }
}

New-Item -ItemType Directory -Force -Path "build" | Out-Null

for ($pass = 1; $pass -le 3; $pass++) {
    Write-Host "XeLaTeX pass $pass of 3" -ForegroundColor Cyan

    & xelatex -interaction=nonstopmode -halt-on-error -file-line-error -synctex=1 -output-directory=build Thesis.tex

    if ($LASTEXITCODE -ne 0) {
        throw "XeLaTeX failed. See report\build\Thesis.log"
    }

    if ($pass -eq 1) {
        Write-Host "Processing bibliography..." -ForegroundColor Cyan

        & biber --input-directory=build --output-directory=build Thesis

        if ($LASTEXITCODE -ne 0) {
            throw "Biber failed. See report\build\Thesis.blg"
        }
    }
}

Write-Host "PDF READY: report\build\Thesis.pdf" -ForegroundColor Green
