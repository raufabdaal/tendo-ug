# HANDOFF — for the next session

*Written: 2026-07-01*

## Read this first

1. `STATUS.md`
2. `docs/ops/p7-science-quality-audit-2026-07-01.md`
3. `docs/ops/p7-maths-final-completion-audit-2026-07-01.md`
4. `DECISIONS.md`
5. `CHECKLIST.md`
6. `docs/ops/update-handoff-protocol.md`

---

## Where the project really is

The project has now completed two major subject pushes:

1. **P7 Mathematics** — founder-safe complete for current scope.
2. **P7 Integrated Science** — active second subject build, now strong enough to demo and continue from.

Earlier root docs said Social Studies was next. That became stale after the founder redirected: “let's do science.” Science has now been built instead.

---

## What is already done

### Product / feature layer
Already built and usable:
- Next.js app shell
- topic pages
- quizzes
- past papers
- teacher dashboard
- practice mode
- worksheet generator
- worksheet subject filters: Maths only / Science only / Mixed
- Watch / Read structure with in-read speech support
- Trainup branding layer and `/trainup` route

### P7 Mathematics completion state
Maths is materially complete for the current founder goal.

Important points:
- `app/lib/topics.ts` carries **38 published maths topics**
- maths route: `/math/p7`
- maths practice routes: `/math/p7/[topic]/practice`
- the maths landing page was restructured in `app/app/math/p7/page.tsx`
- selected maths diagrams exist through `app/components/TopicDiagram.tsx`
- maths closeout docs exist in repo

Relevant files:
- `app/lib/topics.ts`
- `app/lib/question-bank.ts`
- `app/app/math/p7/page.tsx`
- `app/components/TopicDiagram.tsx`
- `docs/ops/p7-maths-final-completion-audit-2026-07-01.md`
- `docs/ops/p7-maths-diagram-visual-plan-2026-07-01.md`

### P7 Integrated Science state
Science now includes all 8 NCDC P7 Integrated Science topics:

1. Muscular-skeletal system
2. Electricity and magnetism
3. Energy resources in the environment
4. Simple machines and friction
5. Excretory system
6. Light energy
7. Interdependence of things in the environment
8. Population and health

Science files/routes:
- `app/lib/science-topics.ts`
- `content/curriculum/p7-science.json`
- `app/app/science/p7/page.tsx`
- `app/app/science/p7/[topic]/page.tsx`
- `app/app/science/p7/[topic]/practice/page.tsx`

Science supports:
- subject landing page
- topic pages
- diagrams for all 8 topics
- quizzes
- practice mode
- worksheet generator inclusion
- 15-question practice bank per Science topic
- sensitive wording pass for Population and Health
- audit note at `docs/ops/p7-science-quality-audit-2026-07-01.md`

---

## Documentation policy going forward

The founder explicitly wants docs to be safer inside the repo.

That means:
- prefer in-repo docs over external workspace-only notes
- keep root tracking docs current
- keep documentation strong enough that a future session does not need archaeology to know the real state

If a useful operational doc exists outside the repo and still matters, move or recreate it inside `tendo-ug/docs/ops/`.

---

## What still needs work

### 1. Science milestone decision
Science is strong enough to be considered a meaningful grouped milestone.

Open question for the next session/founder:
- accept this as “P7 Science done enough to move on,” or
- do one more teacher-style depth pass before making that claim.

Do not overclaim. Current honest phrasing:
> P7 Integrated Science is live, structured, diagrammed, practice-enabled, worksheet-enabled, quality-audited and deepened. It is strong enough to demo and continue from.

### 2. Next subject after Science
If Science is accepted, the likely next target is **Social Studies**.

Start Social Studies deliberately:
- check curriculum/source material
- inspect whether any Social Studies files already exist
- map expected topics
- build first grouped implementation wave

---

## Watch-outs

- The founder uses a **manual overwrite workflow**. Keep file instructions explicit.
- Pushes to `main` auto-promote to production.
- Avoid touching unrelated sensitive/config files unless necessary.
- Do not reopen maths scope casually. Treat it as complete unless a clearly material issue is discovered.
- Population and Health contains sensitive curriculum wording. Keep learner-facing wording respectful, safety-focused and adult-guided.
- Repo docs are now the preferred canonical record.
- Run build from `app/`, not repo root.

---

## Best next move

1. Verify build one last time after docs updates.
2. If founder approves, package this as a grouped Science milestone.
3. Either push, or continue into Social Studies if intentionally stretching pushes further.
