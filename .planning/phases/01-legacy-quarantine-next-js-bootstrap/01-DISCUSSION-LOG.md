# Phase 1: Legacy Quarantine & Next.js Bootstrap - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-17
**Phase:** 01-Legacy Quarantine & Next.js Bootstrap
**Areas discussed:** Legacy Quarantine Strategy, Content Extraction Architecture, Next.js Directory & Styling Structure

---

## Legacy Quarantine Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Full quarantine | Move index.html, server.py, styles.css, _next/, and icons/ into legacy_codebase/. Selectively copy assets to public/ as components are rebuilt. | ✓ |
| Quarantine + immediate asset mirror | Move to legacy_codebase/ but immediately copy icons and static media into public/ so Next.js can reference them from Day 1. | |
| Minimal quarantine | Keep server.py and assets in legacy_codebase/ with a script/shortcut to launch legacy proxy on port 8080 anytime for side-by-side visual comparison. | |

**User's choice:** Full quarantine: Move index.html, server.py, styles.css, _next/, and icons/ into legacy_codebase/. Selectively copy assets to public/ as components are rebuilt.
**Notes:** User also confirmed adding an `npm run legacy` script to `package.json` to launch `server.py` on port 8080 inside `legacy_codebase/` for side-by-side comparison.

---

## Content Extraction Architecture

| Option | Description | Selected |
|--------|-------------|----------|
| Hybrid | JSON files in src/content/projects/ & src/content/pages/ with TypeScript interfaces in src/types/content.ts and getter helpers (getAllProjects, getProjectBySlug) in src/lib/content.ts | ✓ |
| Pure TypeScript files | Store projects directly as typed TypeScript objects in src/content/projects.ts (avoids JSON imports/parsing) | |
| Pure JSON | Keep raw JSON files in src/content/ with simple import statements where needed | |

**User's choice:** Hybrid approach with structured JSON files, TypeScript interfaces, and loader utilities in `src/lib/content.ts`.
**Notes:** User also opted for lightweight TypeScript interfaces instead of heavy Zod runtime validation.

---

## Next.js Directory & Styling Structure

| Option | Description | Selected |
|--------|-------------|----------|
| 100% Exact Parity Fonts | Use next/font/local to load the exact legacy .woff2 luxury fonts from legacy_codebase/ into CSS font variables. | ✓ |
| Google Fonts alternative | Configure next/font/google with high-end luxury serif and sans-serif fonts. | |

**User's choice:** Use `next/font/local` to load exact `.woff2` font files from legacy bundle into CSS variables for pixel-perfect typographic fidelity.

| Option | Description | Selected |
|--------|-------------|----------|
| Vanilla CSS tokens + CSS Modules | Vanilla CSS design tokens in src/styles/ (tokens.css, globals.css) + CSS Modules (*.module.css) for components (no Tailwind) | ✓ |
| Single global stylesheet | BEM methodology with all styles in src/styles/ | |

**User's choice:** Vanilla CSS design tokens + CSS Modules, avoiding Tailwind CSS in strict compliance with `GEMINI.md`.

---

## The Agent's Discretion

- TypeScript path alias `@/*` setup in `tsconfig.json`.
- Extraction logic and metadata structure for individual project fields.

## Deferred Ideas

- Phase 2: Lenis smooth scroll and kinetic animation engine.
- Phase 3: Layout shell, header, and footer components.
- Phase 4: Full portfolio case study dynamic routes and gallery carousel.
- Phase 5: Informational pages and consultation inquiry form.
- Phase 6: Production SEO, JSON-LD schema, and performance audits.
