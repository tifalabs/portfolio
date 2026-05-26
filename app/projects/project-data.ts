export const projects = [
  {
    slug: "security-learning-lab",
    title: "security-learning-lab",
    repo: "https://github.com/tifalabs/security-learning-lab",
    status: "Private / in progress",
    stack: ["Cybersecurity", "Notes", "Labs", "Research"],
    summary:
      "A cybersecurity learning lab for safe practice, notes, concepts, and experiments.",
    features: [
      "Organized security notes",
      "Safe practice structure",
      "Concept breakdowns",
      "Learning logs",
    ],
    learned: [
      "How to document security concepts clearly",
      "How to structure a learning repo",
      "How to keep private work portfolio-friendly",
    ],
  },
  {
    slug: "cybpick",
    title: "cybpick",
    repo: "https://github.com/tifalabs/cybpick",
    status: "Private / in progress",
    stack: ["Cyber", "Tools", "Experiment"],
    summary: "A cyber-themed experimental tool from the Tifa Labs archive.",
    features: ["Tool concept", "Cyber UI direction", "Experimental workflow"],
    learned: [
      "How to turn a rough idea into a project",
      "How to name and organize tool experiments",
    ],
  },
  {
    slug: "android-ai-server",
    title: "android-ai-server",
    repo: "https://github.com/tifalabs/android-ai-server",
    status: "Private / in progress",
    stack: ["Android", "AI", "Server", "Networking"],
    summary:
      "An Android + AI server experiment for local or networked AI workflows.",
    features: [
      "Server-side experiment",
      "Android connection idea",
      "AI workflow testing",
    ],
    learned: [
      "How apps and servers can communicate",
      "How AI tools can connect with local systems",
    ],
  },
  {
    slug: "portfolio",
    title: "portfolio",
    repo: "https://github.com/tifalabs/portfolio",
    status: "Public / active",
    stack: ["Next.js", "TypeScript", "Tailwind", "NES.css", "Netlify"],
    summary:
      "This retro 8-bit portfolio built to showcase Tifa Labs projects and experiments.",
    features: [
      "Retro pixel UI",
      "Project archive modal",
      "Live deployment",
      "Case study pages",
    ],
    learned: [
      "How to customize a Next.js template",
      "How GitHub and Netlify deployment works",
      "How to ship a live portfolio",
    ],
  },
  {
    slug: "node-top",
    title: "node-top",
    repo: "https://github.com/tifalabs/node-top",
    status: "Private / in progress",
    stack: ["Node.js", "JavaScript", "CLI"],
    summary: "A Node.js experiment from the Tifa Labs repo collection.",
    features: ["Node.js structure", "JavaScript practice", "CLI-style idea"],
    learned: [
      "How Node projects are organized",
      "How JavaScript can be used outside the browser",
    ],
  },
  {
    slug: "aegis-core",
    title: "aegis-core",
    repo: "https://github.com/tifalabs/aegis-core",
    status: "Private / in progress",
    stack: ["Security", "Core Systems", "Experiment"],
    summary:
      "A core experimental project with a security-inspired name and structure.",
    features: [
      "Security-inspired architecture",
      "Core module planning",
      "Experimental structure",
    ],
    learned: [
      "How to plan a project core",
      "How to design around a security theme",
    ],
  },
];

export type Project = (typeof projects)[number];