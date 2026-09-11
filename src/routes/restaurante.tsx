import { createFileRoute } from "@tanstack/react-router";
import { BotecoPage } from "./boteco";

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
  component: BotecoPage,
});
