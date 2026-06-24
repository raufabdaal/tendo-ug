@echo off
REM Tendo - local dev launcher (Windows)
REM Phase 0 placeholder. Phase 1 will wire this to `pnpm dev` once the Next.js app exists.

echo.
echo Tendo dev launcher
echo ==================
echo.

if not exist "app\node_modules" (
    echo No app yet (Phase 0). Opening preview.html in your default browser instead.
    echo.
    start "" "preview.html"
    exit /b 0
)

cd app
if not exist "package.json" (
    echo app\package.json missing. Has Phase 1 been scaffolded?
    exit /b 1
)

echo Starting dev server at http://localhost:3000
call pnpm dev
