# Phase 4: Homepage & Portfolio Showcase - Research

**Researched:** 2026-09-17  
**Domain:** Modular Homepage Componentization, Dynamic Next.js SSG Routes, High-Res Image Galleries, Category Filtering  
**Confidence:** HIGH  

## Summary

Phase 4 creates the signature portfolio presentation layer for Haven Constructions. This encompasses:
1. **Homepage Architecture (`PORT-01`):** A sequence of modular components (`Hero`, `BrandStatement`, `ProjectsCarousel`, `ExpertiseHighlight`) powered by `<TextReveal>` and Next.js Image optimization.
2. **Dynamic Project Case Studies (`PORT-02`):** Dynamic route `src/app/projects/[slug]/page.tsx` pre-rendered at build time via `generateStaticParams()` using the extracted JSON files for Ascot Residence, Calibre, Obsidian, and Small House.
3. **Portfolio Index (`PORT-03`):** Filterable portfolio archive at `src/app/projects/page.tsx` with category filters (All, Essendon, Aberfeldie, Moonee Ponds, Ascot Vale) and hover animations.

---

## Architectural Responsibility Map

| Feature | Component Path | Responsibility |
|---------|---------------|----------------|
| Hero Section | `src/components/home/Hero/` | Giant blue HAVEN wordmark vector, dot statement, full-bleed imagery |
| Brand Statement | `src/components/home/BrandStatement/` | Editorial narrative with kinetic typography reveals |
| Featured Projects | `src/components/home/ProjectsCarousel/` | Grid/carousel of the 4 flagship projects with location & architect metadata |
| Expertise Pillars | `src/components/home/ExpertiseHighlight/` | Builder philosophy, master craftsmanship, architect partnership callouts |
| Dynamic Case Study | `src/app/projects/[slug]/` | Pre-rendered static route for project details and galleries |
| Project Archive | `src/app/projects/` | Filterable project showcase grid |

---

## Common Pitfalls & Mitigations

### Pitfall 1: Next.js Image Layout Shift
**What goes wrong:** Using unconstrained `<img>` elements causes layout shifts during image loading.  
**Mitigation:** Use `next/image` with `sizes`, `fill`, and `priority` on above-the-fold hero images.

### Pitfall 2: Dynamic Route 404 in Static Export
**What goes wrong:** Next.js throws errors on dynamic routes if `generateStaticParams()` is omitted or returns incomplete parameters.  
**Mitigation:** Provide explicit `generateStaticParams()` returning `[{ slug: 'ascot-residence' }, { slug: 'calibre' }, { slug: 'obsidian' }, { slug: 'small-house' }]`.

---

## Validation Architecture

- **Automated compilation:** `npx tsc --noEmit` and `npm run build` exits 0.
- **Route generation:** Verify static route outputs for `/`, `/projects`, `/projects/ascot-residence`, `/projects/calibre`, `/projects/obsidian`, `/projects/small-house`.
