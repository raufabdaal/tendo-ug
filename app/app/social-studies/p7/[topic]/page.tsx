import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";
import { SOCIAL_TOPICS, getSocialTopic } from "@/lib/social-topics";
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
      <Link href={`/social-studies/p7/${topicId}/practice`} className="btn btn-primary">
        Start practice
      </Link>
    </div>
  );
}

export function generateStaticParams() {
  return SOCIAL_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function SocialStudiesTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getSocialTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/social-studies/p7" className="back">← All Social Studies topics</Link>
      <div className="eyebrow">P7 Social Studies · {topic.themeName}</div>
      <h1>{topic.title}</h1>
      <div className="callout">{topic.note.intro}</div>

      <TopicTabs topic={topic} />

      <Quiz questions={topic.quiz} topicId={`social-${topic.id}`} topicTitle={topic.title} />

      <PracticeCTA topicId={topic.id} />
    </>
  );
}
