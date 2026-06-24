# Pricing — Tendo

*Working numbers for Phase 0. Will be revisited after pilot data lands.*

---

## The model (recap of DEV-003)

- **Schools are the customer.** We bill schools, not parents.
- **Per-student, per-term.** Aligned with Ugandan school fee rhythm.
- **The school sets the parent price.** We never tell a school what to charge their parents.
- **Termly cadence**, not monthly. Schools think in terms; parents pay in terms; cashflow matches.

## The tiers (what we charge schools)

| Tier | Per student, per term | Suited for | Includes |
|---|---|---|---|
| **Pilot** | UGX 0 | First-term trial, 1 P7 class only | All P7 Math content + past papers + usage report |
| **Standard** | UGX 5,000 (~USD 1.35) | Schools of 30–250 students | All P7 + P6 Math + past papers + custom subdomain + termly usage report |
| **Plus** | UGX 8,000 (~USD 2.15) | Schools of 250+ students | Everything in Standard + assigned-topic teacher mode + topic completion certificates + priority WhatsApp support |

*(USD conversion at ~3,700 UGX/USD as of 2026-06-24. Pricing always quoted in UGX to the school.)*

## What the school typically charges the parent

We suggest (we do not enforce):

- **Per-term Revision Programme add-on: UGX 20,000 – UGX 30,000 per student.**

This puts the parent's monthly cost at roughly **UGX 7,000 – 10,000**, comfortably less than what they'd spend on one Saturday coaching session.

## Margin math for the school

A school of **120 P7 students** on the Standard tier, charging parents UGX 25,000:

```
Parent revenue (120 × 25,000)        = UGX 3,000,000 per term
Tendo cost (120 × 5,000)             = UGX   600,000 per term
School margin                        = UGX 2,400,000 per term
Annual (3 terms)                     = UGX 7,200,000
```

The same school, if it expands to all of P6 + P7 (say 240 students):

```
Parent revenue (240 × 25,000)        = UGX 6,000,000 per term
Tendo cost (240 × 5,000)             = UGX 1,200,000 per term
School margin                        = UGX 4,800,000 per term
Annual                               = UGX 14,400,000
```

## Our economics

At Standard tier with **10 schools × 120 students avg = 1,200 students**:

```
Revenue: 1,200 × UGX 5,000 × 3 terms = UGX 18,000,000 per year (~USD 4,860)
Costs (v0):
  - Vercel Hobby: UGX 0
  - Groq + Gemini free tier: UGX 0
  - Domain (tendo.ug or similar): UGX ~55,000 per year
  - Manual review time (founder): not yet costed
Net before founder time: UGX 17,945,000
```

This is enough to justify a part-time content reviewer (a recruited PLE Math teacher at UGX 500,000/month for ~10 hrs/week of review work) and still leave runway.

## Discounts and special cases

- **First pilot school in a region:** free for 2 terms, in exchange for being a case study (named).
- **UPE (government) schools:** sliding scale, target UGX 1,500 per student per term, may need NGO co-funding. Phase 4+ conversation.
- **Schools that pay annually upfront:** 15% off (3 terms for the price of ~2.55).
- **Schools that refer another paying school:** 1 term free for the referrer.

## Payment mechanics

- **Mobile Money (MTN MoMo + Airtel Money)** is the default. Phase 4 build.
- **Bank transfer** option for schools that prefer it (bursars often do).
- **Receipt issued the same day** by email or WhatsApp.
- We never take card payments directly in v0. Too much compliance burden.

## What we do NOT do on pricing

- ❌ Per-month "freemium with login wall." Wrong rhythm for the market.
- ❌ Auto-renew with surprise charges. The school re-confirms each term.
- ❌ Charge parents directly. Channel conflict with our school customer.
- ❌ Discount publicly. Discounts are 1:1 conversations.

## When we will revisit pricing

- After the first 3 schools have completed a paid term (real conversion data).
- If a competitor enters with credible Ugandan-PLE focus (currently: nobody).
- If we add live tutoring or any human-in-the-loop component (different unit economics entirely).
