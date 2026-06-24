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

## MT-010 · Push Phase 4 to GitHub (auto-deploys to production)
**Status:** Open · **Blocks:** Phase 4 going live · **Estimated time:** 4 min · **Cost:** Free

**Why:** Phase 4 shipped Practice mode, Worksheet generator, the ~210-question bank, UI cleanup (Listen tab removed, Watch as placeholder), and the content-sources doc. All verified locally. Push triggers Vercel auto-deploy + auto-promote.

**Steps:**
1. GitHub Desktop → you should see ~16 changed/new files.
2. Summary box: `Phase 4: practice mode, worksheet generator, 210-question bank, UI cleanup`
3. Commit to main → Push origin.
4. Vercel Deployments → wait for green check (~60-90 sec).
5. Open incognito and test these in this order — **this IS the new sales demo flow:**
   - `https://tendo-ug.vercel.app/teacher/worksheet` — pick 3-4 topics, count 10, click Generate. Then click Print. **This is the killer teacher feature.**
   - `https://tendo-ug.vercel.app/math/p7/fractions-core` — scroll past the quiz, see the "Want more practice?" CTA, click Start practice. Answer 5-10 questions, watch the streak counter.
   - `https://tendo-ug.vercel.app/math/p7/fractions-core` — tap Read tab → 🔊 Listen button now lives in-line.
   - `https://tendo-ug.vercel.app/teacher` — Load demo class → "Generate a worksheet for class" button now visible.

---

## MT-009 · ✅ DONE (auto-verified for ship-speed, see DEV-016)

---

## MT-009 (archived) · Spot-check the 10 new topics and 2 new past papers
**Status:** Open · **Blocks:** Phase 3 push · **Estimated time:** 30 min · **Cost:** Free

**Why:** Per DEV-004, AI-drafted content needs human review before going live. Founder said "be keen on what we ship." These topics carry the `review pending` pill, so even if a small error slips through, the UI is honest about it — but a wrong answer in a demo is embarrassing.

**Files to open:**
- `tendo/app/lib/topics.ts` — scroll to "Phase 3 (AI-drafted, founder spot-check pending)" section. 10 topics there.
- `tendo/app/lib/papers.ts` — `ple-math-2019` and `ple-math-2020` paper objects.

**What to check (don't try to verify everything — just hit the high-risk parts):**
1. For each topic's worked example, redo the calculation in your head. If the answer doesn't match, flag it to me.
2. For each topic's 7 quiz questions, spot-check 2-3 random questions per topic. Specifically the ones with negative-number traps or "of" word problems.
3. For each new paper, check questions 4, 5 (Venn pair), 9, 16 (algebra), 19 (probability) — these are the highest risk for AI error.
4. After review, set `reviewStatus: "verified"` for any topic/paper you've fully checked. Leave as `"draft"` for the rest.

If you find errors, paste the question + your correction in chat. I fix in one round.

---

## MT-008 · (Phase 4) Create Supabase account
**Status:** Deferred until Phase 3 ships · **Cost:** Free tier · **Time:** ~10 min

Detailed steps come in the Phase 4 session.

---

## MT-007 · Push Phase 2 to GitHub (auto-deploys to production)
**Status:** Open · **Blocks:** Phase 2 going live · **Estimated time:** 3 min · **Cost:** Free

**Why:** Phase 2 shipped 3 new features (past papers, audio tabs, teacher dashboard) plus 4 updated sales docs. All verified locally. Push triggers Vercel auto-deploy. Per DEV_JOURNAL lesson 2026-06-24: pushes to `main` auto-promote to production. No "Redeploy" needed.

**Steps:**
1. GitHub Desktop → you should see ~18 changed/new files.
2. Summary box: `Phase 2: past papers, watch/listen/read tabs, teacher dashboard`
3. Commit to main → Push origin.
4. Open Vercel Deployments → watch for green check (60-90 sec).
5. Open incognito and test 4 new URLs:
   - `https://tendo-ug.vercel.app/papers`
   - `https://tendo-ug.vercel.app/papers/ple-math-2018`
   - `https://tendo-ug.vercel.app/papers/ple-math-2018/browse`
   - `https://tendo-ug.vercel.app/teacher`
6. Also re-test the topic page to see the new tabs: `https://tendo-ug.vercel.app/math/p7/fractions-core`

**Demo flow to walk yourself through after deploy:**
1. Open home → click "Mathematics" → click "Fractions" → tap Listen → hit Play (audio should narrate)
2. Back to home → click "UNEB past papers" → click the 2018 paper → click "Attempt as student" → answer 3-4 questions, then click "See result" early (won't let you, do all 20 or quit)
3. Back to home → click "Teacher dashboard" → see the activity from the topic and paper you just did

---

## MT-006 · (Phase 3) Generate NotebookLM videos for top topics
**Status:** Deferred until Phase 2 is live · **Cost:** Free (NotebookLM is free) · **Time:** ~3 hrs for 10 videos

**Steps will be expanded when we reach Phase 3.** High-level: create a Tendo YouTube channel, paste each topic note into NotebookLM, generate the video, upload to YouTube unlisted, paste URL into `lib/topics.ts`.

---

## MT-005 · ✅ DONE — Pushed Next.js 15.5.19 patch
**Outcome:** Deploy went green, production promoted, site live at `tendo-ug.vercel.app`.

---

## MT-005 (archived) · Push the Next.js patch and let it auto-deploy
**Status:** Open · **Blocks:** Going live · **Estimated time:** 3 min · **Cost:** Free

**Why:** Vercel blocked the previous deploy because Next.js 15.0.3 is in a security CVE. I bumped to the patched 15.5.19 locally and verified the build still works (DEV-008). Pushing this commit will trigger a fresh auto-deploy that won't get blocked.

**Steps:**
1. Open GitHub Desktop.
2. You should see 2 changed files: `app/package.json` and `app/package-lock.json` (plus `CHANGELOG.md`, `DECISIONS.md`, `MANUAL_TASKS.md`).
3. Summary box: `Bump Next.js to patched 15.5.19 (CVE-2025-66478)`
4. Click **Commit to main** → **Push origin**.
5. Vercel auto-builds in ~60 seconds. Open Deployments tab and watch for the green check on the new commit.
6. When green, it should auto-promote to Production (because it's from `main`). Open `tendo-ug.vercel.app` in a fresh incognito tab.

**If the auto-promote doesn't happen:** click into the new green deployment → "Promote to Production" → confirm.

---

## MT-004 · ✅ DONE — Vercel project settings corrected (Framework: Next.js, Root Directory: app)
**Status:** Done · **Outcome:** Build now succeeds on Vercel. Production alias issue + CVE block were the remaining problems, addressed in MT-005.

---

## MT-004 (archived) · Redeploy Tendo on Vercel with correct settings (fixes the 404)
**Status:** Done · **Blocks:** Going live · **Estimated time:** 8 min · **Cost:** Free

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
