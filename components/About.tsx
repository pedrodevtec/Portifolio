import { Code2, Cpu, Network } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

const pillars = [
  { title: "Backend e arquitetura", text: "Aplicações web, plataformas internas, integrações e sustentação técnica.", icon: Code2 },
  { title: "IA aplicada a produto", text: "Criação assistida de personagens, sugestões de conteúdo e geração de imagens no Bravantus.", icon: Network },
  { title: "Sistemas de jogos", text: "Roblox e Unity aplicados ao estudo de gameplay, UI, persistência e arquitetura.", icon: Cpu },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle eyebrow="Sobre" title="Tecnologia com foco em produto, operação e evolução sustentável." />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface rounded-lg p-6 sm:p-8">
            <p className="text-lg leading-9 text-textMain/90">{profile.about}</p>
          </div>
          <div className="grid gap-4">
            {pillars.map(({ title, text, icon: Icon }) => (
              <article key={title} className="surface rounded-lg p-5">
                <Icon className="mb-4 text-primarySoft" size={24} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-textMain">{title}</h3>
                <p className="mt-2 leading-7 text-textMuted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
