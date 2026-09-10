import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Beer,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  MessageSquareQuote,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

import logoDominusFood from "../assets/logo-dominus-food.png.asset.json";
import { Container, SectionHeading } from "@/components/home/shared";

export const Route = createFileRoute("/boteco")({
  head: () => ({
    meta: [
      { title: "Sistema para Boteco | Dominus Food | Waybit" },
      {
        name: "description",
        content:
          "Sistema para boteco com PDV, estoque, financeiro, delivery e gestão inteligente. Conheça o Dominus Food e transforme a operação do seu negócio.",
      },
      {
        property: "og:title",
        content: "Sistema para Boteco | Dominus Food | Waybit",
      },
      {
        property: "og:description",
        content:
          "Controle de caixa, estoque, comandas, delivery e relatórios em um só sistema para boteco. Descubra o Dominus Food.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BotecoPage,
});

const stats = [
  { value: "+30%", label: "de economia de tempo" },
  { value: "+1.000", label: "clientes atendidos" },
  { value: "9.6/10", label: "nota média de satisfação" },
  { value: "15 anos", label: "de experiência em gestão" },
];

const audience = [
  {
    title: "Botequim tradicional",
    description: "Quem vive do balcão, das mesas e da rapidez no atendimento sem perder o controle da operação.",
    icon: Beer,
  },
  {
    title: "Boteco com delivery",
    description: "Quem precisa organizar pedidos, comandas e entregas em um fluxo simples, rápido e confiável.",
    icon: Store,
  },
  {
    title: "Empreendedor em crescimento",
    description: "Quem quer crescer com planejamento, menos retrabalho e decisões baseadas em dados reais.",
    icon: Users,
  },
];

const problems = [
  {
    title: "Caixa e vendas sem visibilidade",
    description:
      "Sem um controle claro, é fácil perder faturamento, esquecer lançamentos e fechar o dia sem saber o real resultado.",
    icon: WalletCards,
  },
  {
    title: "Estoque e desperdício fora de controle",
    description:
      "Faltam registros confiáveis de entradas, saídas e itens mais vendidos, o que gera perda e prejuízo.",
    icon: PackageCheck,
  },
  {
    title: "Mesas, comandas e delivery espalhados",
    description:
      "Sem um fluxo organizado, a equipe roda em excesso, atende mais lento e comete erros no serviço.",
    icon: Clock3,
  },
  {
    title: "Decisões sem dados confiáveis",
    description:
      "Quando o dono trabalha no improviso, o negócio se desgasta e o crescimento fica mais difícil.",
    icon: BarChart3,
  },
];

const features = [
  {
    title: "Controle de mesa e balcão",
    description: "Organize pedidos, mesas e caixa em um único lugar para atender com agilidade e reduzir erros.",
    icon: Sparkles,
  },
  {
    title: "Controle de estoque inteligente",
    description: "Acompanhe entradas, saídas e reposição com alertas e visão clara do que realmente movimenta o negócio.",
    icon: PackageCheck,
  },
  {
    title: "Comanda eletrônica para garçom",
    description: "Acelere o atendimento no salão, evite confusão e deixe o envio de pedidos mais seguro e rápido.",
    icon: CalendarCheck2,
  },
  {
    title: "PDV rápido e intuitivo",
    description: "Venda com velocidade, emita documentos e use o sistema de forma simples, mesmo em momentos de pico.",
    icon: ShieldCheck,
  },
  {
    title: "Relatórios em tempo real",
    description: "Veja faturamento, produtos mais vendidos e rentabilidade diária para tomar decisões com confiança.",
    icon: BarChart3,
  },
  {
    title: "Suporte multicanal e personalizado",
    description: "Tenha ajuda técnica rápida e acompanhamento para manter seu boteco funcionando sem travar a operação.",
    icon: Users,
  },
];

const advantages = [
  "Integração com iFood e outros apps de delivery sem custo adicional",
  "Controle de estoque completo e automatizado",
  "Comandas digitais e atendimento mais ágil",
  "Relatórios completos para acompanhar lucro e performance",
  "PDV rápido, fácil e intuitivo",
  "Equipe organizada com processos claros",
];

const steps = [
  {
    number: "01",
    title: "Agende sua demonstração",
    description: "Fale com a nossa equipe e entenda como o Dominus Food se encaixa no seu negócio.",
  },
  {
    number: "02",
    title: "Nossa equipe apresenta o sistema",
    description: "Mostraremos a estrutura completa do sistema e responderemos todas as suas dúvidas.",
  },
  {
    number: "03",
    title: "Comece a operar com mais controle",
    description: "Coloque o sistema para funcionar na sua rotina e veja os resultados em pouco tempo.",
  },
];

const testimonials = [
  {
    name: "Hedon Bistro",
    quote:
      "Um sistema inovador, com delivery, financeiro e controle de estoque. Eu indico a Waybit de olho fechado.",
  },
  {
    name: "Batata Recheada do França",
    quote:
      "A Waybit facilita muito aqui. Eles ajudam com relatórios completos e agilizam o atendimento com a comanda na máquina.",
  },
  {
    name: "Casa da Praia",
    quote:
      "Hoje eu tenho agilidade para atender meu cliente utilizando o celular, fazendo a comanda e o pedido sai imediatamente na cozinha.",
  },
];

const faqs = [
  {
    q: "Como controlar melhor o estoque e evitar perdas?",
    a: "O Dominus Food centraliza entradas, saídas, itens mais vendidos e alertas de reposição, reduzindo desperdício e mantendo o estoque mais saudável.",
  },
  {
    q: "O sistema integra comandas digitais com o caixa?",
    a: "Sim. O sistema conecta salão, caixa e cozinha em um fluxo unificado, ajudando sua equipe a atender com mais rapidez e menos erros.",
  },
  {
    q: "Funciona sem internet ou em caso de queda?",
    a: "Sim. O sistema foi pensado para operar com mais confiabilidade, incluindo contingência para manter a operação em funcionamento quando necessário.",
  },
  {
    q: "Tem integração com apps de delivery e meios de pagamento?",
    a: "Sim. O Dominus Food se conecta com canais importantes do mercado para facilitar o atendimento, a gestão e o fechamento do negócio.",
  },
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
            <a href="#faq" className="transition hover:text-[#FC4242]">
              FAQ
            </a>
            <a href="#contato" className="transition hover:text-[#FC4242]">
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-[#FC4242] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(252,66,66,0.28)] transition hover:bg-[#e63737]"
          >
            Agendar demonstração
          </a>
        </Container>
      </header>

      <main>
        <section className="bg-white py-16 lg:py-24">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#ffd1d1] bg-[#fff1f1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#d83838]">
                Sistema para boteco
              </p>

              <h1 className="mt-6 max-w-xl font-display text-4xl font-bold leading-tight text-[#1f1f1f] sm:text-5xl lg:text-6xl">
                Você controla seu boteco ou ele controla você?
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4b4b4b]">
                Com o Dominus Food, você organiza caixa, estoque, mesas, delivery e financeiro em um único sistema,
                deixando sua operação mais ágil, mais eficiente e muito mais previsível.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full bg-[#FC4242] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(252,66,66,0.28)] transition hover:bg-[#e63737]"
                >
                  Quero transformar meu boteco
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
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FC4242]/25 via-transparent to-[#d7d7d7] blur-2xl" />
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
              subtitle="A operação de um boteco exige rapidez, organização e uma experiência de atendimento que faça o cliente voltar. O Dominus Food foi pensado para isso."
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
                  Você também passa por isso? <span className="text-[#FC4242]">Veja os principais problemas</span>
                </>
              }
              subtitle="Sem organização, cada parte do negócio vira uma bagunça isolada. O resultado é desgaste, perda de tempo e menos rendimento."
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
              <img src={logoDominusFood.url} alt="Logo Dominus Food" className="h-16 w-auto" />

              <h2 className="mt-6 font-display text-3xl font-bold text-[#1f1f1f] sm:text-4xl">
                Dominus Food: a solução para boteco que precisa organizar tudo sem complicar a rotina.
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-[#4b4b4b]">
                O Dominus Food foi pensado para unir caixa, estoque, comandas, delivery e relatórios em um só ambiente,
                dando ao dono mais controle e à equipe muito mais eficiência.
              </p>

              <div className="mt-8 space-y-4 text-[#4b4b4b]">
                <div className="flex items-start gap-3 rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#FC4242]" />
                  <p>Mais organização para o dia a dia, com menos improviso e menos retrabalho.</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-[#e6e6e6] bg-[#f9f9f9] p-4">
                  <TrendingUp className="mt-0.5 h-5 w-5 text-[#FC4242]" />
                  <p>Mais agilidade no atendimento, menos erro e mais capacidade de crescer com segurança.</p>
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
            <div className="rounded-[2rem] border border-[#e6e6e6] bg-white p-8 shadow-[0_20px_50px_rgba(31,31,31,0.05)] lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FC4242]">
                Outros sistemas x Dominus Food
              </p>

              <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="font-display text-3xl font-bold text-[#1f1f1f] sm:text-4xl">
                    Não compare apenas preços. Compare o que o sistema entrega.
                  </h2>
                </div>
                <div className="inline-flex items-center rounded-full bg-[#fff1f1] px-4 py-2 text-sm font-semibold text-[#FC4242]">
                  Mais controle. Mais eficiência. Menos dor de cabeça.
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f9f9f9] p-6">
                  <h3 className="text-xl font-bold text-[#1f1f1f]">Outros sistemas</h3>
                  <ul className="mt-5 space-y-4 text-[#4b4b4b]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ×
                      </span>
                      <span>Sem integração com apps de delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ×
                      </span>
                      <span>Controle de estoque limitado ou incompleto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ×
                      </span>
                      <span>Comandas perdidas e pedidos trocados no salão</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                        ×
                      </span>
                      <span>Relatórios limitados ou pagos à parte</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-[#FC4242]/20 bg-[#fff1f1] p-6">
                  <h3 className="text-xl font-bold text-[#1f1f1f]">Dominus Food</h3>
                  <ul className="mt-5 space-y-4 text-[#4b4b4b]">
                    {advantages.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FC4242] text-white">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#1f1f1f] py-16 text-white lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Dominus: tudo o que o seu boteco precisa em <span className="text-[#FC4242]">um único sistema</span>
                </>
              }
              subtitle="Mais do que tecnologia, o Dominus Food ajuda você a organizar a operação e recuperar tempo para focar no atendimento e no crescimento."
              className="text-white"
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: "Controle de mesa e balcão", text: "Automatize pedidos, gerencie mesas com agilidade e reduza erros para aumentar a eficiência do atendimento." },
                { title: "Controle de estoque inteligente", text: "Gerencie estoque com praticidade, crie combos e receba alertas automáticos para reposição eficiente." },
                { title: "Comanda eletrônica para garçom", text: "Agilize pedidos no aplicativo do garçom, evite erros e reduza desperdícios no atendimento." },
                { title: "Usando planilhas ou vários relatórios?", text: "Visualize dados em tempo real, acompanhe lucros e tome decisões rápidas e estratégicas diariamente." },
                { title: "PDV rápido e intuitivo", text: "Venda com agilidade usando um PDV simples, eficiente e pronto para os picos de demanda." },
                { title: "Suporte personalizado multicanal", text: "Tenha suporte técnico 24h com atendimento rápido e um time pronto para ajudar você a crescer." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d8d8d8]">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Não é só sobre sistema. É sobre <span className="text-[#FC4242]">recuperar o controle da sua rotina</span>
                </>
              }
              subtitle="Sem organização, cada parte do negócio vira uma bagunça isolada. O Dominus não é apenas um sistema para boteco: é uma forma de simplificar a operação e devolver o controle para você."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { title: "Mais controle", text: "Estoque, finanças e atendimento conectados em uma rotina única." },
                { title: "Mais agilidade", text: "Menos retrabalho, menos erro e mais velocidade na operação." },
                { title: "Mais tranquilidade", text: "Você ganha tempo para focar no cliente, no serviço e no crescimento." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f8f8f8] p-6">
                  <h3 className="text-xl font-bold text-[#1f1f1f]">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4b4b4b]">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f5f5f5] py-16 lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  Começar com o Dominus é rápido e <span className="text-[#FC4242]">sem complicação</span>
                </>
              }
              subtitle="A solução foi desenhada para ser simples de apresentar, fácil de adotar e rápida de gerar resultado."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="rounded-[1.5rem] border border-[#e6e6e6] bg-white p-6 shadow-[0_12px_30px_rgba(31,31,31,0.04)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FC4242]">{step.number}</p>
                  <h3 className="mt-4 text-xl font-bold text-[#1f1f1f]">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4b4b4b]">{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  O que falam do <span className="text-[#FC4242]">Dominus</span>
                </>
              }
              subtitle="Clientes que usam o sistema compartilham como a operação ficou mais ágil, organizada e lucrativa."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[1.5rem] border border-[#e6e6e6] bg-[#f8f8f8] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FC4242]/10 text-[#FC4242]">
                    <MessageSquareQuote className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-[#4b4b4b]">“{item.quote}”</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#1f1f1f]">{item.name}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" className="bg-[#f5f5f5] py-16 lg:py-20">
          <Container>
            <SectionHeading
              title={
                <>
                  FAQ: dúvidas mais <span className="text-[#FC4242]">comuns</span>
                </>
              }
              subtitle="Tudo o que costuma aparecer antes da decisão de começar com o Dominus Food."
            />

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-[1.25rem] border border-[#e3e3e3] bg-white p-5 shadow-[0_8px_22px_rgba(31,31,31,0.03)]">
                  <summary className="cursor-pointer list-none text-left text-lg font-semibold text-[#1f1f1f]">
                    {item.q}
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-[#4b4b4b]">{item.a}</p>
                </details>
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
              Descubra como o Dominus Food pode transformar o seu boteco.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#ffe2e2]">
              Fale com um especialista e veja como o sistema pode ajudar você a vender mais, operar melhor e crescer com controle.
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
