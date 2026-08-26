#!/usr/bin/env bash
set -euo pipefail

project_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
chrome_bin=${KELA_MEMORY_CHROME_BIN:-google-chrome}
render_tmp_dir=$(mktemp -d)
server_pid=""

cleanup() {
  if [[ -n "$server_pid" ]]; then
    kill "$server_pid" >/dev/null 2>&1 || true
  fi
  rm -r -- "$render_tmp_dir"
}
trap cleanup EXIT

server_port=$(python3 - <<'PY'
import socket

with socket.socket() as listener:
    listener.bind(("127.0.0.1", 0))
    print(listener.getsockname()[1])
PY
)

python3 -m http.server "$server_port" \
  --bind 127.0.0.1 \
  --directory "$project_dir" \
  >"${render_tmp_dir}/server.log" 2>&1 &
server_pid=$!

for attempt in {1..30}; do
  if curl -fsS "http://127.0.0.1:${server_port}/memory-games.html" >/dev/null; then
    break
  fi
  if [[ "$attempt" == 30 ]]; then
    echo "Local render server did not start" >&2
    exit 1
  fi
  sleep 0.1
done

render_deck() {
  local page_name=$1
  local pdf_name=$2
  local temporary_pdf="${render_tmp_dir}/${pdf_name}"

  "$chrome_bin" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --no-pdf-header-footer \
    --run-all-compositor-stages-before-draw \
    --virtual-time-budget=6000 \
    --print-to-pdf="$temporary_pdf" \
    "http://127.0.0.1:${server_port}/${page_name}" >/dev/null 2>&1

  cp "$temporary_pdf" "${project_dir}/assets/memory-games/printable/${pdf_name}"
}

render_deck animal-memory-game.html animal-memory-cards.pdf
render_deck tree-memory-game.html tree-memory-cards.pdf
render_deck plant-memory-game.html plant-memory-cards.pdf

for pdf in "${project_dir}"/assets/memory-games/printable/*-memory-cards.pdf; do
  pdfinfo "$pdf" | awk -v name="$(basename "$pdf")" '
    /^Pages:/ { pages=$2 }
    /^Page size:/ { width=$3; height=$5 }
    END { printf "%s: %s page(s), %s x %s pt\n", name, pages, width, height }
  '
done
