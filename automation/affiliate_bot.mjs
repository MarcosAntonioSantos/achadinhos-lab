// Bot de afiliados: recebe produtos, gera copy + roteiro de vídeo curto, salva em planilha, agenda postagem multi-plataforma.
// Uso: node affiliate_bot.mjs --input=produtos.json --platforms=telegram,instagram,tiktok

import { readFileSync, writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';

const { values } = parseArgs({ options: { input: { type: 'string', default: 'produtos.json' }, platforms: { type: 'string', default: 'telegram' }, dry: { type: 'boolean', default: false } } });

const platforms = values.platforms.split(',').map((s) => s.trim());

const COPY_TEMPLATES = [
  (p) => `🔥 ${p.name}\n💰 De R$ ${p.priceFrom.toFixed(2)} por R$ ${p.priceTo.toFixed(2)}\n🛒 Link na bio/comentário fixado\n⏳ Cupom por tempo limitado`,
  (p) => `Você sabia que existe isso? ${p.name} por apenas R$ ${p.priceTo.toFixed(2)}! Salva e compartilha 📌`,
  (p) => `Achado do dia: ${p.name}. Menos de R$ ${p.priceTo.toFixed(2)} e resolve um problema do dia a dia. Link na bio.`,
];

const VIDEO_SCRIPTS = [
  (p) => `HOOK (0-2s): Mostre ${p.name} em uso.\nCONTEXTO (2-5s): "Você não sabia que isso existia."\nPROVA (5-12s): Demonstre a função principal.\nCTA (12-15s): "Link na bio. Corre antes que acabe."`,
  (p) => `HOOK (0-2s): "Esse produto custa menos que um café."\nCONTEXTO (2-6s): Nome + preço na tela.\nPROVA (6-12s): Unboxing rápido.\nCTA (12-15s): "Comenta QUERO que eu mando o link."`,
];

function generateCopy(p) { return COPY_TEMPLATES[Math.floor(Math.random() * COPY_TEMPLATES.length)](p); }
function generateVideoScript(p) { return VIDEO_SCRIPTS[Math.floor(Math.random() * VIDEO_SCRIPTS.length)](p); }

const products = JSON.parse(readFileSync(values.input, 'utf8'));
const rows = ['nome,preco_de,preco_por,marketplace,comissao,link,copy,roteiro_video'];
const allPosts = {};

for (const plat of platforms) allPosts[plat] = [];

for (const p of products) {
  const copy = generateCopy(p);
  const videoScript = generateVideoScript(p);
  rows.push(`"${p.name}",${p.priceFrom},${p.priceTo},${p.marketplace},${p.commission || 0},"${p.link}","${copy.replace(/"/g,'""').replace(/\n/g,' | ')}","${videoScript.replace(/"/g,'""').replace(/\n/g,' | ')}"`);
  for (const plat of platforms) {
    allPosts[plat].push({ text: copy, link: p.link, platform: plat, videoScript });
  }
}

writeFileSync('planilha_achadinhos.csv', rows.join('\n'), 'utf8');
console.log(`Planilha salva: planilha_achadinhos.csv (${products.length} produtos)`);

for (const plat of platforms) {
  writeFileSync(`posts_${plat}.json`, JSON.stringify(allPosts[plat], null, 2), 'utf8');
  console.log(`Posts gerados: posts_${plat}.json (${allPosts[plat].length} posts) → node poster.mjs --platform=${plat} --file=posts_${plat}.json`);
}

console.log('\nPróximo passo: para cada plataforma, rodar poster.mjs com o arquivo correspondente.');