import Link from "next/link";
import { TOPICS, COMING_SOON } from "@/lib/topics";
import ProgressBadge from "@/components/ProgressBadge";

export default function TopicListPage() {
  // Group published topics by theme
  const groups = new Map<string, typeof TOPICS>();
  for (const t of TOPICS) {
    const existing = groups.get(t.themeName) ?? [];
    existing.push(t);
    groups.set(t.themeName, existing);
  }

  // Group coming-soon by theme too
  const comingGroups = new Map<string, typeof COMING_SOON>();
  for (const t of COMING_SOON) {
    const existing = comingGroups.get(t.themeName) ?? [];
    existing.push(t);
    comingGroups.set(t.themeName, existing);
  }

  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P7 · Mathematics</div>
      <h1>What do you want to revise?</h1>
      <p className="lead">Themes are arranged in the order UNEB teaches them. Start anywhere.</p>

      {Array.from(groups.entries()).map(([theme, topics]) => (
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

      {Array.from(comingGroups.entries()).map(([theme, topics]) => (
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
        {TOPICS.length} topics ready now. {40 - TOPICS.length} more will appear here as content is reviewed and published.
      </div>
    </>
  );
}
