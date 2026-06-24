import Link from "next/link";
import { notFound } from "next/navigation";
import { TOPICS, getTopic } from "@/lib/topics";
import Quiz from "@/components/Quiz";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.id }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) notFound();

  return (
    <>
      <Link href="/math/p7" className="back">← All topics</Link>
      <div className="eyebrow">{topic.themeName}</div>
      <h1>{topic.title}</h1>
      <div className="callout">{topic.note.intro}</div>

      <div className="note">
        <h2>What you need to know</h2>
        {topic.note.whatYouNeedToKnow.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h2>Worked example</h2>
        <div className="worked">
          <div><strong>Problem:</strong> {topic.note.worked.problem}</div>
          {topic.note.worked.steps.map((s, i) => (
            <div key={i} className="step"><strong>{s.split(".")[0]}.</strong>{s.split(".").slice(1).join(".")}</div>
          ))}
          <div className="answer">{topic.note.worked.answer}</div>
        </div>

        <h2>Quick recap</h2>
        <ul>
          {topic.note.recap.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} />
    </>
  );
}
