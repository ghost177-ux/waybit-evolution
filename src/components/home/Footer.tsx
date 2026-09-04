import { Facebook, Headset, Instagram, Mail, MessageCircle } from "lucide-react";
import { contact, footer } from "@/content/home";
import { Container } from "./shared";
import logoWhite from "@/assets/Logo-White.png";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white" aria-label="Rodapé">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logoWhite}
            alt="Waybit"
            className="mb-4 h-16 w-auto object-contain"
          />
          <p className="max-w-xs font-display text-lg font-semibold leading-snug">
            {footer.slogan}
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              href={footer.phoneHref}
              className="flex items-center gap-2 text-white/90 transition-colors hover:text-brand-blue"
            >
              <Headset className="h-4 w-4" aria-hidden />
              {footer.phone}
            </a>
            <a
              href={`mailto:${footer.email}`}
              className="flex items-center gap-2 text-white/90 transition-colors hover:text-brand-blue"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {footer.email}
            </a>
          </div>
        </div>

        <nav aria-label="Institucional" className="lg:mt-20">
          <h3 className="font-display text-base font-semibold">Institucional</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            {footer.institutional.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-blue">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Top Segmentos" className="lg:mt-20">
          <h3 className="font-display text-base font-semibold">Top Segmentos</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            {footer.topSegments.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-blue">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Redes sociais" className="lg:mt-20">
          <h3 className="font-display text-base font-semibold">Social</h3>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da Waybit"
              className="transition-colors hover:text-brand-blue"
            >
              <Facebook className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Waybit"
              className="transition-colors hover:text-brand-blue"
            >
              <Instagram className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </nav>
      </Container>

      <div className="brand-stripes h-1" aria-hidden />
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/80">
        {footer.copyright}
      </div>

      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com um especialista no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
      >
        <MessageCircle className="h-7 w-7" aria-hidden />
      </a>
    </footer>
  );
}
