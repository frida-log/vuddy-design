# Vuddy Design System

> Figma 원본: [Vuddy-Foundation](https://www.figma.com/design/ikUaHBnl5dZRmpiGEwLgZW/Vuddy-Foundation)

---

## 목차
- [Color Tokens](#color-tokens)
- [Size Tokens](#size-tokens)
- [Alias Tokens](#alias-tokens)
- [Components](#components)
- [Icons](#icons)
- [Image Guidelines](#image-guidelines)

---

## Color Tokens

### Global Colors (Primitives)

Figma 컬렉션: `Global-color`
CSS 파일: `tokens/tokens.css`

#### Gray
| Token | Hex | Preview |
|-------|-----|---------|
| `--color-gray-950` | `#030712` | |
| `--color-gray-900` | `#111827` | |
| `--color-gray-800` | `#1f2937` | |
| `--color-gray-700` | `#374151` | |
| `--color-gray-600` | `#4b5563` | |
| `--color-gray-500` | `#6b7280` | |
| `--color-gray-400` | `#9ca3af` | |
| `--color-gray-350` | `#bdc3cc` | |
| `--color-gray-300` | `#d1d5db` | |
| `--color-gray-250` | `#dcdfe3` | |
| `--color-gray-200` | `#e5e7eb` | |
| `--color-gray-100` | `#edeff2` | |
| `--color-gray-75`  | `#f3f4f6` | |
| `--color-gray-50`  | `#f9fafb` | |

#### YellowGreen (Vuddy Brand)
| Token | Hex |
|-------|-----|
| `--color-yellowgreen-300` | `#d0ff0c` — 주요 브랜드 하이라이트 컬러 |
| `--color-yellowgreen-400` | `#bfec00` |
| `--color-yellowgreen-500` | `#acd400` |
| `--color-yellowgreen-200` | `#e4ff73` |
| `--color-yellowgreen-100` | `#eeffa7` |
| `--color-yellowgreen-50`  | `#f5ffcb` |

#### Red
| Token | Hex |
|-------|-----|
| `--color-red-600` | `#dc2626` — danger |
| `--color-red-500` | `#ef4444` — sale |
| `--color-red-50`  | `#fef2f2` — danger surface lowest |

#### Green
| Token | Hex |
|-------|-----|
| `--color-green-600` | `#008055` — success |
| `--color-green-50`  | `#e3fcef` — success surface lowest |

#### Yellow
| Token | Hex |
|-------|-----|
| `--color-yellow-600` | `#eb8000` — caution |
| `--color-yellow-50`  | `#fffae6` — caution surface lowest |

#### Black / White (Opacity Scale)
| Token | Value |
|-------|-------|
| `--color-black-100` | `rgba(0,0,0,1)` |
| `--color-black-70`  | `rgba(0,0,0,0.7)` — dim-high overlay |
| `--color-black-50`  | `rgba(0,0,0,0.5)` — dim overlay |
| `--color-black-20`  | `rgba(0,0,0,0.2)` |
| `--color-black-10`  | `rgba(0,0,0,0.1)` |
| `--color-black-5`   | `rgba(0,0,0,0.05)` — pressed / img-outline |
| `--color-black-3`   | `rgba(0,0,0,0.03)` — hover |
| `--color-white-100` | `rgba(255,255,255,1)` |
| `--color-white-80`  | `rgba(255,255,255,0.8)` — white dim |
| `--color-white-70`  | `rgba(255,255,255,0.7)` — white secondary text |
| `--color-white-30`  | `rgba(255,255,255,0.3)` — white disabled |

> Blue, Teal, Purple, Inish-Blue, Inish-CoolGray 전체 스케일: `tokens/tokens.css` 참고

---

## Alias Tokens

Figma 컬렉션: `Alias` — primitive 토큰을 의미 기반으로 매핑한 semantic 토큰.
**화면 구현 시 항상 alias 토큰을 사용하세요.** primitive를 직접 쓰지 마세요.

### Text Colors
| Token | Alias | 사용처 |
|-------|-------|--------|
| `--text-primary`         | gray-950 | 기본 본문 텍스트 |
| `--text-secondary`       | gray-700 | 보조 텍스트 |
| `--text-tertiary`        | gray-500 | 3차 텍스트, 힌트 |
| `--text-disabled`        | gray-300 | 비활성 텍스트 |
| `--text-placeholder`     | gray-400 | 입력 플레이스홀더 |
| `--text-success`         | green-600 | 성공 메시지 |
| `--text-danger`          | red-600 | 오류 메시지 |
| `--text-caution`         | yellow-600 | 경고 메시지 |
| `--text-vuddy-primary`   | gray-900 | Vuddy 브랜드 기본 텍스트 |
| `--text-vuddy-secondary` | gray-350 | Vuddy 브랜드 보조 텍스트 |
| `--text-vuddy-highlight` | yellowgreen-300 | Vuddy 브랜드 강조 텍스트 |
| `--text-white-primary`   | white-100 | 어두운 배경 위 기본 텍스트 |
| `--text-white-secondary` | white-70 | 어두운 배경 위 보조 텍스트 |
| `--text-white-disabled`  | white-30 | 어두운 배경 위 비활성 텍스트 |

### Icon Colors
Text와 동일한 구조. prefix만 `--icon-` 으로 변경.

### Line Colors
| Token | 사용처 |
|-------|--------|
| `--line-divider-primary`   | 주요 구분선 |
| `--line-divider-secondary` | 보조 구분선 |
| `--line-container-outline` | 컨테이너 테두리 |
| `--line-img-outline`       | 이미지 외곽선 (black 5%) |
| `--line-success`           | 성공 상태 테두리 |
| `--line-danger`            | 오류 상태 테두리 |
| `--line-caution`           | 경고 상태 테두리 |
| `--line-white-divider`     | 어두운 배경 위 구분선 |

### Surface Colors
| Token | 사용처 |
|-------|--------|
| `--surface-primary`          | 기본 배경 (white) |
| `--surface-secondary`        | 보조 배경 (gray-50) |
| `--surface-tertiary`         | 3차 배경 (gray-75) |
| `--surface-quaternary`       | 4차 배경 (gray-100) |
| `--surface-vuddy-primary`    | Vuddy 브랜드 주요 배경 (gray-900) |
| `--surface-vuddy-highlight`  | Vuddy 브랜드 하이라이트 (yellowgreen-300) |
| `--surface-success`          | 성공 상태 배경 |
| `--surface-success-lowest`   | 성공 상태 최저 강도 배경 |
| `--surface-danger`           | 오류 상태 배경 |
| `--surface-danger-lowest`    | 오류 상태 최저 강도 배경 |
| `--surface-caution`          | 경고 상태 배경 |
| `--surface-caution-lowest`   | 경고 상태 최저 강도 배경 |
| `--surface-sale`             | 세일/할인 배지 배경 (red-500) |
| `--surface-dim`              | 딤 오버레이 (black 50%) |
| `--surface-dim-high`         | 강한 딤 오버레이 (black 70%) |
| `--surface-pressed`          | 눌림 상태 오버레이 (black 5%) |
| `--surface-hover`            | 호버 상태 오버레이 (black 3%) |

### Button Colors
| Token | 상태 |
|-------|------|
| `--button-primary`           | 기본 |
| `--button-primary-hover`     | 호버 |
| `--button-primary-pressed`   | 눌림 |
| `--button-primary-disabled`  | 비활성 |
| `--button-secondary`         | 기본 |
| `--button-secondary-hover`   | 호버 |
| `--button-tertiary`          | 기본 |
| `--button-white`             | 흰색 버튼 기본 |

---

## Size Tokens

Figma 컬렉션: `Size`

### Radius
| Token | Value | 사용처 |
|-------|-------|--------|
| `--radius-2xs`  | 2px  | |
| `--radius-xs`   | 4px  | 소형 태그, 배지 |
| `--radius-small`| 6px  | |
| `--radius-base` | 8px  | 기본 카드, 버튼 |
| `--radius-large`| 12px | |
| `--radius-xl`   | 16px | 대형 카드 |
| `--radius-2xl`  | 24px | 바텀시트, 모달 |
| `--radius-3xl`  | 32px | |
| `--radius-4xl`  | 40px | pill 형태 |

### Gap (Flex/Grid 간격)
| Token | Value |
|-------|-------|
| `--gap-gapless` | 0px |
| `--gap-2xs`     | 2px |
| `--gap-xs`      | 4px |
| `--gap-small`   | 6px |
| `--gap-base`    | 8px |
| `--gap-large`   | 10px |
| `--gap-xl`      | 12px |
| `--gap-2xl`     | 16px |
| `--gap-3xl`     | 20px |
| `--gap-4xl`     | 24px |
| `--gap-5xl`     | 32px |
| `--gap-6xl`     | 40px |
| `--gap-7xl`     | 48px |

### Padding
| Token | Value |
|-------|-------|
| `--padding-6xs` | 2px  |
| `--padding-5xs` | 4px  |
| `--padding-4xs` | 6px  |
| `--padding-3xs` | 8px  |
| `--padding-2xs` | 10px |
| `--padding-xs`  | 12px |
| `--padding-small`| 16px |
| `--padding-base` | 20px |
| `--padding-large`| 24px |
| `--padding-xl`   | 32px |
| `--padding-2xl`  | 40px |
| `--padding-3xl`  | 48px |
| `--padding-4xl`  | 56px |
| `--padding-5xl`  | 64px |

### Space (통합 간격 스케일)
`none(0)` → `2xs(2)` → `xs(4)` → `small(6)` → `base(8)` → `medium(10)` → `large(12)` → `xl(16)` → `2xl(20)` → `3xl(24)` → `4xl(32)` → `5xl(40)` → `6xl(48)` → `7xl(56)` → `8xl(64)` → `9xl(72)` → `10xl(80)`

### Stroke
| Token | Value |
|-------|-------|
| `--stroke-small` | 0.5px |
| `--stroke-base`  | 1px |
| `--stroke-large` | 2px |
| `--stroke-xl`    | 3px |
| `--stroke-2xl`   | 4px |

### Image (아바타/썸네일 크기)
| Token | Value | 사용처 |
|-------|-------|--------|
| `--image-2xs`   | 16px  | |
| `--image-xs`    | 24px  | |
| `--image-small` | 32px  | 소형 아바타 |
| `--image-base`  | 40px  | 기본 아바타 |
| `--image-large` | 48px  | |
| `--image-xl`    | 56px  | |
| `--image-2xl`   | 64px  | 대형 아바타 |
| `--image-3xl`   | 72px  | |
| `--image-4xl`   | 80px  | |
| `--image-5xl`   | 96px  | |
| `--image-6xl`   | 120px | 프로필 페이지 |

---

## Typography

Figma 컬렉션: `Font` / `Typography`  
전체 공통 — `font-family: Pretendard`

| Token | Size | Weight | Line Height |
|-------|------|--------|-------------|
| `display-base`         | 36px | Bold 700        | 46px |
| `display-small`        | 32px | Bold 700        | 40px |
| `heading-base`         | 28px | Bold 700        | 36px |
| `heading-small`        | 24px | Bold 700        | 30px |
| `title-base`           | 20px | Bold 700        | 26px |
| `title-small`          | 18px | Bold 700        | 24px |
| `body-base-accent`     | 16px | SemiBold 600    | 22px |
| `body-base`            | 16px | Regular 400     | 22px |
| `body-small-accent`    | 15px | SemiBold 600    | 20px |
| `body-small`           | 15px | Regular 400     | 20px |
| `body-xs-accent`       | 14px | SemiBold 600    | 20px |
| `body-xs`              | 14px | Regular 400     | 20px |
| `caption-base-accent`  | 12px | SemiBold 600    | 16px |
| `caption-base`         | 12px | Regular 400     | 16px |
| `caption-small-accent` | 10px | SemiBold 600    | 14px |
| `caption-small`        | 10px | Regular 400     | 14px |
| `caption-xs-accent`    |  9px | SemiBold 600    | 12px |
| `caption-xs`           |  9px | Light 300       | 12px |

CSS 변수: `--font-size-{token}` / `--line-height-{token}` (예: `--font-size-body-xs`, `--line-height-body-xs`)

> `-accent` 접미사 = SemiBold 600 / 접미사 없음 = Regular 400 (display·heading·title은 항상 Bold 700)

---

## Effects

Figma 컬렉션: `Effect`

| Token | CSS 변수 | 용도 |
|-------|---------|------|
| `shadow-higher` | `--shadow-higher` | 모달·강조 플로팅 요소 |
| `shadow-high`   | `--shadow-high`   | 드롭다운·바텀시트·셀렉트박스 |
| `shadow-base`   | `--shadow-base`   | 버튼·입력창·토글 knob |
| `shadow-low`    | `--shadow-low`    | 미세 부각 |

```css
--shadow-higher: 0px 0px 6px -2px var(--surface-dim-lowest),
                 0px 4px 16px 0px var(--surface-dim-low);

--shadow-high:   0px 4px 6px 0px var(--surface-dim-lowest),
                 0px 10px 15px 0px var(--surface-dim-lower);

--shadow-base:   0px 2px 4px 0px var(--surface-dim-lowest),
                 0px 4px 6px 0px var(--surface-dim-lower);

--shadow-low:    0px 1px 2px 0px var(--surface-dim-lowest),
                 0px 1px 3px 0px var(--surface-dim-lower);
```

---

## Components

컴포넌트 상세 명세는 `components/` 폴더를 참고하세요.

- [전체 컴포넌트 목록](components/index.md)

---

## Icons

아이콘 카탈로그는 `icons/catalog.md` 를 참고하세요.
SVG 파일은 `icons/svg/` 폴더에 있습니다.

---

## Image Guidelines

- 포맷: WebP 권장 (fallback PNG)
- 아바타 비율: 1:1 (원형 클리핑)
- 카드 썸네일 비율: 1:1 또는 4:3
- 이미지 외곽선: `--line-img-outline` (black 5%) 적용
- 크기 토큰: `--image-*` 사용
