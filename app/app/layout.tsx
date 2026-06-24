import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tendo — PLE Mathematics revision",
  description:
    "A focused, school-sold platform for Ugandan upper-primary PLE Mathematics revision. Topic notes, auto-graded quizzes, and past papers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/" className="brand">
            <span className="brand-dot" />
            Tendo
          </Link>
          <div className="nav-meta">P7 Mathematics</div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
