# Phase 1: Legacy Quarantine & Next.js Bootstrap - Context

**Gathered:** 2026-09-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 establishes the clean modernization foundation for Haven Constructions:
1. Safely isolates the monolithic legacy cloned bundle (`index.html`, `server.py`, `styles.css`, `_next/`, `icons/`) into a quarantined `legacy_codebase/` directory, keeping it intact for reference and side-by-side local verification.
2. Bootstraps a clean Next.js 15 (App Router) + React 19 + TypeScript project at the workspace root without overwriting planning documentation or git history.
3. Sets up Vanilla CSS design tokens (`src/styles/tokens.css`, `src/styles/globals.css`) and CSS Modules architecture without Tailwind CSS.
4. Extracts structured project case study JSONs (`ascot-residence.json`, `calibre.json`, `obsidian.json`, `small-house.json`) and page data (`about.json`, `expertise.json`, `contact.json`) into `src/content/` with corresponding TypeScript type definitions in `src/types/content.ts` and loader helpers in `src/lib/content.ts`.
</domain>

<decisions>
## Implementation Decisions

### Legacy Quarantine & Reference Architecture
- **D-01:** Full quarantine: Move `index.html`, `server.py`, `styles.css`, `_next/`, and `icons/` into `legacy_codebase/`. Selectively copy fonts and media to Next.js `public/` as components are created rather than dumping the full 50MB clone into `public/`. — **Reversibility:** costly — Moving or reorganizing legacy assets touches root build setup and public file paths.
- **D-02:** Add an `npm run legacy` script to `package.json` that invokes `python3 server.py 8080` inside `legacy_codebase/`, enabling instant side-by-side comparison on `localhost:8080` (legacy) vs `localhost:3000` (Next.js). — **Reversibility:** reversible

### Content Architecture & Extraction
- **D-03:** Hybrid content storage: store project case studies as individual JSON files in `src/content/projects/` (`ascot-residence.json`, `calibre.json`, `obsidian.json`, `small-house.json`) and static page copy in `src/content/pages/` (`about.json`, `expertise.json`, `contact.json`). — **Reversibility:** costly — Reorganizing content schemas affects data loaders across pages and dynamic routes.
- **D-04:** Lightweight TypeScript interfaces: define strong TS types in `src/types/content.ts` (e.g. `Project`, `ProjectGalleryItem`, `PageContent`) and helper getter functions (`getAllProjects()`, `getProjectBySlug()`, `getPageContent()`) in `src/lib/content.ts` without runtime validator bloat (no Zod). — **Reversibility:** reversible

### Directory & Styling Structure
- **D-05:** Standard Next.js 15 App Router structure under `src/`:
  - `src/app/` — Root layout, metadata, and page routes.
  - `src/components/` — Modular React components.
  - `src/content/` — JSON data files.
  - `src/lib/` — Content loader utilities.
  - `src/styles/` — Global tokens and resets.
  - `src/types/` — Shared TypeScript type definitions. — **Reversibility:** costly
- **D-06:** Styling stack: Vanilla CSS design tokens (`tokens.css`, `globals.css`) paired with component-scoped CSS Modules (`*.module.css`). Strictly avoid Tailwind CSS per project conventions in `GEMINI.md`. — **Reversibility:** one-way — Replacing CSS Modules with utility classes or another CSS framework later would require rewriting all component styling.
- **D-07:** Typography loading: Configure `next/font/local` to load the exact legacy `.woff2` font files copied from `legacy_codebase/` into CSS font variables (`--font-serif`, `--font-sans`) to guarantee 100% typographic fidelity. — **Reversibility:** reversible

### The Agent's Discretion
- ESLint and TypeScript compiler options (`tsconfig.json` paths with `@/*` mapping).
- Extraction script or manual extraction accuracy for project metadata (architect name, location, photography credits, square meterage, year).
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope & Requirements
- `.planning/PROJECT.md` — Project definition, core values, and high-level architectural constraints.
- `.planning/REQUIREMENTS.md` § LEG-01, LEG-02, LEG-03 — Formal requirements for legacy quarantine, Next.js initialization, and content extraction.
- `.planning/ROADMAP.md` § Phase 1 — Success criteria and dependency definitions for Phase 1.
- `GEMINI.md` — Styling constraints (Vanilla CSS / CSS Modules, no TailwindCSS, PEP 8 Python server).

### Legacy Reference Assets (quarantined in legacy_codebase/)
- `legacy_codebase/index.html` — Source of truth for raw project text, structure, image links, and copy.
- `legacy_codebase/styles.css` — Source of truth for fluid clamp typography tokens (`--step--2` to `--step-10`) and spacing scales.
- `legacy_codebase/server.py` — Reference local dev proxy server with upstream caching.
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `styles.css`: Contains the exact fluid typography formula (`clamp(...)`) and spacing CSS variables.
- `_next/static/media/`: Contains original `.woff2` font files and key luxury hero images.
- `index.html`: Contains complete markup and inline content for the 4 flagship projects (Ascot Residence, Calibre, Obsidian, Small House) and pages (About, Expertise, Contact).

### Established Patterns
- Next.js App Router standard layout pattern (`layout.tsx`, `page.tsx`).
- Relative asset paths configured with `@/*` path aliases.

### Integration Points
- `src/content/` JSON files will directly feed Phase 4 portfolio routes (`/projects`, `/projects/[slug]`) and Phase 5 informational pages (`/about`, `/expertise`, `/contact`).
- `src/styles/tokens.css` will be expanded in Phase 2 for complete fluid typography and kinetic animation engine integration.
</code_context>

<specifics>
## Specific Ideas
- The 4 core projects to extract are:
  1. Ascot Residence (Ascot Vale)
  2. Calibre (Aberfeldie)
  3. Obsidian (Moonee Ponds)
  4. Small House (Essendon)
- Ensure `.planning/`, `.git/`, and `GEMINI.md` are never touched, moved, or deleted when reorganizing legacy files.
</specifics>

<deferred>
## Deferred Ideas
- Phase 2: Lenis smooth scroll engine and kinetic text-reveal component.
- Phase 3: Header navigation, mobile drawer, and luxury Melbourne builder footer.
- Phase 4: Dynamic project case study templates and portfolio carousel.
- Phase 5: Interactive consultation inquiry form.
- Phase 6: Next.js metadata, JSON-LD LocalBusiness schema, and performance audits.
</deferred>

---

*Phase: 1-Legacy Quarantine & Next.js Bootstrap*
*Context gathered: 2026-09-17*
