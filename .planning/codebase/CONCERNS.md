---
last_mapped_commit: 32aacc2d2a42ff409b8d282a030dde82dab10ebb
last_mapped_at: 2026-09-17
---
# Technical Concerns & Debt

**Analysis Date:** 2026-09-17

## Performance & File Size

**Monolithic `index.html` File:**

- `index.html` is approximately ~49.8 MB in size.
- Cloned pages frequently inline large base64 data, embedded SVG maps, or entire bundles inside `<script>` or `<style>` tags.
- Editing or formatting this file directly in IDEs can cause severe editor lag or high memory pressure.

## Upstream Dependency & Asset Drift

**Live Fallback Reliance:**

- `server.py` and `__page_cloner_runtime_fallback__` in `index.html` depend on `https://www.havenconstructions.com.au` being reachable.
- If the live website changes its build ID (`G9U8tHBk031x0vfc7LJ4H`) or removes old assets, 404 proxy requests may begin failing.
- **Remediation:** Warm the asset cache completely by spidering or navigating all pages locally so all assets reside permanently on disk.

## Maintainability

**Compiled Next.js Bundle:**

- Minified JavaScript bundles in `_next/static/chunks/` are difficult to maintain or modify directly compared to original source JSX/TSX components.
- If deep customization or feature extension is intended, consider either extracting clean static HTML/CSS templates or bootstrapping a modern Vite / Next.js project based on the captured design assets.
