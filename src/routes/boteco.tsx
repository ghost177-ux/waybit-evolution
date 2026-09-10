import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Beer,
  Clock3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

import logoDominusFood from "../assets/logo-dominus-food.png.asset.json";
import { Container, SectionHeading } from "@/components/home/shared";

export const Route = createFileRoute("/boteco")({
  head: () => ({
    meta: [
      { title: "Dominus Food para Boteco | Waybit" },
      {
        name: "description",
        content:
          "Sistema para boteco com PDV, estoque, financeiro, delivery e gestão simples. Conheça o Dominus Food e transforme sua operação.",
      },
      {
        property: "og:title",
        content: "Dominus Food para Boteco | Waybit",
      },
      {
        property: "og:description",
        content:
          "Sistema para boteco com controle de caixa, estoque, financeiro, delivery e operação mais eficiente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BotecoPage,
});

const audience = [
  {
    title: "Botequim tradicional",
    description: "Quem trabalha com mesas, balcão, cardápio fixo e precisa manter o ritmo sem perder controle.",
    icon: Beer,
  },
  {
    title: "Boteco com delivery",
    description: "Quem vende por delivery e precisa organizar pedidos, estoque e atendimentos sem confusão.",
    icon: TrendingUp,
  },
  {
    title: "Empreendedor em crescimento",
    description: "Quem quer escalar o negócio com menos retrabalho, mais previsibilidade e melhor processo.",
    icon: Users,
  },
];

const problems = [
  {
    title: "Controle do caixa e vendas sem visibilidade",
    description:
      "Sem um sistema organizado, é fácil perder rendimento, esquecer vendas e ter dificuldade para fechar o dia.",
    icon: WalletCards,
  },
  {
    title: "Estoque e desperdício fora de controle",
    description:
      "Falta de acompanhamento de entradas, saídas e produtos mais vendidos gera prejuízo e demora para reagir.",
    icon: PackageCheck,
  },
  {
    title: "Mesas, comandas e delivery espalhados",
    description:
      "Quando o atendimento fica manual, o ambiente fica mais caótico, a equipe corre mais e o cliente sente.",
    icon: Clock3,
  },
  {
    title: "Decisões sem dados confiáveis",
    description:
      "Sem relatórios claros, o dono fica no improviso, toma decisões pelo “achismo” e perde oportunidades.",
    icon: BarChart3,
  },
];

const features = [
  {
    title: "PDV rápido e intuitivo",
    description: "Atendimento ágil no balcão e nas mesas com menos erro e mais agilidade na operação.",
    icon: Sparkles,
  },
  {
    title: "Controle de estoque em tempo real",
    description: "Acompanhe entradas, saídas, itens mais vendidos e evite faltas e desperdícios.",
    icon: PackageCheck,
  },
  {
    title: "Financeiro organizado",
    description: "Entenda o fluxo de caixa, contas e movimentações com relatórios claros e prontos para decidir.",
    icon: WalletCards,
  },
  {
    title: "Delivery e comandas integrados",
    description: "Centralize pedidos, mesas e entregas em uma única rotina, deixando o atendimento mais eficiente.",
    icon: ArrowRight,
  },
];

const stats = [
  { value: "+30%", label: "mais agilidade no atendimento" },
  { value: "+20%", label: "melhor controle de estoque" },
  { value: "24h", label: "suporte para sua rotina" },
  { value: "1 sistema", label: "para caixa, estoque e financeiro" },
];

function BotecoPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1f1f1f]">
      <header className="sticky top-0 z-50 border-b border-[#e6e6e6] bg-white/90 backdrop-blur-sm">
        <Container className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoDominusFood.url} alt="Logo Dominus Food" className="h-9 w-auto" />
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FC4242]">
                Dominus Food
              </p>
              <p className="text-xs text-[#4b4b4b]">Sistema para boteco</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#4b4b4b] md:flex">
            <a href="#para-quem" className="transition hover:text-[#FC4242]">
              Para quem é
            </a>
            <a href="#problemas" className="transition hover:text-[#FC4242]">
              Problemas
            </a>
            <a href="#solucao" className="transition hover:text-[#FC4242]">
              Solução
            </a>
            <a href="#contato" className="transition hover:text-[#FC4242]">
              Contato
            </a>
          </nav>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-[#d7d7d7] bg-white px-4 py-2 text-sm font-semibold text-[#1f1f1f] transition hover:border-[#FC4242] hover:text-[#FC4242]"
          >
            Voltar para a home
          </Link>
        </Container>
      </header>

      <main>
        <section className="bg-white py-16 lg:py-24">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#ffd1d1] bg-[#fff1f1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#d83838]">
                Sistema para boteco
              </p>

              <h1 className="mt-6 max-w-xl font-display text-4xl font-bold leading-tight text-[#1f1f1f] sm:text-5xl lg:text-6xl">
                A tecnologia que deixa seu boteco mais rápido, organizado e rentável.
              </h1>

              <p className="mt-5 max-w-xl text-lg text-[#4b4b4b]">
                O Dominus Food foi pensado para quem quer controlar caixa, estoque, delivery,
                comandas e a operação do dia a dia sem depender de planilhas e improvisos.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full bg-[#FC4242] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(252,66,66,0.28)] transition hover:bg-[#e63737]"
                >
                  Falar com especialista
                </a>
                <a
                  href="#solucao"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7d7d7] bg-white px-6 py-3 text-sm font-semibold text-[#1f1f1f] transition hover:border-[#FC4242] hover:text-[#FC4242]"
                >
                  Ver solução
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#ececec] bg-[#f8f8f8] p-4">
                    <p className="text-xl font-bold text-[#1f1f1f]">{stat.value}</p>
                    <p className="mt-1 text-sm text-[#4b4b4b]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FC4242]/20 via-transparent to-[#d7d7d7] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#ececec] bg-[#1f1f1f] p-6 text-white shadow-[0_24px_60px_rgba(31,31,31,0.18)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#f5b0b0]">Dashboard</p>
                    <h2 className="mt-2 text-2xl font-bold">Boteco em ação</h2>
                  </div>
                  <div className="rounded-full bg-[#FC4242] px-3 py-1 text-xs font-semibold text-white">
                    Online
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-[#d8d8d8]">
                      <span>Vendas do dia</span>
                      <span className="font-semibold text-white">R$ 8.420</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[72%] rounded-full bg-[#FC4242]" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#2b2b2b] p-4">
                      <p className="text-sm text-[#d8d8d8]">Mesas ativas</p>
                      <p className="mt-2 text-3xl font-bold">18</p>
                    </div>
                    <div className="rounded-2xl bg-[#2b2b2b] p-4">
                      <p className="text-sm text-[#d8d8d8]">Pedidos delivery</p>
                      <p className="mt-2 text-3xl font-bold">32</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#2b2b2b] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#d8d8d8]">Produtos mais vendidos</p>
                      <ShieldCheck className="h-4 w-4 text-[#FC4242]" />
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-white">
                      <li className="flex items-center justify-between">
                        <span>Batata frita</span>
                        <span className="text-[#f5b0b0]">42 itens</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Chopp</span>
                        <span className="text-[#f5b0b0]">39 itens</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Hambúrguer</span>
                        <span className="text-[#f5b0b0]">27 itens</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="para-quem" className="bg-[#f5f5f5] py-16 lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Feito para <span className="text-[#FC4242]">quem vive do boteco</span>
                </>
              }
              subtitle="A rotina de um boteco exige rapidez, organização e boa experiência para o cliente. O Dominus Food foi criado para quem precisa manter tudo funcionando bem, mesmo no volume de pico."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {audience.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-[#e3e3e3] bg-white p-6 shadow-[0_12px_30px_rgba(31,31,31,0.04)]"
                >
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

        <section id="problemas" className="bg-[#1f1f1f] py-16 text-white lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Os problemas que mais <span className="text-[#FC4242]">atrapalham o boteco</span>
                </>
              }
              subtitle="Muita gente toca o negócio com esforço manual, e isso acaba refletindo em vendas perdidas, atendimentos lentos e desgaste da equipe."
              className="text-white"
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {problems.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
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

        <section id="solucao" className="bg-white py-16 lg:py-20">
          <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <img
                src={logoDominusFood.url}
                alt="Logo Dominus Food"
                className="h-16 w-auto"
              />

              <h2 className="mt-6 font-display text-3xl font-bold text-[#1f1f1f] sm:text-4xl">
                A solução é o Dominus Food
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-[#4b4b4b]">
                O Dominus Food foi pensado para simplificar a operação do seu boteco, unindo PDV,
                estoque, financeiro e delivery em uma plataforma fácil de usar e poderosa na prática.
              </p>

              <div className="mt-8 space-y-4 text-[#4b4b4b]">
                <div className="flex items-start gap-3 rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-[#FC4242]" />
                  <p>Organiza a operação do dia a dia sem depender de vários sistemas separados.</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] p-4">
                  <TrendingUp className="mt-0.5 h-5 w-5 text-[#FC4242]" />
                  <p>Ajuda seu negócio a crescer com previsibilidade, menos retrabalho e melhor controle.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f8f8f8] p-6 shadow-[0_12px_30px_rgba(31,31,31,0.04)]"
                >
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

        <section className="bg-[#f5f5f5] py-16 lg:py-20">
          <Container>
            <div className="rounded-[2rem] bg-gradient-to-r from-[#1f1f1f] via-[#2d2d2d] to-[#1f1f1f] p-8 text-white shadow-[0_24px_60px_rgba(31,31,31,0.16)] lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5b0b0]">
                Sistema para boteco
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
                O que você precisa ter em toda LP de boteco: clareza, confiança e solução real.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-[#d8d8d8]">
                É isso que a página precisa comunicar: quem é o público, quais problemas a operação enfrenta,
                e como o Dominus Food ajuda a transformar esse cenário com organização e eficiência.
              </p>
            </div>
          </Container>
        </section>

        <section id="contato" className="bg-[#FC4242] py-16 text-white lg:py-20">
          <Container className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffe2e2]">
              Vamos simplificar sua operação
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Descubra como o Dominus Food pode ajudar o seu boteco a vender mais e operar melhor.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#ffe2e2]">
              Fale com um especialista e veja como o sistema pode se encaixar no seu negócio.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5521975812676"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#f6f6f6]"
              >
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5521975812676"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ligação comercial
              </a>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#e6e6e6] bg-white py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-sm text-[#4b4b4b] md:flex-row">
          <p>© Waybit. Dominus Food para boteco.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="transition hover:text-[#FC4242]">
              Home
            </Link>
            <a href="#contato" className="transition hover:text-[#FC4242]">
              Contato
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
