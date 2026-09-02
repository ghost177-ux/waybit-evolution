import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Apple,
  Beef,
  Beer,
  Bike,
  Candy,
  ChefHat,
  Coffee,
  Croissant,
  CupSoda,
  Drumstick,
  Fish,
  FishSymbol,
  Footprints,
  HardHat,
  IceCreamCone,
  Monitor,
  NotebookPen,
  PaintBucket,
  Package,
  Pizza,
  Sandwich,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  SprayCan,
  Store,
  UtensilsCrossed,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { SegmentIconKey } from "@/content/home";

export const segmentIconMap: Record<SegmentIconKey, LucideIcon> = {
  beer: Beer,
  coffee: Coffee,
  "cup-soda": CupSoda,
  beef: Beef,
  package: Package,
  sandwich: Sandwich,
  "utensils-crossed": UtensilsCrossed,
  drumstick: Drumstick,
  pizza: Pizza,
  store: Store,
  "chef-hat": ChefHat,
  fish: Fish,
  bike: Bike,
  apple: Apple,
  footprints: Footprints,
  smartphone: Smartphone,
  candy: Candy,
  monitor: Monitor,
  shirt: Shirt,
  "paint-bucket": PaintBucket,
  "shopping-bag": ShoppingBag,
  "hard-hat": HardHat,
  zap: Zap,
  "shopping-cart": ShoppingCart,
  croissant: Croissant,
  "notebook-pen": NotebookPen,
  "fish-symbol": FishSymbol,
  "spray-can": SprayCan,
  "ice-cream": IceCreamCone,
};

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-brand-text sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
