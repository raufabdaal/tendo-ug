import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { hasTopicDiagram } from "@/components/TopicDiagram";
import { SCIENCE_TOPICS } from "@/lib/science-topics";

const THEME_ORDER = [
  "Human Body",
  "Matter and Energy",
  "The Environment",
  "The Community, Population and Family Life",
] as const;

const THEME_META: Record<string, { description: string; start?: string }> = {
  "Human Body": {
    description: "Body systems, health habits, organs and care of the human body.",
    start: "Start with body systems",
  },
  "Matter and Energy": {
    description: "Electricity, magnetism, light, machines, friction and practical science.",
    start: "High-value PLE strand",
  },
  "The Environment": {
    description: "Energy resources, interdependence, agroforestry and care for nature.",
  },
  "The Community, Population and Family Life": {
    description: "Community health, social problems, health surveys and health clubs.",
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

export default function ScienceTopicListPage() {
  const groups = new Map<string, typeof SCIENCE_TOPICS>();
  for (const topic of SCIENCE_TOPICS) {
    const existing = groups.get(topic.themeName) ?? [];
    existing.push(topic);
    groups.set(topic.themeName, existing);
  }

  const orderedGroups = sortThemeEntries(Array.from(groups.entries()));
  const visualTopicCount = SCIENCE_TOPICS.filter((topic) => hasTopicDiagram(topic.id)).length;

  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P7 · Integrated Science</div>
      <h1>Choose a science strand to study</h1>
      <p className="lead">
        P7 Integrated Science is organised around the body, energy, the environment and community health. Start with any strand or revise the topic your class is covering.
      </p>

      <div className="maths-overview" aria-label="P7 integrated science summary">
        <div className="maths-overview-item">
          <strong>{SCIENCE_TOPICS.length}</strong>
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

      <div className="strand-jump" aria-label="Jump to a science strand">
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
              {topics.map((topic) => (
                <Link key={topic.id} href={`/science/p7/${topic.id}`} className="card topic-card">
                  <div className="card-row">
                    <div>
                      <div className="card-title">{topic.title}</div>
                      <div className="card-sub">About {topic.estMinutes} minutes · {topic.quiz.length} questions</div>
                      {hasTopicDiagram(topic.id) && <div className="visual-cue">Includes diagram</div>}
                    </div>
                    <ProgressBadge topicId={`science-${topic.id}`} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <div className="foot">
        {SCIENCE_TOPICS.length} P7 Integrated Science topics ready now. This is the first science build wave.
      </div>
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
