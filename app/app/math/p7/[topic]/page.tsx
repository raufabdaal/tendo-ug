import Link from "next/link";
import { notFound } from "next/navigation";
import { TOPICS, getTopic } from "@/lib/topics";
import Quiz from "@/components/Quiz";
import TopicTabs from "@/components/TopicTabs";

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

      <TopicTabs topic={topic} />

      <Quiz questions={topic.quiz} topicId={topic.id} topicTitle={topic.title} />
    </>
  );
}
