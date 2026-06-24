# MANUAL TASKS — Tendo

> Things only the founder can do (sign up for services, click buttons, enter cards). Numbered, ordered, with cost flagged.

---

## MT-001 · Create GitHub repo for Tendo
**Status:** Open · **Blocks:** Phase 1 · **Estimated time:** 5 min · **Cost:** Free

**Why:** Source of truth + bridge to Vercel for auto-deploy (per `DEV_JOURNAL.md` Part 5).

**Steps:**
1. Open GitHub Desktop (already installed from Sasa work).
2. File → New Repository.
3. Name: `tendo` (or `tendo-ple` if `tendo` is taken).
4. Local path: choose your usual projects folder.
5. Description: *"Ugandan PLE study platform sold to primary schools."*
6. Initialize with README: **uncheck** (we have our own).
7. Git ignore: **none** (we have our own `.gitignore`).
8. Create repository → Publish repository → **uncheck "Keep this code private"** only if you want it public (recommended: keep private for now).
9. Tell the agent the repo URL (e.g. `github.com/yourusername/tendo`).

---

## MT-002 · Connect Vercel to the Tendo GitHub repo
**Status:** Open · **Blocks:** Phase 1 deploy · **Estimated time:** 8 min · **Cost:** Free (Hobby tier)

**Why:** Auto-deploy on every `git push`. Per `DEV_JOURNAL.md`: "set up the proper workflow on day 1."

**Steps:**
1. Go to https://vercel.com/new
2. Sign in with the GitHub account that owns the `tendo` repo.
3. Click "Import" next to `tendo`.
4. **Important settings (per the Vercel monorepo lesson):**
   - **Framework Preset:** select **Next.js** explicitly. Do not trust auto-detect.
   - **Root Directory:** click "Edit" → set to `app`.
   - **Include source files outside of the Root Directory in the Build Step:** **check this box.** (We need `content/` reachable at build.)
5. Click Deploy.
6. When it finishes, **open the live URL in a fresh browser tab** to confirm it actually works. (Per `DEV_JOURNAL.md`: a green build log is not a working site.)
7. Tell the agent the live URL.

**If deploy fails:** copy the error, paste it in chat (but **never** paste any tokens or secrets that may appear in the URL or logs).

---

## MT-003 · (Phase 2) Apply for a free Groq API key
**Status:** Deferred until Phase 2 · **Blocks:** Content generation pipeline · **Estimated time:** 10 min · **Cost:** Free

Will be expanded when we reach Phase 2.

---

## How to log a new manual task

Format:
```
## MT-NNN · <short title>
**Status:** Open/Done/Blocked · **Blocks:** <phase> · **Estimated time:** <min> · **Cost:** Free/$X
**Why:** <one line>
**Steps:** 1. ... 2. ... 3. ...
```
