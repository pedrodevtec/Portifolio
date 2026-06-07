export type GitHubProject = {
  title: string;
  url: string;
  category: string;
  description: string;
  technologies: string[];
};

export const githubProjects: GitHubProject[] = [
  {
    title: "Microservices .NET 6",
    url: "https://github.com/PedroDevTec/Microservices-.net6",
    category: "Backend / Architecture",
    description:
      "Projeto de estudo e aplicação de conceitos de microsserviços utilizando .NET 6, com foco em separação de responsabilidades, comunicação entre serviços e arquitetura escalável.",
    technologies: [".NET 6", "C#", "Microservices", "API", "Architecture"],
  },
  {
    title: "APIRPG",
    url: "https://github.com/PedroDevTec/APIRPG",
    category: "Backend / Game Systems",
    description:
      "API desenvolvida em C# para estruturar sistemas relacionados a RPG, explorando regras de negócio, entidades, progressão e organização backend para jogos ou sistemas gamificados.",
    technologies: ["C#", ".NET", "API", "RPG Systems", "Backend"],
  },
  {
    title: "Bar dos Amigos",
    url: "https://github.com/PedroDevTec/bar-dos-amigos",
    category: "Community / Web Platform",
    description: "Projeto web em TypeScript voltado para uma comunidade, eventos, conteúdo e presença digital.",
    technologies: ["TypeScript", "Web", "Community", "Frontend"],
  },
  {
    title: "Gob Backend",
    url: "https://github.com/PedroDevTec/Gob-Backend",
    category: "Backend / TypeScript",
    description:
      "Backend em TypeScript voltado para estudo e desenvolvimento de APIs, organização de rotas, regras de negócio e estruturação de serviços.",
    technologies: ["TypeScript", "Node.js", "API", "Backend"],
  },
];
