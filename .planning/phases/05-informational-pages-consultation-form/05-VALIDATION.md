---
phase: "05"
slug: "informational-pages-consultation-form"
status: verified
nyquist_compliant: true
wave_0_complete: true
created: "2026-09-17"
verified: "2026-09-17"
---

# Phase 5 — Validation Strategy

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
| 05-01-01 | 01 | 1 | INFO-01 | — | N/A | build | `test -f src/app/about/page.tsx && npx tsc --noEmit` | ✅ | ✅ green |
| 05-01-02 | 01 | 1 | INFO-02 | — | N/A | build | `test -f src/app/expertise/page.tsx && test -f src/app/for-architects/page.tsx && npx tsc --noEmit && npm run build` | ✅ | ✅ green |
| 05-02-01 | 02 | 2 | INFO-03 | T-05-02 | Client-side input validation | build | `test -f src/components/contact/ConsultationForm/ConsultationForm.tsx && test -f src/app/contact/page.tsx && npx tsc --noEmit` | ✅ | ✅ green |
| 05-02-02 | 02 | 2 | INFO-03 | — | N/A | build | `npm run build` | ✅ | ✅ green |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [x] Create `src/components/narrative/` directory
- [x] Create `src/components/contact/ConsultationForm/` directory
- [x] Create `src/app/about/` directory
- [x] Create `src/app/expertise/` directory
- [x] Create `src/app/for-architects/` directory
- [x] Create `src/app/contact/` directory

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions | Status |
|----------|-------------|------------|-------------------|--------|
| About page storytelling & images | INFO-01 | Visual narrative rhythm | Navigate to `/about`, verify 3-generation heritage blocks and full-bleed imagery | ✅ Verified |
| Expertise & For Architects clarity | INFO-02 | Content hierarchy check | Navigate to `/expertise` and `/for-architects`, verify process columns and collaboration standards | ✅ Verified |
| Consultation form interactivity | INFO-03 | Interactive UX & validation | Navigate to `/contact`, click selection pills (location, status, scope, budget), fill contact fields, and submit to verify luxury success acknowledgment | ✅ Verified |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 15s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** verified
