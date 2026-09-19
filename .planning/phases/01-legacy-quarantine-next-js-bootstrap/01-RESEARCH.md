# Phase 1: Legacy Quarantine & Next.js Bootstrap - Research

**Researched:** 2026-09-17  
**Domain:** Next.js 15 App Router Initialization, Monorepo/Asset Migration, Content Modeling  
**Confidence:** HIGH  

## Summary

The objective of Phase 1 is to safely decouple the workspace from the monolithic 50MB cloned bundle (`index.html`, `server.py`, `styles.css`, `_next/`, `icons/`) by moving them into an isolated `legacy_codebase/` quarantine directory, bootstrapping a clean, modern Next.js 15 (App Router) + React 19 + TypeScript foundation at the workspace root, and extracting structured content schemas for the Haven luxury builder showcase.

Research of the existing cloned bundle reveals that `_next/data/G9U8tHBk031x0vfc7LJ4H/` already contains clean, pre-rendered SSG JSON payloads for all 4 core luxury projects (`ascot-residence.json`, `calibre.json`, `obsidian.json`, `small-house.json`) and static pages (`about.json`, `expertise.json`, `contact.json`, `for-architects.json`, `projects.json`, `index.json`). These JSON files contain complete metadata, rich project descriptors, architecture and location attributes, gallery image blocks, and blur placeholders.

By extracting these JSON files into `src/content/projects/` and `src/content/pages/` and pairing them with strongly-typed TypeScript interfaces in `src/types/content.ts` and loader utilities in `src/lib/content.ts`, we decouple content presentation from the static clone. Furthermore, font discovery identified the legacy primary typography as `fontSuisse` (stored at `_next/static/media/c42cb4950679bdba-s.p.woff2`), which will be configured via `next/font/local` to guarantee 100% typographic fidelity from Day 1.

**Primary recommendation:** Use `create-next-app` non-interactively to generate a clean Next.js 15 + TypeScript + ESLint workspace, configure Vanilla CSS tokens and CSS Modules (no Tailwind), quarantine legacy assets to `legacy_codebase/`, and import the structured JSON payloads into `src/content/`.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Legacy Asset Quarantine | File System (`legacy_codebase/`) | Local Dev Proxy (`server.py 8080`) | Isolates 50MB monolithic clone from editor indexing and Next.js compiler while keeping reference available |
| Framework Core & Routing | Next.js 15 (App Router) | React 19 (Server Components) | Provides optimal SSG/SSR performance, file-based routing, and built-in image/font optimization |
| Typography System | `next/font/local` | CSS Font Variables (`--font-suisse`) | Zero layout shift font loading using original `.woff2` luxury assets |
| Content Store | Static JSON (`src/content/`) | TypeScript interfaces (`src/types/`) | Static content layer decoupled from runtime databases, matching luxury showcase nature |
| Content Loading API | Server Utilities (`src/lib/content.ts`) | Server Components | Type-safe synchronous data retrieval without network overhead or client bundle bloat |

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `next` | 15.5.x [VERIFIED: npm registry] | Full-stack React framework & App Router | Modern industry standard for React web applications with Turbopack and React 19 support |
| `react` | 19.x [VERIFIED: npm registry] | UI library | Native Server Components, actions, and concurrency primitives |
| `react-dom` | 19.x [VERIFIED: npm registry] | DOM renderer for React | Required peer dependency for React 19 |
| `typescript` | ^5.x [VERIFIED: npm registry] | Static typing | Complete type safety across schemas, components, and props |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `@types/node` | ^20.x / ^22.x | Node.js type definitions | Build tooling and file system interactions |
| `@types/react` | ^19.x | React type definitions | JSX typing and React hook signatures |
| `@types/react-dom` | ^19.x | React DOM type definitions | DOM node typing |
| `eslint` | ^9.x | Code linting | Linting Next.js code standards |
| `eslint-config-next` | 15.5.x | Next.js ESLint rules | Core Web Vitals and App Router lint checks |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Next.js App Router | Next.js Pages Router | App Router supports React Server Components and nested layouts; Pages Router is legacy |
| Vanilla CSS + CSS Modules | TailwindCSS | Tailwind violates project styling rules specified in `GEMINI.md` |
| Static JSON files | Contentlayer / TinaCMS | Contentlayer is unmaintained; raw typed JSON files are zero-dependency, ultra-fast, and reliable |

**Installation Command:**
```bash
npx -y create-next-app@latest ./ --typescript --eslint --src-dir --no-tailwind --app --import-alias "@/*" --use-npm
```

---

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | Verdict | Disposition |
|---------|----------|-----|-----------|-------------|---------|-------------|
| `next` | npm | 8 yrs | ~7M/wk | github.com/vercel/next.js | [OK] | Approved |
| `react` | npm | 11 yrs | ~25M/wk | github.com/facebook/react | [OK] | Approved |
| `react-dom` | npm | 11 yrs | ~25M/wk | github.com/facebook/react | [OK] | Approved |
| `typescript` | npm | 12 yrs | ~45M/wk | github.com/microsoft/TypeScript | [OK] | Approved |

**Packages removed due to [SLOP] verdict:** None  
**Packages flagged as suspicious [SUS]:** None  

---

## Architecture Patterns

### System Architecture Diagram

```
+-------------------------------------------------------------------------+
|                        Workspace Root                                   |
|                                                                         |
|  +---------------------------+        +------------------------------+  |
|  | legacy_codebase/          |        | Next.js App Router (src/)    |  |
|  | - index.html (50MB clone) |        |                              |  |
|  | - styles.css              |        | src/app/                     |  |
|  | - _next/ (static data)    |---+    | - layout.tsx (font/styles)   |  |
|  | - server.py (port 8080)   |   |    | - page.tsx (homepage)        |  |
|  +---------------------------+   |    +------------------------------+  |
|                                  |                   ^                  |
|                                  |                   |                  |
|                                  v                   |                  |
|                        +-----------------------+     |                  |
|                        | src/content/          |     |                  |
|                        | - projects/*.json     |-----+                  |
|                        | - pages/*.json        |                        |
|                        +-----------------------+                        |
|                                  ^                                      |
|                                  |                                      |
|                        +-----------------------+                        |
|                        | src/types/content.ts  |                        |
|                        | src/lib/content.ts    |                        |
|                        +-----------------------+                        |
+-------------------------------------------------------------------------+
```

### Recommended Project Structure
```
├── legacy_codebase/              # Quarantined original bundle (read-only reference)
│   ├── index.html
│   ├── server.py
│   ├── styles.css
│   ├── icons/
│   └── _next/
├── public/                       # Next.js static public assets
│   ├── fonts/                    # Extracted woff2 font files
│   └── images/                   # Project imagery migrated as needed
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with font injection & CSS tokens
│   │   ├── page.tsx              # Minimal placeholder/bootstrap homepage
│   │   └── globals.css           # Global resets and CSS custom properties
│   ├── content/
│   │   ├── projects/             # Ascot Residence, Calibre, Obsidian, Small House JSONs
│   │   └── pages/                # About, Expertise, Contact, For Architects JSONs
│   ├── lib/
│   │   └── content.ts            # Typed getter utilities (getAllProjects, getProjectBySlug)
│   ├── styles/
│   │   ├── tokens.css            # Fluid clamp typography & spacing CSS variables
│   │   └── reset.css             # Standard luxury layout CSS reset
│   └── types/
│       └── content.ts            # Type definitions for projects and static pages
├── .planning/                    # GSD specifications and phase roadmaps
├── package.json
├── tsconfig.json
└── next.config.ts
```

### Anti-Patterns to Avoid
- **Overwriting `.planning/` or `GEMINI.md`:** `create-next-app` must be executed carefully (or manually constructed via `package.json` + `npm install`) to ensure no planning documents, git history, or workspace rules are modified.
- **Copying the entire 50MB bundle into `public/`:** Dumping 50MB of raw unoptimized files into `public/` degrades build and bundle performance. Fonts and specific images should be copied selectively.
- **Installing Tailwind CSS:** Explicitly prohibited by project conventions in `GEMINI.md`.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Local Font Optimization | Custom CSS `@font-face` rules with manual FOIT/FOUT handling | `next/font/local` | Next.js automatically calculates fallback size-adjust, preloads fonts, and eliminates Cumulative Layout Shift (CLS) |
| Local Static Proxy | Python HTTP server at root | Quarantined `legacy_codebase/server.py` | Avoids port conflicts with Next.js development server (port 3000) |
| JSON Content Parsing | Complex dynamic AST parser or markdown CMS | Static JSON files with typed getter functions | The legacy site content is already structured JSON in `_next/data/`; straightforward file reads / imports are instant and zero-maintenance |

---

## Runtime State Inventory

| Category | Items Found | Action Required |
|----------|-------------|------------------|
| Cloned Monolith | `index.html` (49.8MB), `styles.css` (221KB) | Move into `legacy_codebase/` |
| Local Server | `server.py` (running on root port 8080) | Move into `legacy_codebase/` and wire `npm run legacy` script |
| Cloned Next Assets | `_next/` (chunks, static media, data JSONs) | Move into `legacy_codebase/` |
| Icons Directory | `icons/` | Move into `legacy_codebase/` |
| Git & Planning | `.git/`, `.planning/`, `GEMINI.md` | Preserve intact at workspace root |

---

## Common Pitfalls

### Pitfall 1: `create-next-app` directory collision
**What goes wrong:** `npx create-next-app` errors if target directory contains non-git files.  
**Why it happens:** The workspace currently contains `_next`, `index.html`, `server.py`, `styles.css`.  
**How to avoid:** Execute Step 1 (Legacy Quarantine) *before* Next.js initialization so the root is clean of colliding files, or initialize `package.json`, `tsconfig.json`, and `next.config.ts` directly with `npm install`.

### Pitfall 2: Local font loading paths
**What goes wrong:** `next/font/local` cannot locate font files if relative paths are incorrectly specified.  
**Why it happens:** `next/font/local` paths are relative to the file where `localFont` is called.  
**How to avoid:** Place fonts in `src/app/fonts/` or `public/fonts/` and use a dedicated `src/app/fonts.ts` module with clear relative paths.

---

## Code Examples

### Loading Legacy Fonts with `next/font/local`
```typescript
// src/app/fonts.ts
import localFont from 'next/font/local';

export const suisseFont = localFont({
  src: [
    {
      path: '../../public/fonts/suisse.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-suisse',
  display: 'swap',
});
```

### Type-Safe Project Loader
```typescript
// src/lib/content.ts
import { Project } from '@/types/content';
import ascotResidence from '@/content/projects/ascot-residence.json';
import calibre from '@/content/projects/calibre.json';
import obsidian from '@/content/projects/obsidian.json';
import smallHouse from '@/content/projects/small-house.json';

const projects: Project[] = [
  ascotResidence as unknown as Project,
  calibre as unknown as Project,
  obsidian as unknown as Project,
  smallHouse as unknown as Project,
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Next.js Pages Router (`pages/_app.tsx`) | Next.js App Router (`src/app/layout.tsx`) | Next.js 13+ / 15 | Native React Server Components, faster streaming, zero client runtime for static pages |
| Generic `<link rel="stylesheet">` fonts | `next/font/local` | Next.js 13+ | Automatic self-hosting, CSS font variables, zero layout shift |
| Monolithic cloned `index.html` (50MB) | Quarantined archive + modular components | Phase 1 | Editor responsiveness restored, clean modular build |

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Node v22 and npm 10 present in environment will build Next.js 15 without compatibility errors | Standard Stack | Low: Node 22 is LTS and fully supported by Next.js 15 |
| A2 | The 4 core projects (`ascot-residence`, `calibre`, `obsidian`, `small-house`) represent the full portfolio showcase for Haven Constructions | Architecture Patterns | Low: Matches all references in `REQUIREMENTS.md` and `_next/data/` |

---

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | TypeScript compiler (`tsc --noEmit`) + Next.js build (`next build`) |
| Config file | `tsconfig.json`, `next.config.ts` |
| Quick run command | `npx tsc --noEmit` |
| Full suite command | `npm run build` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| LEG-01 | Quarantined legacy assets reside exclusively in `legacy_codebase/` | Structural | `test -d legacy_codebase && test -f legacy_codebase/index.html && test ! -f ./index.html` | ✅ (To be verified) |
| LEG-02 | Clean Next.js + TS workspace compiles without errors | Build | `npm run build` | ✅ (To be verified) |
| LEG-03 | Content schemas and JSON files exist and pass type validation | Type Check | `npx tsc --noEmit` | ✅ (To be verified) |

### Sampling Rate
- **Per task commit:** `npx tsc --noEmit`
- **Per wave merge:** `npm run build`
- **Phase gate:** Clean `npm run build` with zero errors.

---

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V5 Input Validation | Yes | TypeScript compile-time content schema typing |
| V14 Build & Deployment | Yes | Next.js production asset hashing and bundle isolation |

### Known Threat Patterns for Next.js

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Directory Traversal | Information Disclosure | Static content resolution strictly scoped within `@/content` |
| Unsanitized HTML rendering | Tampering | React auto-escaping for all dynamic text nodes |

---

## Sources

### Primary (HIGH confidence)
- Next.js Documentation (nextjs.org/docs) - App Router, `next/font`, asset management.
- Codebase inspection of `styles.css` and `_next/data/G9U8tHBk031x0vfc7LJ4H/`.

### Metadata
**Confidence breakdown:**
- Standard stack: HIGH - Modern, standard LTS tooling
- Architecture: HIGH - Fully aligned with Next.js 15 App Router conventions
- Pitfalls: HIGH - Verified file collision and path details

**Research date:** 2026-09-17  
**Valid until:** 2026-10-17  
