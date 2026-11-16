const M = 1_000_000;

export const PLATFORMS = [
  { id: 'shopee', name: 'Shopee', group: 'Marketplace', format: 'Link de afiliado', aspect: '—', length: 'postagem', status: 'active', monetization: 'Comissão por venda (até 10%+)', rpm: 'comissão', role: 'Casa-mãe de vendas: link rastreável, cupons e cashback.', url: 'https://affiliate.shopee.com.br' },
  { id: 'mercadolivre', name: 'Mercado Livre', group: 'Marketplace', format: 'Link de afiliado', aspect: '—', length: 'postagem', status: 'active', monetization: 'Comissão por venda', rpm: 'comissão', role: 'Catálogo amplo, frete grátis, alta conversão.', url: 'https://www.mercadolivre.com.br/afiliados' },
  { id: 'tiktokshop', name: 'TikTok Shop', group: 'Marketplace', format: 'Vídeo + live', aspect: '9:16', length: '15–60 s', status: 'active', monetization: 'Comissão por venda in-app', rpm: 'comissão', role: 'Venda dentro do TikTok, live de ofertas, alta intenção.', url: 'https://seller.tiktok.com' },
  { id: 'instagram', name: 'Instagram', group: 'Social', format: 'Reels + carrossel', aspect: '9:16 / 1:1', length: '15–45 s', status: 'active', monetization: 'Afiliado via bio/link', rpm: 'tráfego', role: 'Descoberta visual, estética acolhedora, comunidade.', url: 'https://www.instagram.com' },
  { id: 'youtube', name: 'YouTube', group: 'Social', format: 'Vídeo longo + Shorts', aspect: '16:9 / 9:16', length: '30 s–10 min', status: 'active', monetization: 'YPP + afiliado', rpm: 'US$ 1–4', role: 'Autoridade, review e “vale a pena?”.', url: 'https://studio.youtube.com' },
  { id: 'tiktok', name: 'TikTok', group: 'Social', format: 'Vertical curto', aspect: '9:16', length: '15–60 s', status: 'active', monetization: 'Creator Rewards + afiliado', rpm: 'US$ 0,20–1', role: 'Maior alcance orgânico para achadinhos.', url: 'https://www.tiktok.com/creator' },
  { id: 'telegram', name: 'Telegram', group: 'Mensageria', format: 'Canal + bot', aspect: '—', length: 'texto + mídia', status: 'active', monetization: 'Afiliado direto', rpm: 'cliques', role: 'Lista quente: ofertas em tempo real, sem algoritmo.', url: 'https://t.me' },
  { id: 'whatsapp', name: 'WhatsApp', group: 'Mensageria', format: 'Status + grupo', aspect: '—', length: 'texto + mídia', status: 'active', monetization: 'Afiliado direto', rpm: 'cliques', role: 'Comunidade íntima, status diário de ofertas.', url: 'https://web.whatsapp.com' },
  { id: 'kwai', name: 'Kwai', group: 'Social', format: 'Vertical curto', aspect: '9:16', length: '15–60 s', status: 'planned', monetization: 'Creator + afiliado', rpm: 'baixo', role: 'Forte no Brasil/LatAm. Reaproveita corte do TikTok.', url: 'https://www.kwai.com' },
  { id: 'facebook', name: 'Facebook', group: 'Social', format: 'Reels + grupo', aspect: '9:16 / 16:9', length: '30 s–3 min', status: 'planned', monetization: 'In-stream + afiliado', rpm: 'US$ 0,50–2', role: 'Público 35+, grupos de ofertas.', url: 'https://business.facebook.com' },
];

export const LANGUAGES = [
  { code: 'pt-BR', name: 'Português (BR)', flag: '🇧🇷', market: 'Brasil', tier: 1, reach: 'alto', effort: 'nativo', mode: 'original', active: true },
  { code: 'en-US', name: 'Inglês (US)', flag: '🇺🇸', market: 'EUA / global', tier: 1, reach: 'muito alto', effort: 'baixo', mode: 'dublagem + legenda', active: true },
  { code: 'es-419', name: 'Espanhol (LatAm)', flag: '🇲🇽', market: 'México / LatAm', tier: 1, reach: 'alto', effort: 'baixo', mode: 'dublagem + legenda', active: true },
  { code: 'hi-IN', name: 'Hindi', flag: '🇮🇳', market: 'Índia', tier: 2, reach: 'muito alto', effort: 'médio', mode: 'dublagem', active: false },
  { code: 'id-ID', name: 'Indonésio', flag: '🇮🇩', market: 'Indonésia', tier: 2, reach: 'alto', effort: 'médio', mode: 'dublagem + legenda', active: false },
  { code: 'ar-SA', name: 'Árabe', flag: '🇸🇦', market: 'Oriente Médio', tier: 2, reach: 'alto', effort: 'médio', mode: 'legenda + dublagem', active: false },
  { code: 'ru-RU', name: 'Russo', flag: '🇷🇺', market: 'Rússia / CEI', tier: 2, reach: 'alto', effort: 'médio', mode: 'dublagem', active: false },
  { code: 'tr-TR', name: 'Turco', flag: '🇹🇷', market: 'Turquia', tier: 2, reach: 'médio', effort: 'baixo', mode: 'dublagem', active: false },
  { code: 'fr-FR', name: 'Francês', flag: '🇫🇷', market: 'França / África', tier: 2, reach: 'médio', effort: 'baixo', mode: 'dublagem + legenda', active: false },
  { code: 'de-DE', name: 'Alemão', flag: '🇩🇪', market: 'Alemanha / DACH', tier: 2, reach: 'médio', effort: 'baixo', mode: 'dublagem + legenda', active: false },
  { code: 'it-IT', name: 'Italiano', flag: '🇮🇹', market: 'Itália', tier: 3, reach: 'médio', effort: 'baixo', mode: 'dublagem', active: false },
  { code: 'ja-JP', name: 'Japonês', flag: '🇯🇵', market: 'Japão', tier: 3, reach: 'médio', effort: 'alto', mode: 'legenda + dublagem', active: false },
  { code: 'ko-KR', name: 'Coreano', flag: '🇰🇷', market: 'Coreia do Sul', tier: 3, reach: 'médio', effort: 'alto', mode: 'legenda', active: false },
  { code: 'zh-CN', name: 'Mandarim', flag: '🇨🇳', market: 'China / diáspora', tier: 3, reach: 'muito alto', effort: 'alto', mode: 'dublagem (parceiro local)', active: false },
  { code: 'vi-VN', name: 'Vietnamita', flag: '🇻🇳', market: 'Vietnã', tier: 3, reach: 'médio', effort: 'médio', mode: 'dublagem', active: false },
  { code: 'pl-PL', name: 'Polonês', flag: '🇵🇱', market: 'Polônia', tier: 3, reach: 'médio', effort: 'médio', mode: 'dublagem', active: false },
];

export const FORMATS = [
  {
    id: 'fmt_achado60',
    name: 'Achado em 60 segundos',
    nicheId: 'achadinhos',
    duration: '30–60 s',
    tags: ['achado', 'urgência', 'vertical'],
    hook: '“Esse produto custa menos que um café e resolve um problema que você tem todo dia.”',
    steps: [
      'Mostrar o produto em uso nos primeiros 2s, sem intro.',
      'Problema que ele resolve, em uma frase.',
      'Preço + onde comprar (link na bio).',
      'Gancho: “comenta QUERO que eu mando o link”.',
    ],
    platforms: ['shorts', 'tiktok', 'reels', 'kwai'],
    notes: 'Publicar 2–3x por dia. Sempre com legenda e música trending.',
  },
  {
    id: 'fmt_top5',
    name: 'Top 5 achadinhos da semana',
    nicheId: 'achadinhos',
    duration: '45–90 s',
    tags: ['lista', 'curiosidade'],
    hook: '“5 coisas da Shopee que eu não sabia que existiam — e a número 3 é absurda.”',
    steps: [
      'Numerar na tela, um por vez.',
      'Cada item: nome curto + preço + “link na bio”.',
      'Segurar o melhor para o final.',
      'CTA: “salva pra não esquecer”.',
    ],
    platforms: ['shorts', 'tiktok', 'reels'],
    notes: 'Formato de alto compartilhamento. Um item = um post separado depois.',
  },
  {
    id: 'fmt_review',
    name: 'Vale a pena? (review honesto)',
    nicheId: 'achadinhos',
    duration: '60–180 s',
    tags: ['review', 'honestidade'],
    hook: '“Comprei esse produto viral da Shopee. É bom mesmo ou furada?”',
    steps: [
      'Mostrar o unboxing real.',
      'Testar ao vivo, sem edição de “perfeito”.',
      'Prós e contras em 2 frases cada.',
      'Veredito claro + link.',
    ],
    platforms: ['youtube', 'tiktok', 'reels'],
    notes: 'Honestidade gera confiança e recompra. Não esconda defeito.',
  },
  {
    id: 'fmt_cupom',
    name: 'Cupom e oferta relâmpago',
    nicheId: 'achadinhos',
    duration: '15–30 s',
    tags: ['urgência', 'oferta'],
    hook: '“Esse cupom acaba em 2 horas. Aproveita enquanto está barato.”',
    steps: [
      'Preço “de/por” na tela.',
      'Código do cupom grande.',
      'Contagem regressiva visual.',
      'Link direto no comentário fixado.',
    ],
    platforms: ['shorts', 'tiktok', 'reels', 'telegram'],
    notes: 'Postar só quando a oferta for real. Spam de cupom quebra confiança.',
  },
  {
    id: 'fmt_carrossel',
    name: 'Carrossel “não sabia que existia”',
    nicheId: 'achadinhos',
    duration: '5–10 slides',
    tags: ['carrossel', 'curiosidade'],
    hook: 'Slide 1: “7 coisas que você não sabia que existiam (e custam menos de R$ 30).”',
    steps: [
      'Slide 1: promessa forte.',
      'Slides 2–7: foto + nome + preço + “link na bio”.',
      'Slide final: CTA + “salva e compartilha”.',
    ],
    platforms: ['instagram'],
    notes: 'Carrossel tem maior alcance orgânico no Instagram.',
  },
  {
    id: 'fmt_live',
    name: 'Live de ofertas',
    nicheId: 'achadinhos',
    duration: '30–60 min',
    tags: ['live', 'comunidade'],
    hook: '“Live de achadinhos: vou testar ao vivo e você decide se compra.”',
    steps: [
      'Mostrar 10–15 produtos em sequência.',
      'Testar ao vivo, responder perguntas.',
      'Cupom exclusivo para quem está na live.',
      'Fixar link no chat a cada produto.',
    ],
    platforms: ['tiktok', 'instagram', 'youtube'],
    notes: '1x por semana. Melhor horário: 19h–21h.',
  },
  {
    id: 'fmt_unboxing',
    name: 'Unboxing honesto',
    nicheId: 'achadinhos',
    duration: '60–120 s',
    tags: ['unboxing', 'curiosidade'],
    hook: '“Chegou o pacote da Shopee. Vamos abrir juntos.”',
    steps: [
      'Mostrar a embalagem e o tempo de entrega.',
      'Abrir devagar, mostrando cada item.',
      'Comparar com a foto do anúncio.',
      'Veredito + link.',
    ],
    platforms: ['shorts', 'tiktok', 'reels'],
    notes: 'Unboxing gera engajamento alto por curiosidade.',
  },
];

export const BLOCKS = [
  { id: 'ach_hook_1', kind: 'hook', tags: ['achado', 'curiosidade'], label: 'Achado inesperado', text: '“{tema}” — e custa menos do que você imagina. Olha isso.', cue: 'Produto em uso nos primeiros 2s. Sem intro.' },
  { id: 'ach_hook_2', kind: 'hook', tags: ['lista'], label: 'Lista com promessa', text: 'Separei {tema} em 5 itens. O número 3 é o que mais me surpreendeu.', cue: 'Mostre os 5 números na tela e vá direto ao primeiro.' },
  { id: 'ach_hook_3', kind: 'hook', tags: ['review'], label: 'Review honesto', text: 'Comprei {tema}. É bom mesmo ou furada? Vou te mostrar a verdade.', cue: 'Unboxing real, sem edição de “perfeito”.' },
  { id: 'ach_hook_4', kind: 'hook', tags: ['oferta'], label: 'Oferta relâmpago', text: 'Esse {tema} está com cupom e acaba em poucas horas. Aproveita.', cue: 'Preço de/por na tela desde o frame 1.' },
  { id: 'ach_hook_5', kind: 'hook', tags: ['curiosidade'], label: 'Não sabia que existia', text: 'Você não sabia que isso existia. E vai querer ter um.', cue: 'Produto em close, fundo limpo, boa iluminação.' },

  { id: 'ach_ctx_1', kind: 'contexto', tags: ['geral'], label: 'O problema', text: 'O problema que {tema} resolve: simples, do dia a dia, que você já teve.', cue: 'Uma frase, sem rodeio, com exemplo real.' },
  { id: 'ach_ctx_2', kind: 'contexto', tags: ['geral'], label: 'Para quem é', text: '{tema} é para quem quer praticidade sem gastar muito. Simples assim.', cue: 'Público-alvo claro em uma frase.' },
  { id: 'ach_ctx_3', kind: 'contexto', tags: ['geral'], label: 'Onde comprar', text: 'Tem na Shopee e no Mercado Livre. Link na bio e no comentário fixado.', cue: 'Mostrar as duas lojas na tela.' },

  { id: 'ach_prova_1', kind: 'prova', tags: ['geral'], label: 'Em uso', text: 'Olha funcionando. Sem filtro, sem edição: é exatamente assim que ele é.', cue: 'Vídeo do produto em uso real, 3–5s.' },
  { id: 'ach_prova_2', kind: 'prova', tags: ['review'], label: 'Comparação', text: 'Comparei com o mais caro. A diferença não justifica o preço.', cue: 'Split screen: produto barato vs caro.' },
  { id: 'ach_prova_3', kind: 'prova', tags: ['geral'], label: 'Preço na tela', text: 'O preço é esse: {numero}. Guarda esse número.', cue: 'Número grande, sem enfeite.' },
  { id: 'ach_prova_4', kind: 'prova', tags: ['review'], label: 'Prós e contras', text: 'Prós: {tema} é prático. Contras: a bateria poderia durar mais.', cue: 'Duas listas curtas na tela.' },

  { id: 'ach_dev_1', kind: 'desenvolvimento', tags: ['geral'], label: 'Como usar', text: 'Como usar: simples. Três passos e já está funcionando.', cue: 'Demonstração rápida, 5s.' },
  { id: 'ach_dev_2', kind: 'desenvolvimento', tags: ['geral'], label: 'Detalhe que importa', text: 'O detalhe que importa: o material é melhor do que parece pelo preço.', cue: 'Close no material/qualidade.' },
  { id: 'ach_dev_3', kind: 'desenvolvimento', tags: ['review'], label: 'Veredito', text: 'Meu veredito: vale a pena se você precisa disso. Se não, pula.', cue: 'Frase direta, sem cima do muro.' },
  { id: 'ach_dev_4', kind: 'desenvolvimento', tags: ['geral'], label: 'Comentário da comunidade', text: 'Quem já comprou diz a mesma coisa. Olha os comentários.', cue: 'Prints de reviews reais, creditados.' },

  { id: 'ach_turn_1', kind: 'virada', tags: ['geral'], label: 'Mas tem um porém', text: 'Mas tem um porém: o frete pode variar. Confere antes de comprar.', cue: 'Aviso honesto, sem alarmismo.' },
  { id: 'ach_turn_2', kind: 'virada', tags: ['geral'], label: 'O que ninguém fala', text: 'O que ninguém fala: esse produto tem uma função extra que não está no anúncio.', cue: 'Mostrar a função extra em uso.' },

  { id: 'ach_cta_1', kind: 'cta', tags: ['geral'], label: 'Link na bio', text: 'Link na bio e no comentário fixado. Corre antes que acabe.', cue: 'Apontar para a bio na tela.' },
  { id: 'ach_cta_2', kind: 'cta', tags: ['geral'], label: 'Comenta QUERO', text: 'Comenta QUERO que eu te mando o link direto no direct.', cue: 'Texto “QUERO” grande na tela.' },
  { id: 'ach_cta_3', kind: 'cta', tags: ['geral'], label: 'Salva e compartilha', text: 'Salva esse vídeo e manda para quem precisa ver. Compartilhar ajuda.', cue: 'Botão de salvar/compartilhar na tela.' },
  { id: 'ach_cta_4', kind: 'cta', tags: ['geral'], label: 'Segue para mais', text: 'Segue para mais achadinhos todo dia. Amanhã tem mais.', cue: 'Chamada de follow, sem exagero.' },

  { id: 'ach_tr_1', kind: 'transicao', tags: ['geral'], label: 'Do problema à solução', text: 'Agora que você viu o problema, olha a solução.', cue: 'Corte seco.' },
  { id: 'ach_tr_2', kind: 'transicao', tags: ['geral'], label: 'Preço que volta', text: 'Guarda esse preço, porque ele volta no final.', cue: 'Repita o dado em cartela por 1s.' },
];

const DEMO_BASE = [
  // Casa e Cozinha
  { id: 'ach01', title: 'Air Fryer 4L digital — frita sem óleo', channel: 'Achadinhos Shopee', views: 2.8 * M, likes: 190_000, comments: 14_200, days: 3, duration: 45, tags: 'casa', price: 189.90, marketplace: 'Shopee', category: 'casa', commission: 12 },
  { id: 'ach02', title: 'Mop giratório 360° — limpa em minutos', channel: 'Achadinhos Shopee', views: 1.9 * M, likes: 130_000, comments: 8_400, days: 5, duration: 38, tags: 'casa', price: 59.90, marketplace: 'Shopee', category: 'casa', commission: 11 },
  { id: 'ach03', title: 'Mini processador elétrico sem fio', channel: 'Achadinhos Shopee', views: 2.2 * M, likes: 155_000, comments: 9_800, days: 4, duration: 32, tags: 'casa', price: 49.90, marketplace: 'Shopee', category: 'casa', commission: 13 },
  { id: 'ach04', title: 'Percarbonato tira-manchas 100% puro', channel: 'Achadinhos Shopee', views: 1.4 * M, likes: 95_000, comments: 6_100, days: 6, duration: 28, tags: 'casa', price: 16.49, marketplace: 'Shopee', category: 'casa', commission: 10 },
  { id: 'ach05', title: 'Organizador acrílico para geladeira', channel: 'Achadinhos Shopee', views: 1.1 * M, likes: 78_000, comments: 5_200, days: 7, duration: 25, tags: 'casa', price: 29.90, marketplace: 'Shopee', category: 'casa', commission: 12 },
  { id: 'ach06', title: 'Cortina blackout térmica', channel: 'Achadinhos Shopee', views: 1.6 * M, likes: 110_000, comments: 7_300, days: 8, duration: 40, tags: 'casa', price: 45.00, marketplace: 'Shopee', category: 'casa', commission: 11 },
  // Beleza
  { id: 'ach07', title: 'Protetor solar facial clareador FPS 70', channel: 'Achadinhos Shopee', views: 2.5 * M, likes: 170_000, comments: 11_000, days: 2, duration: 35, tags: 'beleza', price: 36.53, marketplace: 'Shopee', category: 'beleza', commission: 14 },
  { id: 'ach08', title: 'Sérum Vitamina C 10% antioxidante', channel: 'Achadinhos Shopee', views: 1.8 * M, likes: 125_000, comments: 8_900, days: 4, duration: 42, tags: 'beleza', price: 29.90, marketplace: 'Shopee', category: 'beleza', commission: 13 },
  { id: 'ach09', title: 'Cleansing balm óleo de limpeza', channel: 'Achadinhos Shopee', views: 1.3 * M, likes: 92_000, comments: 6_400, days: 5, duration: 30, tags: 'beleza', price: 24.90, marketplace: 'Shopee', category: 'beleza', commission: 12 },
  { id: 'ach10', title: 'Escova secadora 2 em 1 — vale a pena?', channel: 'Achadinhos Shopee', views: 2.1 * M, likes: 140_000, comments: 9_100, days: 7, duration: 72, tags: 'beleza', price: 49.90, marketplace: 'Mercado Livre', category: 'beleza', commission: 11 },
  { id: 'ach11', title: 'Lip tint longa duração', channel: 'Achadinhos Shopee', views: 1.7 * M, likes: 118_000, comments: 7_600, days: 3, duration: 22, tags: 'beleza', price: 19.90, marketplace: 'Shopee', category: 'beleza', commission: 12 },
  { id: 'ach12', title: 'Touca de cetim para cabelo', channel: 'Achadinhos Shopee', views: 980_000, likes: 68_000, comments: 4_700, days: 9, duration: 18, tags: 'beleza', price: 14.90, marketplace: 'Shopee', category: 'beleza', commission: 11 },
  // Pet
  { id: 'ach13', title: 'Tapete higiênico superabsorvente (pet)', channel: 'Achadinhos Shopee', views: 1.5 * M, likes: 105_000, comments: 7_200, days: 4, duration: 30, tags: 'pet', price: 39.90, marketplace: 'Shopee', category: 'pet', commission: 12 },
  { id: 'ach14', title: 'Areia biodegradável de milho para gato', channel: 'Achadinhos Shopee', views: 1.2 * M, likes: 84_000, comments: 5_900, days: 6, duration: 28, tags: 'pet', price: 34.90, marketplace: 'Shopee', category: 'pet', commission: 11 },
  { id: 'ach15', title: 'Máquina de tosa caseira para pet', channel: 'Achadinhos Shopee', views: 1.0 * M, likes: 72_000, comments: 4_800, days: 8, duration: 55, tags: 'pet', price: 79.90, marketplace: 'Shopee', category: 'pet', commission: 10 },
  { id: 'ach16', title: 'Roupinha térmica fleece para pet', channel: 'Achadinhos Shopee', views: 890_000, likes: 62_000, comments: 4_500, days: 9, duration: 22, tags: 'pet', price: 29.90, marketplace: 'Mercado Livre', category: 'pet', commission: 11 },
  // Gadgets/Tech
  { id: 'ach17', title: 'Mini projetor Smart Android 4K HY300', channel: 'Achadinhos Shopee', views: 2.0 * M, likes: 145_000, comments: 10_500, days: 3, duration: 60, tags: 'gadget', price: 249.90, marketplace: 'Shopee', category: 'gadget', commission: 10 },
  { id: 'ach18', title: 'Fone TWS bluetooth sem fio', channel: 'Achadinhos Shopee', views: 1.6 * M, likes: 112_000, comments: 7_800, days: 5, duration: 28, tags: 'gadget', price: 39.90, marketplace: 'Shopee', category: 'gadget', commission: 12 },
  { id: 'ach19', title: 'Smartwatch esportivo entrada', channel: 'Achadinhos Shopee', views: 1.4 * M, likes: 98_000, comments: 6_900, days: 6, duration: 45, tags: 'gadget', price: 89.90, marketplace: 'Shopee', category: 'gadget', commission: 11 },
  { id: 'ach20', title: 'Câmera Wi-Fi de segurança residencial', channel: 'Achadinhos Shopee', views: 1.1 * M, likes: 76_000, comments: 5_400, days: 7, duration: 50, tags: 'gadget', price: 69.90, marketplace: 'Shopee', category: 'gadget', commission: 11 },
  { id: 'ach21', title: 'Ring light + tripé universal', channel: 'Achadinhos Shopee', views: 950_000, likes: 66_000, comments: 4_600, days: 8, duration: 35, tags: 'gadget', price: 49.90, marketplace: 'Shopee', category: 'gadget', commission: 12 },
  { id: 'ach22', title: 'Hub USB-C 8 em 1 com HDMI 4K', channel: 'Achadinhos Shopee', views: 880_000, likes: 61_000, comments: 4_300, days: 9, duration: 32, tags: 'gadget', price: 59.90, marketplace: 'Shopee', category: 'gadget', commission: 11 },
  // Listas/geral
  { id: 'ach23', title: 'Top 10 achadinhos da semana (menos de R$ 30)', channel: 'Achadinhos Shopee', views: 4.1 * M, likes: 260_000, comments: 18_700, days: 2, duration: 88, tags: 'lista', price: 0, marketplace: 'Shopee', category: 'lista', commission: 0 },
  { id: 'ach24', title: '5 gadgets da Shopee que você não sabia que existiam', channel: 'Achadinhos Shopee', views: 3.4 * M, likes: 210_000, comments: 12_400, days: 2, duration: 58, tags: 'lista', price: 0, marketplace: 'Shopee', category: 'lista', commission: 0 },
];

export const DEMO_VIDEOS = DEMO_BASE.map((v, i) => {
  const publishedAt = new Date(Date.now() - v.days * 86_400_000).toISOString();
  return {
    id: v.id,
    title: v.title,
    channelId: `demo_ch_${i % 3}`,
    channelTitle: v.channel,
    channelSubs: [120_000, 45_000, 280_000][i % 3],
    publishedAt,
    views: Math.round(v.views),
    likes: Math.round(v.likes),
    comments: Math.round(v.comments),
    duration: v.duration,
    tags: v.tags,
    price: v.price,
    marketplace: v.marketplace,
    thumb: '',
    demo: true,
  };
});

export const DEFAULTS = {
  version: 2,
  apiKey: '',
  activeNiche: 'achadinhos',
  niches: [
    {
      id: 'achadinhos',
      name: 'Achadinhos Shopee/ML',
      queries: ['achadinhos shopee', 'produtos virais shopee', 'achados mercadolivre', 'gadget barato', 'organizador casa', 'beleza shopee'],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'casa',
      name: 'Casa & Organização',
      queries: ['organizador casa', 'gadget cozinha', 'decoração barata', 'limpeza shopee'],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'beleza',
      name: 'Beleza & Cuidados',
      queries: ['maquiagem shopee', 'skincare barato', 'cabelo shopee', 'beleza viral'],
      createdAt: new Date().toISOString(),
    },
  ],
  feeds: {},
  channels: [],
  formats: FORMATS,
  blocks: BLOCKS,
  pipeline: [],
  platforms: PLATFORMS,
  languages: LANGUAGES,
  settings: { period: 30, sort: 'score', demo: false },
};
