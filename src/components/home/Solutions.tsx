import { solutions, type SolutionColor } from "@/content/home";
import { Container, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

const colorClasses: Record<SolutionColor, { border: string; icon: string }> = {
  blue: { border: "border-t-brand-blue", icon: "bg-brand-blue" },
  yellow: { border: "border-t-brand-yellow", icon: "bg-brand-yellow" },
  red: { border: "border-t-brand-red", icon: "bg-brand-red" },
  dark: { border: "border-t-brand-dark", icon: "bg-brand-dark" },
  green: { border: "border-t-brand-green", icon: "bg-brand-green" },
};

export function Solutions() {
  return (
    <section id="solucoes" className="bg-brand-soft py-16 lg:py-20" aria-label="Soluções por segmento">
      <Container>
        <SectionHeading className="mx-auto max-w-4xl text-center"
          title="Conheça um sistema de gestão empresarial completo com o melhor suporte do mercado!"
          subtitle="Clique na solução para seu segmento e conheça mais:"
        />

        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-6">
          {solutions.map((s) => {
            const colors = colorClasses[s.color];
            return (
              <li key={s.name} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group flex h-full flex-col items-center rounded-xl border-t-4 bg-card p-6 pt-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
                    colors.border,
                  )}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span
                      className={cn(
                        "flex h-16 w-16 shrink-0 items-center justify-center rounded-lg shadow-sm",
                        colors.icon,
                      )}
                    >
                      <img src={s.logo} alt={s.logoAlt} loading="lazy" className="h-10 w-10 object-contain" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-brand-dark">
                      {s.name}
                    </h3>
                  </div>
                  {/* Mudança aqui: mt-4 deixa o subtítulo a ~16px do título */}
                  <p 
                    className="mt-4 text-base text-brand-text"
                    dangerouslySetInnerHTML={{ __html: s.description }}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}


{/*import { solutions, type SolutionColor } from "@/content/home";
import { Container, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

const colorClasses: Record<SolutionColor, { border: string; icon: string }> = {
  blue: { border: "border-t-brand-blue", icon: "bg-brand-blue" },
  yellow: { border: "border-t-brand-yellow", icon: "bg-brand-yellow" },
  red: { border: "border-t-brand-red", icon: "bg-brand-red" },
  dark: { border: "border-t-brand-dark", icon: "bg-brand-dark" },
  green: { border: "border-t-brand-green", icon: "bg-brand-green" },
};

export function Solutions() {
  return (
    <section id="solucoes" className="bg-brand-soft py-16 lg:py-20" aria-label="Soluções por segmento">
      <Container>
        <SectionHeading
          title="Conheça um sistema de gestão empresarial completo com o melhor suporte do mercado!"
          subtitle="Clique na solução para seu segmento e conheça mais:"
        />

        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-6">
          {solutions.map((s) => {
            const colors = colorClasses[s.color];
            return (
              <li key={s.name} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group flex h-full flex-col rounded-xl border-t-4 bg-card p-6 pt-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
                    colors.border,
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-brand-dark">
                      {s.name}
                    </h3>
                    <span
                      className={cn(
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl",
                        colors.icon,
                      )}
                    >
                      <img src={s.logo} alt={s.logoAlt} loading="lazy" className="h-8 w-8 object-contain" />
                    </span>
                  </div>
                  <p className="mt-auto pt-6 text-sm text-brand-text">{s.description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}*/}
