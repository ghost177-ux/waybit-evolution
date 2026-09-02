import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { segmentCategories } from "@/content/home";
import { segmentIconMap } from "./shared";
import { cn } from "@/lib/utils";

/** Mega menu "Sistema" — categories on the left, segments grid on the right. */
export function SystemMegaMenu() {
  const [active, setActive] = useState(0);
  const category = segmentCategories[active] ?? segmentCategories[0]!;

  return (
    <div className="pointer-events-none absolute inset-x-0 top-full z-50 hidden pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 lg:block">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
        <div className="grid grid-cols-[220px_1fr]">
          <div className="border-r border-border bg-brand-soft p-3">
            {segmentCategories.map((cat, i) => (
              <button
                key={cat.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors",
                  i === active
                    ? "bg-background text-brand-blue shadow-sm"
                    : "text-brand-dark hover:bg-background/60",
                )}
              >
                {cat.name}
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            ))}
          </div>
          <ul className="grid grid-cols-3 gap-x-4 gap-y-1 p-6">
            {category.items.map((item) => {
              const Icon = segmentIconMap[item.icon];
              return (
                <li key={item.slug}>
                  <a
                    href={`/#segmentos?segmento=${item.slug}`}
                    className="group/item flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-brand-text transition-colors hover:text-brand-blue"
                  >
                    <Icon
                      className="h-4.5 w-4.5 shrink-0 text-brand-dark transition-colors group-hover/item:text-brand-blue"
                      aria-hidden
                    />
                    <span className="underline-offset-4 decoration-brand-blue decoration-2 group-hover/item:underline">
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
