import Link from "next/link";
import WorksheetGenerator from "@/components/WorksheetGenerator";
import { totalBankQuestions, listBankTopics } from "@/lib/question-bank";

export const metadata = {
  title: "Worksheet generator — Tendo",
  description: "Generate a P7 Mathematics worksheet from the question bank.",
};

export default function WorksheetPage() {
  const total = totalBankQuestions();
  const topicCount = listBankTopics().length;

  return (
    <>
      <Link href="/teacher" className="back no-print">← Teacher dashboard</Link>
      <div className="eyebrow no-print">For teachers</div>
      <h1 className="no-print">Worksheet generator</h1>
      <p className="lead no-print">
        Mix and match topics, pick a length, generate. Print for class or copy to WhatsApp.
        Pool: <strong>{total} questions</strong> across <strong>{topicCount} topics</strong>.
        Re-shuffle for a fresh worksheet every time.
      </p>

      <WorksheetGenerator />
    </>
  );
}
