import { useEffect, useState } from "react";
import { ChefHat, ShoppingBag, Wrench, type LucideIcon } from "lucide-react";
import heroAssets from "@/assets/assets.json";
import { SegmentSearch } from "./SegmentSearch";

const ROTATE_MS = 5000;

type HeroAsset = {
  id: string;
  name: string;
  colorTheme: string;
  bgTint: string;
  vibrantColor: string;
  solidBg: string;
  imagePath: string;
  placeholder: string;
};

const assets = heroAssets.heroSegments as HeroAsset[];
const segmentIcons: Record<string, LucideIcon> = {
  food: ChefHat,
  varejo: ShoppingBag,
  autocenter: Wrench,
};

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % assets.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, []);

  const currentSegment = assets[index] ?? assets[0]!;
  const SegmentIcon = segmentIcons[currentSegment.id] ?? ChefHat;

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden ${currentSegment.bgTint}`}
      aria-label="Apresentação"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-36 lg:grid-cols-2 lg:gap-20 lg:pt-40">
        <div>
          <div className={`mb-4 flex items-center gap-3 ${currentSegment.vibrantColor}`}>
            <SegmentIcon className="h-7 w-7" aria-hidden />
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              {currentSegment.name} | Sistema de gestão empresarial
            </p>
          </div>
          <h1 className="max-w-xl font-display text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-[3.45rem] lg:leading-[1.1]">
            A rotina da sua empresa <span className={currentSegment.vibrantColor}>leve</span> e com menos <span className={currentSegment.vibrantColor}>esforço.</span>
          </h1>
          <SegmentSearch
            placeholder={currentSegment.placeholder}
            colorClass={currentSegment.solidBg}
          />
          <div className="mt-8 flex items-center gap-2" aria-label="Navegação dos segmentos">
            {assets.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Mostrar segmento ${item.name}`}
                aria-current={itemIndex === index}
                onClick={() => setIndex(itemIndex)}
                className={`h-2 rounded-full transition-all duration-500 ${itemIndex === index ? currentSegment.solidBg : "bg-slate-300"}`}
                style={{
                  width: itemIndex === index ? "2rem" : "0.5rem",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto min-h-[520px] w-full max-w-xl">
          <div className={`absolute bottom-8 right-0 h-[390px] w-full max-w-[420px] rounded-3xl ${currentSegment.solidBg}`}>
            <div className="pointer-events-none absolute right-12 top-12 grid grid-cols-5 gap-1.5 opacity-40">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-sm bg-current text-slate-700" />
              ))}
            </div>
          </div>
          <img
            src={currentSegment.imagePath}
            alt={`${currentSegment.name} - imagem do segmento`}
            className="absolute bottom-0 left-1/2 z-10 h-[500px] w-auto max-w-none -translate-x-1/2 object-contain lg:right-0 lg:left-auto lg:translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
