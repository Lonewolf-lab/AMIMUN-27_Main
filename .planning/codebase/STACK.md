---
last_mapped_commit: 32aacc2d2a42ff409b8d282a030dde82dab10ebb
last_mapped_at: 2026-09-17
---
# Technology Stack

**Analysis Date:** 2026-09-17

## Languages

**Primary:**

- HTML5 / Vanilla JavaScript (`index.html`, `server.py`, `_next/static/chunks/`) - Cloned static site structure with client-side hydration and runtime fallback hooks.
- CSS3 (`styles.css`, `_next/static/css/`) - Fluid typography, responsive design tokens, and text-reveal animation keyframes.

**Secondary:**

- Python 3 (`server.py`) - Local development proxy and static asset server with live caching fallback.

## Runtime

**Environment:**

- Python 3.x for local web server (`server.py`).
- Modern Evergreen Web Browser (Chrome, Safari, Firefox, Edge) with WebGL, Web Audio, and ES2020+ support.

**Package Manager:**

- None detected (standalone cloned web bundle; original site originated from an npm-managed Next.js build).

## Frameworks

**Core:**

- Next.js (SSG Exported Client Bundle) - Upstream site built with Next.js Pages router, exported as static assets in `_next/`.
- Lenis Smooth Scroll (`index.html`, `_next/static/chunks/`) - Smooth inertia-based scrolling.
- Three.js / DRACOLoader (`_next/static/chunks/`) - 3D models and rendering runtime.
- Python `http.server` (`server.py`) - Custom local dev server implementing CORS headers and auto-fallback reverse caching.

## Configuration & Tooling

**Local Server:**

- `server.py` runs on port 8080 by default with MIME type mappings for modern 3D/audio/font assets (`.wasm`, `.ktx2`, `.glb`, `.spline`, `.woff2`).
- Auto-proxies 404 assets from `https://www.havenconstructions.com.au`.
