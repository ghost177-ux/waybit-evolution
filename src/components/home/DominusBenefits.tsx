import { ArrowRight } from "lucide-react";
import { dominusBenefits } from "@/content/home";
import { Container, SectionHeading, segmentIconMap } from "./shared";

export function DominusBenefits() {
  return (
    <section className="bg-brand-soft py-16 lg:py-20" aria-label="Benefícios do Dominus">
      <Container>
        <SectionHeading
          title={
            <>
              Funcionalidades que viram{" "}
              <span className="text-brand-blue">resultado</span>
            </>
          }
          subtitle="Da funcionalidade ao benefício: veja como cada parte do Dominus ajuda o seu negócio na prática."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dominusBenefits.map((b) => {
            const Icon = segmentIconMap[b.icon];
            return (
              <li
                key={b.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
                  <Icon className="h-6 w-6 text-brand-blue" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-dark">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-brand-text">{b.help}</p>
                <p className="mt-3 text-sm font-medium text-brand-dark">{b.benefit}</p>
                <p className="mt-auto flex items-start gap-1.5 pt-4 text-sm font-semibold text-brand-green">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  {b.result}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
