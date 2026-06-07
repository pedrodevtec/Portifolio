import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: profile.linkedIn, href: profile.linkedInUrl, icon: Linkedin },
  { label: "GitHub", value: profile.github, href: profile.githubUrl, icon: Github },
  { label: "Localização", value: profile.location, href: null, icon: MapPin },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-borderSubtle bg-surface/25 py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar sobre arquitetura, backend, automação, cloud ou game development."
          description="Entre em contato para oportunidades profissionais, projetos técnicos ou conversas sobre evolução de plataformas e produtos digitais."
        />
        <div className="surface rounded-lg p-6 sm:p-8">
          <p className="max-w-3xl text-xl leading-9 text-textMain">
            Vamos nos conectar e falar sobre arquitetura de software, desenvolvimento backend, automação, cloud ou projetos de game development.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contacts.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <Icon className="shrink-0 text-primarySoft" size={22} aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-textMuted">{label}</span>
                    <span className="mt-1 block break-words text-base font-medium text-textMain">{value}</span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex min-h-24 items-center gap-4 rounded-md border border-borderSubtle bg-background/35 p-4 transition hover:border-warm/55 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex min-h-24 items-center gap-4 rounded-md border border-borderSubtle bg-background/35 p-4">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
