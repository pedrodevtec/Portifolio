import { experiences } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="border-y border-borderSubtle bg-surface/25 py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Experiência"
          title="Atuação em plataformas internas, integrações e evolução técnica."
          description="Minha trajetória combina operação, sustentação e desenvolvimento de soluções corporativas com responsabilidade técnica crescente."
        />
        <div className="space-y-5">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="surface rounded-lg p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-textMain">{experience.role}</h3>
                  <p className="mt-1 text-base font-medium text-primarySoft">{experience.company}</p>
                </div>
                <p className="text-sm font-medium text-textMuted">{experience.period}</p>
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-textMuted sm:text-base">
                {experience.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
