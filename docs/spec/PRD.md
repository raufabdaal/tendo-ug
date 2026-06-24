# Product Requirements — Tendo (v0)

*Version 0.1 · 2026-06-24 · Phase 0*

## 1. The product in one sentence

**Tendo** is a school-sold web app that helps Ugandan P7 (and soon P6) students master the PLE Mathematics syllabus through clean notes, auto-graded quizzes, and real past papers.

## 2. The wedge

The PLE Math syllabus is **fully defined and finite** — 6 themes, 11 topics, 40 sub-topics ([NCDC, 2012 curriculum, still examinable as of 2026](../../content/curriculum/p7-math.json)). Past PLE papers (UNEB) are publicly archived. Yet **no clean, Ugandan-built, school-distributable study product** packages both for the upper-primary student. Tendo is that product.

## 3. Who we serve (in priority order)

1. **The school administrator / head teacher / director of studies** — the buying decision.
2. **The parent** — the paying party (indirectly, through school fees or per-term add-on).
3. **The student (P6 / P7)** — the user.
4. **The class teacher** — the influencer who can recommend it to admin.

If we ever have to trade off between #1 and #3, we choose #3 (the student is the product's reason to exist) but we always communicate the win in terms #1 cares about (PLE results, school reputation).

## 4. What v0 must do

### Must-have (Phase 1 & 2)

- **Subject picker home** — Math active. English / Science / SST visible but disabled, labelled "Coming soon, Phase 2".
- **Class picker** — P7 default. P6 visible, marked "Coming soon, Phase 5".
- **Topic list** — rendered from `p7-math.json`. Themes collapsed by default for low cognitive load. Each topic shows: name, difficulty hint, "done / not done" status from localStorage.
- **Topic page** — clean notes (markdown body), one worked example, a quiz button at the bottom.
- **Quiz** — 5 to 10 multiple-choice questions per topic. Immediate per-question feedback with a one-paragraph "why" explanation. End-of-quiz score. Retake button.
- **Progress in localStorage** — topic completion + last quiz score, per device.

### Must-have (Phase 3)

- **Past PLE papers index** — by year, with paper-level metadata.
- **Paper attempt mode** — student picks answers, submits, sees mark + per-question solution.

### Explicitly out of scope for v0

- Real authentication (DEV-002)
- Payments / billing (DEV-003)
- Video content (NotebookLM idea is parked; see DECISIONS for rationale when we add it)
- Live tutoring or chat
- Native mobile apps (the web app must work on a phone; that's enough)
- AI tutor / freeform chat
- Multi-language (English-only; this is the medium of upper-primary instruction in Uganda)

## 5. Non-functional requirements

- **Loads on a UGX 200,000 Android phone over 3G in under 4 seconds** to first interactive screen. (Median Ugandan student device.) This rules out heavy frontend frameworks and large images.
- **Works on the school's projector for whole-class review.** Means: legible at 1080p, no fixed-pixel layouts.
- **Survives offline for at least the current topic.** Cache the topic + its quiz so a student on poor data doesn't lose their session. (Phase 2 nicety, not Phase 1 must-have.)
- **No tracking SDKs.** Privacy posture matters for a kids product. Self-hosted analytics or none.
- **Cost ceiling for v0: UGX 0 / month.** Free tier everything.

## 6. Success metrics (what we measure when we have a pilot)

- **% of students who complete at least 5 topics in 30 days** (engagement)
- **Mean quiz score on first attempt vs third attempt** (learning gain — the "grades go up" story)
- **% of head teachers who renew at quarter end** (the business)
- **Net promoter from parents at PLE results week** (the moat)

## 7. The roadmap (high level)

| Phase | Goal | Status |
|---|---|---|
| 0 | Foundation + sales pack + clickable preview | ✅ Done |
| 1 | Next.js shell + 3 topics live, deployed | Next |
| 2 | AI content engine + 40 topics live | After Phase 1 |
| 3 | 5 past PLE papers with auto-mark | |
| 4 | First school pilot, custom subdomain | |
| 5 | P6 added; other subjects unlocked | |

## 8. Pluggability commitments (per `AGENT_BRIEF.md` cost discipline)

- Auth swap: localStorage → Supabase/Clerk = single config layer, no UI refactor.
- AI swap: Groq → paid Claude/GPT = one env var change.
- Hosting swap: Vercel → self-host = standard Next.js export.

## 9. Open questions (for the founder to resolve when relevant)

- Domain name. `tendo.ug` is likely the dream; we will check availability before Phase 4.
- Pilot school identity (changes the URL we deploy first to).
- Whether to add Luganda / Runyankole tooltips on math vocabulary (P6 students are still cementing English).
