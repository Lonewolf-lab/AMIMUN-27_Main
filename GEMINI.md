<!-- GSD:project-start source:PROJECT.md -->

## Project

**Haven Constructions — Luxury Home Builder Showcase Modernization**

A complete, high-fidelity modernization and refactoring of the Haven Constructions custom luxury home builder showcase (serving Essendon, Aberfeldie, Moonee Ponds, and Ascot Vale) from an exported, monolithic static bundle into a clean, maintainable Next.js (App Router) + React + TypeScript web application.

**Core Value:** Preserve 100% of the premium visual layout, luxury aesthetics, fluid typography, smooth scrolling physics (Lenis), and staggered text-reveal animations while transitioning to a modular, high-performance React component architecture.

### Constraints

- **Tech Stack:** Next.js (App Router), React 19, TypeScript, CSS Modules / Vanilla CSS tokens, Lenis, GSAP / Framer Motion.
- **Visual Fidelity:** The layout, typography scales, colors, padding, and animations must exactly match the legacy live site.
- **Performance:** Eliminate monolithic file bloat, optimize fonts and media with Next.js Image/Font optimization.

<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->

## Technology Stack

## Languages

- HTML5 / Vanilla JavaScript (`index.html`, `server.py`, `_next/static/chunks/`) - Cloned static site structure with client-side hydration and runtime fallback hooks.
- CSS3 (`styles.css`, `_next/static/css/`) - Fluid typography, responsive design tokens, and text-reveal animation keyframes.
- Python 3 (`server.py`) - Local development proxy and static asset server with live caching fallback.

## Runtime

- Python 3.x for local web server (`server.py`).
- Modern Evergreen Web Browser (Chrome, Safari, Firefox, Edge) with WebGL, Web Audio, and ES2020+ support.
- None detected (standalone cloned web bundle; original site originated from an npm-managed Next.js build).

## Frameworks

- Next.js (SSG Exported Client Bundle) - Upstream site built with Next.js Pages router, exported as static assets in `_next/`.
- Lenis Smooth Scroll (`index.html`, `_next/static/chunks/`) - Smooth inertia-based scrolling.
- Three.js / DRACOLoader (`_next/static/chunks/`) - 3D models and rendering runtime.
- Python `http.server` (`server.py`) - Custom local dev server implementing CORS headers and auto-fallback reverse caching.

## Configuration & Tooling

- `server.py` runs on port 8080 by default with MIME type mappings for modern 3D/audio/font assets (`.wasm`, `.ktx2`, `.glb`, `.spline`, `.woff2`).
- Auto-proxies 404 assets from `https://www.havenconstructions.com.au`.

<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

## CSS Architecture & Design Tokens

- **Fluid Typography:** Uses CSS `clamp()` functions for scale steps (`--step--2` through `--step-10`).
- **Fluid Spacing:** Clamp-based spacing scale (`--space-3xs` to `--space-5xl`).
- **Animation & Transitions:**
- **Text Reveal Animations:**

## Python Server Conventions

- **PEP 8 Compliance:** 4-space indentation, clear docstrings at module level.
- **Error Handling:** Graceful try/except around network proxy requests to avoid crashing the local server when assets fail to fetch upstream.
- **Port Flexibility:** Supports optional CLI port argument (`python3 server.py [PORT]`).

<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

## Overview

## Architecture Layers

```

```

## Data Flow & Hydration

- **Page Load:** The browser loads `index.html`, which evaluates `__page_cloner_runtime_fallback__` before webpack and Next.js chunks run.
- **Navigation:** Next.js router switches between pages by requesting JSON manifests (`_buildManifest.js`, `_ssgManifest.js`) and corresponding `_next/data/.../*.json` files.
- **Asset Loading:** If an image, font, or 3D asset is not found locally on disk, `server.py` handles the 404 by downloading it from the live site directly to the local path, ensuring complete offline availability over time.

<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.agents/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
