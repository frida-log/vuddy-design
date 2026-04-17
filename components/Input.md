# Input

> Figma: [Vuddy-Component / input](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=889-1299)

---

## 컴포넌트 종류

| 컴포넌트 | Figma 이름 | 설명 |
|----------|------------|------|
| Textfield | `vuddy-textfield` | 기본 텍스트 입력 필드 (1줄 / 여러줄) |
| Code Input | `vuddy-code` | OTP / 인증번호 입력 셀 (46×46px) |
| Dropdown | `vuddy-dropdown` | 선택형 드롭다운 입력 |
| Data Label | `vuddy-data-label` | 입력 필드 상단 라벨 + 헬프텍스트 |

---

## Textfield (`vuddy-textfield`)

### 크기 & 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Height | 46px (1 row) / 가변 (multi row) | — |
| Width | 294px 또는 fill | — |
| Padding (H) | 16px | `--padding-small` |
| Padding (V) | 12px | `--padding-xs` |
| Gap | 8px | `--gap-base` |
| Radius | 12px | `--radius-large` |
| Background | `--surface-tertiary` | |
| Font | Pretendard Regular 16px / lh 22px | |

### States

| State | Border | 입력 텍스트 색상 | 기타 |
|-------|--------|----------------|------|
| **Placeholder** | — | `--text-placeholder` | Lead 아이콘 (선택, `outline_search` 16×16) |
| **Focus** | `--stroke-large` (2px) `--line-vuddy-primary` | `--text-placeholder` | 커서(&#124;) `--text-vuddy-primary` SemiBold |
| **Entering** | `--stroke-large` (2px) `--line-vuddy-primary` | `--text-primary` | 커서(&#124;) `--text-vuddy-primary` SemiBold |
| **Filled** | — | `--text-primary` | Clear 아이콘 (`outline_close` 16×16, 우측) |
| **Disabled** | — | `--text-disabled` | 상호작용 없음 |
| **Error** | `--stroke-large` (2px) `--line-danger` | `--text-primary` | Clear 아이콘 우측; 에러 메시지 하단 표시 |

### 에러 메시지

에러 상태에서 입력 필드 하단에 에러 텍스트가 추가됩니다.

| 속성 | 값 |
|------|-----|
| Gap (필드 → 에러 텍스트) | `--gap-base` (8px) |
| Font | Pretendard Regular 12px / lh 16px |
| Color | `--text-danger` |

### 아이콘 옵션

- **Lead Icon** (`showLIcon`): 왼쪽 아이콘, 16×16px. 기본값 `outline_search`. 아이콘 색상은 `--icon-secondary`
- **Clear Icon**: Filled / Error 상태에서 우측에 자동 표시, `outline_close` 16×16

### Row 변형

- `row=1 row`: 고정 높이 46px, 단일 줄
- `row=multi row`: 높이 90px (기본), 여러 줄 입력 가능

---

## Code Input (`vuddy-code`)

OTP / 인증번호 등 단일 문자 입력에 사용하는 정사각형 셀.  
여러 개를 나열하여 사용 (`--gap-base` 8px 간격 권장).

### 크기 & 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Size | 46×46px | — |
| Radius | 12px | `--radius-large` |
| Background | `--surface-tertiary` | |
| Text | Pretendard SemiBold 16px / lh 22px, 가운데 정렬 | |
| Text Color | `--text-primary` | |

### States

| State | Border | 설명 |
|-------|--------|------|
| **Enabled** | — | 빈 셀, 입력 대기 |
| **Focused** | `--stroke-large` (2px) `--line-vuddy-primary` | 현재 입력 중인 셀 |
| **Filled** | — | 문자 입력 완료 |

---

## Dropdown (`vuddy-dropdown`)

### 크기 & 레이아웃

Textfield와 동일한 크기/패딩/라디우스 사용.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Height | 46px | — |
| Padding (H) | 16px | `--padding-small` |
| Padding (V) | 12px | `--padding-xs` |
| Gap | 8px | `--gap-base` |
| Radius | 12px | `--radius-large` |
| Background | `--surface-tertiary` | |
| Right Icon | `fill_triangle_down` 16×16 (항상 표시) | |
| Font | Pretendard Regular 16px / lh 22px | |

### States

| State | Border | 텍스트 색상 |
|-------|--------|-------------|
| **Placeholder** | — | `--text-placeholder` |
| **Focus** | `--stroke-large` (2px) `--line-vuddy-primary` | `--text-placeholder` |
| **Filled+focused** | `--stroke-large` (2px) `--line-vuddy-primary` | `--text-primary` |
| **Filled** | — | `--text-primary` |
| **Error** | `--stroke-large` (2px) `--line-danger` | `--text-primary` |
| **Disabled** | — | `--text-disabled` |

> 에러 상태 하단 에러 메시지 규칙은 Textfield와 동일

---

## Data Label (`vuddy-data-label`)

입력 필드 상단에 배치하는 라벨 컴포넌트.

### 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Gap (라벨 → 헬프텍스트) | 4px | `--gap-xs` |
| Gap (라벨 컴포넌트 → 입력 필드) | 8px | `--gap-base` |

### 구성 요소

| 요소 | Font | Color | 표시 조건 |
|------|------|-------|----------|
| Label 텍스트 | Pretendard SemiBold 15px / lh 20px | `--text-primary` | 항상 |
| 필수 표시 (`*`) | 위와 동일 | `--text-danger` | `showAsterisk=true` |
| 글자 수 (`12/20`) | Pretendard Regular 12px / lh 16px | `--text-placeholder` | `showNumber=true` |
| Help Text | Pretendard Regular 14px / lh 20px | `--text-tertiary` | `showHelptext=true` |

---

## 사용 규칙

1. **배경은 항상 `--surface-tertiary`** — 흰 배경 위에 올릴 경우에도 동일
2. **포커스 테두리는 `--stroke-large` (2px)** — Outline 버튼의 `--stroke-base` (1px)과 구분
3. **에러 텍스트는 필드 하단 `--gap-base` (8px) 간격** — 라벨 컴포넌트와 혼용하지 않음
4. **Clear 아이콘은 Filled / Error 상태에서만** — Placeholder / Focus / Entering에서는 표시하지 않음
5. **Code Input은 단독으로 사용하지 않음** — 여러 셀을 `--gap-base` 간격으로 나열
6. **Dropdown의 삼각형 아이콘은 항상 표시** — 상태와 무관하게 `fill_triangle_down` 고정

---

## Token 요약

```css
/* Textfield / Dropdown — 기본 */
background:   var(--surface-tertiary);     /* #f3f4f6 */
border-radius: var(--radius-large);        /* 12px */

/* Textfield — Focus / Entering */
border: var(--stroke-large) solid var(--line-vuddy-primary); /* 2px, #111827 */

/* Textfield — Error */
border: var(--stroke-large) solid var(--line-danger);        /* 2px, #dc2626 */
color-error-text: var(--text-danger);      /* #dc2626 */

/* Textfield — Filled */
color: var(--text-primary);               /* #030712 */

/* Placeholder text */
color: var(--text-placeholder);           /* #9ca3af */
```
