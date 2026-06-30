"use client";

import { usePathname } from "next/navigation";
import { getSchoolByPath } from "@/lib/school";

export default function BrandBar() {
  const pathname = usePathname() ?? "/";
  const school = getSchoolByPath(pathname);
  const isBranded = school.id !== "tendo";

  if (!isBranded) return null;

  return (
    <div className="brand-bar" style={{ background: school.primaryColor }}>
      <div className="brand-bar-inner">
        <span className="brand-bar-logo">{school.logoText}</span>
        <span className="brand-bar-tagline">{school.tagline}</span>
      </div>
    </div>
  );
}
