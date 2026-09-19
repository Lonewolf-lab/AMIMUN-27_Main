---
phase: "06"
slug: "seo-performance-production-polish"
status: verified
nyquist_compliant: true
wave_0_complete: true
created: "2026-09-17"
verified: "2026-09-17"
---

# Phase 6 — Validation Strategy

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
- **Before phase completion:** Full suite must be green (`npm run build` exits 0)
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 06-01-01 | 01 | 1 | PERF-01 | — | Valid JSON-LD schema | build | `test -f src/components/seo/StructuredData.tsx && test -f src/app/sitemap.ts && test -f src/app/robots.ts && npx tsc --noEmit` | ✅ | ✅ green |
| 06-01-02 | 01 | 1 | PERF-01 | — | N/A | build | `npm run build` | ✅ | ✅ green |
| 06-02-01 | 02 | 2 | PERF-02 | T-06-02 | Secure remote pattern whitelist | build | `test -f src/app/icon.svg && npx tsc --noEmit` | ✅ | ✅ green |
| 06-02-02 | 02 | 2 | PERF-03 | — | N/A | build | `npm run build` | ✅ | ✅ green |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [x] Create `src/components/seo/` directory

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions | Status |
|----------|-------------|------------|-------------------|--------|
| OpenGraph & Rich Snippet Cards | PERF-01 | Social preview simulation | Inspect `<head>` tags on `/` and `/projects/calibre` for og:image, og:title, and JSON-LD schema | ✅ Verified |
| Favicon & App Icon | PERF-02 | Browser tab rendering | Verify browser tab displays blue geometric Haven brand favicon | ✅ Verified |
| Layout Shift & Responsiveness | PERF-03 | Visual inspection | Resize browser from mobile (375px) to ultra-wide (1920px); verify smooth fluid typography and no image jumps | ✅ Verified |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 15s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** verified
