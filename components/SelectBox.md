# Select Box (컨텍스트 메뉴)

> Figma: [Vuddy-Component / select box](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=2492-2103)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `vuddy-select-box` | 드롭다운 컨텍스트 메뉴 컨테이너 |
| `vuddy-select-box-cell` | 메뉴 내 개별 항목 셀 |

---

## vuddy-select-box (컨테이너)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | **144px** (고정) | — |
| Background | white | `--surface-primary` |
| Border | 1px | `--stroke-base` + `--line-divider-secondary` |
| Radius | 12px | `--radius-large` |
| Padding V | 8px | `--padding-3xs` |
| Shadow | `shadow-high` | `--surface-dim-lower` + `--surface-dim-lowest` |
| Cell 간격 | 0px (gapless) | — |

> **width는 144px 고정** — 내용에 맞게 늘리지 않음

Shadow:
```css
box-shadow: 0px 10px 15px var(--surface-dim-lower),   /* rgba(0,0,0,0.1) */
            0px 4px 6px var(--surface-dim-lowest);     /* rgba(0,0,0,0.05) */
```

---

## vuddy-select-box-cell

### 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Height | 40px | — |
| Padding H | 16px | `--space-xl` |
| Padding V | 10px | `--space-medium` |
| Gap (아이콘 → 텍스트) | 10px | `--space-medium` |
| Icon | 16×16px (교체 가능) | — |
| Font | Pretendard Regular 14px / lh 20px | |

### States

| type | state | 배경 | 텍스트 색상 |
|------|-------|------|------------|
| `default` | `enabled` | `--surface-primary` (white) | `--text-secondary` |
| `default` | `disabled` | `--surface-primary` (white) | `--text-disabled` |
| `default` | `danger` | `--surface-primary` (white) | `--text-danger` |
| `pressed` | `enabled` | white + rgba(0,0,0,0.05) | `--text-secondary` |
| `pressed` | `disabled` | white + rgba(0,0,0,0.05) | `--text-disabled` |
| `pressed` | `danger` | white + rgba(0,0,0,0.05) | `--text-danger` |

Pressed 배경:
```css
background: rgba(0, 0, 0, 0.05); /* white 위에 5% dim overlay */
```

### 아이콘 & 텍스트 조합 예시

| 용도 | 아이콘 | 텍스트 색상 |
|------|--------|------------|
| 수정 | `outline_edit` | `--text-secondary` |
| 삭제 | `outline_trash` | `--text-danger` (danger state) |
| 공유 | `outline_share` | `--text-secondary` |
| 복사 | `outline_copy` | `--text-secondary` |

---

## 사용 규칙

1. **width 144px 고정** — 텍스트가 길 경우 생략(ellipsis) 처리
2. **삭제 등 위험 액션은 `state=danger`** — 텍스트 + 아이콘 모두 `--text-danger`로 변경
3. **disabled 항목은 포함 가능** — 조건부 비활성화 시 `state=disabled` 사용, onClick 차단
4. **항목 수 제한 없음** — 통상 2~5개 권장, 스크롤 없이 화면 내 노출 가능한 범위로 제한
5. **트리거 요소 근처에 배치** — `outline_ellipsis_vertical` / `outline_ellipsis_horizon` 버튼 클릭 시 표시
