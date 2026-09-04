import type { LucideIcon } from "lucide-react";
import { Package, FileText, BarChart3, Bike, ShoppingCart, Layers } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

interface NodeItem {
  label: string;
  icon: LucideIcon;
  color: string;
  positionClass: string;
}

const NODES: NodeItem[] = [
  { label: "Estoque", icon: Package, color: "bg-brand-blue", positionClass: "left-1/2 top-[6%] -translate-x-1/2 -translate-y-1/2" },
  { label: "Notas Fiscais", icon: FileText, color: "bg-brand-yellow", positionClass: "left-[82%] top-[27%] -translate-x-1/2 -translate-y-1/2" },
  { label: "Relatórios", icon: BarChart3, color: "bg-brand-green", positionClass: "left-[82%] top-[73%] -translate-x-1/2 -translate-y-1/2" },
  { label: "Delivery", icon: Bike, color: "bg-brand-red", positionClass: "left-1/2 top-[94%] -translate-x-1/2 -translate-y-1/2" },
  { label: "PDV", icon: ShoppingCart, color: "bg-brand-yellow", positionClass: "left-[18%] top-[73%] -translate-x-1/2 -translate-y-1/2" },
  { label: "Integrações", icon: Layers, color: "bg-brand-dark", positionClass: "left-[18%] top-[27%] -translate-x-1/2 -translate-y-1/2" },
];

export function Dominus() {
  return (
    <section id="parceiro" className="overflow-hidden bg-white px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          <div className="text-left">
            <h2 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl lg:text-4xl">
              Seu negócio mais <span className="italic text-brand-blue">rápido</span>, seu dia mais{" "}
              <span className="italic text-brand-green">produtivo</span>!
            </h2>
            <p className="mt-4 max-w-xl text-base text-brand-text sm:text-lg">
              O Dominus centraliza a operação da sua empresa: tudo conversa com tudo, sem retrabalho e
              sem planilhas soltas.
            </p>

            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-brand-green px-8 py-3.5 font-display text-sm font-semibold text-white shadow-md transition-all hover:brightness-95 hover:shadow-lg"
              >
                Falar com um especialista
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-brand-blue/30" />
            
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-4 shadow-[0_15px_45px_-10px_rgba(47,180,233,0.4)] ring-4 ring-brand-blue/15 sm:h-36 sm:w-36 sm:p-5">
              <img
                src="/Logo-dominus.png"
                alt="Dominus — ERP Waybit"
                className="w-full object-contain"
              />
            </div>

            {NODES.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.label}
                  className={`absolute flex flex-col items-center gap-1.5 ${n.positionClass}`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${n.color} shadow-md transition-transform hover:scale-110 sm:h-14 sm:w-14`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-brand-dark shadow-sm sm:text-xs">
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

{/*import { contact } from "@/content/home";
import { Container } from "./shared";

export function Dominus() {
  return (
    <section className="bg-background pb-4 lg:pb-6" aria-label="Sistema Dominus">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Sistema Dominus
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-2xl font-bold text-brand-dark sm:text-3xl lg:text-4xl">
          Gestão simplificada de estoque, vendas e finanças para o seu negócio.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-brand-text sm:text-lg">
          Um sistema completo e fácil de usar, feito para quem quer crescer sem
          complicar a rotina.
        </p>
        {/*<a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-brand-green px-8 py-3 font-display text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
        >
          Conhecer o Dominus
        </a>
      </Container>
    </section>
  );
}*/}
