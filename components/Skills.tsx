import { skillGroups } from "@/data/skills";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="border-y border-borderSubtle bg-surface/25 py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Competências"
          title="Stack orientada a backend, arquitetura, cloud, automação e experiências interativas."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface rounded-lg p-6">
              <h3 className="text-lg font-semibold text-textMain">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
