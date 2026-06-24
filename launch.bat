@echo off
REM Tendo - local dev launcher (Windows)

echo.
echo Tendo dev launcher
echo ==================
echo.

if not exist "app\package.json" (
    echo No Next.js app yet. Opening preview.html instead.
    start "" "preview.html"
    exit /b 0
)

cd app

if not exist "node_modules" (
    echo Installing dependencies (first run only, ~30s)...
    call npm install --no-audit --no-fund
)

echo.
echo Starting dev server at http://localhost:3000
echo (Press Ctrl+C to stop.)
echo.
call npm run dev
