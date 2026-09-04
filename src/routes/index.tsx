import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/home/TopBar";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
//import { Segments } from "@/components/home/Segments";
import { Metrics } from "@/components/home/Metrics";
//import { Dominus } from "@/components/home/Dominus";
//import { DominusBenefits } from "@/components/home/DominusBenefits";
import { Cases } from "@/components/home/Cases";
import { Support } from "@/components/home/Support";
import { Solutions } from "@/components/home/Solutions";
import { Footer } from "@/components/home/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waybit | Gestão simplificada para o seu negócio" },
      {
        name: "description",
        content:
          "Sistema de gestão com PDV, estoque e financeiro para alimentação e varejo. Mais de 1.000 clientes, 9.6/10 de satisfação e 15 anos de experiência.",
      },
      { property: "og:title", content: "Waybit | Gestão simplificada para o seu negócio" },
      {
        property: "og:description",
        content:
          "A rotina da sua empresa leve e com menos esforço. Sistema de gestão para o seu ramo de atuação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <Hero />
        {/*<Segments />*/}
        <Metrics />
        {/*<Dominus />*/}
        {/*<DominusBenefits />*/}
        <Cases />
        <Support />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}
