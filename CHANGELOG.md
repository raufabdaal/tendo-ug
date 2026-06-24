# CHANGELOG — Tendo

> Newest at the top. Dated, append-only. Sessions are blocks.

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
