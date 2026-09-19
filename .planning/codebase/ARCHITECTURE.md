---
last_mapped_commit: 32aacc2d2a42ff409b8d282a030dde82dab10ebb
last_mapped_at: 2026-09-17
---
# Architecture

**Analysis Date:** 2026-09-17

## Overview

The codebase is a static export and self-hosted clone of a high-end Next.js web application for **Haven Constructions**, a custom luxury home builder based in Melbourne (Essendon, Aberfeldie, Moonee Ponds, Ascot Vale).

The system consists of:

1. **Static Presentation Tier:** A fully rendered HTML document (`index.html`) loaded with extensive inline and external CSS styling, fluid fluid typography tokens, and pre-bundled Next.js JavaScript chunks.
2. **Local Asset Server / Caching Proxy:** A Python script (`server.py`) serving files locally on port 8080 with CORS headers while dynamically mirroring missing assets from `https://www.havenconstructions.com.au` into local directories.
3. **Data Hydration Layer:** Pre-rendered Next.js SSG data chunks stored under `_next/data/G9U8tHBk031x0vfc7LJ4H/` containing structured content for projects, about, expertise, and contact pages.

## Architecture Layers

```
┌────────────────────────────────────────────────────────┐
│                   Browser Client                       │
│  - index.html                                          │
│  - styles.css + _next/static/css                       │
│  - Lenis Scroll + Three.js Draco 3D                   │
│  - Fallback Interceptor (window.fetch / XHR)           │
└────────────────────────┬───────────────────────────────┘
                         │ HTTP GET
                         ▼
┌────────────────────────────────────────────────────────┐
│             Local Dev Server (server.py)               │
│  - Port 8080                                           │
│  - Custom MIME types (.wasm, .ktx2, .glb, .woff2)      │
│  - On 404: Downloads & caches from upstream origin     │
└────────────────────────┬───────────────────────────────┘
                         │ Fetch on cache-miss
                         ▼
┌────────────────────────────────────────────────────────┐
│ Upstream Origin (https://www.havenconstructions.com.au)│
└────────────────────────────────────────────────────────┘
```

## Data Flow & Hydration

- **Page Load:** The browser loads `index.html`, which evaluates `__page_cloner_runtime_fallback__` before webpack and Next.js chunks run.
- **Navigation:** Next.js router switches between pages by requesting JSON manifests (`_buildManifest.js`, `_ssgManifest.js`) and corresponding `_next/data/.../*.json` files.
- **Asset Loading:** If an image, font, or 3D asset is not found locally on disk, `server.py` handles the 404 by downloading it from the live site directly to the local path, ensuring complete offline availability over time.
