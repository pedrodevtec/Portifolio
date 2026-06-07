import { githubProjects } from "@/data/github-projects";
import { GitHubProjectCard } from "./GitHubProjectCard";
import { SectionTitle } from "./SectionTitle";

export function GitHubProjects() {
  return (
    <section id="github-projects" className="border-y border-borderSubtle bg-surface/25 py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="GitHub"
          title="Projetos no GitHub"
          description="Seleção de repositórios que complementam os projetos principais, com foco em backend, arquitetura, sistemas para jogos e plataformas web."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {githubProjects.map((project) => (
            <GitHubProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
