import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cases } from "@/content/home";
import { Container, SectionHeading } from "./shared";
import { YouTubeFacade } from "./YouTubeFacade";

export function Cases() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const w = card ? card.clientWidth + 24 : 320;
    track.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Cases e depoimentos">
      <Container>
        {/*<SectionHeading
          title={
            <>
              Quem usa, <span className="text-brand-blue">recomenda</span>
            </>
          }
          subtitle="Histórias reais de clientes que deixaram a rotina mais leve com o Waybit."
        />*/}

        <div className="relative mt-12">
          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible"
          >
            {cases.map((c) => (
              <li
                key={c.name}
                className="flex w-[85vw] max-w-sm shrink-0 snap-center flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-[380px] lg:w-auto lg:max-w-none"
              >
                {/* name + logo above the quote */}
                <div className="flex items-center gap-3">
                  <img
                    src={c.logo}
                    alt={c.logoAlt}
                    className="h-12 w-12 rounded-full border border-border object-cover"
                  />
                  <h3
                    className="font-display text-lg font-bold"
                    style={{ color: c.color }}
                  >
                    {c.name}
                  </h3>
                </div>
                <blockquote className="mt-4 flex gap-2">
                  <span
                    aria-hidden
                    className="font-display text-4xl font-bold leading-none"
                    style={{ color: c.color }}
                  >
                    &ldquo;
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-brand-dark">
                    {c.quote}
                  </p>
                </blockquote>
                <div className="mt-6">
                  <YouTubeFacade
                    videoId={c.videoId}
                    title={c.name}
                    channelName={c.name}
                    channelLogo={c.logo}
                  />
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Case anterior"
            className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:bg-brand-soft lg:flex"
          >
            <ChevronLeft className="h-5 w-5 text-brand-dark" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Próximo case"
            className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors hover:bg-brand-soft lg:flex"
          >
            <ChevronRight className="h-5 w-5 text-brand-dark" aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  );
}
