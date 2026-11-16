// Poster de ofertas com cadência anti-flood.
// Uso: node poster.mjs --platform=telegram --file=posts.json
// posts.json: array de { text, media?, link, platform }

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { parseArgs } from 'node:util';

const { values } = parseArgs({ options: { platform: { type: 'string', default: 'telegram' }, file: { type: 'string', default: 'posts.json' }, dry: { type: 'boolean', default: false } } });

const PLATFORM_LIMITS = {
  instagram: { perDay: 3, minGapMin: 120 },
  tiktok: { perDay: 3, minGapMin: 120 },
  youtube: { perDay: 2, minGapMin: 180 },
  telegram: { perDay: 12, minGapMin: 30 },
  whatsapp: { perDay: 6, minGapMin: 60 },
  kwai: { perDay: 3, minGapMin: 120 },
  facebook: { perDay: 3, minGapMin: 120 },
};

const stateFile = `state_${values.platform}.json`;
const logFile = `log_${values.platform}.jsonl`;

function loadState() {
  if (!existsSync(stateFile)) return { posts: [] };
  return JSON.parse(readFileSync(stateFile, 'utf8'));
}
function saveState(s) { writeFileSync(stateFile, JSON.stringify(s, null, 2)); }

function log(entry) {
  writeFileSync(logFile, JSON.stringify({ ts: new Date().toISOString(), ...entry }) + '\n', { flag: 'a' });
}

const posts = JSON.parse(readFileSync(values.file, 'utf8'));
const state = loadState();
const limit = PLATFORM_LIMITS[values.platform] || { perDay: 3, minGapMin: 120 };

const now = Date.now();
const dayStart = new Date(); dayStart.setHours(0,0,0,0);
const todayCount = state.posts.filter(p => new Date(p.ts).getTime() >= dayStart.getTime()).length;

console.log(`Plataforma: ${values.platform} | Limite/dia: ${limit.perDay} | Já postados hoje: ${todayCount}`);

let scheduled = 0;
for (const post of posts) {
  if (todayCount + scheduled >= limit.perDay) {
    console.log('Limite diário atingido. Restante para amanhã.');
    break;
  }
  const lastTs = state.posts.length ? new Date(state.posts[state.posts.length-1].ts).getTime() : 0;
  const gap = (now + scheduled * limit.minGapMin * 60_000) - lastTs;
  const waitMin = gap < limit.minGapMin * 60_000 ? Math.ceil((limit.minGapMin * 60_000 - gap) / 60_000) : 0;

  const entry = { ts: new Date(now + scheduled * limit.minGapMin * 60_000).toISOString(), platform: values.platform, text: post.text, link: post.link, status: values.dry ? 'dry-run' : 'scheduled' };
  console.log(`[${scheduled+1}] ${entry.ts} — ${post.text.slice(0,60)}... (espera ${waitMin}min)`);
  if (!values.dry) { log(entry); state.posts.push(entry); }
  scheduled++;
}

if (!values.dry) saveState(state);
console.log(`\nTotal agendado: ${scheduled}. Estado salvo em ${stateFile}.`);