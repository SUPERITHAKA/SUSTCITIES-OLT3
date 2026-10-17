$ErrorActionPreference = "Stop"

Push-Location $PSScriptRoot

try {
    New-Item -ItemType Directory -Force -Path "build" | Out-Null

    foreach ($program in @("xelatex", "biber")) {
        if (-not (Get-Command $program -ErrorAction SilentlyContinue)) {
            throw "$program is not installed or not in PATH."
        }
    }

    Write-Host "STEP 1: XeLaTeX" -ForegroundColor Cyan

    & xelatex -interaction=nonstopmode -halt-on-error -file-line-error -synctex=0 -output-directory=build Thesis.tex

    if ($LASTEXITCODE -ne 0) {
        throw "XeLaTeX failed. Check build\Thesis.log"
    }

    Write-Host "STEP 2: Biber bibliography" -ForegroundColor Cyan

    & biber --input-directory=build --output-directory=build Thesis

    if ($LASTEXITCODE -ne 0) {
        throw "Biber failed. Check build\Thesis.blg"
    }

    for ($pass = 2; $pass -le 3; $pass++) {
        Write-Host "STEP $($pass + 1): XeLaTeX pass $pass" -ForegroundColor Cyan

        & xelatex -interaction=nonstopmode -halt-on-error -file-line-error -synctex=0 -output-directory=build Thesis.tex

        if ($LASTEXITCODE -ne 0) {
            throw "XeLaTeX failed. Check build\Thesis.log"
        }
    }

    Write-Host "PDF COMPILED SUCCESSFULLY!" -ForegroundColor Green
    Write-Host "Location: report\build\Thesis.pdf" -ForegroundColor Green
}
finally {
    Pop-Location
}
