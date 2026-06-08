import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { caseStudyProjects, getProjectBySlug } from "@/data/projects";
import type { Project } from "@/data/projects";

type ProjectCaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function hasPublicImage(src: string) {
  if (!src) {
    return false;
  }

  const imagePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(imagePath);
}

function CaseStudyImage({ project }: { project: Project }) {
  const imageExists = hasPublicImage(project.image);

  if (!imageExists) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center rounded-lg border border-borderSubtle bg-surface/65 p-8 shadow-subtle">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primarySoft">{project.category}</p>
          <p className="mt-4 text-2xl font-semibold text-textMain">{project.title}</p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-primary to-warm" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-borderSubtle bg-surface shadow-subtle">
      <Image src={project.image} alt={project.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 1100px, 100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-background/35 to-transparent" />
    </div>
  );
}

function StoryBlock({ title, text }: { title: string; text: string }) {
  return (
    <article className="surface rounded-lg p-6">
      <h2 className="text-xl font-semibold text-textMain">{title}</h2>
      <p className="mt-4 leading-8 text-textMuted">{text}</p>
    </article>
  );
}

function TechnologiesBlock({ project, title = "Tecnologias e destaques" }: { project: Project; title?: string }) {
  return (
    <article className="surface rounded-lg p-6">
      <h2 className="text-xl font-semibold text-textMain">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="badge">
            {technology}
          </span>
        ))}
      </div>
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-textMuted sm:text-base">
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

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudyUrl) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title} | Estudo de caso`,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudyUrl) {
    notFound();
  }

  const isStudioCaseStudy = project.slug === "estudio-abrasel";

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-borderSubtle py-8">
        <div className="section-shell">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-borderSubtle bg-surface/70 px-4 py-2.5 text-sm font-semibold text-textMain transition hover:border-warm/55 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Voltar ao portfólio
          </Link>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-borderSubtle bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-warm">
                  {project.category}
                </span>
                <span className="rounded-full border border-borderSubtle bg-primary/20 px-3 py-1 text-xs font-semibold text-primarySoft">
                  {project.status}
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-textMain sm:text-5xl">{project.title}</h1>
              <p className="mt-6 text-lg leading-8 text-textMuted">{project.shortDescription}</p>

              <div className="mt-8 flex flex-wrap gap-3">
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
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-textMain transition hover:bg-primarySoft hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft"
                  >
                    Ver projeto
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>

            <CaseStudyImage project={project} />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="section-shell">
          {isStudioCaseStudy ? (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <StoryBlock title="Visão geral" text={project.overview ?? project.shortDescription} />
                <StoryBlock title="Contexto" text={project.context} />
                <StoryBlock title="Problema" text={project.problem} />
                <StoryBlock title="Meu papel" text={project.role} />
                <StoryBlock title="Evolução da plataforma" text={project.platformEvolution ?? project.solution} />
                <StoryBlock title="Integrações e automações" text={project.integrationsAndAutomation ?? project.solution} />
                <StoryBlock title="Visão Estúdio 3.0" text={project.proactiveVision ?? project.solution} />
                <StoryBlock title="Impacto" text={project.impact} />
              </div>

              <div className="mt-5">
                <TechnologiesBlock project={project} title="Tecnologias" />
              </div>
            </>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <StoryBlock title="Contexto" text={project.context} />
                <StoryBlock title="Problema" text={project.problem} />
                <StoryBlock title="Solução" text={project.solution} />
                <StoryBlock title="Meu papel" text={project.role} />
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <StoryBlock title="Impacto" text={project.impact} />
                <TechnologiesBlock project={project} />
              </div>
            </>
          )}

          {project.isCorporate ? (
            <p className="mt-5 rounded-md border border-borderSubtle bg-surface/45 px-4 py-3 text-sm leading-6 text-textMuted">
              Este estudo de caso apresenta uma visão adaptada do projeto para preservar dados internos, informações estratégicas e detalhes sensíveis.
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
