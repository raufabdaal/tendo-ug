import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { hasTopicDiagram } from "@/components/TopicDiagram";
import { TOPICS, COMING_SOON } from "@/lib/topics";

const THEME_ORDER = [
  "Sets",
  "Numeracy · Whole Numbers",
  "Numeracy · Operations",
  "Numeracy · Fractions",
  "Numeracy · Integers",
  "Numeracy · Patterns",
  "Algebra",
  "Interpretation of Graphs and Data",
  "Measurement",
  "Measurement · Time",
  "Measurement · Money",
  "Geometry · Construction",
] as const;

const THEME_META: Record<string, { description: string; start?: string }> = {
  "Sets": {
    description: "Groups, Venn diagrams, subsets and probability language.",
    start: "Start with Venn diagrams",
  },
  "Numeracy · Whole Numbers": {
    description: "Large numbers, place value, Roman numerals, prime factors and bases.",
    start: "Start with large numbers",
  },
  "Numeracy · Operations": {
    description: "Core calculation skills used across the whole maths syllabus.",
    start: "Start here if basics feel weak",
  },
  "Numeracy · Fractions": {
    description: "Fractions, decimals, percentages and proportion work.",
    start: "Start with fractions",
  },
  "Numeracy · Integers": {
    description: "Positive numbers, negative numbers, zero and number-line reasoning.",
  },
  "Numeracy · Patterns": {
    description: "Divisibility tests and number patterns for faster reasoning.",
  },
  "Algebra": {
    description: "Expressions, substitution, equations, inequalities and word statements.",
    start: "Start with expressions",
  },
  "Interpretation of Graphs and Data": {
    description: "Averages, charts, travel graphs and coordinates.",
    start: "Visual strand",
  },
  "Measurement": {
    description: "Length, mass, capacity, perimeter, area and volume.",
  },
  "Measurement · Time": {
    description: "Clock conversion, elapsed time and timetable reasoning.",
  },
  "Measurement · Money": {
    description: "Profit, loss, discount, interest and everyday money problems.",
  },
  "Geometry · Construction": {
    description: "Angles, polygons, lines, bearings and scale drawing.",
    start: "Visual strand",
  },
};

function sortThemeEntries<T>(entries: [string, T][]) {
  return [...entries].sort(([a], [b]) => {
    const aIndex = THEME_ORDER.indexOf(a as (typeof THEME_ORDER)[number]);
    const bIndex = THEME_ORDER.indexOf(b as (typeof THEME_ORDER)[number]);
    const safeA = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
    const safeB = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;

    if (safeA !== safeB) return safeA - safeB;
    return a.localeCompare(b);
  });
}

export default function TopicListPage() {
  const publishedCount = TOPICS.length;
  const comingSoonCount = COMING_SOON.length;
  const totalCount = publishedCount + comingSoonCount;
  const visualTopicCount = TOPICS.filter((topic) => hasTopicDiagram(topic.id)).length;

  const groups = new Map<string, typeof TOPICS>();
  for (const t of TOPICS) {
    const existing = groups.get(t.themeName) ?? [];
    existing.push(t);
    groups.set(t.themeName, existing);
  }

  const comingGroups = new Map<string, typeof COMING_SOON>();
  for (const t of COMING_SOON) {
    const existing = comingGroups.get(t.themeName) ?? [];
    existing.push(t);
    comingGroups.set(t.themeName, existing);
  }

  const orderedGroups = sortThemeEntries(Array.from(groups.entries()));
  const orderedComingGroups = sortThemeEntries(Array.from(comingGroups.entries()));

  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P7 · Mathematics</div>
      <h1>Choose a maths strand to study</h1>
      <p className="lead">
        P7 Mathematics is organised by strand so learners can see the syllabus shape, start with foundations, and jump into the exact topic they need.
      </p>

      <div className="maths-overview" aria-label="P7 mathematics summary">
        <div className="maths-overview-item">
          <strong>{publishedCount}</strong>
          <span>topics live</span>
        </div>
        <div className="maths-overview-item">
          <strong>{orderedGroups.length}</strong>
          <span>study strands</span>
        </div>
        <div className="maths-overview-item">
          <strong>{visualTopicCount}</strong>
          <span>topics with diagrams</span>
        </div>
      </div>

      <div className="strand-jump" aria-label="Jump to a maths strand">
        {orderedGroups.map(([theme, topics]) => (
          <a key={`jump-${theme}`} href={`#${slugify(theme)}`} className="strand-chip">
            {theme} <span>{topics.length}</span>
          </a>
        ))}
      </div>

      {orderedGroups.map(([theme, topics]) => {
        const meta = THEME_META[theme];
        const visualCount = topics.filter((topic) => hasTopicDiagram(topic.id)).length;

        return (
          <section key={theme} id={slugify(theme)} className="theme-group strand-section">
            <div className="strand-head">
              <div>
                <div className="theme-label">{theme}</div>
                {meta?.description && <p className="strand-desc">{meta.description}</p>}
              </div>
              <div className="strand-meta">
                <span>{topics.length} {topics.length === 1 ? "topic" : "topics"}</span>
                {visualCount > 0 && <span>{visualCount} visual</span>}
              </div>
            </div>
            {meta?.start && <div className="strand-start">{meta.start}</div>}

            <div className="topic-card-grid">
              {topics.map((t) => (
                <Link key={t.id} href={`/math/p7/${t.id}`} className="card topic-card">
                  <div className="card-row">
                    <div>
                      <div className="card-title">{t.title}</div>
                      <div className="card-sub">About {t.estMinutes} minutes · {t.quiz.length} questions</div>
                      {hasTopicDiagram(t.id) && <div className="visual-cue">Includes diagram</div>}
                    </div>
                    <ProgressBadge topicId={t.id} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {orderedComingGroups.map(([theme, topics]) => (
        <div key={`soon-${theme}`} className="theme-group">
          <div className="theme-label">{theme}</div>
          {topics.map((t) => (
            <div key={t.id} className="card card-disabled">
              <div className="card-row">
                <div>
                  <div className="card-title">{t.title}</div>
                  <div className="card-sub">7 questions</div>
                </div>
                <span className="badge badge-phase">Coming, Phase 2</span>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="foot">
        {publishedCount} topics ready now.
        {comingSoonCount > 0
          ? ` ${comingSoonCount} more ${comingSoonCount === 1 ? "topic is" : "topics are"} still being reviewed for publishing.`
          : ` All ${totalCount} mapped topics are live on this page.`}
      </div>
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
