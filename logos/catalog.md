# Vuddy 로고 그래픽 (`logos/svg/`)

Vuddy-Component 파일의 로고 전용 컴포넌트입니다. UI 아이콘(`icons/svg/`)과 구분해 브랜드 로고만 모아 두었습니다.

> **참고:** `etc_logo_*` 네 종은 `icons/svg/`와 동일한 Figma export를 `logos/svg/`에 두었습니다. `etc_vuddywordmark`, `etc_logographic`, `etc_appicon` 세 종은 레포에 SVG로 포함되어 있으며, Figma에서 수정한 뒤에는 아래 `download-logos.js`로 다시 받을 수 있습니다.

## 파일 ↔ Figma

| 파일 | Figma 컴포넌트 | 링크 |
|------|----------------|------|
| `etc_vuddywordmark.svg` | etc_vuddywordmark | [709-1168](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=709-1168&m=dev) |
| `etc_logographic.svg` | etc_logographic | [3202-1003](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=3202-1003&m=dev) |
| `etc_appicon.svg` | etc_appicon | [2466-2270](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=2466-2270&m=dev) |
| `etc_logo_basic.svg` | etc_logo_basic | [7502-1239](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=7502-1239&m=dev) |
| `etc_logo_basic_circle.svg` | etc_logo_basic_circle | [7502-1240](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=7502-1240&m=dev) |
| `etc_logo_wh.svg` | etc_logo_wh | [7502-1241](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=7502-1241&m=dev) |
| `etc_logo_wh_circle.svg` | etc_logo_wh_circle | [7502-1242](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=7502-1242&m=dev) |

## SVG 갱신

Figma에서 로고를 수정한 뒤, 저장소의 SVG를 다시 받으려면 ([`scripts/download-logos.js`](../scripts/download-logos.js) — `download-icons.js`와 동일하게 Personal Access Token 사용):

```bash
export FIGMA_TOKEN=figd_xxxxxxxxxxxx
node scripts/download-logos.js
```

원본 레포: [frida-log/vuddy-design](https://github.com/frida-log/vuddy-design)
