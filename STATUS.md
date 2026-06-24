# STATUS — Tendo

*Updated: 2026-06-24, end of Phase 0 session*

## Where we are: **Phase 0 — Foundation & sales materials (DONE)**

## What's done ✅

- [x] Project scoped: P6 & P7, PLE Math only for v0, hybrid AI+review content model
- [x] Business model locked: B2B2C — sell to schools, schools price to parents, we charge a per-student maintenance fee
- [x] Workspace skeleton created (mirrors Sasa's proven structure)
- [x] **Curriculum spine extracted:** `content/curriculum/p7-math.json` — all 6 themes, 11 topics, 40 sub-topics structured
- [x] **PRD written:** `docs/spec/PRD.md`
- [x] **Design philosophy:** `docs/spec/design-philosophy.md`
- [x] **Content guidelines:** `docs/spec/content-guidelines.md`
- [x] **Sales pack:**
  - `docs/sales/value-prop.md`
  - `docs/sales/pitch-deck-outline.md`
  - `docs/sales/pricing.md`
  - `docs/sales/school-packet.md`
  - `docs/sales/objections.md`
- [x] **`preview.html`** — double-click sales demo with 3 mock topics
- [x] All session-ritual files (CHANGELOG, HANDOFF, DECISIONS, CHECKLIST, MANUAL_TASKS, .env.example, .gitignore)

## What's next 🎯 (Phase 1)

1. Initialize Next.js 15 app in `app/` (mirrors Sasa's setup)
2. Wire topic list → topic detail → quiz flow with **real content for 3 topics** drawn from `p7-math.json`:
   - Sets → Venn Diagrams (2 events)
   - Numeracy → Whole Numbers (Roman numerals)
   - Numeracy → Fractions (ordering & operations)
3. localStorage-based progress (no auth in v0, per DEV-002)
4. Set up GitHub repo + Vercel auto-deploy (Manual Tasks MT-001, MT-002)
5. Live URL we can share in a sales conversation

## What's blocked 🚧

- Nothing blocking Phase 0 close.
- Phase 1 has 2 manual tasks waiting on you (GitHub repo + Vercel account). See `MANUAL_TASKS.md`.

## Decisions made this phase

See `DECISIONS.md`:
- DEV-001: Scope = P6 & P7 only, P7 first (typo correction from P1)
- DEV-002: No login in v0; localStorage progress only
- DEV-003: B2B2C with school as channel partner; not direct-to-parent
- DEV-004: Content sourcing = AI draft from NCDC syllabus + past papers, human review gate
- DEV-005: Math only for v0; English / Science / SST as Phase 2 visible-but-coming-soon

## Cost so far

**UGX 0 / USD 0.** No accounts opened, no recurring spend.
