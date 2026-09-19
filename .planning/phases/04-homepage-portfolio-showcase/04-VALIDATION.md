---
phase: "04"
slug: "homepage-portfolio-showcase"
status: verified
nyquist_compliant: true
wave_0_complete: true
created: "2026-09-17"
verified: "2026-09-17"
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Next.js Build & TypeScript Compiler (`next build` / `tsc`) |
| **Config file** | `tsconfig.json`, `next.config.ts` |
| **Quick run command** | `npx tsc --noEmit` |
| **Full suite command** | `npm run build` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx tsc --noEmit`
- **After every plan wave:** Run `npm run build`
- **Before `/gsd-verify-work`:** Full suite must be green (`npm run build` exits 0)
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 1 | PORT-01 | — | N/A | build | `test -f src/components/home/Hero/Hero.tsx && test -f src/components/home/BrandStatement/BrandStatement.tsx && npx tsc --noEmit` | ✅ | ✅ green |
| 04-01-02 | 01 | 1 | PORT-01 | — | N/A | build | `test -f src/components/home/ProjectsCarousel/ProjectsCarousel.tsx && test -f src/components/home/ExpertiseHighlight/ExpertiseHighlight.tsx && npm run build` | ✅ | ✅ green |
| 04-02-01 | 02 | 2 | PORT-02 | T-04-02 | Validate slug & 404 | build | `test -f src/app/projects/[slug]/page.tsx && npx tsc --noEmit && npm run build` | ✅ | ✅ green |
| 04-02-02 | 02 | 2 | PORT-03 | — | N/A | build | `test -f src/app/projects/page.tsx && npx tsc --noEmit && npm run build` | ✅ | ✅ green |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [x] Create `src/components/home/Hero/` directory
- [x] Create `src/components/home/BrandStatement/` directory
- [x] Create `src/components/home/ProjectsCarousel/` directory
- [x] Create `src/components/home/ExpertiseHighlight/` directory
- [x] Create `src/app/projects/[slug]/` directory

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions | Status |
|----------|-------------|------------|-------------------|--------|
| Hero layout & giant HAVEN vector | PORT-01 | Visual styling fidelity | Open `/` on desktop, verify giant blue HAVEN SVG vector and full-bleed hero image | ✅ Verified |
| Dynamic route rendering | PORT-02 | Route content inspection | Navigate to `/projects/calibre` and `/projects/obsidian`, verify high-res galleries and architect info | ✅ Verified |
| Portfolio filtering | PORT-03 | Interactive state filtering | Navigate to `/projects`, click suburb filter pills and verify project list filters accurately | ✅ Verified |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 15s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** verified
