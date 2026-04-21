# Vuddy 정적 이미지 (`images/png/`)

Vuddy-Component에서 **PNG로 export**한 래스터·복합 그래픽입니다. 벡터 아이콘은 `icons/svg/`, 로고 SVG는 `logos/svg/`를 사용하세요.

아래 목록의 바이너리는 `scripts/download-images.js`로 생성합니다. 로컬에서 스크립트를 실행한 뒤 `images/png/*.png`를 커밋하면 저장소에서 바로 참조할 수 있습니다.

Export 시 기본 **2x** (`scale=2`)로 받아 레티나에 맞춥니다. 변경은 `FIGMA_IMAGE_SCALE` 환경변수로 조절할 수 있습니다.

## 파일 ↔ Figma

| 파일 | Figma 이름 | 링크 |
|------|-------------|------|
| `etc_image_class.png` | etc_image_class | [7887-2829](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=7887-2829&m=dev) |
| `etc_audio_default.png` | etc_audio_default | [9695-2789](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=9695-2789&m=dev) |
| `qr_code_download.png` | qr-code-download | [10954-3441](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=10954-3441&m=dev) |
| `etc_navi.png` | etc_navi | [6628-1307](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=6628-1307&m=dev) |
| `etc_welcome.png` | etc_welcome | [7100-9](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=7100-9&m=dev) |
| `etc_seriesgraphic.png` | etc_seriesgraphic | [4386-2207](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=4386-2207&m=dev) |
| `etc_btnbg_gacha.png` | etc_btnbg-gacha | [6159-9](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=6159-9&m=dev) |
| `etc_gacha_sss.png` | etc_gacha_sss | [5889-1163](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=5889-1163&m=dev) |
| `etc_gacha_ss.png` | etc_gacha_ss | [5889-1160](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=5889-1160&m=dev) |
| `etc_gacha_s.png` | etc_gacha_s | [5889-1157](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=5889-1157&m=dev) |
| `etc_gacha_a.png` | etc_gacha_a | [5889-1154](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=5889-1154&m=dev) |
| `etc_gacha_b.png` | etc_gacha_b | [5889-1148](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=5889-1148&m=dev) |
| `etc_gacha_c.png` | etc_gacha_c | [5889-1145](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=5889-1145&m=dev) |
| `etc_gacha_unveil.png` | etc_gacha_unveil | [5889-1151](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=5889-1151&m=dev) |
| `etc_app_appstore.png` | etc_app_appstore | [10954-3770](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=10954-3770&m=dev) |
| `etc_app_googleplay.png` | etc_app_googleplay | [10954-3799](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=10954-3799&m=dev) |

## PNG 갱신

```bash
export FIGMA_TOKEN=figd_xxxxxxxxxxxx
node scripts/download-images.js
# 1x만 필요하면: FIGMA_IMAGE_SCALE=1 node scripts/download-images.js
```

원본 레포: [frida-log/vuddy-design](https://github.com/frida-log/vuddy-design)
