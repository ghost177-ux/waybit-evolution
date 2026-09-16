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
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 pb-10 pt-40 lg:grid-cols-[44%_56%] lg:gap-0 lg:py-24">
        <div className="relative z-30 min-w-0 pr-0 lg:pr-12">
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

        <div className="relative mx-auto flex h-[360px] min-h-[320px] w-full max-w-[580px] items-end justify-end overflow-visible pl-4 pt-8 lg:h-[min(64vh,580px)] lg:min-h-[440px] lg:pl-8">
          {/* Quadrado arredondado como fundo */}
          <div className="absolute bottom-[6%] right-[8%] z-0 aspect-square w-[min(58%,330px)]">
            <div
              className={`absolute inset-0 rounded-3xl border-2 border-white/70 shadow-[0_18px_45px_-30px_rgba(31,58,113,0.5)] transition-colors duration-700 ${currentSegment.solidBg}`}
            />
          </div>

          {/* Imagens do carrossel: maiores que o quadrado, centralizadas e alinhadas à base */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div
              className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-out" : "transition-none"}`}
              style={{
                width: `${carouselSlides.length * 100}%`,
                transform: `translateX(-${currentIndex * (100 / carouselSlides.length)}%)`,
              }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {carouselSlides.map((slide, slideIndex) => (
                <div
                  key={`${slide.id}-${slideIndex}`}
                  className="relative h-full shrink-0"
                  style={{ width: `${100 / carouselSlides.length}%` }}
                >
                  <div className="absolute inset-y-0 right-[8%] flex w-[min(58%,330px)] items-end justify-center">
                    <img
                      src={slide.imagePath}
                      alt={`${slide.name} - imagem do segmento`}
                      className="h-full w-auto max-w-none object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pontilhado fora do quadrado, flutuando acima dele */}
          <div
            className={`pointer-events-none absolute bottom-[6%] right-[8%] z-30 aspect-square w-[min(58%,330px)] ${currentSegment.vibrantColor}`}
            aria-hidden
          >
            <div className="absolute bottom-[calc(100%+32px)] right-4 grid grid-cols-5 gap-1.5 opacity-70">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-sm bg-current" />
              ))}
            </div>
          </div>

          <div
            className={`pointer-events-none absolute inset-0 z-20 ${currentSegment.vibrantColor}`}
            aria-hidden
          >
            <FirstDecoration className="absolute left-[16%] top-[10%] h-5 w-5" />
            <SecondDecoration className="absolute bottom-[28%] left-[7%] h-5 w-5" />
            <ThirdDecoration className="absolute right-[4%] top-[30%] h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
