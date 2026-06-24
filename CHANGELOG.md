# CHANGELOG — Tendo

> Newest at the top. Dated, append-only. Sessions are blocks.

## v0.2.1 — 2026-06-24 — Bump Next.js to patched 15.5.19 (Vercel deploy unblocker)

**Why:** Vercel deploy of v0.2.0 failed (red status) with *"Vulnerable version of Next.js detected"* citing CVE-2025-66478. Build itself was perfect (8 routes, SSG, all working) but Vercel blocks vulnerable framework versions in 2026.

**Changed:**
- `app/package.json`: `next` 15.0.3 → 15.5.19; `react` and `react-dom` RC → `^19.0.0` stable
- Regenerated `app/package-lock.json` (28 packages, down from 36)
- Verified `npm run build` succeeds (slightly smaller First Load JS: 106kB vs 109kB)
- Verified all 5 routes return HTTP 200 via curl on the local prod server, 404 path returns 404

**Logged:** DEV-008.

**Next:** Founder pushes, the deploy goes green, we promote to production, Tendo is live.

---

## v0.2.0 — 2026-06-24 — Phase 1: Next.js app live (local)

**Session theme:** Founder hit a Vercel 404 (project deployed before any app code existed). Decided to build the real Phase 1 app immediately rather than ship a static-redirect workaround.

**Added:**
- `app/` — Next.js 15 App Router setup (`package.json`, `next.config.ts`, `tsconfig.json`, `next-env.d.ts`, `.gitignore`)
- `app/app/globals.css` — full design system as plain CSS, mirrors `preview.html` exactly
- `app/app/layout.tsx` — sticky brand nav, shared `<main>` container
- `app/app/page.tsx` — subject picker (Math active; English/Science/SST as "Coming, Phase 2")
- `app/app/math/p7/page.tsx` — topic list grouped by NCDC theme, with `ProgressBadge` per topic
- `app/app/math/p7/[topic]/page.tsx` — topic detail with notes + worked example + Quiz component; uses `generateStaticParams` for SSG
- `app/app/not-found.tsx` — branded 404
- `app/lib/topics.ts` — three full topics (Venn diagrams, Roman numerals, Fractions) typed as `Topic[]`, each with 7 quiz questions
- `app/components/Quiz.tsx` — client-side quiz runner: answer → feedback → next → result, with localStorage persistence at key `tendo:progress`
- `app/components/ProgressBadge.tsx` — client-side "Best X/Y · NN%" badge
- `app/README.md` — how to run, how to deploy
- `MT-004` in `MANUAL_TASKS.md` — redeploy instructions with the correct Vercel settings

**Verified locally:**
- `npm install` (36 packages, 16s)
- `npm run build` (8 pages, all SSG, ~110kB First Load JS per route)
- `npm run start` + curl on all 5 real routes → HTTP 200
- `/math/p7/nonexistent` → HTTP 404 (sanity check)
- Content spot-checks: brand on home, worked example on Venn, quiz button visible, "Akello" mango problem present in Fractions

**Decisions logged:** DEV-006 (data-in-TS for Phase 1, MDX deferred to Phase 2), DEV-007 (no Tailwind, plain CSS).

**Updated:**
- `STATUS.md` — Phase 1 marked done locally; only blocker is the redeploy.
- `HANDOFF.md` — rewritten for the Phase 2 agent.
- `CHECKLIST.md` — Phase 1 boxes ticked.
- `launch.sh` and `launch.bat` — now run `npm install` on first launch then `npm run dev`.

**Cost:** UGX 0 / USD 0 unchanged. Vercel Hobby tier, free GitHub.

**Next session:** Phase 2 — AI content engine and 10 topics live.

---

## v0.1.0 — 2026-06-24 — Phase 0: Foundation

**Session theme:** Stand up the project, lock the business model, write the sales pack, ship a clickable demo.

**Added:**
- Full workspace skeleton at `tendo/` (3 top-level folders + entry-point files, per workspace-hygiene rules)
- `START_HERE.md`, `README.md`
- Session-ritual files: `STATUS.md`, `HANDOFF.md`, `CHANGELOG.md`, `CHECKLIST.md`, `DECISIONS.md`, `MANUAL_TASKS.md`
- `.env.example` (template only, no real secrets), `.gitignore`
- `launch.sh` and `launch.bat` (Phase 1 will wire them to `pnpm dev`)
- `content/curriculum/p7-math.json` — full NCDC P7 Math syllabus structured as 6 themes / 11 topics / 40 sub-topics
- `docs/spec/PRD.md` — product requirements doc
- `docs/spec/design-philosophy.md` — Tendo's design language (warm, restrained, locally grounded)
- `docs/spec/content-guidelines.md` — voice, structure, quiz authoring rules
- `docs/sales/value-prop.md` — the wedge and the school-economics math
- `docs/sales/pitch-deck-outline.md` — slide-by-slide deck for school visits
- `docs/sales/pricing.md` — three pricing tiers with UGX and USD
- `docs/sales/school-packet.md` — one-page leave-behind for head teachers
- `docs/sales/objections.md` — top 10 likely objections with crisp responses
- `docs/ops/secrets-guide.md` — how we'll handle API keys when Phase 2 needs them
- `preview.html` — double-clickable static sales demo (Topic list → Notes → Quiz → Result)

**Decisions logged (see `DECISIONS.md`):** DEV-001 through DEV-005

**Cost:** UGX 0 / USD 0. No accounts, no recurring spend.

**Next session:** Phase 1 — scaffold Next.js app, build 3 real topics, deploy to Vercel.
