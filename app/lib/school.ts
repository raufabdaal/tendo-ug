// Lightweight school branding layer for multi-school deployments.
//
// How it works today:
// - The path /trainup shows the Trainup-branded landing page.
// - The BrandBar component reads the current path and switches the header text.
// - When we are ready to deploy a fully separate school experience, we can swap
//   this to read NEXT_PUBLIC_SCHOOL_ID from an env var instead of the URL path.

export interface SchoolConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  logoText: string;
  primaryColor: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

const DEFAULT_SCHOOL: SchoolConfig = {
  id: "tendo",
  name: "Tendo",
  shortName: "Tendo",
  tagline: "PLE study, built for Ugandan upper-primary",
  logoText: "Tendo",
  primaryColor: "#C25A3C",
};

export const TRAINUP_SCHOOL: SchoolConfig = {
  id: "trainup",
  name: "Trainup a Child Uganda",
  shortName: "Trainup",
  tagline: "PLE study programme for Trainup a Child Uganda",
  logoText: "Trainup",
  primaryColor: "#1F1B17",
  contact: {
    phone: "+256 753 825 453",
    email: "zinduro@gmail.com",
    website: "tendo-ug.vercel.app",
  },
};

export const SCHOOLS: Record<string, SchoolConfig> = {
  tendo: DEFAULT_SCHOOL,
  trainup: TRAINUP_SCHOOL,
};

export function getSchoolByPath(pathname: string): SchoolConfig {
  if (pathname.startsWith("/trainup")) return TRAINUP_SCHOOL;
  return DEFAULT_SCHOOL;
}

export const DEFAULT = DEFAULT_SCHOOL;
