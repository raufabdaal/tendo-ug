import Link from "next/link";
import { notFound } from "next/navigation";
import PracticeRunner from "@/components/PracticeRunner";
import { getBank } from "@/lib/question-bank";
import { SCIENCE_TOPICS, getScienceTopic } from "@/lib/science-topics";

export function generateStaticParams() {
  return SCIENCE_TOPICS.map((topic) => ({ topic: topic.id }));
}

export default async function SciencePracticePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getScienceTopic(topicId);
  if (!topic) notFound();

  const bank = getBank(topicId);

  return (
    <>
      <Link href={`/science/p7/${topic.id}`} className="back">← {topic.title}</Link>
      <div className="eyebrow">P7 Integrated Science · Endless practice</div>
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
        <PracticeRunner topicId={topic.id} topicTitle={topic.title} backHref={`/science/p7/${topic.id}`} />
      )}
    </>
  );
}
