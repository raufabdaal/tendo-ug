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

## MT-004 · Redeploy Tendo on Vercel with correct settings (fixes the 404)
**Status:** Open · **Blocks:** Going live · **Estimated time:** 8 min · **Cost:** Free

**Why:** You hit a 404 on the first Vercel deploy. Reason: when you first pushed, the `app/` folder was empty, so Vercel had nothing to serve. Now the Next.js app exists. But Vercel needs to be told **where it is** and **what framework it is**. This is the exact "Vercel monorepo gotcha" documented in `DEV_JOURNAL.md` Part 4.

**Do this in order:**

### Step 1 — push the new code to GitHub
1. Open GitHub Desktop.
2. You should see ~20 new/changed files (everything in `tendo/app/`, plus updated `STATUS.md`, `HANDOFF.md`, `CHANGELOG.md`, `CHECKLIST.md`, `DECISIONS.md`, `MANUAL_TASKS.md`).
3. In the "Summary" box bottom-left, type: `Phase 1: Next.js app with 3 topics live`
4. Click "Commit to main".
5. Click "Push origin" at the top.

### Step 2 — fix Vercel project settings
1. Go to https://vercel.com/dashboard
2. Click on your `tendo` project.
3. Click the **Settings** tab (top).
4. Click **General** in the left sidebar.
5. Scroll down to **Build & Development Settings**:
   - **Framework Preset:** click the dropdown → choose **Next.js**. (Do not leave on "Other" or "Auto-detect.")
   - **Root Directory:** click "Edit" → type exactly `app` → click "Continue" or "Save". (This tells Vercel "the Next.js project lives in the `app` subfolder.")
   - Leave "Include source files outside of the Root Directory in the Build Step" **off** for now. Phase 2 may flip this on.
6. Scroll down and click **Save**.

### Step 3 — trigger a fresh deploy
1. Click the **Deployments** tab (top).
2. Find the latest deployment (it should be from the push you just did, or from earlier).
3. Click the three-dot menu (⋯) on the right → **Redeploy**.
4. **Uncheck "Use existing Build Cache"** (per `DEV_JOURNAL.md`: don't trust caches when debugging).
5. Click **Redeploy**.
6. Wait ~60 seconds. You should see "✓ Ready" with a green check.

### Step 4 — verify it actually works (the part most people skip)
Per `DEV_JOURNAL.md` Part 4: a green build log is not a working site. Test these 3 URLs in a fresh browser tab:

1. `https://<your-vercel-url>/` → should show the subject picker with "Mathematics — P7 · 6 themes · 40 sub-topics"
2. `https://<your-vercel-url>/math/p7` → should show the topic list with Venn diagrams, Roman numerals, Fractions
3. `https://<your-vercel-url>/math/p7/venn-diagrams-2-events` → should show the full topic with "Take the quiz · 7 questions" at the bottom

If all 3 work: **send me the live URL and we close Phase 1.**

If any 404: don't panic, copy the URL you tried and paste it in chat. We'll fix it.

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
