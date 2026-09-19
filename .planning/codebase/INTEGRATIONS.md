---
last_mapped_commit: 32aacc2d2a42ff409b8d282a030dde82dab10ebb
last_mapped_at: 2026-09-17
---
# Integrations & External Services

**Analysis Date:** 2026-09-17

## External Origins

**Upstream Live Website:**

- **Origin:** `https://www.havenconstructions.com.au`
- **Purpose:** Source origin for the luxury home builder site (Haven Constructions, servicing Essendon, Aberfeldie, Moonee Ponds, Ascot Vale).
- **Proxy / Fallback:**
  - Client-side in `index.html`: `__page_cloner_runtime_fallback__` script intercepts `window.fetch` and `XMLHttpRequest` to fallback to `https://www.havenconstructions.com.au` when local assets return 404.
  - Server-side in `server.py`: `ClonerHandler.do_GET()` automatically downloads missing assets from upstream and saves them to local disk.

## Content & Data Endpoints

**Next.js Data Payloads (`_next/data/`):**

- Static JSON routes embedded locally for page state:
  - `_next/data/G9U8tHBk031x0vfc7LJ4H/index.json` - Homepage content
  - `_next/data/G9U8tHBk031x0vfc7LJ4H/about.json` - About page data
  - `_next/data/G9U8tHBk031x0vfc7LJ4H/projects.json` - Projects showcase listing
  - `_next/data/G9U8tHBk031x0vfc7LJ4H/projects/*.json` - Individual project case studies (`ascot-residence.json`, `calibre.json`, `obsidian.json`, `small-house.json`)
  - `_next/data/G9U8tHBk031x0vfc7LJ4H/expertise.json` - Expertise services
  - `_next/data/G9U8tHBk031x0vfc7LJ4H/contact.json` - Contact form data
  - `_next/data/G9U8tHBk031x0vfc7LJ4H/for-architects.json` - Architect partnership page

## Third-Party Media & APIs

**Web APIs:**

- Web Audio API (`AudioContext`) with user interaction resume hook.
- WebGL & DRACOLoader for compressed 3D geometry.
- Lenis Virtual Scroll API.
