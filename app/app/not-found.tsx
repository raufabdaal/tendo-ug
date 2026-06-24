import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="eyebrow">404</div>
      <h1>That page does not exist.</h1>
      <p className="lead">The topic you were looking for has either moved or is part of Phase 2.</p>
      <Link href="/" className="btn btn-primary">Back to home</Link>
    </>
  );
}
