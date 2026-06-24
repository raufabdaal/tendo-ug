#!/usr/bin/env bash
# Tendo — local dev launcher (macOS / Linux)
# Phase 0 placeholder. Phase 1 will wire this to `pnpm dev` once the Next.js app exists.

set -e

echo ""
echo "Tendo dev launcher"
echo "=================="
echo ""

if [ ! -d "app/node_modules" ]; then
  echo "No app yet (Phase 0). Opening preview.html in your default browser instead."
  echo ""
  case "$(uname -s)" in
    Darwin*) open preview.html ;;
    Linux*)  xdg-open preview.html ;;
    *)       echo "Please open preview.html manually." ;;
  esac
  exit 0
fi

cd app
if [ ! -f "package.json" ]; then
  echo "app/package.json missing. Has Phase 1 been scaffolded?"
  exit 1
fi

echo "Starting dev server at http://localhost:3000"
pnpm dev
