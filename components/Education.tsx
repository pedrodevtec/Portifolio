import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle eyebrow="Formação" title="Base acadêmica em sistemas e arquitetura de software." />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.title} className="surface rounded-lg p-6">
              <GraduationCap className="mb-5 text-primarySoft" size={28} aria-hidden="true" />
              <h3 className="text-xl font-semibold text-textMain">{item.title}</h3>
              <p className="mt-2 font-medium text-primarySoft">{item.institution}</p>
              <p className="mt-3 text-textMuted">{item.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
