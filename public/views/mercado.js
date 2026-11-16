import { state } from '../lib/store.js';
import * as ui from '../lib/ui.js';

const CATEGORIES = [
  { id: 'casa', name: 'Casa e Cozinha', ticket: 'R$ 49,56', products: ['Air fryer', 'Mop giratório', 'Mini processador', 'Percarbonato', 'Organizador acrílico', 'Cortina blackout'] },
  { id: 'beleza', name: 'Beleza', ticket: 'R$ 33,70', products: ['Protetor solar FPS 70', 'Sérum Vitamina C', 'Cleansing balm', 'Escova secadora', 'Lip tint', 'Touca de cetim'] },
  { id: 'pet', name: 'Pet', ticket: '—', products: ['Tapete higiênico', 'Areia biodegradável', 'Máquina de tosa', 'Roupinha térmica', 'Arranhador', 'Comedouro elevado'] },
  { id: 'gadget', name: 'Gadgets/Tech', ticket: 'R$ 30–150', products: ['Mini projetor HY300', 'Fone TWS', 'Smartwatch', 'Câmera Wi-Fi', 'Ring light', 'Hub USB-C'] },
];

const CHECKLIST = [
  'Comissão ≥ 10%',
  'Nota ≥ 4,5 e ~100 avaliações',
  'Ticket entre R$ 50 e R$ 300',
  'Prazo de entrega ≤ 20 dias',
  'Loja com histórico',
  'Cupom ou campanha ativa',
];

const TRENDS = [
  'Shopee Vídeo e Live Commerce (comissão 1,5%–5% por canal)',
  'Vídeos curtos com gancho nos 3 primeiros segundos',
  'Grupos VIP WhatsApp/Telegram com alertas de cupons',
  'Segmentação regional (Mapa Shopee 2026)',
  'IA e automação de conteúdo (voz sintetizada + banco de vídeos)',
];

export const mercado = {
  render(ctx) {
    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">Pesquisa de mercado · ${ui.esc(ctx.niche.name)}</span>
          <h1 class="page-title">Mercado de achadinhos</h1>
          <p class="page-sub">Produtos campeões, tendências de afiliação e checklist de validação. Fonte: NotebookLM (25 fontes web).</p>
        </div>
      </div>

      <div class="cards">
        ${CATEGORIES.map((c) => `<article class="card">
          <div class="card-head">
            <div>
              <h3 class="card-title">${ui.esc(c.name)}</h3>
              <div class="card-sub">Ticket médio: ${ui.esc(c.ticket)}</div>
            </div>
          </div>
          <ul class="steps">${c.products.map((p) => `<li>${ui.esc(p)}</li>`).join('')}</ul>
        </article>`).join('')}
      </div>

      <div class="section" style="margin-top:20px">
        <h2 class="card-title" style="margin-bottom:8px">Tendências de afiliação 2026</h2>
        <ul class="steps">${TRENDS.map((t) => `<li>${ui.esc(t)}</li>`).join('')}</ul>
      </div>

      <div class="section" style="margin-top:20px">
        <h2 class="card-title" style="margin-bottom:8px">Checklist de validação (antes de postar)</h2>
        <ul class="steps">${CHECKLIST.map((c) => `<li>${ui.esc(c)}</li>`).join('')}</ul>
      </div>
    `;
  },
  mount() {},
};