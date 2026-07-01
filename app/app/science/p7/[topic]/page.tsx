import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { SCIENCE_TOPICS, getScienceTopic } from "@/lib/science-topics";
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
      <Link href={`/science/p7/${topicId}/practice`} className="btn btn-primary">
        Start practice
      </Link>
    </div>
  );
}

export function generateStaticParams() {
  return SCIENCE_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function ScienceTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getScienceTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/science/p7" className="back">← All science topics</Link>
      <div className="eyebrow">P7 Integrated Science · {topic.themeName}</div>
      <h1>{topic.title}</h1>
      <div className="callout">{topic.note.intro}</div>

      <TopicTabs topic={topic} />

      <Quiz questions={topic.quiz} topicId={`science-${topic.id}`} topicTitle={topic.title} />

      <PracticeCTA topicId={topic.id} />
    </>
  );
}
