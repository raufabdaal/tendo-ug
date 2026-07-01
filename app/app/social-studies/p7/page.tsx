import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { hasTopicDiagram } from "@/components/TopicDiagram";
import { SOCIAL_TOPICS } from "@/lib/social-topics";

const TERM_ORDER = ["Term I", "Term II", "Term III"] as const;

const TERM_META: Record<string, { description: string; start?: string }> = {
  "Term I": {
    description: "Africa's location, physical features, climate and vegetation.",
    start: "Start with map skills",
  },
  "Term II": {
    description: "People, migration, foreign influence, nationalism and post-independence cooperation.",
    start: "History-heavy term",
  },
  "Term III": {
    description: "Economic development and major world organisations.",
    start: "PLE integration term",
  },
};

const TOPIC_TERMS: Record<string, (typeof TERM_ORDER)[number]> = {
  "location-of-africa": "Term I",
  "physical-features-of-africa": "Term I",
  "climate-of-africa": "Term I",
  "vegetation-of-africa": "Term I",
  "people-ethnic-groups-settlement": "Term II",
  "foreign-influence-africa": "Term II",
  "nationalism-road-independence": "Term II",
  "post-independence-africa": "Term II",
  "economic-developments-africa": "Term III",
  "major-world-organisations": "Term III",
};

function sortTermEntries<T>(entries: [string, T][]) {
  return [...entries].sort(([a], [b]) => TERM_ORDER.indexOf(a as (typeof TERM_ORDER)[number]) - TERM_ORDER.indexOf(b as (typeof TERM_ORDER)[number]));
}

export default function SocialStudiesTopicListPage() {
  const groups = new Map<string, typeof SOCIAL_TOPICS>();
  for (const topic of SOCIAL_TOPICS) {
    const term = TOPIC_TERMS[topic.id] ?? "Term I";
    const existing = groups.get(term) ?? [];
    existing.push(topic);
    groups.set(term, existing);
  }

  const orderedGroups = sortTermEntries(Array.from(groups.entries()));
  const visualTopicCount = SOCIAL_TOPICS.filter((topic) => hasTopicDiagram(topic.id)).length;

  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P7 · Social Studies</div>
      <h1>Choose a Social Studies topic to study</h1>
      <p className="lead">
        P7 Social Studies follows the NCDC theme Living Together in Africa. Start with map skills, then move into people, history, development and world organisations.
      </p>

      <div className="maths-overview" aria-label="P7 social studies summary">
        <div className="maths-overview-item">
          <strong>{SOCIAL_TOPICS.length}</strong>
          <span>topics live</span>
        </div>
        <div className="maths-overview-item">
          <strong>{orderedGroups.length}</strong>
          <span>school terms</span>
        </div>
        <div className="maths-overview-item">
          <strong>{visualTopicCount}</strong>
          <span>topics with diagrams</span>
        </div>
      </div>

      <div className="strand-jump" aria-label="Jump to a Social Studies term">
        {orderedGroups.map(([term, topics]) => (
          <a key={`jump-${term}`} href={`#${slugify(term)}`} className="strand-chip">
            {term} <span>{topics.length}</span>
          </a>
        ))}
      </div>

      {orderedGroups.map(([term, topics]) => {
        const meta = TERM_META[term];
        const visualCount = topics.filter((topic) => hasTopicDiagram(topic.id)).length;
        return (
          <section key={term} id={slugify(term)} className="theme-group strand-section">
            <div className="strand-head">
              <div>
                <div className="theme-label">{term} · Living Together in Africa</div>
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
                <Link key={topic.id} href={`/social-studies/p7/${topic.id}`} className="card topic-card">
                  <div className="card-row">
                    <div>
                      <div className="card-title">{topic.title}</div>
                      <div className="card-sub">About {topic.estMinutes} minutes · {topic.quiz.length} questions</div>
                      {hasTopicDiagram(topic.id) && <div className="visual-cue">Includes diagram</div>}
                    </div>
                    <ProgressBadge topicId={`social-${topic.id}`} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <div className="foot">
        {SOCIAL_TOPICS.length} P7 Social Studies topics ready now. First build wave: Living Together in Africa.
      </div>
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
