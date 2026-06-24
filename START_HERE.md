# START HERE — Tendo

**Tendo** is a school-sold web platform that helps Ugandan upper-primary students master the PLE Mathematics syllabus through structured notes, auto-graded quizzes, and real past papers.

> *Tendo* (Luganda): "praise / commendation" — what parents say when PLE results come back.

---

## You have 10 seconds. What do I read?

1. **`STATUS.md`** — what's done, what's next, what's blocked. Always start here.
2. **`HANDOFF.md`** — last session's snapshot. Picks up where the last agent left off.
3. **`docs/sales/value-prop.md`** — what we're selling and to whom (read this before any sales call).
4. **`preview.html`** — double-click to see the student experience. **This is the sales demo.**

## You have 60 seconds. What's this project?

- **For:** Ugandan upper-primary students (P6 & P7) preparing for **PLE Mathematics** (UNEB).
- **Sold to:** Private primary schools. **They** then offer it to parents as a value-add. We charge schools a per-student maintenance fee.
- **Why it works:** PLE Math syllabus is finite (6 themes, 11 topics, 40 sub-topics). Past papers are public. We package both into the cleanest, calmest, fastest study app in the country.
- **Phase 0 (right now):** Foundation + sales materials. No code yet.
- **Phase 1 (next):** Next.js app shell + first 3 topics live.

## Folder map

```
tendo/
├─ START_HERE.md              👈 you are here
├─ README.md · STATUS.md · HANDOFF.md · CHANGELOG.md
├─ CHECKLIST.md · DECISIONS.md · MANUAL_TASKS.md
├─ launch.sh / launch.bat     (Phase 1: starts the dev server)
├─ preview.html               👈 double-click this for the sales demo
├─ .env.example · .gitignore
│
├─ app/                       Next.js app (Phase 1)
├─ content/
│   ├─ curriculum/            syllabus structure (p7-math.json done)
│   ├─ topics/                MDX notes + quizzes (Phase 1)
│   └─ papers/                past PLE papers (Phase 3)
└─ docs/
    ├─ spec/                  PRD, design philosophy, content guidelines
    ├─ sales/                 value-prop, pitch, pricing, school packet, objections
    ├─ ops/                   secrets guide, deployment notes
    └─ prompts/               reusable AI prompts
```

## The rules (from `AGENT_BRIEF.md`, must-follow)

- Never paste secrets in chat. `.env.local` only.
- Update STATUS / HANDOFF / CHANGELOG every session.
- Log architecture changes in `DECISIONS.md`.
- Free-tier first. Always.
- Plain language. Numbered steps.

---

*Tendo · v0.1 · Phase 0 foundation · 2026-06-24*
