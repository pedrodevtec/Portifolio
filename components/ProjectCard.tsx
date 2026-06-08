import fs from "fs";
import path from "path";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

function hasPublicImage(src: string) {
  if (!src) {
    return false;
  }

  const imagePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(imagePath);
}

function ProjectImage({ project }: ProjectCardProps) {
  const imageExists = hasPublicImage(project.image);

  if (!imageExists) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center rounded-md border border-borderSubtle bg-background/45 p-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primarySoft">{project.category}</p>
          <p className="mt-3 text-lg font-semibold text-textMain">{project.title}</p>
          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-primary to-warm" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-borderSubtle bg-background/45">
      <Image src={project.image} alt={project.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 44vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleHighlights = project.highlights.slice(0, 4);

  return (
    <article className="surface grid h-full overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-warm/45 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="p-4 sm:p-5">
        <ProjectImage project={project} />
      </div>

      <div className="flex flex-col p-6 pt-2 sm:p-7 lg:pl-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-borderSubtle bg-background/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-warm">
            {project.category}
          </span>
          <span className="rounded-full border border-borderSubtle bg-primary/20 px-3 py-1 text-xs font-semibold text-primarySoft">
            {project.status}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-textMain">{project.title}</h3>
        <p className="mt-4 leading-7 text-textMuted">{project.shortDescription}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="badge">
              {technology}
            </span>
          ))}
        </div>

        <ul className="mt-6 grid gap-2 text-sm leading-6 text-textMuted">
          {visibleHighlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primarySoft" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-textMain transition hover:bg-primarySoft hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft"
            >
              Ver estudo de caso
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-borderSubtle bg-surface/70 px-4 py-2.5 text-sm font-semibold text-textMain transition hover:border-warm/55 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft"
            >
              <Github size={17} aria-hidden="true" />
              Ver no GitHub
            </a>
          ) : null}
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-borderSubtle bg-surface/70 px-4 py-2.5 text-sm font-semibold text-textMain transition hover:border-warm/55 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft"
            >
              Ver projeto
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
