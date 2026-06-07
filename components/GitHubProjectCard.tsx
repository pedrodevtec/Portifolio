import { ArrowUpRight, Github } from "lucide-react";
import type { GitHubProject } from "@/data/github-projects";

type GitHubProjectCardProps = {
  project: GitHubProject;
};

export function GitHubProjectCard({ project }: GitHubProjectCardProps) {
  return (
    <article className="surface flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-warm/45">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-warm">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-textMain">{project.title}</h3>
        </div>
        <Github className="shrink-0 text-primarySoft" size={24} aria-hidden="true" />
      </div>

      <p className="mt-5 flex-1 leading-7 text-textMuted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="badge">
            {technology}
          </span>
        ))}
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex w-fit items-center gap-2 rounded-md border border-borderSubtle bg-surface/70 px-4 py-2.5 text-sm font-semibold text-textMain transition hover:border-warm/55 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft"
      >
        Ver no GitHub
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </article>
  );
}
