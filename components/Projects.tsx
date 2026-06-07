import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos corporativos e laboratórios técnicos de interação."
          description="Os projetos abaixo mostram atuação em produto interno, arquitetura, Microsoft 365, automação e desenvolvimento de sistemas interativos com abordagem profissional."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
