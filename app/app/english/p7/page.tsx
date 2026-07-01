import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { hasTopicDiagram } from "@/components/TopicDiagram";
import { ENGLISH_TOPICS } from "@/lib/english-topics";

const TERM_ORDER = ["Term I", "Term II", "Term III"] as const;

const TERM_META: Record<string, { description: string; start?: string }> = {
  "Term I": {
    description: "Holiday language, letter writing and examination preparation.",
    start: "Start with writing foundations",
  },
  "Term II": {
    description: "Electronic media, rights, responsibilities and freedom.",
    start: "Language for modern life",
  },
  "Term III": {
    description: "Environmental protection and ceremonies.",
    start: "PLE writing and vocabulary themes",
  },
};

export default function EnglishTopicListPage() {
  const groups = new Map<string, typeof ENGLISH_TOPICS>();
  for (const topic of ENGLISH_TOPICS) {
    const existing = groups.get(topic.themeName) ?? [];
    existing.push(topic);
    groups.set(topic.themeName, existing);
  }

  const orderedGroups = Array.from(groups.entries()).sort(([a], [b]) => TERM_ORDER.indexOf(a as (typeof TERM_ORDER)[number]) - TERM_ORDER.indexOf(b as (typeof TERM_ORDER)[number]));
  const templateTopicCount = ENGLISH_TOPICS.filter((topic) => hasTopicDiagram(topic.id)).length;

  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P7 · English Language</div>
      <h1>Choose an English topic to study</h1>
      <p className="lead">
        P7 English is organised by term themes. Practise vocabulary, grammar, comprehension, writing formats and respectful communication for PLE.
      </p>

      <div className="maths-overview" aria-label="P7 English summary">
        <div className="maths-overview-item">
          <strong>{ENGLISH_TOPICS.length}</strong>
          <span>topics live</span>
        </div>
        <div className="maths-overview-item">
          <strong>{orderedGroups.length}</strong>
          <span>school terms</span>
        </div>
        <div className="maths-overview-item">
          <strong>{templateTopicCount}</strong>
          <span>templates / diagrams</span>
        </div>
      </div>

      <div className="strand-jump" aria-label="Jump to an English term">
        {orderedGroups.map(([term, topics]) => (
          <a key={`jump-${term}`} href={`#${slugify(term)}`} className="strand-chip">
            {term} <span>{topics.length}</span>
          </a>
        ))}
      </div>

      {orderedGroups.map(([term, topics]) => {
        const meta = TERM_META[term];
        return (
          <section key={term} id={slugify(term)} className="theme-group strand-section">
            <div className="strand-head">
              <div>
                <div className="theme-label">{term} · English Language</div>
                {meta?.description && <p className="strand-desc">{meta.description}</p>}
              </div>
              <div className="strand-meta">
                <span>{topics.length} {topics.length === 1 ? "topic" : "topics"}</span>
                <span>{topics.filter((topic) => hasTopicDiagram(topic.id)).length} templates</span>
              </div>
            </div>
            {meta?.start && <div className="strand-start">{meta.start}</div>}

            <div className="topic-card-grid">
              {topics.map((topic) => (
                <Link key={topic.id} href={`/english/p7/${topic.id}`} className="card topic-card">
                  <div className="card-row">
                    <div>
                      <div className="card-title">{topic.title}</div>
                      <div className="card-sub">About {topic.estMinutes} minutes · {topic.quiz.length} questions</div>
                      {hasTopicDiagram(topic.id) && <div className="card-sub">Includes writing template</div>}
                    </div>
                    <ProgressBadge topicId={`english-${topic.id}`} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <div className="foot">
        {ENGLISH_TOPICS.length} P7 English topics ready now. NCDC Set One outline covered with writing templates and practice.
      </div>
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
