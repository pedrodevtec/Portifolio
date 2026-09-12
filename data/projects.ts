export type ProjectGroup = "professional" | "technical" | "gameLab";

export type Project = {
  slug: string;
  group: ProjectGroup;
  title: string;
  category: string;
  shortDescription: string;
  context: string;
  problem: string;
  solution: string;
  role: string;
  impact: string;
  technologies: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  status: string;
  isCorporate?: boolean;
  overview?: string;
  platformEvolution?: string;
  integrationsAndAutomation?: string;
  proactiveVision?: string;
};

export const projectGroupLabels: Record<ProjectGroup, { title: string; description: string }> = {
  professional: {
    title: "Projetos profissionais",
    description:
      "Projetos construídos em contexto corporativo, com foco em sistemas internos, arquitetura, cloud, automação, Microsoft 365 e evolução de produto para usuários reais.",
  },
  technical: {
    title: "Projetos técnicos e GitHub",
    description:
      "Repositórios selecionados que mostram estudos de backend, APIs, arquitetura, organização de código e sistemas com regras de domínio.",
  },
  gameLab: {
    title: "Jogos e IA aplicada",
    description:
      "Projeto autoral de RPG com IA e protótipos para explorar gameplay, progressão, persistência e interfaces. Os estágios de cada projeto estão indicados abaixo.",
  },
};

export const projects: Project[] = [
  {
    slug: "guardian-of-bravantus",
    group: "gameLab",
    title: "Guardian of Bravantus — RPG com IA aplicada",
    category: "RPG / IA aplicada / Full-stack",
    status: "MVP em evolução / Playtest",
    shortDescription: "Plataforma web autoral de RPG com criação assistida de personagens, retratos e cartas. Integra narrativa, interface e serviços de IA em uma jornada para participantes e administração do playtest.",
    context: "Projeto autoral que conecta um universo de RPG a uma plataforma digital para criar e apresentar personagens. O foco desta entrega é a experiência web de preparação para o playtest.",
    problem: "Transformar a criação de personagens em uma jornada acessível, mantendo consistência dos dados e controle sobre o uso de IA.",
    solution: "Fluxo por etapas com rascunhos, sugestões de IA por campo, geração de retratos e cartas, perfil do personagem e recursos administrativos. A IA apoia a criação com limites de uso e acompanhamento de custos.",
    role: "Desenvolvimento full-stack, modelagem de personagens, integração de IA e evolução da experiência de criação e do painel administrativo.",
    impact: "Reúne narrativa, autenticação, persistência e geração de conteúdo em um produto autoral demonstrável. A evolução do MVP é orientada pelo feedback do playtest.",
    technologies: ["TypeScript", "Node.js", "Next.js", "React", "Prisma", "IA generativa"],
    highlights: ["Criação de personagens com sugestões de IA", "Retratos, cartas e perfil compartilhável", "Rascunhos e jornada de criação por etapas", "Limites de geração e acompanhamento de custos de IA"],
    image: "",
    imageAlt: "Guardian of Bravantus — plataforma de RPG",
    caseStudyUrl: "/projetos/guardian-of-bravantus",
    githubUrl: "https://github.com/pedrodevtec/Gob-Backend",
    externalUrl: "https://gob.bardosamigos.com.br",
  },
  {
    slug: "estudio-abrasel",
    group: "professional",
    title: "Estúdio Abrasel — Plataforma corporativa, automação e visão proativa",
    category: "Produto interno / Arquitetura / Microsoft 365 / Automação",
    status: "Em evolução",
    shortDescription:
      "Plataforma interna desenvolvida para centralizar ferramentas, processos e informações da organização, evoluindo de um sistema de apoio operacional para uma visão mais integrada, automatizada e proativa da rotina dos usuários.",
    overview:
      "O Estúdio Abrasel concentra minha principal experiência com produto interno real: desenvolvimento web, backend, integrações, cloud, banco de dados, automação e evolução contínua de uma plataforma usada por diferentes áreas da organização.",
    context:
      "O Estúdio Abrasel é uma plataforma interna criada para organizar módulos, informações, acessos e fluxos de trabalho em um ambiente único. O projeto reúne desenvolvimento web, arquitetura de software, integrações corporativas, cloud, banco de dados, automação e visão de produto.",
    problem:
      "Parte dos processos e informações internas ficava distribuída entre sistemas, planilhas, comunicações e ferramentas diferentes. O desafio era centralizar a experiência, reduzir tarefas manuais, melhorar a rastreabilidade e evoluir a plataforma sem comprometer a operação existente.",
    solution:
      "A evolução do Estúdio combinou desenvolvimento de módulos internos, integração com Microsoft 365, autenticação corporativa, infraestrutura AWS, bancos relacionais e automações com Microsoft Lists e Power Automate. A visão mais recente propõe transformar a plataforma em uma experiência mais proativa, com alertas, lembretes, notificações e informações contextuais.",
    role:
      "Atuei no desenvolvimento e manutenção de módulos web, backend, banco de dados, integrações, cloud, documentação técnica, apoio em arquitetura, sustentação e evolução do produto.",
    platformEvolution:
      "A plataforma evoluiu de um ambiente de apoio operacional para uma base mais estruturada de produto interno, reunindo módulos, informações e serviços que ajudam diferentes áreas a acessar recursos e executar processos com mais consistência.",
    integrationsAndAutomation:
      "As integrações com Microsoft 365, Microsoft Graph, Microsoft Lists e Power Automate ampliaram o papel do Estúdio para além da centralização de informações. Esses recursos ajudaram a conectar fluxos corporativos, reduzir tarefas manuais e tornar processos mais rastreáveis.",
    proactiveVision:
      "A visão Estúdio 3.0 propõe uma evolução mais contextual da plataforma, com alertas, lembretes, notificações, agenda, tarefas e informações relevantes aparecendo no momento certo para apoiar a rotina dos usuários de forma mais ativa.",
    impact:
      "O projeto contribui para centralizar processos internos, melhorar o acesso a informações, reduzir atividades manuais e apoiar a evolução digital da organização. Também representa uma experiência completa de produto real, envolvendo código, arquitetura, operação, automação e visão estratégica.",
    technologies: [
      "C#",
      "ASP.NET",
      "Razor",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "Microsoft 365",
      "Microsoft Graph",
      "Microsoft Lists",
      "Power Automate",
      "Teams",
    ],
    highlights: [
      "Evolução de plataforma interna com usuários reais",
      "Centralização de módulos, informações e processos",
      "Integração com Microsoft 365 e Microsoft Graph",
      "Automação de fluxos com Microsoft Lists e Power Automate",
      "Infraestrutura e serviços em AWS",
      "Apoio em arquitetura, documentação e sustentação",
      "Visão de produto para uma plataforma mais proativa e contextual",
    ],
    image: "/projects/estudio-home.png",
    imageAlt: "Prévia adaptada da plataforma interna Estúdio Abrasel",
    caseStudyUrl: "/projetos/estudio-abrasel",
    isCorporate: true,
  },
  {
    slug: "microservices-dotnet-6",
    group: "technical",
    title: "Microservices .NET 6",
    category: "Backend / Architecture",
    status: "Repositório técnico",
    shortDescription:
      "Estudo prático de microsserviços com .NET 6, explorando separação de responsabilidades, APIs e decisões de arquitetura para sistemas distribuídos.",
    context:
      "Este repositório aprofunda decisões de arquitetura backend em um cenário de serviços independentes e responsabilidades distribuídas.",
    problem:
      "Aplicações monolíticas podem dificultar evolução independente, isolamento de responsabilidades e escalabilidade quando os domínios crescem.",
    solution:
      "O projeto estrutura serviços com .NET 6 e APIs, explorando organização de camadas, comunicação e separação de responsabilidades.",
    role: "Estudo de arquitetura, implementação backend e organização de serviços em C#.",
    impact: "O estudo reforça fundamentos úteis para decisões de arquitetura em sistemas distribuídos e APIs corporativas.",
    technologies: [".NET 6", "C#", "Microservices", "API", "Architecture"],
    highlights: ["Separação de responsabilidades", "Arquitetura orientada a serviços", "APIs com .NET 6", "Estudo de escalabilidade backend"],
    image: "",
    imageAlt: "Representação técnica do projeto Microservices .NET 6",
    githubUrl: "https://github.com/PedroDevTec/Microservices-.net6",
  },
  {
    slug: "apirpg",
    group: "technical",
    title: "APIRPG",
    category: "Backend / Game Systems",
    status: "Repositório técnico",
    shortDescription:
      "API em C# para estudar regras de domínio, entidades, progressão e organização backend aplicada a sistemas de RPG e experiências gamificadas.",
    context: "O projeto conecta backend tradicional com modelagem de sistemas de jogo, progressão e regras de domínio.",
    problem:
      "Sistemas de RPG exigem entidades, regras, evolução de personagem e organização clara para evitar lógica espalhada e difícil manutenção.",
    solution: "A API estrutura funcionalidades em C# e .NET, estudando como organizar regras de negócio para sistemas gamificados.",
    role: "Modelagem backend, implementação de API e estudo de regras de sistemas RPG.",
    impact: "O projeto amplia a ponte entre arquitetura backend e sistemas interativos com regras de progressão.",
    technologies: ["C#", ".NET", "API", "RPG Systems", "Backend"],
    highlights: ["Modelagem de entidades", "Regras de negócio para RPG", "Organização backend", "Estudo de sistemas gamificados"],
    image: "",
    imageAlt: "Representação técnica do projeto APIRPG",
    githubUrl: "https://github.com/PedroDevTec/APIRPG",
  },
  {
    slug: "bar-dos-amigos",
    group: "technical",
    title: "Bar dos Amigos",
    category: "Community / Web Platform",
    status: "Projeto web",
    shortDescription: "Projeto web em TypeScript voltado para presença digital, conteúdo e organização de informações para uma comunidade.",
    context: "O projeto explora como uma plataforma web pode organizar conteúdo, identidade digital e comunicação para uma comunidade.",
    problem: "Comunidades precisam de presença digital clara para apresentar informações, eventos e conteúdos de forma acessível.",
    solution: "A aplicação usa TypeScript e tecnologias web para estruturar uma experiência de presença digital simples e organizada.",
    role: "Desenvolvimento frontend, organização de interface e estruturação técnica do projeto.",
    impact: "O repositório demonstra prática com TypeScript e construção de plataformas web orientadas a comunidade.",
    technologies: ["TypeScript", "Web", "Community", "Frontend"],
    highlights: ["Presença digital para comunidade", "Interface web", "Organização de conteúdo", "Desenvolvimento com TypeScript"],
    image: "",
    imageAlt: "Representação técnica do projeto Bar dos Amigos",
    githubUrl: "https://github.com/PedroDevTec/bar-dos-amigos",
  },
  {
    slug: "gob-backend",
    group: "technical",
    title: "Gob Backend",
    category: "Backend / TypeScript",
    status: "Repositório técnico",
    shortDescription:
      "Backend em TypeScript para estudar APIs, organização de rotas, regras de negócio e estruturação de serviços em Node.js.",
    context: "O projeto aprofunda práticas de backend em TypeScript, com foco em estrutura de serviços e organização de APIs.",
    problem: "Backends em crescimento precisam de rotas, responsabilidades e regras bem organizadas para manter evolução sustentável.",
    solution: "A estrutura explora organização de serviços, rotas e lógica de negócio em Node.js com TypeScript.",
    role: "Implementação backend, organização de rotas e estudo de estruturação de serviços.",
    impact: "O projeto reforça práticas úteis para APIs modernas e organização de código em ecossistema Node.js.",
    technologies: ["TypeScript", "Node.js", "API", "Backend"],
    highlights: ["Estruturação de APIs", "Organização de rotas", "Regras de negócio", "Backend com TypeScript"],
    image: "",
    imageAlt: "Representação técnica do projeto Gob Backend",
    githubUrl: "https://github.com/PedroDevTec/Gob-Backend",
  },
  {
    slug: "roblox-game-prototype",
    group: "gameLab",
    title: "Protótipo de Jogo Roblox",
    category: "Game Development",
    status: "Protótipo em desenvolvimento",
    shortDescription:
      "Laboratório técnico em Roblox para estudar sistemas interativos com gameplay loop, progressão, persistência de dados, entidades e UI para diferentes dispositivos.",
    context:
      "O protótipo foi criado como um ambiente de estudo para unir lógica de produto, experiência do jogador, arquitetura modular e sistemas persistentes. O foco não é apenas criar uma mecânica, mas entender como sistemas interativos evoluem com regras, dados e feedback contínuo.",
    problem:
      "Experiências com progressão exigem controle de estado, salvamento confiável, comportamento de entidades, balanceamento, interface clara e uma base de código preparada para mudanças frequentes.",
    solution:
      "O projeto combina autobattle, coleta de criaturas, pets, inimigos por mapa, upgrades, persistência com DataStore e organização profissional com Rojo e VS Code. A proposta é tratar o jogo como um sistema de produto interativo.",
    role:
      "Game design, programação em Luau, estruturação de sistemas, organização com Rojo, prototipação de UI, lógica de persistência e estudo de experiência do jogador.",
    impact:
      "O laboratório fortalece minha capacidade de pensar arquitetura, estado, progressão, feedback e experiência do usuário em sistemas interativos complexos.",
    technologies: ["Roblox Studio", "Luau", "Rojo", "VS Code", "DataStore", "UI", "Game Design"],
    highlights: [
      "Gameplay loop com coleta, progressão e combate",
      "Sistemas de pets, inimigos e upgrades",
      "Persistência de dados com preocupação de evolução",
      "Workflow profissional com Rojo e VS Code",
    ],
    image: "/projects/roblox-prototype.png",
    imageAlt: "Prévia do protótipo de jogo Roblox",
    caseStudyUrl: "/projetos/roblox-game-prototype",
  },
  {
    slug: "unity-gameplay-prototype",
    group: "gameLab",
    title: "Protótipo de Gameplay em Unity",
    category: "Game Development",
    status: "Estudo técnico",
    shortDescription:
      "Laboratório em Unity para aplicar C# e arquitetura de software a sistemas de gameplay, estados, colisões, UI e componentes reutilizáveis.",
    context:
      "O estudo em Unity conecta minha base em C# com desenvolvimento de sistemas interativos em tempo real. A proposta é explorar como conceitos de arquitetura e organização de código se comportam em um ambiente com física, UI, estados e resposta imediata ao usuário.",
    problem:
      "Projetos de jogos podem crescer rapidamente em complexidade quando responsabilidades ficam misturadas, estados não são bem definidos e componentes não são pensados para reutilização.",
    solution:
      "O protótipo organiza mecânicas de movimentação, inimigos, vida, dano, inventário conceitual, interface e gerenciamento de estados em uma estrutura mais modular e evolutiva.",
    role:
      "Programação em C#, estudo de arquitetura para jogos, criação de componentes reutilizáveis, prototipação de mecânicas e análise de organização de estados.",
    impact:
      "O projeto amplia minha visão sobre arquitetura além de sistemas web, aplicando clareza de responsabilidades, reutilização e experiência do usuário em sistemas interativos.",
    technologies: ["Unity", "C#", "GameObjects", "Prefabs", "Physics", "UI", "ScriptableObjects"],
    highlights: [
      "Arquitetura aplicada a gameplay em C#",
      "Componentes reutilizáveis e separação de responsabilidades",
      "Estudo de estados, UI, vida, dano e inimigos",
      "Aplicação de princípios de software em sistemas interativos",
    ],
    image: "/projects/unity-prototype.png",
    imageAlt: "Prévia do protótipo de gameplay em Unity",
    caseStudyUrl: "/projetos/unity-gameplay-prototype",
  },
];

export const caseStudyProjects = projects.filter((project) => project.caseStudyUrl);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
