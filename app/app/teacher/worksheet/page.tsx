import Link from "next/link";
import WorksheetGenerator from "@/components/WorksheetGenerator";
import { totalBankQuestions, listBankTopics } from "@/lib/question-bank";

export const metadata = {
  title: "Worksheet generator — Tendo",
  description: "Generate P7 Mathematics, English, Integrated Science and Social Studies worksheets from the question bank.",
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
        Choose Maths only, English only, Science only, Social Studies only, or a mixed worksheet. Add class details, marks, timing and a separate answer key, then print or copy to WhatsApp.
        Question-bank pool: <strong>{total} questions</strong> across <strong>{topicCount} bank topics</strong>.
        Re-shuffle for a fresh worksheet every time.
      </p>

      <WorksheetGenerator />
    </>
  );
}
