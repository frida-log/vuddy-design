#!/usr/bin/env node
/**
 * Vuddy 정적 이미지 PNG export (Figma REST Images API)
 *
 * 사용법:
 *   FIGMA_TOKEN=your_token node scripts/download-images.js
 *
 * 대상: Vuddy-Component 내 래스터/복합 그래픽 컴포넌트 (images/png/)
 * scale=2 → 레티나용 2x 픽셀 밀도
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = 'd7eKp1IERJQXyDS4jLqnMX';
const OUT_DIR = path.join(__dirname, '../images/png');
const SCALE = process.env.FIGMA_IMAGE_SCALE || '2';

if (!TOKEN) {
  console.error('❌  FIGMA_TOKEN 환경변수를 설정해주세요.');
  console.error('    export FIGMA_TOKEN=figd_xxxxxxxxxxxx');
  process.exit(1);
}

// Figma 컴포넌트 이름 → 파일명 (특수문자는 _ 로 통일)
const IMAGES = [
  { id: '7887:2829', name: 'etc_image_class' },
  { id: '9695:2789', name: 'etc_audio_default' },
  { id: '10954:3441', name: 'qr_code_download' },
  { id: '6628:1307', name: 'etc_navi' },
  { id: '7100:9', name: 'etc_welcome' },
  { id: '4386:2207', name: 'etc_seriesgraphic' },
  { id: '6159:9', name: 'etc_btnbg_gacha' },
  { id: '5889:1163', name: 'etc_gacha_sss' },
  { id: '5889:1160', name: 'etc_gacha_ss' },
  { id: '5889:1157', name: 'etc_gacha_s' },
  { id: '5889:1154', name: 'etc_gacha_a' },
  { id: '5889:1148', name: 'etc_gacha_b' },
  { id: '5889:1145', name: 'etc_gacha_c' },
  { id: '5889:1151', name: 'etc_gacha_unveil' },
  { id: '10954:3770', name: 'etc_app_appstore' },
  { id: '10954:3799', name: 'etc_app_googleplay' },
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

function downloadBinary(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadBinary(res.headers.location));
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url.slice(0, 80)}…`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
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

  for (let i = 0; i < IMAGES.length; i += CHUNK) {
    const chunk = IMAGES.slice(i, i + CHUNK);
    const ids = chunk.map(c => c.id.replace(':', '-')).join(',');

    process.stdout.write(`\nExporting ${i + 1}–${Math.min(i + CHUNK, IMAGES.length)} / ${IMAGES.length}...`);

    const res = await fetch(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${ids}&format=png&scale=${SCALE}`
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
        const buf = await downloadBinary(url);
        fs.writeFileSync(path.join(OUT_DIR, `${item.name}.png`), buf);
        downloaded++;
        process.stdout.write('.');
      } catch {
        failed.push(item.name);
      }
    }

    if (i + CHUNK < IMAGES.length) await sleep(300);
  }

  console.log(`\n\n✅  Downloaded: ${downloaded} / ${IMAGES.length} (scale=${SCALE})`);
  if (failed.length) console.log(`❌  Failed: ${failed.join(', ')}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
