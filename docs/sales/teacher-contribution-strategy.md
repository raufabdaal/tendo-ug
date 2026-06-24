# Teacher Contribution Strategy — Tendo

*How we turn pilot teachers into free QA + content reviewers, without paying them, while making them feel like co-owners of the product.*

---

## The insight (founder's, 2026-06-25)

> "Since we're going to work with the schools, we can actually come up with a strategy to use the teachers to make the app better with no cost even on our end."

This is right, and it's strategically much bigger than it sounds. Most edtech products fight against teachers (perceived replacement threat). Tendo flips this: **teachers become our content moat.** After 12 months of pilot teacher feedback, our P7 Math content is verifiably more accurate, more locally-grounded, and more PLE-aligned than any competitor's — and we paid them nothing for it.

## The "Tendo Teacher Fellowship" framing

Don't call it "feedback." Don't call it "QA." Call it a **Fellowship.**

A teacher who contributes 5+ reviewed corrections in a term becomes a **Tendo Teacher Fellow.** Public title, certificate (PDF, free to generate), name listed on the school's Tendo subdomain. Costs us nothing. Means everything to a teacher whose career is judged on visibility.

> Why this works: Ugandan teachers — especially senior P7 ones — value professional recognition highly because the public school pay structure offers very little salary movement. A Fellowship title is something they can put in their CV, mention at parent meetings, and use when interviewing at better schools. We are offering them career capital, free.

## The three contribution channels (in priority order)

### 1. Report-a-problem button (built — Phase 3)
Every quiz question and past-paper question has a small "Report a problem with this question" link. Opens a modal, captures free-text feedback, stores it.

**Today:** stored in localStorage under `tendo:reports`. Founder retrieves manually for now.
**Phase 4:** wired to Supabase. Reports come in tagged with `(school code, teacher code, question id)`.

Why this channel matters: it captures **specific** errors at the moment a teacher sees them. The teacher doesn't need to remember anything. Friction is one click.

### 2. Suggested question library (Phase 4)
A teacher logs in, sees "Suggest a question." Posts a question they wrote, with answer + explanation. If approved by a Tendo reviewer (founder, for now), the question appears in the bank credited to that teacher: *"Question suggested by Mr. Mukasa, St Mary's Kitende, 2026."*

Why this channel matters: senior teachers love writing questions. Many already write mock papers for their schools. This gives them a public stage. We get free, exam-tested content with a real teacher's name on it.

### 3. Annual Tendo Teacher Roundtable (Phase 6, when we have ≥10 pilot schools)
One day per year, one teacher per pilot school, we host an in-person workshop in Kampala (sponsored lunch, ~UGX 800k total). Review the year's content. Vote on next year's priorities. Issue Fellowship certificates.

Why this channel matters: turns scattered teachers into a community that defends Tendo against competitors. The first cohort becomes our co-founders in spirit.

## What we promise the teacher (the deal)

| What they give | What they get |
|---|---|
| 5 minutes per week of clicking "Report a problem" when they see issues | Their feedback shapes a tool used by hundreds of students |
| 5+ accepted contributions per term | Tendo Teacher Fellow title + downloadable certificate + name on school's Tendo page |
| A suggested question gets approved | Their name credited on every appearance of that question |
| Participation in annual roundtable | Recognition by their school's head teacher (we send the head teacher a thank-you letter naming the teacher) |

What we DO NOT promise: cash. The moment we pay them, we change the relationship into employment and we owe them a salary. Free contribution + status + community is more sustainable AND more powerful.

## The "honest pill" system (built — Phase 3)

Every topic and every past paper carries a small visible badge:

- `verified` (green) — reviewed and approved by a human
- `review pending` (grey) — drafted by AI, not yet teacher-reviewed

This serves three purposes:
1. **Honest UI** (per `AGENT_BRIEF.md`) — we never pretend AI content is teacher-verified.
2. **Sales credibility** — head teachers see we're not bluffing about review processes.
3. **Teacher motivation** — pilot teachers can literally see which content their feedback could move from "pending" to "verified."

## Sales script for introducing this to a head teacher

> *"One thing we do differently from imported edtech: the content evolves with feedback from your teachers. Every question has a 'report a problem' link. When your senior P7 teacher sees something wrong or wants to improve a question, they tell us in one click. If a teacher at your school contributes 5 or more accepted reviews in a term, we recognise them publicly as a Tendo Teacher Fellow, with a certificate. We never replace your teachers' authority on what Ugandan students need to know. We extend it."*

That paragraph closes the "what about our teachers" objection AND creates a soft FOMO ("hmm, my school could have a Tendo Teacher Fellow — that's a nice line at parent meetings").

## The economics

| | Cost per year |
|---|---|
| Building report-a-problem UI | One-time, already done |
| Founder reviewing reports | 2 hours/week × 50 weeks = 100 hours (founder time) |
| Certificate generation | $0 (HTML to PDF, free) |
| Annual roundtable (10 schools) | UGX 800,000 |
| Total cash | < UGX 1,000,000 per year |

**Compare to:** UGX 12,000,000 per year to hire a part-time content reviewer at UGX 500k/month plus benefits, who would never know each school's specific context. Teacher Fellowship is roughly 8% of the cost and 5× the strategic value.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Teacher submits low-quality or wrong reports | Founder reviews all before they affect content. Low-quality reports just don't get acted on. |
| Teacher demands payment | The Fellowship title and certificate are the entire deal. Be polite, be clear, move on. |
| Competing teacher submits sabotage reports | All reports are signed (Phase 4). Pattern-detection if any one teacher's reports are consistently bad. |
| We can't keep up with volume | Good problem to have. At that point, recruit one senior Fellow as a paid lead reviewer. |
| Teachers feel exploited | The Fellowship is genuinely valuable in their career context. If specific teachers feel exploited, we listen and adjust. |

## What to measure

- Reports submitted per month (engagement)
- % of reports that lead to a content edit (signal quality)
- Number of active Tendo Teacher Fellows per school per term (depth)
- Schools whose teachers contribute vs. don't — does contribution correlate with renewal? (the strategic test)

---

*This document evolves. After 6 months of pilot data, revisit and edit. Log changes as `DEV-NNN` entries in `DECISIONS.md` if the strategy meaningfully shifts.*
