import { metrics, type MetricIconKey } from "@/content/home";
import { Container } from "./shared";

function MetricIcon({ icon }: { icon: MetricIconKey }) {
  const common = {
    className: "h-10 w-10 text-brand-dark",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (icon) {
    case "timer":
      return (
        <svg {...common}>
          <circle cx="12" cy="14" r="7" />
          <path d="M12 11v3l2 2" />
          <path d="M9 3h6" />
          <path d="M12 3v4" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="3" />
          <circle cx="16.5" cy="10" r="2.5" />
          <path d="M3 20c0-3 2.2-5 5-5s5 2 5 5" />
          <path d="M14.5 15.5c2.6.3 4.5 2 4.5 4.5" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
        </svg>
      );
    case "cake":
      return (
        <svg {...common}>
          <path d="M4 21h16" />
          <path d="M5 21v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
          <path d="M5 17c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0" />
          <path d="M12 13v-3" />
          <path d="M12 7c.8-1 .8-2 0-3-.8 1-.8 2 0 3z" />
        </svg>
      );
  }
}

export function Metrics() {
  return (
    <section className="bg-background py-16 lg:py-20" aria-label="Números da Waybit">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-card shadow-lg">
          <div className="brand-stripes h-1.5" aria-hidden />
          <dl className="grid grid-cols-2 gap-8 px-6 py-10 sm:px-10 lg:grid-cols-4 lg:py-12">
            {metrics.map((m) => (
              <div key={m.suffix} className="flex flex-col items-center text-center">
                <MetricIcon icon={m.icon} />
                <dt className="sr-only">{`${m.prefix} ${m.value} ${m.suffix}`}</dt>
                <dd className="mt-4 text-sm text-brand-text">
                  {m.prefix}{" "}
                  <span className="font-display text-3xl font-bold text-brand-dark">
                    {m.value}
                  </span>
                </dd>
                <dd className="text-sm text-brand-text">{m.suffix}</dd>
              </div>
            ))}
          </dl>
          <div className="brand-stripes h-1.5" aria-hidden />
        </div>
      </Container>
    </section>
  );
}
