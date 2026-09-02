# Website Waybit — Etapa 01 (Header → Cases)

Construção da primeira parte da nova Home da Waybit, preservando a identidade visual do site atual (waybit.com.br) como fonte de verdade.

## Escopo desta etapa

1. Header (logo, navegação, CTA)
2. Hero — "A rotina da sua empresa leve e com menos esforço." + barra de pesquisa "Qual seu ramo de atuação?"
3. Segmentos — cards clicáveis (Varejo, Center/Mecânica, Food/Restaurante, Xpert/Posto, Certbit)
4. Métricas — +30% economia de tempo, +1.000 clientes, 9,6/10 satisfação, +15 anos
5. Dominus — "Gestão simplificada de estoque, vendas e finanças para o seu negócio."
6. Benefícios do Dominus — funcionalidade → como ajuda → benefício → resultado
7. Cases/Depoimentos — 3 depoimentos com vídeos do YouTube

Fora do escopo: Soluções completas, Integrações, Suporte, CTA final, Blog, Newsletter, Footer, páginas internas.

## Identidade visual (derivada do site atual)

- Cores observadas: vermelho/coral `#FC4242` (destaque e CTA), amarelo `#FCC42C`, azul `#3BBCEC`, cinza `#5A5A5A`, branco. Serão registradas como tokens semânticos no design system, sem paleta nova.
- Tipografia: exclusivamente **Rubik** (títulos/números) e **Poppins** (texto corrido), carregadas via `<link>` no root.
- Cards com raio suave, sombra leve, fundo claro; botão principal sólido em destaque, secundários como links/outline.
- Container com largura controlada e respiro lateral; ritmo vertical consistente entre seções.

## Conteúdo e assets

- Imagens e logos são referenciadas a partir do site atual (banners `bannerN-1/2/3.png`, capas de vídeo, imagem do sistema), conforme sua escolha; substituíveis quando os assets oficiais forem enviados.
- Vídeos dos cases via YouTube (thumbnail + play, embed sob demanda):
  - Grãos e Zero Açúcar — `ugzBfW_pkOo`
  - Zum Zum Autocenter — `5tfA3619NXs`
  - DaOrla Café — `ea7aOYtaCuA`
- Métricas e nomes de clientes ficam em um arquivo de conteúdo único para validação antes da publicação.

## Comportamento

- Barra de pesquisa no Hero: filtra/sugere segmentos e rola até a seção de Segmentos (ou navega ao card correspondente). Sem backend.
- Header responsivo com menu mobile (Sistema, Segmentos, Integrações, Parceiros, Planos, Blog, FAQ, Central de Ajuda, Suporte) e CTA "Falar com especialista" (WhatsApp).
- Responsivo em desktop, notebook, tablet e mobile.

## Detalhes técnicos

- Página em `src/routes/index.tsx` (substitui o placeholder), com `head()` próprio (title, description, og/twitter).
- Componentes por seção em `src/components/home/`: `Header`, `Hero`, `SegmentSearch`, `Segments`, `Metrics`, `Dominus`, `DominusBenefits`, `Cases`; primitivos compartilhados (`Container`, `SectionHeading`, `Button`, `Card`, `YouTubeEmbed`) em `src/components/ui`/`src/components/common` para reuso nas próximas etapas.
- Conteúdo estático tipado em `src/content/home.ts` (segmentos, métricas, benefícios, cases) para facilitar validação e expansão.
- Tokens de cor/tipografia em `src/styles.css` (`@theme` + `:root`), sem cores hardcoded nos componentes.
- Vídeos com facade (thumbnail + clique carrega o iframe) para performance.

## Sequência

1. Design system: tokens de cor, fontes Rubik/Poppins, container e primitivos.
2. Header + Hero (com busca de segmento).
3. Segmentos + Métricas.
4. Dominus + Benefícios.
5. Cases com vídeos.
6. Revisão de responsividade e SEO da Home.
