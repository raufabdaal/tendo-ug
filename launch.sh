#!/usr/bin/env bash
# Tendo — local dev launcher (macOS / Linux)
set -e

echo ""
echo "Tendo dev launcher"
echo "=================="
echo ""

if [ ! -d "app" ] || [ ! -f "app/package.json" ]; then
  echo "No Next.js app yet. Opening preview.html instead."
  case "$(uname -s)" in
    Darwin*) open preview.html ;;
    Linux*)  xdg-open preview.html 2>/dev/null || echo "Open preview.html manually." ;;
    *)       echo "Open preview.html manually." ;;
  esac
  exit 0
fi

cd app

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies (first run only, ~30s)..."
  npm install --no-audit --no-fund
fi

echo ""
echo "Starting dev server at http://localhost:3000"
echo "(Press Ctrl+C to stop.)"
echo ""
npm run dev
