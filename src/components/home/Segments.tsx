import { useEffect, useState } from "react";
import { segmentCategories } from "@/content/home";
import { Container, SectionHeading, segmentIconMap } from "./shared";
import { cn } from "@/lib/utils";

export function Segments() {
  const [highlight, setHighlight] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      setHighlight(null);
      requestAnimationFrame(() => setHighlight(slug));
    };
    window.addEventListener("waybit:segment", handler);
    return () => window.removeEventListener("waybit:segment", handler);
  }, []);

  return (
    <section id="segmentos" className="bg-brand-soft py-16 lg:py-20" aria-label="Segmentos atendidos">
      <Container>
        <SectionHeading
          title={
            <>
              O sistema ideal para o seu{" "}
              <span className="text-brand-blue">Negócio</span>
            </>
          }
          subtitle="Encontre o seu segmento e veja como o Waybit simplifica a gestão do seu negócio."
        />

        <div className="mt-12 space-y-10">
          {segmentCategories.map((cat) => (
            <div key={cat.name}>
              <h3 className="mb-4 font-display text-lg font-semibold text-brand-dark">
                {cat.name}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {cat.items.map((item) => {
                  const Icon = segmentIconMap[item.icon];
                  return (
                    <li key={item.slug}>
                      <a
                        href="#contato"
                        onClick={(e) => e.preventDefault()}
                        id={`segmento-${item.slug}`}
                        className={cn(
                          "group flex h-full flex-col items-center gap-2 rounded-xl border border-border bg-background px-3 py-4 text-center text-sm font-medium text-brand-dark shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                          highlight === item.slug && "segment-flash",
                        )}
                      >
                        <Icon className="h-6 w-6 text-brand-blue" aria-hidden />
                        <span className="underline-offset-4 decoration-brand-blue decoration-2 group-hover:underline">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
