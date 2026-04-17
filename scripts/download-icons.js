#!/usr/bin/env node
/**
 * Vuddy Icon Downloader
 * Figma REST API를 사용해 outline_, fill_, etc_logo_ 아이콘을 SVG로 export합니다.
 *
 * 사용법:
 *   FIGMA_TOKEN=your_token node scripts/download-icons.js
 *
 * Figma Personal Access Token 발급:
 *   Figma → 계정 설정 → Security → Personal access tokens
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = 'd7eKp1IERJQXyDS4jLqnMX';
const OUT_DIR = path.join(__dirname, '../icons/svg');

if (!TOKEN) {
  console.error('❌  FIGMA_TOKEN 환경변수를 설정해주세요.');
  console.error('    export FIGMA_TOKEN=figd_xxxxxxxxxxxx');
  process.exit(1);
}

// All 155 icon components (outline_, fill_, etc_logo_)
const ICONS = [
  { id: '57:966',    name: 'fill_like' },
  { id: '692:6',     name: 'fill_warning' },
  { id: '57:963',    name: 'fill_plus_circle' },
  { id: '57:965',    name: 'fill_close_circle' },
  { id: '57:962',    name: 'fill_check_circle' },
  { id: '57:961',    name: 'fill_edit' },
  { id: '57:960',    name: 'fill_information_circle' },
  { id: '57:959',    name: 'fill_triangle_left' },
  { id: '57:957',    name: 'fill_triangle_right' },
  { id: '57:964',    name: 'fill_triangle_down' },
  { id: '57:958',    name: 'fill_triangle_up' },
  { id: '57:955',    name: 'fill_play' },
  { id: '57:953',    name: 'fill_pause' },
  { id: '253:551',   name: 'fill_verified' },
  { id: '253:549',   name: 'fill_shop' },
  { id: '253:550',   name: 'fill_box' },
  { id: '452:623',   name: 'fill_camera' },
  { id: '676:2',     name: 'fill_send' },
  { id: '419:402',   name: 'fill_pin' },
  { id: '553:524',   name: 'fill_sorting' },
  { id: '597:1672',  name: 'fill_notification' },
  { id: '597:1670',  name: 'fill_person' },
  { id: '9331:4140', name: 'outline_person' },
  { id: '597:1671',  name: 'fill_home' },
  { id: '9331:4138', name: 'outline_home' },
  { id: '740:1236',  name: 'fill_house' },
  { id: '689:19',    name: 'fill_comment' },
  { id: '692:23',    name: 'fill_trash' },
  { id: '792:613',   name: 'fill_rank' },
  { id: '138:297',   name: 'etc_logo_google' },
  { id: '138:296',   name: 'etc_logo_apple' },
  { id: '138:295',   name: 'etc_logo_x' },
  { id: '2079:916',  name: 'fill_logo_vuddy' },
  { id: '57:935',    name: 'outline_check_circle' },
  { id: '57:932',    name: 'outline_information' },
  { id: '57:939',    name: 'outline_faq' },
  { id: '57:931',    name: 'outline_warning' },
  { id: '57:952',    name: 'outline_ellipsis_vertical' },
  { id: '57:951',    name: 'outline_ellipsis_horizon' },
  { id: '57:929',    name: 'outline_search' },
  { id: '57:930',    name: 'outline_notification' },
  { id: '9660:875',  name: 'outline_notification_off' },
  { id: '57:938',    name: 'outline_share' },
  { id: '57:947',    name: 'outline_link' },
  { id: '57:943',    name: 'outline_nope' },
  { id: '57:950',    name: 'outline_setting' },
  { id: '57:928',    name: 'outline_arrow_up' },
  { id: '323:416',   name: 'outline_arrow_down' },
  { id: '9335:2702', name: 'outline_outlink' },
  { id: '57:922',    name: 'outline_close' },
  { id: '57:921',    name: 'outline_reload' },
  { id: '8034:2896', name: 'outline_history' },
  { id: '57:924',    name: 'outline_plus' },
  { id: '57:923',    name: 'outline_chevron_updown' },
  { id: '57:920',    name: 'outline_chevron_up' },
  { id: '57:926',    name: 'outline_arrow_left' },
  { id: '57:919',    name: 'outline_chevron_right' },
  { id: '57:918',    name: 'outline_arrow_right' },
  { id: '57:927',    name: 'outline_chevron_left' },
  { id: '57:917',    name: 'outline_check' },
  { id: '57:925',    name: 'outline_chevron_down' },
  { id: '127:106',   name: 'outline_reorder' },
  { id: '9228:2153', name: 'outline_menu' },
  { id: '57:944',    name: 'outline_photo' },
  { id: '1985:169',  name: 'fill_photo' },
  { id: '9982:9791', name: 'fill_photos' },
  { id: '57:946',    name: 'outline_camera' },
  { id: '57:942',    name: 'outline_video' },
  { id: '57:934',    name: 'outline_chat' },
  { id: '57:933',    name: 'outline_like' },
  { id: '57:945',    name: 'outline_speaker' },
  { id: '57:949',    name: 'outline_mute' },
  { id: '57:940',    name: 'outline_email' },
  { id: '263:367',   name: 'outline_verified' },
  { id: '253:417',   name: 'outline_shop' },
  { id: '253:418',   name: 'outline_box' },
  { id: '278:1511',  name: 'outline_arrow_iosback' },
  { id: '404:490',   name: 'outline_dashboard' },
  { id: '406:6',     name: 'outline_channel' },
  { id: '406:11',    name: 'outline_post' },
  { id: '406:19',    name: 'outline_card' },
  { id: '406:25',    name: 'outline_cart' },
  { id: '3850:2403', name: 'outline_cart_check' },
  { id: '3850:2404', name: 'outline_cart_time' },
  { id: '406:32',    name: 'outline_follower' },
  { id: '407:10',    name: 'outline_money' },
  { id: '407:15',    name: 'outline_headphone' },
  { id: '415:777',   name: 'outline_copy' },
  { id: '455:967',   name: 'outline_pin' },
  { id: '9597:3523', name: 'outline_unpin' },
  { id: '428:573',   name: 'outline_trash' },
  { id: '428:578',   name: 'outline_edit' },
  { id: '435:601',   name: 'outline_calendar' },
  { id: '457:1007',  name: 'outline_siren' },
  { id: '644:1251',  name: 'outline_timer' },
  { id: '701:9',     name: 'outline_lock' },
  { id: '6294:24',   name: 'outline_unlock' },
  { id: '704:573',   name: 'outline_message' },
  { id: '1492:853',  name: 'outline_expend' },
  { id: '1965:888',  name: 'outline_reduce' },
  { id: '1494:1494', name: 'outline_clipboard' },
  { id: '1504:1562', name: 'fill_video' },
  { id: '1511:1055', name: 'fill_minus_circle' },
  { id: '1745:1085', name: 'outline_lowrank' },
  { id: '1761:14',   name: 'fill_vuddycard' },
  { id: '1764:1652', name: 'fill_new' },
  { id: '1763:835',  name: 'outline_download' },
  { id: '2305:998',  name: 'fill_skip' },
  { id: '2507:14',   name: 'fill_mic' },
  { id: '2952:1247', name: 'etc_logo_naver' },
  { id: '3814:1385', name: 'outline_tool' },
  { id: '3850:2405', name: 'outline_tool_time' },
  { id: '3850:2406', name: 'outline_four_square' },
  { id: '3910:22',   name: 'outline_ticket' },
  { id: '3910:389',  name: 'outline_post_2' },
  { id: '9300:4978', name: 'outline_chat_create' },
  { id: '4326:1307', name: 'fill_alarm' },
  { id: '4358:1181', name: 'fill_crown' },
  { id: '4341:8',    name: 'outline_minus' },
  { id: '5324:955',  name: 'outline_broadcast' },
  { id: '5420:2216', name: 'outline_collection' },
  { id: '5679:4302', name: 'fill_collection' },
  { id: '5519:221',  name: 'fill_post' },
  { id: '5601:2106', name: 'fill_ticket' },
  { id: '5624:218',  name: 'outline_house' },
  { id: '7371:1421', name: 'outline_address' },
  { id: '7811:2927', name: 'outline_class' },
  { id: '5671:962',  name: 'outline_gacha' },
  { id: '5725:1845', name: 'outline_list' },
  { id: '6144:56',   name: 'fill_show' },
  { id: '9328:1948', name: 'outline_show' },
  { id: '9328:1949', name: 'outline_hide' },
  { id: '6491:12',   name: 'outline_grid' },
  { id: '6491:17',   name: 'outline_table' },
  { id: '5725:976',  name: 'fill_rewards' },
  { id: '7094:1210', name: 'fill_plus_square' },
  { id: '7502:1239', name: 'etc_logo_basic' },
  { id: '7502:1241', name: 'etc_logo_wh' },
  { id: '7502:1242', name: 'etc_logo_wh_circle' },
  { id: '7502:1240', name: 'etc_logo_basic_circle' },
  { id: '7811:2928', name: 'fill_class' },
  { id: '7853:1311', name: 'outline_pip' },
  { id: '8079:1394', name: 'outline_document' },
  { id: '8114:1277', name: 'fill_promotion_code' },
  { id: '8720:18',   name: 'fill_fan_creator' },
  { id: '8771:8925', name: 'outline_fan_creator' },
  { id: '9302:36',   name: 'fill_notification_off' },
  { id: '9302:80',   name: 'fill_chat_list_secret' },
  { id: '9302:78',   name: 'outline_chat_regular' },
  { id: '9302:79',   name: 'outline_chat_secret' },
  { id: '9323:2607', name: 'fill_chat_menu' },
  { id: '9331:4139', name: 'outline_chat_menu' },
  { id: '9379:2455', name: 'fill_chat_manager' },
  { id: '9068:1524', name: 'fill_heart' },
  { id: '9482:2878', name: 'outline_reply' },
];

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { ...options, headers: { 'X-Figma-Token': TOKEN, ...options.headers } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
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
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  // Process in chunks of 50 (Figma API limit per request)
  const CHUNK = 50;
  let downloaded = 0;
  let failed = [];

  for (let i = 0; i < ICONS.length; i += CHUNK) {
    const chunk = ICONS.slice(i, i + CHUNK);
    const ids = chunk.map(c => c.id.replace(':', '-')).join(',');

    process.stdout.write(`\nExporting ${i + 1}–${Math.min(i + CHUNK, ICONS.length)} / ${ICONS.length}...`);

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

    // Download each SVG (API returns keys with ':' even when queried with '-')
    for (const icon of chunk) {
      const url = data.images[icon.id] || data.images[icon.id.replace(':', '-')];
      if (!url) { failed.push(icon.name); continue; }

      try {
        const svg = await downloadUrl(url);
        fs.writeFileSync(path.join(OUT_DIR, `${icon.name}.svg`), svg);
        downloaded++;
        process.stdout.write('.');
      } catch (e) {
        failed.push(icon.name);
      }
    }

    if (i + CHUNK < ICONS.length) await sleep(300);
  }

  console.log(`\n\n✅  Downloaded: ${downloaded} / ${ICONS.length}`);
  if (failed.length) console.log(`❌  Failed: ${failed.join(', ')}`);
}

main().catch(err => { console.error(err); process.exit(1); });
