# Image (썸네일 · 그라디언트 · 딤 플래그)

> Figma: [Vuddy-Component / img](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=1258-795)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `vuddy-thumbnail` | 정사각 썸네일 이미지 (라운드 처리, 오버레이 지원) |
| `vuddy-Gradient-solid` | 이미지 위 페이드 그라디언트 오버레이 |
| `dim-flag` | 이미지 위 날짜/텍스트 플래그 (blur / dim 두 스타일) |

---

## vuddy-thumbnail

### 스펙

| 속성 | 값 | 토큰 |
|------|-----|------|
| Shape | 정사각형 | — |
| Radius | 12px | `--radius-large` |
| Border | 1px rgba(0,0,0,0.05) | `--line-img-outline` |
| Placeholder bg | `--surface-quaternary` (#edeff2) | — |
| Placeholder icon | `imagesmode` (이미지 없음 아이콘) | — |

### 사이즈

| Size | 토큰 | px |
|------|------|----|
| `small` | `--image-small` | 32px |
| `base` | `--image-base` | 40px |
| `large` | `--image-large` | 48px |
| `xl` | `--image-xl` | 56px |
| `2xl` | `--image-2xl` | 64px |
| `3xl` | `--image-3xl` | 72px |
| `4xl` | `--image-4xl` | 80px |
| `5xl` | `--image-5xl` | 96px |
| `6xl` | `--image-6xl` | 120px |

> `2xs` / `xs` 없음 — 최소 `small` (32px)부터

### 오버레이 (`showOverlay`)

썸네일 위에 딤 처리 + 텍스트 표시 (예: "품절", "마감").

| 속성 | 값 | 토큰 |
|------|-----|------|
| 배경 | rgba(0,0,0,0.5) | `--surface-dim` |
| 텍스트 | Pretendard SemiBold 15px / lh 20px | |
| 텍스트 색상 | `--text-white-primary` | |
| 정렬 | center | — |

- `showOverlay=false` 로 비활성화
- `overlayText` prop으로 텍스트 지정

---

## vuddy-Gradient-solid

이미지 위에 배치하는 방향성 그라디언트 페이드 (텍스트 가독성 확보용).

| 속성 | 값 | 토큰 |
|------|-----|------|
| 색상 | white → transparent | `--surface-primary` |
| Direction variants | `Top` / `Right` / `Bottom` / `Left` | — |
| 크기 | 이미지 컨테이너에 맞게 fill | — |

**사용 예시**: 카드 하단 텍스트 위 페이드, 배너 이미지 좌측 그라디언트

---

## dim-flag

썸네일 위에 오버레이되는 날짜/상태 플래그. 이미지 하단 가운데 배치.

### 공통 스펙

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 158px | — |
| Padding V | 6px | `--space-small` |
| Gap (아이콘 → 텍스트) | 4px | `--space-xs` |
| Icon | 16×16px (기본: `outline_timer`) | — |
| Font | Pretendard SemiBold 12px / lh 16px | |
| Text Color | `--text-white-primary` | |

### Styles

| Style | 배경 | 블러 효과 |
|-------|------|----------|
| `blur` | `--surface-dim` rgba(0,0,0,0.5) | `backdrop-blur: 8px` (`bgblur-low`) |
| `dim` | `--surface-dim-high` rgba(0,0,0,0.7) | 없음 |

- `showIcon=false` 로 아이콘 숨김 가능
- 이미지 위 어떤 배경에도 가독성 확보: 밝은 배경 → `blur`, 어두운 배경 → `dim`

---

## 사용 규칙

1. **썸네일 border는 항상 `--line-img-outline`** — CLAUDE.md 규칙, 이미지 컨테이너 전체에 적용
2. **크기는 `--image-*` 토큰만** — 썸네일과 아바타 동일 토큰 시스템 공유
3. **오버레이 텍스트는 짧게** — "품절", "마감", "준비중" 등 2~4자
4. **dim-flag는 썸네일 하단 중앙 고정** — position: absolute, bottom: 0

---

## Token 요약

```css
/* 썸네일 기본 */
border-radius: var(--radius-large);           /* 12px */
border: 1px solid var(--line-img-outline);    /* rgba(0,0,0,0.05) */

/* 오버레이 */
background: var(--surface-dim);               /* rgba(0,0,0,0.5) */

/* dim-flag blur */
background:      var(--surface-dim);          /* rgba(0,0,0,0.5) */
backdrop-filter: blur(8px);

/* dim-flag dim */
background: var(--surface-dim-high);          /* rgba(0,0,0,0.7) */
```
