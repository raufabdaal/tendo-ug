# P7 English quality audit — 2026-07-01

## Verdict

P7 English is complete enough for the current Tendo product scope.

This does **not** mean English can never improve. It means the core subject build no longer blocks progress: all official NCDC Set One P7 English topics are live, routed, practice-enabled, worksheet-enabled, template-supported, curriculum-mapped and quality-checked.

---

## Official NCDC outline checked

Source: NCDC Primary Seven Curriculum Set One, English Language topic outline.

### Term I
1. School Holidays
   - A: Holiday Plans
   - B: Holiday Activities
   - 30 periods
2. Letter Writing
   - A: Informal Letters
   - B: Formal Letters
   - 28 periods
3. Examinations
   - A: Preparing for Examinations
   - B: Sitting Examinations
   - 26 periods

### Term II
4. Electronic Media
   - A: Radio/Television
   - B: Other Electronic Media
   - 27 periods
5. Rights, Responsibilities and Freedom
   - A: Children’s Rights and Freedom
   - B: Animal Needs and Freedom
   - 41 periods

### Term III
6. Environmental Protection
   - A: Importance of Environmental Protection
   - B: Ways of Protecting the Environment
   - 25 periods
7. Ceremonies
   - A: Marriage
   - B: Funeral
   - 40 periods

---

## What is built

### App routes
- `/english/p7`
- `/english/p7/[topic]`
- `/english/p7/[topic]/practice`

### Data and curriculum files
- `app/lib/english-topics.ts`
- `content/curriculum/p7-english.json`

### Live English topics
1. `school-holidays`
2. `letter-writing`
3. `examinations`
4. `electronic-media`
5. `rights-responsibilities-freedom`
6. `environmental-protection`
7. `ceremonies`

Each topic has:
- learner-facing note
- learning objectives
- what-you-need-to-know bullets
- worked example
- common mistakes
- try-this activity
- recap
- 7-question quiz
- published + verified status

---

## Practice and worksheet support

English is integrated into the central question-bank and worksheet flow.

Current practice depth:
- 7 English topics
- 7 quiz questions per topic
- originally 5 additional bank questions per topic in the first English closeout
- later deepened to 13 additional bank questions + 7 quiz questions per topic
- 20 practice questions per English topic after deepening
- 140 total English practice questions after deepening

Worksheet generator now supports:
- Maths only
- English only
- Science only
- Social Studies only
- Mixed

---

## Templates / diagrams

English has template or diagram support for all 7 topics through `app/components/TopicDiagram.tsx`:

1. School Holidays — holiday writing: plan vs activity
2. Letter Writing — formal letter layout
3. Examinations — examination strategy flow
4. Electronic Media — check before you share
5. Rights, Responsibilities and Freedom — rights/responsibilities balance
6. Environmental Protection — problem → why it matters → action
7. Ceremonies — invitation format checklist

The English landing page now shows template counts and marks topics that include writing templates.

---

## Depth pass completed

Extra depth was added to writing-heavy topics:

### Letter Writing
- clearer formal vs informal distinction
- formal-letter heading/subject guidance
- paragraph structure for formal and informal letters
- PLE-style receiver/purpose check
- extra common mistakes around headings, closings and missing task details

### Rights, Responsibilities and Freedom
- stronger distinction between rights, freedoms and responsibilities
- examples linking rights to matching duties
- animal needs/freedom covered respectfully
- debate/discussion language added
- emphasis that freedom is guided by rules, safety and respect

### Environmental Protection
- expanded environmental vocabulary
- poster/message/announcement guidance
- problem → effect → solution writing structure
- clearer action-focused environmental messaging
- effects such as disease, erosion, floods and loss of soil fertility included

### Ceremonies
- marriage and funeral vocabulary expanded
- invitation format strengthened
- condolence-message format strengthened
- sequence words and respectful cultural/religious language reinforced
- funeral content handled with care and age-appropriate wording

---

## Quality checks

Checked for:
- all 7 official NCDC topics represented
- official subtopics reflected in learner content
- English routes generated
- practice routes generated
- worksheet subject filter integration
- no Religious Education work included
- tone appropriate for P7 learners
- sensitive funeral/rights/freedom wording handled respectfully
- build verification after English depth/template pass

Latest app build result:
- `npm run build` from `app/`
- `✓ Compiled successfully`
- `✓ Generating static pages (147/147)`

---

## Remaining future enhancements, not blockers

Future improvements can include:
- longer composition-writing rubrics
- more open-ended marking guides for teachers
- UNEB-style English paper tagging
- more comprehension passages and grammar drills
- teacher review of sample letters, speeches and invitations

These are enhancements. They do not block current progress because the grouped Social Studies + English push is already complete.
