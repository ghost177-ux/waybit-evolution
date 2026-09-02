import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import logoWaybit from "@/assets/logo_waybit.png.asset.json";
import { contact, navLinks, segmentCategories } from "@/content/home";
import { segmentIconMap, Container } from "./shared";
import { SystemMegaMenu } from "./SystemMegaMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <header className="relative z-40 bg-background">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="/" aria-label="Waybit — página inicial" className="shrink-0">
          <img src={logoWaybit.url} alt="Waybit" className="h-9 w-auto sm:h-11" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          <div className="group">
            <button
              type="button"
              className="flex items-center gap-1 font-display text-sm font-semibold text-brand-dark transition-colors group-hover:text-brand-blue"
              aria-haspopup="true"
            >
              Sistema
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" aria-hidden />
            </button>
            <SystemMegaMenu />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-display text-sm font-semibold text-brand-dark transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-green px-5 py-2.5 font-display text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Falar com Especialista
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-brand-dark lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-full border-t border-border bg-background shadow-lg transition-all lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <Container className="max-h-[70vh] overflow-y-auto py-4">
          <div className="space-y-1">
            {segmentCategories.map((cat) => (
              <div key={cat.name} className="rounded-lg">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-display text-sm font-semibold text-brand-dark"
                  onClick={() => setOpenCategory(openCategory === cat.name ? null : cat.name)}
                  aria-expanded={openCategory === cat.name}
                >
                  Sistema — {cat.name}
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openCategory === cat.name && "rotate-90",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid grid-cols-2 gap-1 overflow-hidden transition-all",
                    openCategory === cat.name ? "max-h-[600px] pb-2" : "max-h-0",
                  )}
                >
                  {cat.items.map((item) => {
                    const Icon = segmentIconMap[item.icon];
                    return (
                      <a
                        key={item.slug}
                        href={`/#segmentos?segmento=${item.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-brand-text"
                      >
                        <Icon className="h-4 w-4 text-brand-blue" aria-hidden />
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-3 py-3 font-display text-sm font-semibold text-brand-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block rounded-full bg-brand-green px-5 py-3 text-center font-display text-sm font-semibold text-white"
            >
              Falar com Especialista
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
