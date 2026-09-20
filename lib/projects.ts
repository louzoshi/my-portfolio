/* Shared project data — used by the home sections and the /projects/[slug]
   case-study pages. Translatable copy lives in lib/dictionaries.ts:
   the problem/build/outcome lines under `problems.items`, the client blurb
   under `clientWork`, and the case pages under `projects.detail`. */

export type ProjectKey = "wilbor" | "trustFinance" | "domainInspector";

export type Project = {
  slug: string;
  /** Which home section the project belongs to. */
  kind: "problem" | "client";
  key: ProjectKey; // dictionary key
  title: string;
  tag: string; // short category chip (not translated)
  image: string; // card + case hero
  gallery?: { src: string; alt: string }[];
  liveHref?: string;
  repoHref?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "wilbor",
    kind: "client",
    key: "wilbor",
    title: "Wilbor Studio",
    tag: "client work",
    image: "/imgs/wilbor-studio.png",
    gallery: [
      { src: "/imgs/wilbor-studio.png", alt: "Wilbor Studio — public portfolio grid" },
      { src: "/imgs/wilbor-dashboard.png", alt: "Admin dashboard — authenticated login" },
    ],
    liveHref: "https://www.wilbor.studio/projects",
    repoHref: "https://github.com/Wilbor-Studio",
    stack: ["Next.js 15", "React 19", "TypeScript", "Vercel"],
  },
  {
    slug: "trust-finance",
    kind: "problem",
    key: "trustFinance",
    title: "Trust Finance",
    tag: "fullstack .NET",
    image: "/imgs/trust-finance-og.png",
    repoHref: "https://github.com/mtlouzada/Trust-Finance",
    stack: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework",
      "Docker",
      "GitHub Actions",
      "React",
    ],
  },
  {
    slug: "domain-inspector",
    kind: "problem",
    key: "domainInspector",
    title: "Domain Inspector",
    tag: "tech challenge",
    image: "/imgs/domain-inspector-og.png",
    repoHref: "https://github.com/mtlouzada/domain-inspector",
    stack: ["C#", "ASP.NET Core", "MySQL", "Entity Framework", "Webpack"],
  },
];

/** Things I built to solve a problem of my own. */
export const problemProjects = projects.filter((p) => p.kind === "problem");

/** Paid work for a client, kept apart so it reads as a different category. */
export const clientProjects = projects.filter((p) => p.kind === "client");
