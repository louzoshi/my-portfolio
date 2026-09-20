/* Open-source contributions shown on the home page. Non-translatable data
   lives here; the copy (summary, bullet points, the experience block) is in
   lib/dictionaries.ts under `opensource`. */

export type ContributionKey = "skatehive" | "gnars" | "builderdao";

export type Contribution = {
  key: ContributionKey;
  title: string;
  /** Short category chip — not translated. */
  tag: string;
  /** The project itself. */
  href: string;
  /** Where the merged work lives. */
  repoHref: string;
  stack: string[];
  prs: { total: number; merged: number };
};

export const contributions: Contribution[] = [
  {
    key: "skatehive",
    title: "SkateHive",
    tag: "web3 · community",
    href: "https://skatehive.app/",
    repoHref: "https://github.com/SkateHive/skatehive3.0/pulls?q=author%3Amtlouzada",
    stack: ["React", "TypeScript", "Next.js", "wagmi", "viem", "Hive"],
    prs: { total: 27, merged: 12 },
  },
  {
    key: "gnars",
    title: "Gnars DAO",
    tag: "onchain governance",
    href: "https://gnars.com",
    repoHref: "https://github.com/r4topunk/gnars-website/pulls?q=author%3Amtlouzada",
    stack: ["Next.js", "wagmi", "viem", "Nouns", "IPFS", "three.js"],
    prs: { total: 13, merged: 10 },
  },
  {
    key: "builderdao",
    title: "Nouns Builder",
    tag: "DAO tooling",
    href: "https://nouns.build",
    repoHref: "https://github.com/sktbrd/builder-deploy-direct/pulls?q=author%3Amtlouzada",
    stack: ["Next.js", "TypeScript", "OAuth", "Vercel API"],
    prs: { total: 1, merged: 1 },
  },
];

/** Where the whole open-source history lives. */
export const githubHref = "https://github.com/mtlouzada";
