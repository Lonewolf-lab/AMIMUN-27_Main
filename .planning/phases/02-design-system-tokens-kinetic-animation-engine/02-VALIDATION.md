---
phase: "02"
slug: "design-system-tokens-kinetic-animation-engine"
status: verified
nyquist_compliant: true
wave_0_complete: true
created: "2026-09-17"
---

# Phase 2 — Validation Strategy

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
| 02-01-01 | 01 | 1 | DS-01 | — | N/A | structural | `grep -q -- "--step-10" src/styles/tokens.css && grep -q -- "@media (min-width: 1280px)" src/styles/tokens.css` | ✅ yes | ✅ green |
| 02-01-02 | 01 | 1 | DS-02 | — | N/A | build | `test -f src/components/providers/SmoothScrollProvider.tsx && npm run build` | ✅ yes | ✅ green |
| 02-02-01 | 02 | 2 | DS-03 | — | N/A | build | `test -f src/components/animations/TextReveal.tsx && npx tsc --noEmit && npm run build` | ✅ yes | ✅ green |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [x] Install `lenis` package
- [x] Create `src/components/providers/` directory
- [x] Create `src/components/animations/` directory

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Lenis smooth scrolling inertia | DS-02 | Scroll physics perception | Scroll page on desktop browser and verify smooth momentum damping |
| TextReveal staggered word animation | DS-03 | Visual animation timing | Scroll `<TextReveal>` into view and verify 1.4s word-by-word staggered reveal |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 15s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** verified
