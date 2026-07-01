import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { ENGLISH_TOPICS, getEnglishTopic } from "@/lib/english-topics";
import { getBank } from "@/lib/question-bank";

function PracticeCTA({ topicId }: { topicId: string }) {
  const bank = getBank(topicId);
  if (!bank) return null;
  return (
    <div className="practice-cta">
      <div className="practice-cta-text">
        <div className="practice-cta-title">Want more practice?</div>
        <div className="practice-cta-sub">
          Endless practice mode draws from a bank of {bank.questions.length} questions for this topic.
          Different questions every time.
        </div>
      </div>
      <Link href={`/english/p7/${topicId}/practice`} className="btn btn-primary">
        Start practice
      </Link>
    </div>
  );
}

export function generateStaticParams() {
  return ENGLISH_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function EnglishTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getEnglishTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/english/p7" className="back">← All English topics</Link>
      <div className="eyebrow">P7 English · {topic.themeName}</div>
      <h1>{topic.title}</h1>
      <div className="callout">{topic.note.intro}</div>

      <TopicTabs topic={topic} />

      <Quiz questions={topic.quiz} topicId={`english-${topic.id}`} topicTitle={topic.title} />

      <PracticeCTA topicId={topic.id} />
    </>
  );
}
