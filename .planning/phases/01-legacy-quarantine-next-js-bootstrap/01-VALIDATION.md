---
phase: "1"
slug: "legacy-quarantine-next-js-bootstrap"
status: draft
nyquist_compliant: false
wave_0_complete: false
created: "2026-09-17"
---

# Phase 1 — Validation Strategy

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
| 01-01-01 | 01 | 1 | LEG-01 | — | N/A | structural | `test -d legacy_codebase && test -f legacy_codebase/index.html && test ! -f ./index.html` | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | LEG-02 | — | N/A | build | `npm run build` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 2 | LEG-03 | — | N/A | typecheck | `npx tsc --noEmit` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Initialize `package.json` with Next.js 15, React 19, TypeScript
- [ ] Ensure `legacy_codebase/` directory exists with quarantined files
- [ ] Configure `tsconfig.json` with `@/*` path mapping

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Legacy proxy server side-by-side execution | LEG-01 | Local server process verification | Run `npm run legacy` and visit `http://localhost:8080` to confirm legacy site renders |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
