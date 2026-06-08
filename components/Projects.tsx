import { projectGroupLabels, projects, type ProjectGroup } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

const groupOrder: ProjectGroup[] = ["professional", "technical", "gameLab"];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projetos"
          title="Uma jornada entre sistemas corporativos, arquitetura, automação e laboratórios interativos."
          description="Esta seleção organiza os projetos por contexto profissional: primeiro plataformas e integrações corporativas, depois estudos técnicos em GitHub e, por fim, laboratórios de jogos usados para aprofundar sistemas interativos."
        />

        <p className="mb-10 max-w-3xl rounded-md border border-borderSubtle bg-surface/45 px-4 py-3 text-sm leading-6 text-textMuted">
          Algumas imagens e descrições foram adaptadas para preservar informações internas e dados sensíveis.
        </p>

        <div className="space-y-14">
          {groupOrder.map((group) => {
            const groupProjects = projects.filter((project) => project.group === group);
            const label = projectGroupLabels[group];

            return (
              <section key={group} aria-labelledby={`project-group-${group}`}>
                <div className="mb-6 border-l-2 border-warm pl-4">
                  <h3 id={`project-group-${group}`} className="text-2xl font-semibold text-textMain">
                    {label.title}
                  </h3>
                  <p className="mt-2 max-w-3xl leading-7 text-textMuted">{label.description}</p>
                </div>
                <div className="grid gap-6">
                  {groupProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
