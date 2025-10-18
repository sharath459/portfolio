@echo off
setlocal ENABLEDELAYEDEXPANSION

REM Resolve repo root and file paths
set SCRIPT_DIR=%~dp0
set ROOT=%SCRIPT_DIR%..
set HTML=%ROOT%\public\Resume\Sharath_Resume_OnePage.html
set PDF=%ROOT%\public\Resume\Sharath_Resume_OnePage.pdf

if not exist "%HTML%" (
  echo HTML not found: %HTML%
  exit /b 1
)

REM Build file URL for browsers
set HTML_URL=file:///%HTML:\=/%

REM Try Microsoft Edge (64-bit then 32-bit)
set EDGE64=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe
set EDGE32=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe
if exist "%EDGE64%" (
  echo Using Edge: "%EDGE64%"
  "%EDGE64%" --headless=new --disable-gpu --print-to-pdf="%PDF%" "%HTML_URL%"
  if exist "%PDF%" (
    echo PDF generated at %PDF%
    exit /b 0
  )
)
if exist "%EDGE32%" (
  echo Using Edge: "%EDGE32%"
  "%EDGE32%" --headless=new --disable-gpu --print-to-pdf="%PDF%" "%HTML_URL%"
  if exist "%PDF%" (
    echo PDF generated at %PDF%
    exit /b 0
  )
)

REM Try Google Chrome
set CHROME64=%ProgramFiles%\Google\Chrome\Application\chrome.exe
set CHROME32=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe
if exist "%CHROME64%" (
  echo Using Chrome: "%CHROME64%"
  "%CHROME64%" --headless=new --disable-gpu --print-to-pdf="%PDF%" "%HTML_URL%"
  if exist "%PDF%" (
    echo PDF generated at %PDF%
    exit /b 0
  )
)
if exist "%CHROME32%" (
  echo Using Chrome: "%CHROME32%"
  "%CHROME32%" --headless=new --disable-gpu --print-to-pdf="%PDF%" "%HTML_URL%"
  if exist "%PDF%" (
    echo PDF generated at %PDF%
    exit /b 0
  )
)

echo Could not find Edge or Chrome to generate PDF. Install Microsoft Edge or Google Chrome and rerun.
exit /b 2
