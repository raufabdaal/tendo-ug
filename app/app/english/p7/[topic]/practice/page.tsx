import Link from "next/link";
import { notFound } from "next/navigation";
import PracticeRunner from "@/components/PracticeRunner";
import { getBank } from "@/lib/question-bank";
import { ENGLISH_TOPICS, getEnglishTopic } from "@/lib/english-topics";

export function generateStaticParams() {
  return ENGLISH_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function EnglishPracticePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getEnglishTopic(topicId);
  if (!topic) notFound();

  const bank = getBank(topicId);

  return (
    <>
      <Link href={`/english/p7/${topic.id}`} className="back">← {topic.title}</Link>
      <div className="eyebrow">P7 English · Endless practice</div>
      <h1>Practice: {topic.title}</h1>
      <p className="lead">
        Different question every time. Track your streak. Stop whenever you like.
        {bank ? ` Drawing from ${bank.questions.length} questions.` : ""}
      </p>

      {!bank ? (
        <div className="dash-empty">
          <strong>No practice bank for this topic yet.</strong>
          The standard quiz on the topic page still works.
        </div>
      ) : (
        <PracticeRunner topicId={topic.id} topicTitle={topic.title} backHref={`/english/p7/${topic.id}`} />
      )}
    </>
  );
}
