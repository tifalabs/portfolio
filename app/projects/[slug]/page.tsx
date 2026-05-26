import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../project-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Tifa Labs",
    };
  }

  return {
    title: `${project.title} | Tifa Labs`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const isPrivate = project.status.toLowerCase().includes("private");

  return (
    <main className="flex flex-col items-center p-6 md:p-10 gap-8">
      <section className="nes-container with-title bg-white w-full max-w-5xl">
        <p className="title">Tifa Labs Archive</p>

        <div className="flex flex-col gap-8">
          <div className="nes-container is-dark">
            <p className="text-xs">PROJECT FILE // {project.slug}</p>
            <h1 className="text-center mt-4">{project.title}</h1>
            <p className="text-center text-xs mt-4">{project.summary}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="nes-container with-title bg-white md:col-span-2">
              <p className="title">Overview</p>
              <p>{project.summary}</p>
            </div>

            <div
              className={`nes-container with-title ${
                isPrivate ? "is-dark" : "bg-white"
              }`}
            >
              <p className="title">Status</p>
              <p>{project.status}</p>
              {isPrivate && (
                <p className="text-xs mt-3">
                  Repo is private, so this page acts as the public case study.
                </p>
              )}
            </div>
          </div>

          <div className="nes-container with-title bg-white">
            <p className="title">Tech / Tags</p>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((item, index) => (
                <span key={item} className="nes-badge">
                  <span
                    className={
                      index % 3 === 0
                        ? "is-primary"
                        : index % 3 === 1
                        ? "is-success"
                        : "is-warning"
                    }
                  >
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="nes-container with-title bg-white">
              <p className="title">Features</p>
              <ul className="nes-list is-disc">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="nes-container with-title bg-white">
              <p className="title">What I Learned</p>
              <ul className="nes-list is-circle">
                {project.learned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="nes-container with-title bg-blue-200">
            <p className="title">Archive Note</p>
            <p>
              This page documents the project even if the repo is private,
              unfinished, or still evolving. The goal is to show the idea,
              structure, and learning progress behind the build.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="nes-btn">
              Back home
            </Link>

            <Link
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="nes-btn is-primary"
            >
              View repo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}