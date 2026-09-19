---
last_mapped_commit: 32aacc2d2a42ff409b8d282a030dde82dab10ebb
last_mapped_at: 2026-09-17
---
# Code & Style Conventions

**Analysis Date:** 2026-09-17

## CSS Architecture & Design Tokens

**CSS Variables (`:root` in `styles.css`):**

- **Fluid Typography:** Uses CSS `clamp()` functions for scale steps (`--step--2` through `--step-10`).
- **Fluid Spacing:** Clamp-based spacing scale (`--space-3xs` to `--space-5xl`).
- **Animation & Transitions:**
  - Easing curves defined via custom properties (`--ease`, `--ease-in-out`, `--ease-bounce`, `--ease-out`).
  - Duration standards (`--transition`: 350ms, `--transition-quick`: 200ms, `--transition-slow`: 700ms).
- **Text Reveal Animations:**
  - Pattern uses `[animation="text-reveal"]` with `.word-parent` and `.word-child`.
  - Child elements undergo staggered `transform: translateY(100%)` to `0` with incrementing transition delays.

## Python Server Conventions

- **PEP 8 Compliance:** 4-space indentation, clear docstrings at module level.
- **Error Handling:** Graceful try/except around network proxy requests to avoid crashing the local server when assets fail to fetch upstream.
- **Port Flexibility:** Supports optional CLI port argument (`python3 server.py [PORT]`).
