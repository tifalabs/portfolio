import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "security-learning-lab",
    href: "https://github.com/tifalabs/security-learning-lab",
    desc: "Cybersecurity learning lab for notes, safe practice, and security concepts.",
    status: "Private / in progress",
  },
  {
    title: "cybpick",
    href: "https://github.com/tifalabs/cybpick",
    desc: "Cyber-themed experiment from the Tifa Labs archive.",
    status: "Private / in progress",
  },
  {
    title: "android-ai-server",
    href: "https://github.com/tifalabs/android-ai-server",
    desc: "Android + AI server experiment for local/networked AI workflows.",
    status: "Private / in progress",
  },
  {
    title: "portfolio",
    href: "https://github.com/tifalabs/portfolio",
    desc: "This retro 8-bit portfolio built with Next.js, Tailwind, and NES.css.",
    status: "Public / active",
  },
  {
    title: "node-top",
    href: "https://github.com/tifalabs/node-top",
    desc: "Node.js experiment from the Tifa Labs repo collection.",
    status: "Private / in progress",
  },
  {
    title: "aegis-core",
    href: "https://github.com/tifalabs/aegis-core",
    desc: "Core experimental project with a security-inspired structure.",
    status: "Private / in progress",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 gap-10">
      <h1 className="text-center">Tifa Labs: retro code archive</h1>

      <div className="nes-container with-title is-centered bg-blue-200 md:w-[45rem]">
        <p className="title">SYSTEM ONLINE</p>
        <p>
          I build experimental interfaces, cyber-themed tools, game prototypes,
          and chaotic little projects while learning code, security, and systems.
        </p>
      </div>

      <div className="nes-container is-rounded bg-white md:w-[45rem]">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            width={100}
            height={100}
            src={"/axe-and-shield.webp"}
            alt="Pixel shield"
          />

          <p className="text-center">Current skills unlocked</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {["Python", "C++", "JavaScript", "HTML/CSS", "Next.js", "Cyber"].map(
              (skill, index) => (
                <span key={skill} className="nes-badge">
                  <span
                    className={
                      index % 3 === 0
                        ? "is-dark"
                        : index % 3 === 1
                        ? "is-primary"
                        : "is-success"
                    }
                  >
                    {skill}
                  </span>
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="nes-container with-title bg-white md:w-[45rem]">
        <p className="title">Projects</p>

        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="nes-container is-rounded hover:bg-gray-100">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p>Status: {project.status}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}