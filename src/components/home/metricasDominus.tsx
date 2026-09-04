import type { LucideIcon } from "lucide-react";
import { Package, FileText, BarChart3, Bike, ShoppingCart, Layers } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import dominusLogoAsset from "@/assets/dominus-logo.png.asset.json";

interface Node {
  label: string;
  icon: LucideIcon;
  color: string;
  angle: number; // graus, 0 = topo
}

const NODES: Node[] = [
  { label: "Estoque", icon: Package, color: "bg-waybit-cyan", angle: 0 },
  { label: "Notas Fiscais", icon: FileText, color: "bg-waybit-yellow", angle: 60 },
  { label: "Relatórios", icon: BarChart3, color: "bg-waybit-green", angle: 120 },
  { label: "Delivery", icon: Bike, color: "bg-waybit-red", angle: 180 },
  { label: "PDV", icon: ShoppingCart, color: "bg-waybit-orange", angle: 240 },
  { label: "Integrações", icon: Layers, color: "bg-waybit-navy", angle: 300 },
];

function position(angleDeg: number, radiusPct: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    left: `${50 + radiusPct * Math.cos(rad + Math.PI / 2)}%`,
    top: `${50 + radiusPct * Math.sin(rad + Math.PI / 2)}%`,
  };
}

export function Dominus() {
  return (
    <section id="parceiro" className="overflow-hidden bg-white px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Grid de 2 colunas: Texto à esquerda, Diagrama à direita */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Coluna da Esquerda: Título, Subtítulo e CTA alinhados à esquerda */}
          <div className="text-left">
            <h2 className="font-display text-3xl font-bold text-waybit-dark sm:text-4xl lg:text-4xl">
              Seu negócio mais <span className="italic text-waybit-cyan">rápido</span>, seu dia mais{" "}
              <span className="italic text-waybit-green">produtivo</span>!
            </h2>
            <p className="mt-4 max-w-xl text-base text-waybit-dark/65 sm:text-lg">
              O Dominus centraliza a operação da sua empresa: tudo conversa com tudo, sem retrabalho e
              sem planilhas soltas.
            </p>

            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-waybit-green px-8 py-3.5 font-display text-sm font-semibold text-white shadow-md transition-all hover:brightness-95 hover:shadow-lg"
              >
                Falar com um especialista
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Diagrama Circular */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-waybit-cyan/30" />
            
            {/* Centro */}
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-4 shadow-[0_15px_45px_-10px_rgba(47,180,233,0.4)] ring-4 ring-waybit-cyan/15 sm:h-36 sm:w-36 sm:p-5">
              <img
                src={dominusLogoAsset.url}
                alt="Dominus — ERP Waybit"
                className="w-full object-contain"
              />
            </div>

            {/* Nós */}
            {NODES.map((n) => {
              const Icon = n.icon;
              const pos = position(n.angle, 38);
              return (
                <div
                  key={n.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                  style={pos}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${n.color} shadow-md transition-transform hover:scale-110 sm:h-14 sm:w-14`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-waybit-dark shadow-sm sm:text-xs">
                    {n.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
