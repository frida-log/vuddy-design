# Vuddy Design System

Vuddy 서비스의 디자인 시스템 레포지토리입니다.
디자이너, 개발자, 기획자 모든 직군이 함께 사용합니다.

- Figma 원본: [Vuddy-Foundation](https://www.figma.com/design/ikUaHBnl5dZRmpiGEwLgZW/Vuddy-Foundation) · [Vuddy-Component](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component)

---

## 파일 구조

```
vuddy-design/
├── DESIGN.md               ← 디자인 시스템 전체 문서 (토큰, 타이포그래피, 이펙트, 컴포넌트)
├── CLAUDE.md               ← AI 도구 자동 로드 컨텍스트
├── tokens/
│   ├── tokens.json         ← Figma Variables 원본 데이터 (색상·사이즈·타이포·이펙트)
│   └── tokens.css          ← CSS Custom Properties (프로젝트에서 import)
├── components/
│   ├── index.md            ← 컴포넌트 전체 목록 + Figma 링크
│   └── *.md                ← 컴포넌트별 상세 명세
├── icons/
│   ├── catalog.md          ← 아이콘 이름/용도 카탈로그
│   └── svg/                ← SVG 아이콘 파일들
└── screens/
    └── *.md                ← 화면별 구현 스펙
```

---

## 토큰 구조

`tokens/tokens.css`에 CSS 변수로 정의되어 있습니다.

| 카테고리 | 변수 접두사 | 예시 |
|----------|------------|------|
| 텍스트 색상 | `--text-*` | `--text-primary`, `--text-secondary` |
| 아이콘 색상 | `--icon-*` | `--icon-primary`, `--icon-danger` |
| 배경/오버레이 | `--surface-*` | `--surface-primary`, `--surface-dim` |
| 테두리/선 | `--line-*` | `--line-divider-primary`, `--line-img-outline` |
| 버튼 색상 | `--button-*` | `--button-primary`, `--button-secondary` |
| Radius | `--radius-*` | `--radius-base` (8px), `--radius-2xl` (24px) |
| Gap | `--gap-*` | `--gap-base` (8px), `--gap-2xl` (16px) |
| Padding | `--padding-*` | `--padding-xs` (12px), `--padding-small` (16px) |
| Space | `--space-*` | `--space-base` (8px), `--space-xl` (16px) |
| 이미지 크기 | `--image-*` | `--image-base` (40px), `--image-2xl` (64px) |
| 타이포그래피 | `--font-size-*` / `--line-height-*` | `--font-size-body-xs` (14px) |
| 그림자 | `--shadow-*` | `--shadow-base`, `--shadow-high` |

> 화면 구현 시 항상 alias 토큰을 사용하세요. primitive 색상(`--color-gray-950` 등)을 직접 쓰지 마세요.

---

## 컴포넌트 목록

| 컴포넌트 | 파일 | 상태 |
|----------|------|------|
| Button | [Button.md](components/Button.md) | ✅ |
| Input | [Input.md](components/Input.md) | ✅ |
| Checkbox / Radio / Toggle | [Control.md](components/Control.md) | ✅ |
| Tag | [Tag.md](components/Tag.md) | ✅ |
| Profile | [Profile.md](components/Profile.md) | ✅ |
| Image / Thumbnail | [Image.md](components/Image.md) | ✅ |
| Dialog | [Dialog.md](components/Dialog.md) | ✅ |
| Tip | [Tip.md](components/Tip.md) | ✅ |
| Toast | [Toast.md](components/Toast.md) | ✅ |
| Check / Caution | [Check.md](components/Check.md) | ✅ |
| Empty Screen | [Empty.md](components/Empty.md) | ✅ |
| Footer | [Footer.md](components/Footer.md) | ✅ |
| Select Box | [SelectBox.md](components/SelectBox.md) | ✅ |
| Top Bar | [TopBar.md](components/TopBar.md) | ✅ |
| Tab / Navigation Bar | [TabBar.md](components/TabBar.md) | ✅ |
| Tab (Pill / Segmented) | [Tab.md](components/Tab.md) | ✅ |
| Chat | [Chat.md](components/Chat.md) | ✅ |
| Web Menu | [WebMenu.md](components/WebMenu.md) | ✅ |
| BottomSheet | — | 🔜 |
| Card | — | 🔜 |

---

## 직군별 사용 방법

### 개발자 — Claude Code (터미널)

```bash
git clone https://github.com/frida-log/vuddy-design.git

# 프로젝트 루트에 복사
cp vuddy-design/CLAUDE.md ./CLAUDE.md
```

`claude` 실행 시 CLAUDE.md가 자동 로드되어 토큰과 컴포넌트 규칙을 인식합니다.

### 개발자 — Cursor

`.cursor/rules/design.mdc` 또는 `.cursorrules`에 추가:

```
When creating UI, always reference @DESIGN.md for tokens and components.
Use CSS custom properties from tokens/tokens.css.
Icons are in icons/svg/ — do not use external icon libraries.
```

### 개발자 — CSS

```css
@import url('https://raw.githubusercontent.com/frida-log/vuddy-design/main/tokens/tokens.css');

/* 또는 로컬 복사 후 */
@import './design-tokens/tokens.css';
```

### 디자이너

- Figma Variables 변경 시 → Token Studio로 export → `tokens/tokens.json` PR 생성
- 새 아이콘 추가 시 → SVG export → `icons/svg/` 에 추가 + `icons/catalog.md` 업데이트
- 컴포넌트 추가/변경 시 → `components/컴포넌트명.md` 작성 + `components/index.md` 등록

### 기획자 / PM

- GitHub 웹에서 `DESIGN.md` 직접 열람
- 화면 기획 시 `screens/` 폴더 참고
- 이슈/스펙 작성 시 이 레포의 토큰/컴포넌트 이름 기준으로 작성

---

## 업데이트 방법

토큰이나 컴포넌트 변경 시 PR을 올리고 디자인 리뷰 후 머지합니다.
