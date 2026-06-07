export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Estúdio Abrasel",
    category: "Plataforma Corporativa",
    description:
      "Plataforma web interna focada em centralizar ferramentas, processos, informações e módulos de produtividade para a organização.",
    technologies: ["C#", "ASP.NET", "Razor", "Node.js", "Express", "PostgreSQL", "MySQL", "SQL Server", "AWS", "Microsoft 365"],
    highlights: [
      "Desenvolvimento de produto interno",
      "Autenticação com Microsoft 365",
      "Infraestrutura em cloud",
      "Evolução de sistemas legados",
      "Arquitetura técnica e documentação",
    ],
  },
  {
    title: "Integração Microsoft Lists + Power Automate",
    category: "Automação / Microsoft 365",
    description:
      "Projeto de automação conectando Microsoft Lists, Power Automate e sistemas internos para reduzir trabalho manual e melhorar o fluxo de informações entre equipes.",
    technologies: ["Microsoft Lists", "Power Automate", "Microsoft 365", "APIs internas"],
    highlights: [
      "Automação de processos",
      "Integração de workflows corporativos",
      "Redução de tarefas manuais",
      "Uso prático de low-code e sistemas customizados em conjunto",
    ],
  },
  {
    title: "Estúdio 3.0 - Conceito de Plataforma Proativa",
    category: "Visão de Produto / IA / Automação",
    description:
      "Conceito e visão de protótipo para evoluir o Estúdio Abrasel em uma plataforma mais proativa, ajudando usuários durante a rotina com alertas, lembretes, notificações e informações contextuais.",
    technologies: ["Node.js", "Next.js", "Microsoft Graph", "Teams", "Power Automate", "AWS", "PostgreSQL", "Conceitos de IA"],
    highlights: [
      "Experiência de usuário proativa",
      "Lembretes de tarefas",
      "Notificações de reuniões",
      "Alertas de notícias internas",
      "Suporte a fluxos sazonais de negócio",
      "Conceito de arquitetura agentic",
    ],
  },
  {
    title: "Protótipo de Jogo Roblox",
    category: "Game Development",
    description:
      "Protótipo em Roblox inspirado em autobattle, coleção de criaturas, sistemas de progressão e encontros com inimigos baseados no mapa.",
    technologies: ["Roblox Studio", "Lua", "Rojo", "VS Code", "DataStore", "UI", "Game Design"],
    highlights: [
      "Sistema de rolagem de criaturas",
      "Pets que seguem o jogador",
      "Comportamento de IA inimiga",
      "Variações Slime, Elite Slime e Slime King",
      "Progressão e upgrades do jogador",
      "Persistência de dados",
      "Considerações de UI para mobile e desktop",
      "Workflow profissional com Rojo e VS Code",
    ],
  },
  {
    title: "Protótipo de Gameplay em Unity",
    category: "Game Development",
    description:
      "Protótipo em Unity focado no estudo de mecânicas de gameplay, movimentação de personagem, sistemas de inimigos, UI, colisões e arquitetura reutilizável com C#.",
    technologies: ["Unity", "C#", "GameObjects", "Prefabs", "Physics", "UI", "ScriptableObjects"],
    highlights: [
      "Movimentação de personagem",
      "Comportamento de inimigos",
      "Sistema de vida e dano",
      "Conceito de inventário",
      "Gerenciamento de estado de jogo",
      "Componentes reutilizáveis",
      "Aplicação de princípios de arquitetura de software em jogos",
    ],
  },
];
