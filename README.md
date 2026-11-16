# Achadinhos Lab — Central de afiliados (Shopee, Mercado Livre e afins)

Estúdio local para pesquisar produtos que performam, transformar em conteúdo replicável, produzir derivados e distribuir em várias plataformas e idiomas. Nicho principal: **achadinhos de e-commerce (Shopee, Mercado Livre, TikTok Shop)**.

Interface dark, sem login, sem banco de dados. Tudo fica no `localStorage` do navegador.

## Rodar

```bash
cd achadinhos-lab
npm start
```

Abra http://localhost:4174. Não há build nem dependências.

## O que tem dentro

- **Radar** — produtos/vídeos do nicho por período, ordenados por score (views/dia + engajamento). A ficha de replicação já gera roteiro, títulos, thumbnail e sugestões, com atalho para criar no pipeline ou mesclar com outro item.
- **Mercado** — pesquisa de mercado integrada: categorias campeãs, tendências de afiliação, checklist de validação (fonte: NotebookLM, 25 fontes web).
- **Canais** — mediana do canal e outliers (vídeos com 2× ou mais views que a mediana). Sinal mais confiável de formato vencedor.
- **Formatos** — biblioteca de moldes de produção (achado em 60s, top 5, review honesto, cupom, carrossel, live, unboxing), editável e reutilizável.
- **Estúdio de roteiro** — roteiros em blocos (hook → contexto → prova → desenvolvimento → virada → CTA), tempo por bloco, humanização do texto, sugestões, mesclagem e biblioteca de blocos reutilizáveis.
- **Pipeline** — kanban de Ideia → Roteiro → Produção → Localização → Pronto → Publicado, com editor por abas (roteiro, embalagem, checklist e histórico de versões).
- **Calendário** — agenda de publicação por dia, ligada ao pipeline. Respeite a cadência anti-flood (máx. 3 posts/dia por plataforma).
- **Plataformas** — Shopee, Mercado Livre, TikTok Shop, Instagram, YouTube, TikTok, Telegram, WhatsApp, Kwai, Facebook.
- **Idiomas** — 16 mercados em três tiers, com pacote de localização.
- **Método** — o ciclo de replicação e o playbook de achadinhos.
- **Configurações** — nichos, import/export JSON, export CSV do radar.

## Automação (fluxo completo)

1. `cd automation && node affiliate_bot.mjs --input=produtos.json` → gera planilha + posts com copy.
2. `node poster.mjs --platform=telegram --file=posts_gerados.json` → agenda com rate-limit.
3. Revisar e publicar manualmente.
4. Registrar métricas no dashboard (`metrics/dashboard.html`).

## Cadência anti-flood

- Máximo 3 posts/dia por plataforma.
- Espaçar mínimo de 2h entre posts na mesma plataforma.
- Variar formato (não repetir o mesmo tipo de post 2x seguidas).
- Telegram/WhatsApp: 1 oferta por vez, com intervalo mínimo de 30 min.

## Tom de voz (acolhedor, intrigante, curioso)

- Fale como amigo que descobriu algo bom e quer compartilhar.
- Use perguntas que geram curiosidade: "você sabia que...", "imagina pagar X por isso".
- Nunca prometa o que não pode cumprir. Honestidade gera recompra.
- Sempre inclua preço e onde comprar (link na bio/comentário).

## Identidade visual sugerida

- Paleta: rosa Shopee (#EE4D2D) + laranja (#FF6B35) + amarelo (#FFD60A) sobre fundo escuro (#0F0F12).
- Tipografia: Anton (títulos) + Inter (corpo) + JetBrains Mono (preços/dados).
- Logo: letra "A" estilizada com sacola de compras.

## Direito autoral

O sistema replica **estrutura, ângulo e embalagem**, nunca o arquivo de terceiros. Use material próprio, capturas permitidas, fontes oficiais e arte original. Reupload derruba canal e plataforma.><|end|><|start|>asset<|channel|>analysis<|message|>Agora vou criar os artefatos adicionais solicitados: landing page link-in-bio, automação de postagem, dashboard de métricas, e blueprint master.

Vou criar uma landing page acolhedora em `achadinhos-lab/landing/index.html`. E um script de automação `achadinhos-lab/automation/poster.mjs`. E um dashboard `achadinhos-lab/metrics/dashboard.html`. E um blueprint `ESQUEMA_ACHADINHOS.md` na raiz.

Vou começar com a landing page.<|end|><|start|>Assistant to=write<|channel|>analysis <|constrain|>xml<|message|><rfl:parameter name="path">
C:\Users\Windows 11\Documents\Default Project\achadinhos-lab\landing\index.html