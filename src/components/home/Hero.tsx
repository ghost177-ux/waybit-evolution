import { useEffect, useState } from "react";
import {
  Car,
  ChefHat,
  Coffee,
  Package,
  Settings,
  ShoppingBag,
  Store,
  Utensils,
  Wrench,
  type LucideIcon,
} from "lucide-react";
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
const segmentDecorations: Record<string, LucideIcon[]> = {
  food: [Utensils, Coffee, ChefHat],
  varejo: [ShoppingBag, Store, Package],
  autocenter: [Wrench, Car, Settings],
};

const carouselSlides = [assets[assets.length - 1]!, ...assets, assets[0]!];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((index) => index + 1);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const realIndex = (currentIndex - 1 + assets.length) % assets.length;
  const currentSegment = assets[realIndex] ?? assets[0]!;
  const SegmentIcon = segmentIcons[currentSegment.id] ?? ChefHat;
  const decorationIcons = segmentDecorations[currentSegment.id] ?? [SegmentIcon];
  const FirstDecoration = decorationIcons[0] ?? SegmentIcon;
  const SecondDecoration = decorationIcons[1] ?? SegmentIcon;
  const ThirdDecoration = decorationIcons[2] ?? SegmentIcon;

  const selectSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  const handleTrackTransitionEnd = () => {
    if (currentIndex === carouselSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  return (
    <section
      className={`relative min-h-[80vh] w-full overflow-hidden transition-colors duration-700 ${currentSegment.bgTint}`}
      aria-label="Apresentação"
    >
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-10 px-6 pb-10 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
        <div>
          <h1 className="max-w-xl font-display text-4xl font-bold leading-tight text-slate-800 sm:text-5xl lg:text-[3.45rem] lg:leading-[1.1]">
            A rotina da sua empresa <span className={currentSegment.vibrantColor}>leve</span> e com
            menos <span className={currentSegment.vibrantColor}>esforço.</span>
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
                aria-current={itemIndex === realIndex}
                onClick={() => selectSlide(itemIndex)}
                className={`h-2 rounded-full transition-all duration-500 ${itemIndex === realIndex ? currentSegment.solidBg : "bg-slate-300"}`}
                style={{
                  width: itemIndex === realIndex ? "2rem" : "0.5rem",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-[min(62vh,560px)] min-h-[420px] w-full max-w-xl items-end justify-end overflow-visible pt-6">
          <div
            className="pointer-events-none absolute right-1/2 top-6 z-20 grid grid-cols-5 gap-1.5 opacity-45 text-current lg:right-8"
            aria-hidden
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-sm bg-current ${currentSegment.vibrantColor}`}
              />
            ))}
          </div>
          <div className="absolute bottom-0 right-4 aspect-square w-[min(88%,420px)] rounded-3xl border-2 border-white/70 bg-transparent">
            <div
              className={`absolute inset-0 rounded-3xl transition-colors duration-700 ${currentSegment.solidBg}`}
            />
          </div>
          <div
            className={`absolute inset-x-0 bottom-0 z-10 h-full overflow-hidden ${isTransitioning ? "transition-transform duration-700 ease-out" : "transition-none"}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            <div className="flex h-full w-full">
              {carouselSlides.map((slide, slideIndex) => (
                <div
                  key={`${slide.id}-${slideIndex}`}
                  className="relative flex h-full min-w-full items-end justify-center lg:justify-end"
                >
                  <img
                    src={slide.imagePath}
                    alt={`${slide.name} - imagem do segmento`}
                    className="h-full max-h-full w-auto max-w-full object-contain object-bottom lg:max-w-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className={`pointer-events-none absolute inset-0 z-20 ${currentSegment.vibrantColor}`}
            aria-hidden
          >
            <FirstDecoration className="absolute bottom-[16%] left-[6%] h-5 w-5" />
            <SecondDecoration className="absolute right-[7%] top-[28%] h-5 w-5" />
            <ThirdDecoration className="absolute bottom-[8%] right-[18%] h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
