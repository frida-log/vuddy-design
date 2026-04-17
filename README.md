# Vuddy Design System

Vuddy 서비스의 디자인 시스템 레포지토리입니다.
디자이너, 개발자, 기획자 모든 직군이 함께 사용합니다.

## 파일 구조

```
vuddy-design/
├── DESIGN.md               ← 디자인 시스템 전체 문서 (토큰, 컴포넌트, 아이콘)
├── CLAUDE.md               ← AI 도구 자동 로드 컨텍스트
├── tokens/
│   ├── tokens.json         ← Figma Variables 원본 데이터
│   └── tokens.css          ← CSS Custom Properties
├── components/
│   ├── index.md            ← 컴포넌트 전체 목록
│   └── *.md                ← 컴포넌트별 명세
├── icons/
│   ├── catalog.md          ← 아이콘 이름/용도 카탈로그
│   └── svg/                ← SVG 아이콘 파일들
└── screens/
    └── *.md                ← 화면별 구현 스펙
```

## 직군별 사용 방법

### 개발자 — Claude Code (터미널)
```bash
# 레포 클론
git clone https://github.com/frida-log/vuddy-design.git

# 프로젝트 루트에 심볼릭 링크 또는 복사
cp vuddy-design/CLAUDE.md ./CLAUDE.md
```
`claude` 실행 시 CLAUDE.md가 자동으로 로드되어 토큰과 컴포넌트 규칙을 인식합니다.

### 개발자 — Cursor
`.cursor/rules/design.mdc` 또는 `.cursorrules` 에 추가:
```
When creating UI, always reference @DESIGN.md for tokens and components.
Use CSS custom properties from tokens/tokens.css.
Icons are in icons/svg/ — do not use external icon libraries.
```

### 개발자 — CSS 사용
```css
@import url('https://raw.githubusercontent.com/frida-log/vuddy-design/main/tokens/tokens.css');

/* 또는 로컬 복사 후 */
@import './design-tokens/tokens.css';
```

### 디자이너
- Figma Variables 변경 시 → Figma Plugin API 또는 Token Studio로 export → PR 생성
- 새 아이콘 추가 시 → SVG export → `icons/svg/` 에 추가 + `icons/catalog.md` 업데이트
- 컴포넌트 추가/변경 시 → `components/컴포넌트명.md` 업데이트

### 기획자 / PM
- GitHub 웹에서 `DESIGN.md` 직접 열람
- 화면 기획 시 `screens/` 폴더 참고
- 이슈/스펙 작성 시 이 레포의 토큰/컴포넌트 이름 기준으로 작성

## Figma 원본
- [Vuddy Foundation](https://www.figma.com/design/ikUaHBnl5dZRmpiGEwLgZW/Vuddy-Foundation)

## 업데이트 방법
토큰이나 컴포넌트 변경 시 PR을 올리고 디자인 리뷰 후 머지합니다.
