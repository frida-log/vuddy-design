#!/usr/bin/env node
/**
 * Vuddy 로고 그래픽 SVG export (Figma REST Images API)
 *
 * 사용법:
 *   FIGMA_TOKEN=your_token node scripts/download-logos.js
 *
 * 대상: Vuddy-Component 파일 내 브랜드 로고 컴포넌트 (logos/svg/)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = 'd7eKp1IERJQXyDS4jLqnMX';
const OUT_DIR = path.join(__dirname, '../logos/svg');

if (!TOKEN) {
  console.error('❌  FIGMA_TOKEN 환경변수를 설정해주세요.');
  console.error('    export FIGMA_TOKEN=figd_xxxxxxxxxxxx');
  process.exit(1);
}

// Figma layer names = 파일명 (components 와 동일한 etc_* 규칙)
const LOGOS = [
  { id: '709:1168', name: 'etc_vuddywordmark' },
  { id: '3202:1003', name: 'etc_logographic' },
  { id: '2466:2270', name: 'etc_appicon' },
  { id: '7502:1239', name: 'etc_logo_basic' },
  { id: '7502:1240', name: 'etc_logo_basic_circle' },
  { id: '7502:1241', name: 'etc_logo_wh' },
  { id: '7502:1242', name: 'etc_logo_wh_circle' },
];

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { ...options, headers: { 'X-Figma-Token': TOKEN, ...options.headers } }, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.end();
  });
}

function downloadUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const CHUNK = 50;
  let downloaded = 0;
  const failed = [];

  for (let i = 0; i < LOGOS.length; i += CHUNK) {
    const chunk = LOGOS.slice(i, i + CHUNK);
    const ids = chunk.map(c => c.id.replace(':', '-')).join(',');

    process.stdout.write(`\nExporting ${i + 1}–${Math.min(i + CHUNK, LOGOS.length)} / ${LOGOS.length}...`);

    const res = await fetch(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${ids}&format=svg&svg_include_id=false&svg_simplify_stroke=true`
    );

    if (res.status !== 200) {
      console.error(`\n  API error ${res.status}:`, res.body.slice(0, 200));
      process.exit(1);
    }

    const data = JSON.parse(res.body);
    if (data.err) {
      console.error('\n  Figma error:', data.err);
      process.exit(1);
    }

    for (const item of chunk) {
      const url = data.images[item.id] || data.images[item.id.replace(':', '-')];
      if (!url) {
        failed.push(item.name);
        continue;
      }

      try {
        const svg = await downloadUrl(url);
        fs.writeFileSync(path.join(OUT_DIR, `${item.name}.svg`), svg);
        downloaded++;
        process.stdout.write('.');
      } catch {
        failed.push(item.name);
      }
    }

    if (i + CHUNK < LOGOS.length) await sleep(300);
  }

  console.log(`\n\n✅  Downloaded: ${downloaded} / ${LOGOS.length}`);
  if (failed.length) console.log(`❌  Failed: ${failed.join(', ')}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
