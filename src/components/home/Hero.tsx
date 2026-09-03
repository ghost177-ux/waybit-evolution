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

  return (
    <section className="overflow-hidden bg-background" aria-label="Apresentação">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-6 lg:py-16">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
            A{" "}
            <em
              className="not-italic transition-colors duration-700"
              style={{ color: theme.color }}
            >
              rotina
            </em>{" "}
            da sua empresa{" "}
            <em
              className="transition-colors duration-700"
              style={{ color: theme.color }}
            >
              leve
            </em>{" "}
            e com menos{" "}
            <em
              className="transition-colors duration-700"
              style={{ color: theme.color }}
            >
              esforço.
            </em>
          </h1>
          <SegmentSearch themeIndex={index} />
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute inset-y-0 left-1/2 -right-[50vw] z-0 hidden transition-colors duration-700 lg:block"
            style={{
              backgroundColor: theme.color,
              clipPath: "polygon(6% 0, 100% 0, 100% 100%, 6% 100%)"
            }}
          />

          {heroThemes.map((t, i) => (
            <img
              key={t.id}
              src={t.banner}
              alt={t.alt}
              width={640}
              height={569}
              loading={i === 0 ? "eager" : "lazy"}
              className="relative z-10 w-full transition-opacity duration-700"
              style={{
                opacity: i === index ? 1 : 0,
                position: i === 0 ? "relative" : "absolute",
                inset: i === 0 ? undefined : 0,
              }}
              aria-hidden={i !== index}
            />
          ))}

          <div
            className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2"
            aria-hidden
          >
            {heroThemes.map((t, i) => (
              <span
                key={t.id}
                className="h-2 w-2 rounded-full transition-all duration-500"
                style={{
                  backgroundColor:
                    i === index ? t.color : "var(--color-border)",
                  transform: i === index ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


{/**import { useEffect, useState } from "react";
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

  return (
    <section className="overflow-hidden bg-background" aria-label="Apresentação">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-6 lg:py-16">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
            A{" "}
            <em
              className="not-italic transition-colors duration-700"
              style={{ color: theme.color }}
            >
              rotina
            </em>{" "}
            da sua empresa{" "}
            <em
              className="transition-colors duration-700"
              style={{ color: theme.color }}
            >
              leve
            </em>{" "}
            e com menos{" "}
            <em
              className="transition-colors duration-700"
              style={{ color: theme.color }}
            >
              esforço.
            </em>
          </h1>
          <SegmentSearch themeIndex={index} />
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {heroThemes.map((t, i) => (
            <img
              key={t.id}
              src={t.banner}
              alt={t.alt}
              width={640}
              height={569}
              loading={i === 0 ? "eager" : "lazy"}
              className="w-full transition-opacity duration-700"
              style={{
                opacity: i === index ? 1 : 0,
                position: i === 0 ? "relative" : "absolute",
                inset: i === 0 ? undefined : 0,
              }}
              aria-hidden={i !== index}
            />
          ))}
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden>
            {heroThemes.map((t, i) => (
              <span
                key={t.id}
                className="h-2 w-2 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: i === index ? t.color : "var(--color-border)",
                  transform: i === index ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}*/}
