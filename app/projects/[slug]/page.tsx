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

  return (
    <main className="flex flex-col items-center p-10 gap-8">
      <div className="nes-container with-title bg-white md:w-[50rem]">
        <p className="title">Project File</p>

        <div className="flex flex-col gap-5">
          <h1 className="text-center">{project.title}</h1>

          <div className="nes-container is-dark">
            <p>Status: {project.status}</p>
          </div>

          <div>
            <h3>Overview</h3>
            <p>{project.summary}</p>
          </div>

          <div>
            <h3>Tech / Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="nes-badge">
                  <span className="is-primary">{item}</span>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Features</h3>
            <ul className="nes-list is-disc">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>What I Learned</h3>
            <ul className="nes-list is-circle">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
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
      </div>
    </main>
  );
}