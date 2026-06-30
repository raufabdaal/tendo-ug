import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import BrandBar from "@/components/BrandBar";

export const metadata: Metadata = {
  title: "Tendo — PLE study",
  description:
    "A focused, school-sold platform for Ugandan upper-primary PLE study. Topic notes, auto-graded quizzes, and past papers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BrandBar />
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
