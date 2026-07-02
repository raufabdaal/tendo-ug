# Tendo Lesson Structure v2

## Purpose

This is the new standard for Tendo study pages. The goal is to make each topic concise, complete and easy for a P7 learner to follow.

The previous structure had useful information, but could feel like long notes. Lesson Structure v2 turns a topic into a guided study flow.

---

## Learner-facing order

A strong Tendo lesson should follow this order:

1. **Big idea**
   - One short explanation of the topic.
   - Helps the learner understand the whole topic before details.

2. **What you will learn**
   - 3–5 objectives.
   - Keep them practical and exam-relevant.

3. **Key words**
   - 4–8 important terms.
   - Short child-friendly definitions.

4. **Learn it in parts**
   - Break the topic into small named sections.
   - Each section should have short bullet points.
   - Avoid long paragraph blocks.

5. **Visual brief / diagram**
   - Every visual should teach something.
   - Prefer maps, flow charts, comparison cards, timelines, labelled diagrams and process diagrams.
   - Avoid decorative images that do not explain the topic.

6. **PLE tip**
   - One practical exam-answering tip.

7. **Worked example**
   - One exam-style question or task.
   - Show steps.

8. **Common mistakes**
   - 3–5 mistakes learners often make.

9. **Try this**
   - One quick checkpoint question.

10. **Guided practice**
   - Open-ended task with planning steps, checklist and optional model opening.
   - For English: writing tasks.
   - For Science: experiment/application tasks.
   - For SST: map, history, case-study and organisation tasks.

11. **Quick recap**
   - 4–6 key points.

---

## App/data implementation

The optional `note.study` field powers the new structure:

```ts
study?: {
  bigIdea: string;
  keyVocabulary?: Array<{ term: string; meaning: string }>;
  sections?: Array<{ title: string; points: string[] }>;
  visual?: {
    title: string;
    description: string;
    kind?: "map" | "diagram" | "timeline" | "comparison" | "flow" | "cards";
  };
  examTip?: string;
}
```

If a topic has `note.study`, the Read tab uses the new v2 structure.
If it does not, the old structure still renders safely.

---

## Visual standard

Do not think “image”. Think “learning visual”.

Good visuals:
- labelled map
- cause/effect flow
- comparison table/card
- timeline
- process diagram
- body/system diagram
- writing template
- matching cards

Weak visuals:
- generic stock-like illustration
- decorative image with no labels
- image that looks nice but does not help answer a question

---

## Current rollout status

Subjects converted so far: **P7 Social Studies**, **P7 Integrated Science**, **P7 English** and **P7 Mathematics**

All 10 P7 Social Studies topics now use Lesson Structure v2:
1. Location of Africa on the map of the world
2. Physical Features of Africa
3. Climate of Africa
4. Vegetation of Africa
5. People of Africa, ethnic groups and settlement patterns
6. Foreign influence in Africa
7. Nationalism and the road to independence of Africa
8. Post-independence Africa
9. Economic developments in Africa
10. Major world organisations

Reason SST was first:
- SST benefits heavily from maps, cause/effect, vocabulary and case studies.
- The founder's sample structure was SST-like.
- SST exposes the visual problem clearly: visuals need to be learning maps, timelines, comparison cards and flows, not decorative images.


All 8 P7 Integrated Science topics now use Lesson Structure v2:
1. Muscular-skeletal system
2. Electricity and magnetism
3. Energy resources in the environment
4. Simple machines and friction
5. Excretory system
6. Light energy
7. Interdependence of things in the environment
8. Population and health

Science v2 emphasis:
- key vocabulary and process clarity
- labelled diagrams, flows and comparison cards
- experiment/application wording
- safety-focused PLE tips, especially for electricity, health and body systems


All 7 P7 English topics now use Lesson Structure v2:
1. School Holidays
2. Letter Writing
3. Examinations
4. Electronic Media
5. Rights, Responsibilities and Freedom
6. Environmental Protection
7. Ceremonies

English v2 emphasis:
- writing-format templates
- vocabulary for grammar, comprehension and composition tasks
- tone, purpose and audience
- PLE tips for letters, speeches, posters, announcements and respectful messages


P7 Mathematics v2 now covers all 38 published Maths topics. The first targeted pass focused on these 12 high-impact topics:
1. Venn diagrams (2 events)
2. Fractions, ordering and operations
3. Proportion and percentages
4. Area
5. Volume
6. Equations
7. Mean, median, mode and range
8. Money
9. Pie charts and travel graphs
10. Bearing and scale drawing
11. Coordinates
12. Probability (introduction)

Maths v2 emphasis:
- visual-first topics
- common PLE word-problem traps
- formula selection and units
- diagrams/flows/checklists for multi-step methods

---

## Rollout plan

1. Apply the structure to Science with experiment/application emphasis. **Done.**
2. Apply the structure to English with writing-format emphasis. **Done.**
3. Review maths only where the old structure still feels too paragraph-heavy. **Expanded to all 38 Maths topics.**
4. Replace weak decorative visuals with instructional maps, flows, timelines and diagrams. **First visual alignment pass done: v2 visual cards improved and Maths diagram coverage expanded to all 38 topics.**
5. Push after a meaningful grouped restructuring milestone, not after every small pass. **This milestone is now ready for founder review across all four active subjects.**
