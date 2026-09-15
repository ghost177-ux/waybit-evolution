import { useEffect, useState } from "react";
import { heroThemes } from "@/content/home";
import { Container } from "./shared";
import { SegmentSearch } from "./SegmentSearch";

const ROTATE_MS = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroThemes.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, []);

  const theme = heroThemes[index] ?? heroThemes[0]!;

  const selectSlide = (nextIndex: number) => setIndex(nextIndex);

  return (
    <section className="relative overflow-hidden bg-background px-[3vw] pb-10 pt-5 sm:px-[5vw] sm:pb-14 sm:pt-7" aria-label="Apresentação">
      <div
        className="mx-auto min-h-[650px] w-full max-w-[80vw] overflow-hidden rounded-[2rem] transition-colors duration-700 lg:min-h-[700px]"
        style={{ backgroundColor: theme.background }}
      >
        <Container className="grid min-h-[650px] items-center gap-8 pb-12 pt-32 lg:min-h-[700px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:pb-14 lg:pt-36">
          <div className="relative z-20 max-w-xl">
            <p className="mb-4 font-display text-xs font-semibold uppercase text-brand-text">
              Sistema de gestão empresarial
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.13] text-brand-dark sm:text-5xl lg:text-[3.4rem]">
              A rotina da sua empresa{" "}
            <em
              className="not-italic transition-colors duration-700"
              style={{ color: theme.color }}
            >
              leve
            </em>{" "}
            e com menos{" "}
            <em
              className="not-italic transition-colors duration-700"
              style={{ color: theme.color }}
            >
              esforço
            </em>
            .
          </h1>
            <SegmentSearch themeIndex={index} />

            <div className="mt-7 flex items-center gap-2" role="tablist" aria-label="Escolher segmento">
              {heroThemes.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={itemIndex === index}
                  aria-label={`Exibir segmento ${item.label}`}
                  onClick={() => selectSlide(itemIndex)}
                  className="h-2.5 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{
                    backgroundColor: itemIndex === index ? item.color : "var(--color-hero-dot)",
                    width: itemIndex === index ? "2.25rem" : "0.625rem",
                    outlineColor: item.color,
                  }}
                />
              ))}
              <span className="ml-2 text-xs font-medium text-brand-text">{theme.label}</span>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:max-w-[590px]">
            <div
              className="absolute inset-[13%] rotate-45 rounded-[2.5rem] opacity-95 shadow-[0_30px_80px_-30px_var(--color-hero-shadow)] transition-colors duration-700"
              style={{ backgroundColor: theme.color }}
              aria-hidden
            />
            {heroThemes.map((item, itemIndex) => (
              <img
                key={item.id}
                src={item.banner}
                alt={item.alt}
                width={640}
                height={569}
                loading={itemIndex === 0 ? "eager" : "lazy"}
                className="absolute inset-0 z-10 h-full w-full object-contain transition-all duration-700 motion-reduce:transition-none"
                style={{
                  opacity: itemIndex === index ? 1 : 0,
                  transform: itemIndex === index ? "scale(1) translateY(0)" : "scale(0.96) translateY(0.75rem)",
                }}
                aria-hidden={itemIndex !== index}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
