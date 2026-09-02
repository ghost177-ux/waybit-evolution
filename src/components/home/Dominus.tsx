import { contact } from "@/content/home";
import { Container } from "./shared";

export function Dominus() {
  return (
    <section className="bg-background pb-4 lg:pb-6" aria-label="Sistema Dominus">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Sistema Dominus
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
          Gestão simplificada de estoque, vendas e finanças para o seu negócio.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-brand-text sm:text-lg">
          Um sistema completo e fácil de usar, feito para quem quer crescer sem
          complicar a rotina.
        </p>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-brand-green px-8 py-3 font-display text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
        >
          Conhecer o Dominus
        </a>
      </Container>
    </section>
  );
}
