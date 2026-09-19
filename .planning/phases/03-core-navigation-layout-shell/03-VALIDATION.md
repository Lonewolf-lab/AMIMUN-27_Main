---
phase: "03"
slug: "core-navigation-layout-shell"
status: verified
nyquist_compliant: true
wave_0_complete: true
created: "2026-09-17"
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Next.js Build & TypeScript Compiler (`next build` / `tsc`) |
| **Config file** | `tsconfig.json`, `next.config.ts` |
| **Quick run command** | `npx tsc --noEmit` |
| **Full suite command** | `npm run build` |
| **Estimated runtime** | ~8 seconds |

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
| 03-01-01 | 01 | 1 | NAV-01 | — | N/A | build | `test -f src/components/layout/Header/Header.tsx && test -f src/components/layout/Header/Header.module.css && npx tsc --noEmit` | ✅ yes | ✅ green |
| 03-01-02 | 01 | 1 | NAV-02 | — | N/A | build | `test -f src/components/layout/NavigationOverlay/NavigationOverlay.tsx && test -f src/components/layout/NavigationOverlay/NavigationOverlay.module.css && npx tsc --noEmit` | ✅ yes | ✅ green |
| 03-02-01 | 02 | 2 | NAV-03 | — | N/A | build | `test -f src/components/layout/Footer/Footer.tsx && test -f src/components/layout/Footer/Footer.module.css && npx tsc --noEmit` | ✅ yes | ✅ green |
| 03-02-02 | 02 | 2 | NAV-01, NAV-02, NAV-03 | — | N/A | build | `grep -q -- "<Header" src/app/layout.tsx && grep -q -- "<Footer" src/app/layout.tsx && npm run build` | ✅ yes | ✅ green |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [x] Create `src/components/layout/Header/` directory
- [x] Create `src/components/layout/NavigationOverlay/` directory
- [x] Create `src/components/layout/Footer/` directory

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Header contraction on scroll | NAV-01 | Visual motion & scroll perception | Scroll page on desktop and verify header pill contracts from 420px to 320px |
| Fullscreen menu toggle & staggered reveal | NAV-02 | Visual motion timing | Click "Menu" button, verify ±12deg bar rotation and staggered link entrances |
| Footer layout & giant HAVEN backdrop | NAV-03 | Visual layout fidelity | Scroll to bottom of page, verify dark theme styling, suburb tags, and HAVEN SVG backdrop |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 15s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** verified
