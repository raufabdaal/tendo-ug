# Document Sweep Plan — 2026-06-30

## Why this comes first

Before deeper content and practice alignment, the repo docs need to stop behaving like mixed historical states.

Right now, the doc layer still has three problems:
1. unresolved merge-conflict markers
2. outdated phase language from earlier sessions
3. inconsistent counts / priorities versus the current Trainup + study-ready direction

If we do not clean this first, future work will keep inheriting confusion.

---

## Goal of the sweep

Produce a clean documentation layer that reflects the true current state:
- Trainup pilot is the active context
- P7 Math is the current subject focus
- the app is moving from demo-ready to study-ready
- about ten topics are at or near the new study-module standard
- practice alignment and curriculum structure are now major priorities
- docs must support manual overwrite workflow clearly

---

## Files likely to be cleaned in the sweep

### Core session docs
- `STATUS.md`
- `HANDOFF.md`
- `CHANGELOG.md`
- `DECISIONS.md`
- `CHECKLIST.md`

### Supporting operational docs
- `docs/ops/trainup-pilot-plan.md`
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md`
- `docs/ops/update-handoff-protocol.md`
- `docs/ops/session-note-2026-06-30-next-step-alignment.md`

---

## Principles for the sweep

1. **Do not rewrite history unnecessarily**
   - preserve useful chronology where possible
   - clean contradictions, not evidence

2. **Resolve conflict markers completely**
   - no `<<<<<<<`, `=======`, `>>>>>>>` left behind

3. **Reflect the true current direction**
   - study-first, NCDC-aligned, pilot-focused

4. **Be explicit about what is done vs partial vs next**
   - avoid vague status language

5. **Support the founder's overwrite workflow**
   - each changed file must be easy to replace manually

---

## Recommended sweep order

1. `STATUS.md`
2. `HANDOFF.md`
3. `CHECKLIST.md`
4. `DECISIONS.md`
5. `CHANGELOG.md`

This order works because status and handoff define the current truth first, then the checklist, then the decision log, then the historical narrative.

---

## Suggested immediate next task

Start the sweep by rewriting:
- `STATUS.md`
- `HANDOFF.md`

These two files are the most important for restoring a reliable project state narrative.
