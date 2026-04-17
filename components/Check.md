# Check (인라인 안내 메시지)

> Figma: [Vuddy-Component / dialog → check](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=889-1298)

---

## 컴포넌트 종류

| Figma 이름 | `caution` | 설명 |
|------------|-----------|------|
| `check` | `cautionary` | 일반 안내 메시지 |
| `check` | `negative` | 경고/부정적 메시지 |

`align=left` / `align=center` 두 가지 정렬 지원.

---

## 공통 스펙

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 328px (또는 fill) | — |
| Padding H | 12px | `--space-large` |
| Padding V | 10px | `--space-medium` |
| Radius | 8px | `--radius-base` |
| Gap (아이콘 → 텍스트) | 4px | `--space-xs` |
| Icon Size | 16×16px | — |
| Font | Pretendard SemiBold 12px / lh 16px | |

---

## caution=cautionary (일반 안내)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Background | `--surface-tertiary` | #f3f4f6 |
| Icon | `fill_information_circle` | — |
| Text Color | `--text-tertiary` | #6b7280 |

**사용 예시**: 입력 가이드, 유의사항, 부가 설명

---

## caution=negative (경고)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Background | `--surface-danger-lowest` | #fef2f2 |
| Icon | `fill_warning` | — |
| Text Color | `--text-danger` | #dc2626 |

**사용 예시**: 오류 안내, 금지 사항, 위험 경고

---

## 사용 규칙

1. **한 줄 메시지 원칙** — 길어지면 줄바꿈 허용, 단 2줄 이하 권장
2. **아이콘은 변경 불가** — cautionary = `fill_information_circle`, negative = `fill_warning` 고정
3. **입력 필드 에러와 구분** — 필드 단위 에러는 `vuddy-textfield` Error 상태 사용, 폼/섹션 단위 안내에 `check` 사용

---

## Token 요약

```css
/* cautionary */
background: var(--surface-tertiary);      /* #f3f4f6 */
color:      var(--text-tertiary);         /* #6b7280 */

/* negative */
background: var(--surface-danger-lowest); /* #fef2f2 */
color:      var(--text-danger);           /* #dc2626 */
```
