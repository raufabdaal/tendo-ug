# Update / Overwrite Protocol

*Purpose: make every session easy for the founder to apply manually to the GitHub-connected local copy.*

---

## Rule for every delivery

At the end of each meaningful change, the agent must always report four things clearly:

1. **What changed**
2. **Why it changed**
3. **Which files changed**
4. **What the founder should do with each file**
   - **Overwrite existing file**
   - **Add new file**
   - **No action needed**

---

## Delivery format to use every time

### Summary
- Short description of the task completed.

### Files changed
For each file, list:
- file path
- action: overwrite existing file / add new file
- one-line purpose

### Founder action
Use a clean checklist format:

- [ ] Overwrite `path/to/file`
- [ ] Add new file `path/to/file`

### Notes
- Mention anything intentionally not changed.
- Mention any sensitive files avoided.
- Mention any follow-up dependency before the next push.

---

## Example

### Summary
Cleaned the status docs to remove merge-conflict leftovers and reflect the Trainup pilot state.

### Files changed
- `STATUS.md` — **overwrite existing file** — current project status rewritten
- `HANDOFF.md` — **overwrite existing file** — next-session instructions cleaned up
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md` — **add new file** — curriculum coverage audit

### Founder action
- [ ] Overwrite `STATUS.md`
- [ ] Overwrite `HANDOFF.md`
- [ ] Add new file `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md`

### Notes
- Did not touch `.gitignore`, env files, or deployment config.
- Next suggested step: audit question bank alignment.

---

## Current agreement

The founder has confirmed:
- manual overwrite is the preferred workflow
- not every file should be overwritten
- sensitive or unrelated files should be left alone unless explicitly needed
- documentation quality should be more thorough than before

This file should be treated as the standing protocol for future sessions.
