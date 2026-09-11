import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  MapPinned,
  MessageSquareText,
  PackageCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

import LogoDominus from "../assets/Logo-dominus.png";
import LogoWhite from "../assets/Logo-White.png";
import apresentFundo from "../assets/apresent-fundo.jpg.asset.json";
import apresent from "../assets/apresent.png.asset.json";
import suportePessoa from "../assets/suporte-pessoa.png.asset.json";
import { Container, SectionHeading } from "@/components/home/shared";

export const Route = createFileRoute("/restaurante")({
  head: () => ({
    meta: [
      { title: "Sistema para Restaurante | Dominus Food | Waybit" },
      {
        name: "description",
        content:
          "Sistema de gestão para restaurantes com PDV, estoque, financeiro, delivery e visão completa da operação. Conheça o Dominus Food.",
      },
      {
        property: "og:title",
        content: "Sistema para Restaurante | Dominus Food | Waybit",
      },
      {
        property: "og:description",
        content:
          "Controle de vendas, estoque, financeiro e operação em um só sistema para restaurantes. Descubra o Dominus Food.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RestaurantePage,
});

const stats = [
  { value: "+30%", label: "de economia de tempo" },
  { value: "+1.000", label: "clientes atendidos" },
  { value: "9.6/10", label: "nota média de satisfação" },
  { value: "15 anos", label: "de experiência em gestão" },
];

const audience = [
  {
    title: "Dono de restaurante",
    description:
      "Quem precisa acompanhar o negócio em tempo real e manter o controle da operação sem depender de improviso.",
    icon: Building2,
  },
  {
    title: "Gestor ou gerente",
    description:
      "Quem precisa organizar pedidos, estoque, caixa e indicadores para tomar decisões com mais clareza.",
    icon: Users,
  },
  {
    title: "Pequenos restaurantes",
    description:
      "Quem quer crescer com estrutura, menos erros e uma operação mais organizada no dia a dia.",
    icon: Store,
  },
];

const problems = [
  {
    title: "Perda de dinheiro e desperdício",
    description:
      "Sem controle, é fácil perder faturamento, esquecer lançamentos e deixar o restaurante operar com custos desnecessários.",
    icon: WalletCards,
  },
  {
    title: "Processos manuais e lentos",
    description:
      "Tarefas repetitivas e espalhadas ao longo do dia consomem tempo da equipe e diminuem a eficiência da operação.",
    icon: Clock3,
  },
  {
    title: "Financeiro desorganizado",
    description:
      "Dificuldade para acompanhar entradas, saídas, caixa e resultados reais atrapalha a gestão e a tomada de decisão.",
    icon: CircleDollarSign,
  },
  {
    title: "Falta de controle da operação",
    description:
      "Informações espalhadas entre mesas, estoque e vendas dificultam o acompanhamento do desempenho do restaurante.",
    icon: BarChart3,
  },
];

const features = [
  {
    title: "PDV e vendas",
    description:
      "Acompanhe vendas, caixas e movimentações do restaurante com agilidade e menos erros no atendimento.",
    icon: Sparkles,
  },
  {
    title: "Estoque e compras",
    description:
      "Tenha controle de entradas, saídas, reposição e desperdício com visão clara do que movimenta o negócio.",
    icon: PackageCheck,
  },
  {
    title: "Financeiro",
    description:
      "Organize contas a pagar, contas a receber, fluxo de caixa e relatórios para tomar decisões com segurança.",
    icon: WalletCards,
  },
  {
    title: "Delivery e comandas",
    description:
      "Centralize pedidos, entregas e mesas para reduzir falhas e melhorar a experiência do cliente.",
    icon: MapPinned,
  },
  {
    title: "Relatórios em tempo real",
    description:
      "Veja faturamento, produtos mais vendidos e desempenho do restaurante para agir com rapidez e precisão.",
    icon: TrendingUp,
  },
  {
    title: "Suporte especializado",
    description:
      "Conte com apoio técnico e atendimento para manter sua operação funcionando com estabilidade e confiança.",
    icon: MessageSquareText,
  },
];

const benefits = [
  {
    title: "Mais controle",
    description: "Estoque, finanças e operação conectados em uma rotina única e mais clara.",
  },
  {
    title: "Mais organização",
    description: "Processos mais simples, equipes menos sobrecarregadas e menos improviso no dia a dia.",
  },
  {
    title: "Mais agilidade",
    description: "Atendimento e tomada de decisão com velocidade, sem perder qualidade e consistência.",
  },
  {
    title: "Mais previsibilidade",
    description: "Decisões com base em dados, melhor visão do negócio e menos risco de prejuízo.",
  },
];

const proofItems = [
  {
    title: "Controle do restaurante",
    text: "Organize vendas, estoque e financeiro em um só lugar, sem depender de vários sistemas para tomar decisões.",
  },
  {
    title: "Operação mais eficiente",
    text: "A equipe ganha mais agilidade, reduz erros e consegue atender melhor os clientes com menos retrabalho.",
  },
  {
    title: "Visão do negócio",
    text: "Acompanhe indicadores reais, entenda o desempenho e tome decisões com mais segurança e confiança.",
  },
];

function RestaurantePage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#2b2b2b]">
      <header className="sticky top-0 z-50 border-b border-[#2b2b2b]/10 bg-[#171717]/90 backdrop-blur-sm">
        <Container className="flex items-center justify-between gap-4 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={LogoDominus} alt="Dominus Food" className="h-10 w-auto" />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
            <a href="#inicio" className="transition hover:text-white">
              Início
            </a>
            <a href="#funcionalidades" className="transition hover:text-white">
              Funcionalidades
            </a>
            <a href="#beneficios" className="transition hover:text-white">
              Benefícios
            </a>
            <a href="#depoimentos" className="transition hover:text-white">
              Depoimentos
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
            >
              Fale com um especialista
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-[#FC4242] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(252,66,66,0.28)] transition hover:bg-[#e63737]"
            >
              Agende uma demonstração
            </a>
          </div>
        </Container>
      </header>

      <main id="top">
        <section
          id="inicio"
          className="relative overflow-hidden bg-[#171717] py-16 text-white lg:py-20"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(23, 23, 23, 0.96) 0%, rgba(23, 23, 23, 0.76) 42%, rgba(23, 23, 23, 0.48) 100%), url(${apresentFundo.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#FC4242]/30 bg-[#FC4242]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffb5b5]">
                Sistema de gestão para restaurantes
              </p>

              <h1 className="mt-6 max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Mais controle para o seu restaurante crescer.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                O Dominus Food foi pensado para donos, gestores e gerentes de restaurantes que querem organizar
                vendas, estoque, financeiro e operação em um único sistema, com menos improviso e mais eficiência.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full bg-[#FC4242] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(252,66,66,0.28)] transition hover:bg-[#e63737]"
                >
                  Agende uma demonstração
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Fale com um especialista
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-white/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[760px]">
              <div className="absolute inset-0 rounded-[2rem] bg-[#FC4242]/20 blur-3xl" />
              <div className="relative flex items-center justify-center">
                <img
                  src={apresent.url}
                  alt="Dashboard do Dominus Food"
                  className="w-full max-w-[760px] rounded-[2rem] border border-white/10 bg-[#1f1f1f] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.40)]"
                />
                <img
                  src={suportePessoa.url}
                  alt="Pessoa usando o sistema"
                  className="absolute -bottom-4 right-0 w-32 rounded-[1.5rem] border border-white/10 bg-white/5 p-1 shadow-[0_18px_50px_rgba(0,0,0,0.30)] sm:w-40"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f2f2f2] py-16 lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Para quem é? <span className="text-[#FC4242]">Quem vive essa rotina</span>
                </>
              }
              subtitle="O Dominus Food foi desenhado para donos, gestores e gerentes de restaurantes que precisam organizar a operação e crescer com mais clareza."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {audience.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[1.5rem] border border-[#e3e3e3] bg-white p-6 shadow-[0_12px_30px_rgba(31,31,31,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1f1] text-[#FC4242]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#1f1f1f]">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4b4b4b]">{description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#2b2b2b] py-16 text-white lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Seu restaurante está realmente <span className="text-[#FC4242]">sob controle?</span>
                </>
              }
              subtitle="A maioria dos problemas de restaurante não começa no atendimento — começa na falta de visão, organização e processos claros."
              className="text-white"
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {problems.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC4242]/15 text-[#FC4242]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d8d8d8]">{description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="funcionalidades" className="bg-white py-16 lg:py-20">
          <Container className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FC4242]">A solução</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-[#1f1f1f] sm:text-4xl">
                Tenha tudo o que precisa para gerir seu restaurante em um só lugar.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#4b4b4b]">
                O Dominus Food centraliza a gestão do restaurante e ajuda você a controlar vendas, estoque,
                financeiro, operações e decisões com mais clareza, rapidez e previsibilidade.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#FC4242]" />
                  <p className="text-[#4b4b4b]">
                    Mais organização para o dia a dia, com menos improviso e menos retrabalho.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] p-4">
                  <TrendingUp className="mt-0.5 h-5 w-5 text-[#FC4242]" />
                  <p className="text-[#4b4b4b]">
                    Mais agilidade no atendimento, menos erro e mais capacidade de crescer com segurança.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f8f8f8] p-6 shadow-[0_12px_30px_rgba(31,31,31,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC4242]/10 text-[#FC4242]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#1f1f1f]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4b4b4b]">{description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f2f2f2] py-16 lg:py-20">
          <Container>
            <div className="rounded-[2rem] border border-[#e6e6e6] bg-white p-8 shadow-[0_20px_50px_rgba(31,31,31,0.05)] lg:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FC4242]">
                    Sistema na prática
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-bold text-[#1f1f1f] sm:text-4xl">
                    Tudo o que você precisa para acompanhar seu restaurante, em um só lugar.
                  </h2>
                </div>
                <div className="inline-flex items-center rounded-full bg-[#fff1f1] px-4 py-2 text-sm font-semibold text-[#FC4242]">
                  Mais controle. Mais organização. Mais eficiência.
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f9f9f9] p-6">
                  <ul className="space-y-4 text-[#4b4b4b]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ✓
                      </span>
                      <span>Dashboard com visão geral do restaurante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ✓
                      </span>
                      <span>Vendas, pedidos e movimentação em tempo real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ✓
                      </span>
                      <span>Controle de estoque, financeiro e operação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ✓
                      </span>
                      <span>Relatórios para decisões com mais segurança</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f5f5f5] p-3 shadow-[0_20px_50px_rgba(31,31,31,0.15)]">
                  <img
                    src={apresent.url}
                    alt="Sistema Dominus Food em dispositivo"
                    className="w-full rounded-[1rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="beneficios" className="bg-white py-16 lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  O que você ganha com o <span className="text-[#FC4242]">Dominus Food</span>
                </>
              }
              subtitle="O objetivo do sistema não é apenas automatizar tarefas. É transformar a operação em algo mais previsível, eficiente e lucrativo."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f8f8f8] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC4242]/10 text-[#FC4242]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#1f1f1f]">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4b4b4b]">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="depoimentos" className="bg-[#2b2b2b] py-16 text-white lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Quem usa, <span className="text-[#FC4242]">confia</span>
                </>
              }
              subtitle="A confiança vem de uma experiência clara, útil e fácil de entender na prática."
              className="text-white"
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {proofItems.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                    <MessageSquareText className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#d8d8d8]">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contato" className="bg-[#FC4242] py-16 text-white lg:py-20">
          <Container className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffe2e2]">
              Vamos simplificar sua operação
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Seu restaurante pode ter mais controle. Comece agora.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#ffe2e2]">
              Fale com um especialista e entenda como o Dominus Food pode ajudar seu restaurante a operar melhor,
              reduzir desperdício e crescer com mais segurança.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5521975812676"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#f6f6f6]"
              >
                Agende uma demonstração
              </a>
              <a
                href="tel:+5521975812676"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Fale com um especialista
              </a>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#e6e6e6] bg-white py-10">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={LogoWhite} alt="Dominus Food" className="h-10 w-auto rounded-md bg-[#171717] p-1" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FC4242]">Dominus Food</p>
              <p className="text-sm text-[#4b4b4b]">A gestão do seu restaurante, em um só lugar.</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-sm text-[#4b4b4b]">
            <a href="#inicio" className="transition hover:text-[#FC4242]">
              Início
            </a>
            <a href="#funcionalidades" className="transition hover:text-[#FC4242]">
              Funcionalidades
            </a>
            <a href="#beneficios" className="transition hover:text-[#FC4242]">
              Benefícios
            </a>
            <a href="#contato" className="transition hover:text-[#FC4242]">
              Contato
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
