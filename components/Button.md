# Button

> Figma: [Vuddy-Component / button](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=2025-1478)

---

## 컴포넌트 종류

| 컴포넌트 | Figma 이름 | 설명 |
|----------|------------|------|
| Solid Button | `vuddy-button-{size}-solid` | 채움형 버튼 (주요 액션) |
| Outline Button | `vuddy-button-{size}-outline` | 선형 버튼 (보조 액션) |
| Icon Button | `vuddy-button-icon` | 아이콘 단독 버튼 |
| Play Button | `vuddy-button-play` | 재생/일시정지 전용 |
| Top Button | `vuddy-button-top` | 스크롤 상단 이동 |
| Check Button | `vuddy-button-check` | 체크박스형 버튼 |
| Radio Button | `vuddy-button-radio` | 라디오형 버튼 |
| Checkbox | `Vuddy-button-Checkbox` | 소형 체크박스 |
| CTA Box | `vuddy-button-ctabox` | 하단 고정 CTA 영역 |
| Indicator | `indicator` | 딤/화이트딤 인디케이터 |

---

## Solid Button

### Sizes

| Size | Height | 기본 Width | Padding (H) | Gap | Radius | Font |
|------|--------|------------|-------------|-----|--------|------|
| `large` (lg) | 52px | 312px | `--padding-small` (16px) | `--gap-base` (8px) | `--radius-large` (12px) | Pretendard SemiBold 16px / lh 22px |
| `medium` (md) | 40px | 240px | `--padding-small` (16px) | `--gap-base` (8px) | `--radius-large` (12px) | Pretendard SemiBold 14px / lh 20px |
| `small` (sm) | 32px | hug / fill | `--padding-xs` (12px) | `--gap-xs` (4px) | `--radius-base` (8px) | Pretendard SemiBold 13px / lh 18px |
| `xs` | 22px | hug | `--padding-3xs` (8px) | `--gap-xs` (4px) | `--radius-xs` (4px) | Pretendard SemiBold 12px / lh 16px |

> `small` / `xs` 는 `layout=hug` (텍스트 너비에 맞춤) / `layout=fill` (부모 너비 채움) 두 가지 레이아웃 사용 가능

### Styles & States

| Style | Enabled | Pressed | Disabled |
|-------|---------|---------|----------|
| **Primary** | `--button-primary` | `--button-primary-pressed` | `--button-primary-disabled` |
| **Secondary** | `--button-secondary` | `--button-secondary-pressed` | `--button-secondary-disabled` |
| **Tertiary** | `--button-tertiary` | `--button-tertiary-pressed` | `--button-tertiary-disabled` |
| **White** | `--button-white` | `--button-white-pressed` | `--button-white-disabled` |

### 텍스트 색상

| Style | Text Token |
|-------|------------|
| Primary | `--text-white-primary` |
| Secondary | `--text-vuddy-primary` |
| Tertiary | `--text-primary` |
| White | `--text-vuddy-primary` |
| Disabled (전체) | `--text-disabled` |

### 아이콘 옵션

- `showLIcon` — 왼쪽 아이콘 표시 여부
- `showRIcon` — 오른쪽 아이콘 표시 여부
- 아이콘 크기: 24×24px (`--image-xs`)
- 아이콘 색상은 텍스트 색상과 동일 토큰 사용

---

## Outline Button

Solid와 Size / Radius / Font 동일. 배경 투명 + 테두리 `--stroke-base` (1px).

### Styles & States

| Style | Border (Enabled) | Border (Pressed) | Border (Disabled) | Text |
|-------|-----------------|-----------------|-------------------|------|
| **Primary** | `--line-vuddy-primary` | `--line-vuddy-primary` | `--line-divider-primary` | `--text-vuddy-primary` / `--text-disabled` |
| **Secondary** | `--line-divider-primary` | `--line-divider-primary` | `--line-divider-secondary` | `--text-secondary` / `--text-disabled` |
| **Danger** | `--line-danger` | `--line-danger` | `--line-divider-primary` | `--text-danger` / `--text-disabled` |
| **White** | `--line-white-primary` | `--line-white-secondary` | `--line-white-disabled` | `--text-white-primary` / `--text-white-disabled` |

---

## Special Buttons

### Icon Button (`vuddy-button-icon`)
- 크기: 24×24px
- 상태: Default / Pressed / Disabled
- 배경 없음, 아이콘만 표시

### Play Button (`vuddy-button-play`)
- 크기: 52×52px
- 상태: `state=default` / `state=pressed`
- 아이콘: `fill_play` / `fill_pause` (교체)

### Top Button (`vuddy-button-top`)
- 크기: 40×40px
- 상태: Default / Pressed
- 화면 우하단 고정 배치

### Check Button (`vuddy-button-check`)
- 크기: 24×24px
- Selection: `Unchecked` / `Checked` / `Partial`
- 상태: Default / Pressed / Disabled

### Radio Button (`vuddy-button-radio`)
- 크기: 24×24px
- 상태: Unselected / Selected / Pressed / Disabled

### Checkbox (`Vuddy-button-Checkbox`)
- 크기: 16×16px (소형)
- 상태: Unselected / Selected / Disabled

### CTA Box (`vuddy-button-ctabox`)
- 크기: 360×96px
- 하단 고정 CTA 영역 (보통 Safe Area 포함)

### Indicator
| Size | Color Variant | 크기 |
|------|---------------|------|
| small | `white-dim` / `dim` | 49×32px |
| xs | `white-dim` / `dim` | 35×24px |

---

## 사용 규칙

1. **같은 화면에 Solid Primary는 1개만** — 주요 액션 1개, 보조 액션은 Secondary/Tertiary/Outline 사용
2. **Disabled 상태에서 onClick 이벤트 차단** — 클릭 핸들러 내부가 아닌 disabled prop으로 처리
3. **Loading 중 중복 클릭 방지** — 요청 중 버튼 비활성화 또는 disabled 상태 전환
4. **Danger는 Outline에만 존재** — 삭제 등 파괴적 액션에 사용
5. **White 버튼은 어두운 배경 위에서만** — `--surface-vuddy-primary`, 이미지 위 등
6. **아이콘 색상은 별도 지정 없이 텍스트 토큰과 동일하게** — currentColor 활용 권장

---

## Token 요약

```css
/* Solid — Primary */
background: var(--button-primary);         /* gray-900 */
color:      var(--text-white-primary);

/* Solid — Primary Pressed */
background: var(--button-primary-pressed); /* black-100 */

/* Solid — Primary Disabled */
background: var(--button-primary-disabled); /* gray-75 */
color:      var(--text-disabled);           /* gray-300 */

/* Outline — Danger */
border: var(--stroke-base) solid var(--line-danger); /* red-600 */
color:  var(--text-danger);
```
