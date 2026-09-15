import { useEffect, useState } from "react";
import heroAssets from "@/assets/assets.json";
import { Header } from "./Header";
import { SegmentSearch } from "./SegmentSearch";

const ROTATE_MS = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroAssets.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, []);

  const asset = heroAssets[index] ?? heroAssets[0]!;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: asset.bgTint }}
      aria-label="Apresentação"
    >
      <Header />
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-36 lg:grid-cols-2 lg:gap-20 lg:pt-40">
        <div>
          <p className="mb-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Sistema de gestão empresarial
          </p>
          <h1 className="max-w-xl font-display text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-[3.45rem] lg:leading-[1.1]">
            A rotina da sua empresa <span style={{ color: asset.vibrantColor }}>leve</span> e com menos <span style={{ color: asset.vibrantColor }}>esforço.</span>
          </h1>
          <SegmentSearch placeholder={asset.placeholder} color={asset.solidBg} onColor={asset.onColor} />
          <div className="mt-8 flex items-center gap-2" aria-label="Navegação dos segmentos">
            {heroAssets.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Mostrar segmento ${item.label}`}
                aria-current={itemIndex === index}
                onClick={() => setIndex(itemIndex)}
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: itemIndex === index ? "2rem" : "0.5rem",
                  backgroundColor: itemIndex === index ? asset.solidBg : "#cbd5e1",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="relative aspect-square overflow-hidden rounded-3xl" style={{ backgroundColor: asset.solidBg }}>
            <div className="absolute top-12 right-12 grid grid-cols-5 gap-1.5 opacity-40 pointer-events-none">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-sm bg-current text-slate-700" />
              ))}
            </div>
            <img
              src={asset.imagePath}
              alt={asset.alt}
              className="absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
