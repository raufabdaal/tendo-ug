import Link from "next/link";
import { TOPICS, COMING_SOON } from "@/lib/topics";
import ProgressBadge from "@/components/ProgressBadge";

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
      <h1>Choose a maths topic to learn or revise</h1>
      <p className="lead">
        Topics are grouped by strand so the page feels easier to scan. You can study in order or jump straight to the area you want to strengthen.
      </p>

      {orderedGroups.map(([theme, topics]) => (
        <div key={theme} className="theme-group">
          <div className="theme-label">{theme}</div>
          {topics.map((t) => (
            <Link key={t.id} href={`/math/p7/${t.id}`} className="card">
              <div className="card-row">
                <div>
                  <div className="card-title">{t.title}</div>
                  <div className="card-sub">About {t.estMinutes} minutes · {t.quiz.length} questions</div>
                </div>
                <ProgressBadge topicId={t.id} />
              </div>
            </Link>
          ))}
        </div>
      ))}

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
