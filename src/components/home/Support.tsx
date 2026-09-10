import { contact, support } from "@/content/home";
import { Container } from "./shared";

export function Support() {
  return (
    <section id="suporte" className="bg-background py-16 lg:py-20" aria-label="Suporte">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Suporte Waybit
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-[2.6rem]">
              {support.title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-brand-text sm:text-lg">
              {support.subtitle}
            </p>
            <div>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-brand-green px-6 py-3.5 font-display text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {support.cta}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={support.image}
              alt={support.imageAlt}
              loading="lazy"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}


{/*import { contact, support } from "@/content/home";
import { Container } from "./shared";

export function Support() {
  return (
    <section id="suporte" className="bg-background py-16 lg:py-20" aria-label="Suporte">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
              {support.title}
            </h2>
            <p className="mt-4 max-w-md text-base text-brand-text sm:text-lg">
              {support.subtitle}
            </p>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-md bg-brand-green px-6 py-3 font-display text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {support.cta}
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={support.image}
              alt={support.imageAlt}
              loading="lazy"
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}*/}
