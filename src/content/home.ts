import bannerRed from "../assets/banner-red.png.asset.json";
import bannerBlue from "../assets/banner-blue.png.asset.json";
import bannerYellow from "../assets/banner-yellow.png.asset.json";
import logoDaorla from "../assets/logo-daorla.jpg.asset.json";
import logoGraos from "../assets/logo-graos.jpg.asset.json";
import logoZumzum from "../assets/logo-zumzum.jpg.asset.json";

export type HeroThemeId = "red" | "blue" | "yellow";

export interface HeroTheme {
  id: HeroThemeId;
  /** Tailwind-ready CSS color (semantic token). */
  color: string;
  /** Text color that stays legible on top of `color`. */
  onColor: string;
  banner: string;
  alt: string;
}

/** Order requested by the client: vermelho → azul → amarelo → vermelho… */
export const heroThemes: HeroTheme[] = [
  {
    id: "red",
    color: "var(--color-brand-red)",
    onColor: "#ffffff",
    banner: bannerRed.url,
    alt: "Chef de cozinha trabalhando com fogo em cozinha profissional",
  },
  {
    id: "blue",
    color: "var(--color-brand-blue)",
    onColor: "#ffffff",
    banner: bannerBlue.url,
    alt: "Empreendedora organizando araras em loja de roupas",
  },
  {
    id: "yellow",
    color: "var(--color-brand-yellow)",
    onColor: "var(--color-brand-dark)",
    banner: bannerYellow.url,
    alt: "Mecânico polindo um carro em autocenter",
  },
];

export type SegmentIconKey =
  | "beer"
  | "coffee"
  | "cup-soda"
  | "beef"
  | "package"
  | "sandwich"
  | "utensils-crossed"
  | "drumstick"
  | "pizza"
  | "store"
  | "chef-hat"
  | "fish"
  | "bike"
  | "apple"
  | "footprints"
  | "smartphone"
  | "candy"
  | "monitor"
  | "shirt"
  | "paint-bucket"
  | "shopping-bag"
  | "hard-hat"
  | "zap"
  | "shopping-cart"
  | "croissant"
  | "notebook-pen"
  | "fish-symbol"
  | "spray-can"
  | "ice-cream";

export interface SegmentItem {
  name: string;
  slug: string;
  icon: SegmentIconKey;
}

export interface SegmentCategory {
  name: string;
  items: SegmentItem[];
}

export const segmentCategories: SegmentCategory[] = [
  {
    name: "Alimentação",
    items: [
      { name: "Boteco", slug: "boteco", icon: "beer" },
      { name: "Cafeteria", slug: "cafeteria", icon: "coffee" },
      { name: "Choperia", slug: "choperia", icon: "cup-soda" },
      { name: "Churrascaria", slug: "churrascaria", icon: "beef" },
      { name: "Delivery", slug: "delivery", icon: "package" },
      { name: "Hamburgueria", slug: "hamburgueria", icon: "sandwich" },
      { name: "Lanchonete", slug: "lanchonete", icon: "utensils-crossed" },
      { name: "Petiscaria", slug: "petiscaria", icon: "drumstick" },
      { name: "Pizzaria", slug: "pizzaria", icon: "pizza" },
      { name: "Quiosque", slug: "quiosque", icon: "store" },
      { name: "Restaurante", slug: "restaurante", icon: "chef-hat" },
      { name: "Sushibar", slug: "sushibar", icon: "fish" },
    ],
  },
  {
    name: "Varejo em geral",
    items: [
      { name: "Bicicletaria", slug: "bicicletaria", icon: "bike" },
      { name: "Hortifruti", slug: "hortifruti", icon: "apple" },
      { name: "Loja de Calçados", slug: "loja-de-calcados", icon: "footprints" },
      { name: "Celular", slug: "celular", icon: "smartphone" },
      { name: "Doces", slug: "doces", icon: "candy" },
      { name: "Informática", slug: "informatica", icon: "monitor" },
      { name: "Roupas", slug: "roupas", icon: "shirt" },
      { name: "Tintas", slug: "tintas", icon: "paint-bucket" },
      { name: "Variedades", slug: "variedades", icon: "shopping-bag" },
      { name: "Material de Construção", slug: "material-de-construcao", icon: "hard-hat" },
      { name: "Material Elétrico", slug: "material-eletrico", icon: "zap" },
      { name: "Minimercado", slug: "minimercado", icon: "shopping-cart" },
      { name: "Padaria", slug: "padaria", icon: "croissant" },
      { name: "Papelaria", slug: "papelaria", icon: "notebook-pen" },
      { name: "Peixaria", slug: "peixaria", icon: "fish-symbol" },
      { name: "Perfumaria", slug: "perfumaria", icon: "spray-can" },
      { name: "Sorveteria", slug: "sorveteria", icon: "ice-cream" },
    ],
  },
];

export const allSegments: SegmentItem[] = segmentCategories.flatMap((c) => c.items);

export type MetricIconKey = "timer" | "people" | "star" | "cake";

export interface Metric {
  icon: MetricIconKey;
  value: string;
  prefix: string;
  suffix: string;
}

export const metrics: Metric[] = [
  { icon: "timer", value: "30", prefix: "+De", suffix: "% economia de tempo" },
  { icon: "people", value: "1.000", prefix: "+De", suffix: "clientes" },
  { icon: "star", value: "9.6", prefix: "+De", suffix: "/10 satisfação" },
  { icon: "cake", value: "15", prefix: "+De", suffix: "anos" },
];

export interface DominusBenefit {
  icon: SegmentIconKey;
  title: string;
  help: string;
  benefit: string;
  result: string;
}

export const dominusBenefits: DominusBenefit[] = [
  {
    icon: "shopping-cart",
    title: "PDV e vendas",
    help: "Frente de caixa rápida, integrada ao estoque e ao financeiro.",
    benefit: "Venda mais com menos erros e filas menores.",
    result: "Mais tempo para atender bem o seu cliente.",
  },
  {
    icon: "package",
    title: "Estoque",
    help: "Controle de entradas, saídas e inventário em tempo real.",
    benefit: "Nada de perder venda por falta de produto.",
    result: "Compras certas e capital de giro saudável.",
  },
  {
    icon: "zap",
    title: "Financeiro",
    help: "Contas a pagar e receber, fluxo de caixa e relatórios claros.",
    benefit: "Decisões com números, não com achismo.",
    result: "Economia de tempo e mais lucro no fim do mês.",
  },
  {
    icon: "bike",
    title: "Delivery e comandas",
    help: "Pedidos, mesas e entregas organizados em um só lugar.",
    benefit: "Operação redonda do salão à entrega.",
    result: "Clientes satisfeitos e equipe sem estresse.",
  },
];

export interface CustomerCase {
  name: string;
  color: string;
  logo: string;
  logoAlt: string;
  quote: string;
  videoId: string;
}

export const cases: CustomerCase[] = [
  {
    name: "Grãos e Zero Açúcar",
    color: "var(--color-brand-green)",
    logo: logoGraos.url,
    logoAlt: "Logo da Grãos e Zero Açúcar",
    quote:
      "Com o Waybit eu controlo o estoque dos grãos e dos produtos zero açúcar sem complicação. A rotina ficou leve de verdade.",
    videoId: "ugzBfW_pkOo",
  },
  {
    name: "Zum Zum Autocenter",
    color: "var(--color-brand-yellow)",
    logo: logoZumzum.url,
    logoAlt: "Logo do Zum Zum Autocenter",
    quote:
      "O sistema organizou nossas ordens de serviço e o financeiro. Hoje eu sei exatamente quanto entra e sai da oficina.",
    videoId: "5tfA3619NXs",
  },
  {
    name: "DaOrla Café",
    color: "var(--color-brand-red)",
    logo: logoDaorla.url,
    logoAlt: "Logo do DaOrla Café",
    quote:
      "Do caixa às comandas, tudo conversa entre si. Atendemos mais clientes com a mesma equipe e sem correria, só com Dominus.",
    videoId: "ea7aOYtaCuA",
  },
];

export const contact = {
  phone: "(21) 97581-2676",
  phoneHref: "tel:+5521975812676",
  email: "comercial@waybit.com.br",
  whatsapp: "https://wa.me/5521975812676",
  facebook: "https://www.facebook.com/waybit",
  instagram: "https://www.instagram.com/waybit",
  faq: "https://waybit.com.br/faq/",
  helpCenter: "https://waybit.com.br/central-de-ajuda/",
  support: "https://waybit.com.br/suporte/",
};

export const navLinks = [
  { label: "Integrações", href: "https://waybit.com.br/integracoes/" },
  { label: "Seja um Parceiro", href: "https://waybit.com.br/seja-um-parceiro/" },
  { label: "Planos", href: "https://waybit.com.br/planos/" },
  { label: "Blogs", href: "https://waybit.com.br/blog/" },
];
