# Website Waybit — Etapa 01 (Header → Cases)

Construção da primeira parte da nova Home da Waybit com fidelidade às telas de referência enviadas (img1–img5) e à logo oficial `logo_waybit.png`.

## Escopo desta etapa

1. Header (topbar + navegação + CTA)
2. Hero — "A rotina da sua empresa leve e com menos esforço." + busca "Qual seu ramo de atuação?"
3. Segmentos (mega menu Sistema + direcionamento por ramo)
4. Métricas
5. Dominus
6. Benefícios do Dominus
7. Cases/Depoimentos com vídeos

Fora do escopo: Soluções completas, Integrações, Suporte, CTA final, Blog, Newsletter, Footer, páginas internas.

## Fidelidade visual (extraída das referências)

- **Paleta rotativa da marca**: azul `#3BBCEC`, amarelo `#FCC42C`, verde (CTA `#7DC855`), cinza escuro `#3A3A3A`, vermelho/coral `#FC4242`, texto cinza `#5A5A5A`. A barra de 4 cores (azul/amarelo/verde/escuro) aparece na topbar e nas bordas do card de métricas.
- **Tema rotativo do Hero**: o Hero roda um carrossel automático de banners alternando **vermelho `#FC4242` → azul `#3BBCEC` → amarelo `#FCC42C` → vermelho** (e assim por diante). A cada troca, mudam juntos: as palavras destacadas do título ("rotina", "leve", "esforço."), o botão "Pesquisar" e as formas geométricas/foto do losango (banners do site atual `bannerN-1/2/3.png`, conforme referências azul.png, amarelo.png e verm.png). Transição suave de fade entre os temas.
- **Tipografia**: Poppins nos títulos/nav (peso bold, itálico nas palavras destacadas do Hero) e Rubik no apoio — apenas essas duas famílias.
- **Logo oficial** `logo_waybit.png` usada fielmente no header (asset via CDN) e como favicon.

### Header (img1–img3)
- Topbar clara: telefone (21) 97581-2676 com ícone de headset, e-mail comercial@waybit.com.br, à direita FAQ, Central de Ajuda, Suporte, ícones Facebook e Instagram; abaixo a faixa de 4 cores.
- Barra principal branca: logo à esquerda; nav central Sistema (dropdown), Integrações, Seja um Parceiro, Planos, Blogs; CTA verde "Falar com Especialista" à direita.
- Mega menu "Sistema": coluna de categorias (Alimentação, Varejo em geral) + colunas de itens com ícones (Boteco, Cafeteria, Choperia, Churrascaria, Delivery, Hamburgueria, Lanchonete, Petiscaria, Pizzaria, Quiosque, Restaurante, Sushibar / Bicicletaria, Hortifruti, Loja de Calçados, Celular, Doces, Informática, Roupas, Tintas, Variedades, Material de Construção, Material Elétrico, Minimercado, Padaria, Papelaria, Peixaria, Perfumaria, Sorveteria), com hover sublinhado colorido.

### Hero (img3)
- Duas colunas: título grande à esquerda com palavras destacadas em cor, label "Qual seu ramo de atuação?" e campo "Digite Aqui..." com botão colorido "Pesquisar" (ícone de lupa).
- À direita, composição em losango/diamante com foto e triângulos da cor do tema.

### Métricas (img4)
- Card branco único com faixas coloridas em cima e embaixo (azul, amarelo, verde, escuro), 4 colunas com ícone de linha (cronômetro, pessoas, estrela, bolo) e número em destaque: +De **30**% economia de tempo, +De **1.000** clientes, +De **9.6**/10 satisfação, +De **15** anos.

### Dominus + Benefícios (img4)
- Título centralizado "Gestão simplificada de estoque, vendas e finanças para o seu negócio." com subtítulo em cinza, largura de texto controlada.
- Benefícios seguindo o padrão de cards da marca: funcionalidade → como ajuda → benefício → resultado.

### Cases (img4, img5, image.png) — com as alterações solicitadas
- Ordem dentro de cada card: **logo circular + nome do cliente na cor do case (azul, amarelo, vermelho) no topo**, depois aspas coloridas + depoimento em negrito, e por fim o player vertical (9:16) com thumbnail do YouTube Shorts, cabeçalho do canal e botão play; setas de navegação laterais.
- Logos oficiais enviadas (via CDN): DaOrla Café → `DaOrla_Café.jpg`; Grãos e Zero Açúcar → `Grãos_zero.jpg`; Zum Zum Autocenter → `Bittencas_Pizza.jpg` (conforme sua indicação, mesmo o arquivo trazendo a marca Bittenca's — trocável depois).
- Vídeos: Grãos e Zero Açúcar `ugzBfW_pkOo`, Zum Zum Autocenter `5tfA3619NXs`, DaOrla Café `ea7aOYtaCuA` — facade com thumbnail e embed ao clicar.

## Assets

- Logo oficial enviada → CDN asset + favicon.
- Imagens de conteúdo (foto do Hero, ícones das métricas) reaproveitadas do site atual até que os arquivos oficiais sejam enviados; screenshots de referência não são embutidos.

## Detalhes técnicos

- Home em `src/routes/index.tsx` (substitui o placeholder), com `head()` próprio (title, description, og/twitter).
- Componentes em `src/components/home/`: `TopBar`, `Header` (+ `SystemMegaMenu`, menu mobile), `Hero`, `SegmentSearch`, `Segments`, `Metrics`, `Dominus`, `DominusBenefits`, `Cases`; primitivos compartilhados (`Container`, `SectionHeading`, `Button`, `Card`, `YouTubeFacade`).
- Conteúdo tipado em `src/content/home.ts` (segmentos do mega menu, métricas, benefícios, cases) para validação e expansão nas próximas etapas.
- Tokens de cor, gradientes e fontes em `src/styles.css` (`@theme` + `:root`); nenhuma cor hardcoded nos componentes. Rubik e Poppins via `<link>` no `__root.tsx`.
- Responsivo: desktop, notebook, tablet e mobile (mega menu vira acordeão, cases viram carrossel deslizante).

## Sequência

1. Design system (cores, fontes, container, primitivos) + logo/favicon.
2. TopBar + Header com mega menu.
3. Hero com busca de segmento.
4. Segmentos + Métricas.
5. Dominus + Benefícios.
6. Cases com vídeos.
7. Revisão de responsividade e SEO.
