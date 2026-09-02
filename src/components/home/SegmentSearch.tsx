import { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { allSegments, heroThemes } from "@/content/home";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** Dispatches the chosen segment so the Segments section can highlight it. */
export function goToSegment(slug: string) {
  window.dispatchEvent(new CustomEvent("waybit:segment", { detail: slug }));
  document.getElementById("segmentos")?.scrollIntoView({ behavior: "smooth" });
}

export function SegmentSearch({ themeIndex }: { themeIndex: number }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const theme = heroThemes[themeIndex] ?? heroThemes[0]!;

  const matches = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];
    return allSegments.filter((s) => normalize(s.name).includes(q)).slice(0, 6);
  }, [query]);

  const submit = () => {
    if (matches[0]) {
      goToSegment(matches[0].slug);
      setQuery("");
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative mt-2 w-full max-w-md">
      <label
        htmlFor="segment-search"
        className="mb-2 block font-display text-sm font-semibold text-brand-dark"
      >
        Qual seu ramo de atuação?
      </label>
      <div className="flex items-center gap-2 rounded-full border border-border bg-background p-1.5 shadow-md">
        <input
          id="segment-search"
          ref={inputRef}
          type="text"
          value={query}
          placeholder="Digite Aqui..."
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), submit())}
          className="min-w-0 flex-1 bg-transparent px-4 text-sm text-brand-dark outline-none placeholder:text-brand-text/60"
        />
        <button
          type="button"
          onClick={submit}
          className="flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-colors duration-500"
          style={{ backgroundColor: theme.color, color: theme.onColor }}
        >
          <Search className="h-4 w-4" aria-hidden />
          Pesquisar
        </button>
      </div>

      {focused && query.trim() ? (
        <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-border bg-background shadow-lg">
          {matches.length ? (
            <ul>
              {matches.map((s) => (
                <li key={s.slug}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      goToSegment(s.slug);
                      setQuery("");
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-brand-dark transition-colors hover:bg-brand-soft"
                  >
                    <Search className="h-3.5 w-3.5 text-brand-text/50" aria-hidden />
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-brand-text">
              Nenhum segmento encontrado. Fale com um especialista!
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
