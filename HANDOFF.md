# HANDOFF — for the next session

*Written: 2026-07-01*

## Read this first

1. `STATUS.md`
2. `docs/ops/p7-maths-final-completion-audit-2026-07-01.md`
3. `docs/ops/update-handoff-protocol.md`
4. `DECISIONS.md`
5. `CHECKLIST.md`

---

## Where the project really is

The project has just completed the main P7 Mathematics push.

This is the key thing to understand now:
- Mathematics should no longer be treated as the primary unfinished pressure area.
- The repo docs are being consolidated so the GitHub repo itself becomes the operating source of truth.
- The next major execution target is **Social Studies**.

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
- Watch / Read structure with in-read speech support
- Trainup branding layer and `/trainup` route

### P7 Mathematics completion state
Maths is now materially complete for the current founder goal.

Important points:
- `app/lib/topics.ts` now carries **38 published maths topics**
- the final high-value maths gap wave was already built into the content layer
- the maths landing page was restructured in `app/app/math/p7/page.tsx`
- maths closeout and diagram strategy docs now exist in-repo

Relevant files:
- `app/lib/topics.ts`
- `app/lib/question-bank.ts`
- `app/app/math/p7/page.tsx`
- `docs/ops/p7-maths-final-completion-audit-2026-07-01.md`
- `docs/ops/p7-maths-diagram-visual-plan-2026-07-01.md`

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

### 1. Final repo-doc consistency
Before broad new work sprawls again, keep these files aligned with reality:
- `STATUS.md`
- `HANDOFF.md`
- `CHECKLIST.md`
- `DECISIONS.md`
- `CHANGELOG.md`

### 2. Social Studies subject start
The best next substantive move is to start Social Studies deliberately.

That should begin with:
- current repo-state audit
- curriculum and product-scope check
- identifying what already exists versus what is thin, missing, or misleading
- planning the first grouped implementation wave

---

## Watch-outs

- The founder uses a **manual overwrite workflow**. Keep file instructions explicit.
- Pushes to `main` auto-promote to production.
- Avoid touching unrelated sensitive/config files unless necessary.
- Do not reopen maths scope casually. Treat it as complete unless a clearly material issue is discovered.
- Repo docs are now the preferred canonical record.

---

## Best next move

1. Finish any last repo-doc cleanup needed for consistency.
2. Audit Social Studies in the actual repo.
3. Define the first Social Studies milestone.
4. Start building with the same intentionality used to finish Mathematics.
