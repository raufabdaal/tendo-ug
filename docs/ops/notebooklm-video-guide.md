# NotebookLM Video Pipeline for Tendo

Use this to turn NotebookLM output into short, syllabus-aligned explainer videos for the **Watch** tab.

> **Important:** NotebookLM is best at generating the *script* and *audio overview*. It does not export a finished video file. You still need to pair the audio with slides or a screen recording, then upload to YouTube.

---

## What we are building

- One short video per high-priority topic.
- First batch: **3 Math videos** (Fractions, Percentages, Equations).
- Each video lives in the **Watch** tab of its topic page.
- Hosting: **YouTube** (unlisted or public). The Watch tab embeds the YouTube link automatically.

---

## Recommended tools

| Step | Free option | Notes |
|---|---|---|
| Script + audio | **NotebookLM** | Paste the topic notes as a source, then ask for the script below. |
| Slides | **Canva** or **PowerPoint** | Use the worked example from the Tendo note as the main slide. |
| Screen recording | **Loom** or **OBS Studio** | Record while you narrate the slides. |
| Edit | **CapCut** (mobile/desktop) or **Canva video** | Trim, add captions, export MP4. |
| Host | **YouTube** | Upload unlisted. Copy the video URL. |

---

## Step-by-step workflow

### 1. Generate the script in NotebookLM

Create a new notebook in NotebookLM. Add two sources:
1. The topic notes from `app/lib/topics.ts` (copy the `note` object).
2. This prompt file (copy the prompt for the topic you want).

Then run the prompt.

### 2. Review the output

NotebookLM will return a script. Check that it:
- Uses the same worked example from the Tendo note.
- Is 2–3 minutes when read aloud.
- Uses plain English and Ugandan examples where possible.
- Does not introduce new methods that differ from the Tendo quiz.

### 3. Make the slides

One slide per section:
1. Title slide: topic name + "Tendo PLE Revision".
2. Why it matters (1 sentence).
3. What you need to know (2–3 bullet points).
4. Worked example (step-by-step).
5. Quick recap (2–3 bullets).
6. Outro: "Now switch to Read and take the quiz."

### 4. Record and edit

- Read the script while clicking through the slides.
- Keep it under 3 minutes.
- Add captions if possible (students may watch without sound).
- Export as MP4.

### 5. Upload to YouTube

- Title format: `Tendo PLE Math - [Topic Name]`
- Description: include "For PLE revision. Practice quiz at tendo-ug.vercel.app."
- Visibility: **Unlisted** is fine for now.
- Copy the video URL (e.g., `https://www.youtube.com/watch?v=ABC123xyz`).

### 6. Wire it into the app

Open `app/lib/topics.ts`. Find the topic. Uncomment the line:

```ts
// videoUrl: "https://www.youtube.com/embed/...", // TODO: paste NotebookLM video URL after upload
```

Replace it with:

```ts
videoUrl: "https://www.youtube.com/watch?v=ABC123xyz",
```

The `Watch` tab in `app/components/TopicTabs.tsx` will convert the YouTube watch URL into an embed URL automatically.

### 7. Verify locally

```bash
cd app
npm run build
npm run dev
```

Visit the topic page, click **Watch**, and confirm the video plays.

---

## Prompts to paste into NotebookLM

### 1. Fractions, ordering and operations

```
You are a calm, patient PLE Maths tutor for a Ugandan P7 student. Create a 2–3 minute explainer script for the topic "Fractions, ordering and operations". Use exactly the worked example below. End with a one-sentence recap. Keep sentences short and speak in a friendly, encouraging tone. Avoid slang.

Worked example to use in the script:
Akello has 16 mangoes. She gives 1/2 to her brother and then sells 1/4 of what is left. How many mangoes does she have now?

Key points to cover:
- A fraction is a part of a whole.
- To compare or add fractions, find a common denominator.
- To multiply, multiply tops and bottoms.
- To divide, flip the second fraction and multiply.
- "Of" with a fraction means multiply.
- Work from the new total, not the original.

Format: numbered script with [Slide: ...] cues so I can pair it with slides.
```

### 2. Proportion and percentages

```
You are a calm, patient PLE Maths tutor for a Ugandan P7 student. Create a 2–3 minute explainer script for the topic "Proportion and percentages". Use exactly the worked example below. End with a one-sentence recap. Keep sentences short and speak in a friendly, encouraging tone. Avoid slang.

Worked example to use in the script:
Akello scored 36 out of 50 in a Maths test. What percentage did she score?

Key points to cover:
- Percent means "out of 100".
- To find a percentage of a number, multiply then divide by 100.
- To express A as a percentage of B, divide A by B then multiply by 100.
- Profit/loss percentages are calculated on the cost price.
- Discount percentages are calculated on the marked price.

Format: numbered script with [Slide: ...] cues so I can pair it with slides.
```

### 3. Equations

```
You are a calm, patient PLE Maths tutor for a Ugandan P7 student. Create a 2–3 minute explainer script for the topic "Equations". Use exactly the worked example below. End with a one-sentence recap. Keep sentences short and speak in a friendly, encouraging tone. Avoid slang.

Worked example to use in the script:
Solve for x: 4x − 5 = 19.

Key points to cover:
- An equation says two things are equal.
- To solve, do the same thing to both sides.
- Undo addition with subtraction, multiplication with division.
- Always check your answer by substituting back into the original equation.

Format: numbered script with [Slide: ...] cues so I can pair it with slides.
```

---

## Naming conventions

- **YouTube title:** `Tendo PLE Math - [Topic Name]`
- **File name:** `tendo-math-[topic-id].mp4`
- **Topic ID in code:** `fractions-core`, `proportion-percentages`, `equations`

---

## When to expand

Once these 3 Math videos are live and the school feedback is positive, repeat the same pipeline for:
- English: comprehension, grammar, composition
- Science: human body, plants, environment
- SST: Uganda independence, geography, East Africa

The code is already ready for all subjects: just add `videoUrl` to each topic object in `app/lib/topics.ts` (or the equivalent subject topic file when subjects are added).
