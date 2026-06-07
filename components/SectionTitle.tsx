type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primarySoft">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-textMain sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-textMuted">{description}</p> : null}
    </div>
  );
}
