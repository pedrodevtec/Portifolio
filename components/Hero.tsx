import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const actions = [
  { label: "Ver jogos e IA", href: "#projects", icon: ArrowDown, primary: true },
  { label: "Baixar currículo — jogos e IA", href: "/resume-joao-pedro-alves-santos.txt", icon: Download, download: true },
  { label: "LinkedIn", href: profile.linkedInUrl, icon: Linkedin },
  { label: "GitHub", href: profile.githubUrl, icon: Github },
  { label: "Contato", href: `mailto:${profile.email}`, icon: Mail },
];

const photoBadges = [
  { label: ".NET", className: "left-1 top-8 sm:-left-8 sm:top-10" },
  { label: "Node.js", className: "right-2 top-5 sm:-right-7 sm:top-12" },
  { label: "AWS", className: "left-3 bottom-20 sm:-left-7 sm:bottom-24" },
  { label: "IA aplicada", className: "right-0 bottom-24 sm:-right-10 sm:bottom-28" },
  { label: "Roblox", className: "left-8 bottom-6 sm:left-12 sm:-bottom-3" },
  { label: "Unity", className: "right-8 bottom-5 sm:right-12 sm:-bottom-4" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden border-b border-borderSubtle">
      <Image
        src="/images/hero-architecture.png"
        alt="Visual abstrato de arquitetura de software, cloud e automação"
        fill
        priority
        className="object-cover object-center opacity-[0.22] grayscale-[20%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/62" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />

      <div className="section-shell relative grid min-h-[92vh] items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-4xl reveal">
          <p className="mb-5 inline-flex rounded-full border border-borderSubtle bg-surface/70 px-4 py-2 text-sm font-medium text-primarySoft">
            Belo Horizonte, MG, Brasil
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-textMain sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-primarySoft sm:text-xl">{profile.headline}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-textMain/90 sm:text-lg">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            {actions.map(({ label, href, icon: Icon, primary, download }) => (
              <a
                key={label}
                href={href}
                download={download}
                className={`inline-flex min-h-11 items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primarySoft ${
                  primary
                    ? "bg-primary text-textMain shadow-subtle hover:bg-primarySoft hover:text-background"
                    : "border border-borderSubtle bg-surface/70 text-textMain hover:border-warm/55 hover:bg-surface"
                }`}
              >
                <Icon aria-hidden="true" size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
            <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(135,152,170,0.22),rgba(167,121,101,0.09)_42%,transparent_70%)]" />
            <div className="absolute -inset-3 rounded-[1.4rem] bg-gradient-to-br from-primary/55 via-primarySoft/18 to-warm/45 blur-xl" />
            <div className="relative rounded-2xl bg-gradient-to-br from-primary via-primarySoft/35 to-warm p-[1px] shadow-subtle">
              <div className="rounded-2xl bg-surface p-2">
                <Image
                  src="/profile-photo.jpg"
                  alt="Foto profissional de João Pedro Alves Santos"
                  width={420}
                  height={420}
                  className="aspect-square w-full rounded-2xl border border-borderSubtle object-cover shadow-xl"
                  priority
                />
              </div>
            </div>
            {photoBadges.map((badge) => (
              <span
                key={badge.label}
                className={`absolute ${badge.className} rounded-full border border-borderSubtle bg-surface/80 px-3 py-1 text-xs font-semibold text-textMain shadow-subtle backdrop-blur`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
