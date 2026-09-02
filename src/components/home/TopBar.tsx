import { Facebook, Headset, Instagram, Mail } from "lucide-react";
import { contact } from "@/content/home";
import { Container } from "./shared";

export function TopBar() {
  return (
    <div className="bg-brand-soft">
      <Container className="flex h-10 items-center justify-between gap-4 text-xs text-brand-text sm:text-sm">
        <div className="flex items-center gap-4">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-1.5 font-medium text-brand-dark transition-colors hover:text-brand-blue"
          >
            <Headset className="h-4 w-4 text-brand-blue" aria-hidden />
            <span className="hidden sm:inline">{contact.phone}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-brand-blue md:flex"
          >
            <Mail className="h-4 w-4 text-brand-blue" aria-hidden />
            {contact.email}
          </a>
        </div>
        <nav className="flex items-center gap-3 sm:gap-4" aria-label="Links de suporte">
          <a href={contact.faq} target="_blank" rel="noreferrer" className="hidden transition-colors hover:text-brand-blue sm:inline">
            FAQ
          </a>
          <a href={contact.helpCenter} target="_blank" rel="noreferrer" className="hidden transition-colors hover:text-brand-blue md:inline">
            Central de Ajuda
          </a>
          <a href={contact.support} target="_blank" rel="noreferrer" className="hidden transition-colors hover:text-brand-blue md:inline">
            Suporte
          </a>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook da Waybit"
            className="transition-colors hover:text-brand-blue"
          >
            <Facebook className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Waybit"
            className="transition-colors hover:text-brand-blue"
          >
            <Instagram className="h-4 w-4" aria-hidden />
          </a>
        </nav>
      </Container>
      <div className="brand-stripes h-1" aria-hidden />
    </div>
  );
}
