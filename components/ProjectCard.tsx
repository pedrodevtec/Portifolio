import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-warm/45">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-warm">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-textMain">{project.title}</h3>
        </div>
        <ArrowUpRight className="shrink-0 text-primarySoft" size={22} aria-hidden="true" />
      </div>

      <p className="mt-5 leading-7 text-textMuted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="badge">
            {technology}
          </span>
        ))}
      </div>

      <ul className="mt-6 grid gap-2 text-sm leading-6 text-textMuted">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primarySoft" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
