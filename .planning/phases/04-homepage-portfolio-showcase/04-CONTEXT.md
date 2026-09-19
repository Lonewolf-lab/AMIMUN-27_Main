# Phase 4: Homepage & Portfolio Showcase - Context

**Gathered:** 2026-09-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 4 delivers the flagship showcase experiences for Haven Constructions:
1. **Componentized Homepage (PORT-01):** Full-bleed hero with giant HAVEN wordmark vector, kinetic statement, featured projects showcase carousel/grid, and architect partnership highlights.
2. **Dynamic Project Case Study Pages (PORT-02):** Route `/projects/[slug]` with `generateStaticParams()` pre-rendering the 4 signature residences:
   - `ascot-residence` (Ascot Vale)
   - `calibre` (Aberfeldie)
   - `obsidian` (Essendon)
   - `small-house` (Hanover St)
   Features high-res galleries, project detail grids (Architect, Status, Location), collaboration narratives, and "Next Residence" preview navigation.
3. **Comprehensive Portfolio Index (PORT-03):** Route `/projects` featuring interactive project cards, suburb filtering (All, Essendon, Aberfeldie, Moonee Ponds, Ascot Vale), and responsive grid hover states.
</domain>

<decisions>
## Implementation Decisions

### Homepage Modular Components
- **D-01:** Break `src/app/page.tsx` into modular components under `src/components/home/`:
  - `<Hero>`: Signature blue giant HAVEN vector SVG, dot heading, and full-bleed image backdrop.
  - `<BrandStatement>`: Kinetic text reveals using `<TextReveal>` highlighting master craftsmanship across Melbourne north-west.
  - `<ProjectsCarousel>`: Interactive showcase of the 4 residences with hover states, year badges, and direct links.
  - `<ExpertiseHighlight>`: Architect collaboration pillars and construction philosophy. — **Reversibility:** costly

### Dynamic Case Study Routing (/projects/[slug])
- **D-02:** Implement `src/app/projects/[slug]/page.tsx` using `generateStaticParams()` reading `getAllProjects()`.
- **D-03:** Project detail layout (`src/components/portfolio/ProjectDetail.tsx`):
  - Hero header with project title, architect, status, location.
  - Content narrative and architectural philosophy.
  - Gallery blocks supporting full-width and multi-column photography.
  - Next project transition card (`nextPost`). — **Reversibility:** costly

### Portfolio Archive (/projects)
- **D-04:** Implement `src/app/projects/page.tsx` with interactive suburb filtering (`All`, `Essendon`, `Aberfeldie`, `Moonee Ponds`, `Ascot Vale`), rendering responsive project cards with image hover zoom, status tags, and smooth page transitions. — **Reversibility:** reversible
</decisions>

<canonical_refs>
## Canonical References

### Data Sources
- `src/content/projects/ascot-residence.json`
- `src/content/projects/calibre.json`
- `src/content/projects/obsidian.json`
- `src/content/projects/small-house.json`
- `src/lib/content.ts` — `getAllProjects()`, `getProjectBySlug(slug)`

### Legacy Source References
- `legacy_codebase/index.html` lines 690-1200 — Hero markup and project slider.
- `legacy_codebase/styles.css` lines 580-680 — Card grid archive and project detail styling.
</canonical_refs>

---

*Phase: 04-Homepage & Portfolio Showcase*
*Context gathered: 2026-09-17*
