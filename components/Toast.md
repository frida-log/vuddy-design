# Toast

> Figma: [Vuddy-Component / dialog → vuddy-toast](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=889-1298)

---

## 컴포넌트 종류

| 컴포넌트 | Figma 이름 | 설명 |
|----------|------------|------|
| iOS/Web 토스트 | `vuddy-toast` `type=iOS/Web` | 반투명 배경, 가운데 정렬 |
| Android 토스트 | `vuddy-toast` `type=Android` | 불투명 검정 배경, 왼쪽 정렬 |

> **공통 규칙**: 3초 후 자동으로 사라집니다. 간결한 문장을 사용하세요.

---

## type=iOS/Web

| 속성 | 값 | 토큰 |
|------|-----|------|
| Background | rgba(0,0,0,0.7) | `--surface-dim-high` |
| Radius | 12px | `--radius-large` |
| Padding H | 16px | `--space-xl` |
| Padding V | 8px | `--space-base` |
| Max Width | 320px | — |
| Font | Pretendard Regular 14px / lh 20px | |
| Text Color | `--text-white-primary` | |
| Text Align | center | — |

Row 변형:
- `row=1 row`: 단일 줄 (최소 높이 36px)
- `row=multi row`: 여러 줄 (최대 56px, 최대 너비 275px)

---

## type=Android

| 속성 | 값 | 토큰 |
|------|-----|------|
| Background | black | `--surface-black` |
| Radius | 4px | `--radius-xs` |
| Height | 48px | — |
| Width | 328px | — |
| Padding H | 16px | `--space-xl` |
| Shadow | `shadow-high` | `--surface-dim-lower` + `--surface-dim-lowest` |
| Font | Pretendard Regular 14px / lh 20px | |
| Text Color | `--text-white-primary` | |
| Text Align | left | — |

Row 변형:
- `row=1 row`: 단일 줄, 48px 고정 높이
- `row=multi row`: 여러 줄, 68px

---

## 사용 규칙

1. **3초 자동 소멸** — 사용자가 직접 닫을 수 없음
2. **간결한 문장** — 최대 1~2줄, 행동 유도 문구 지양
3. **플랫폼에 맞는 타입 사용** — iOS/Web은 `iOS/Web`, Android 앱은 `Android`
4. **화면 하단 Safe Area 위에 배치** — 기기별 홈 인디케이터 높이 고려

---

## Token 요약

```css
/* iOS/Web */
background:    var(--surface-dim-high);   /* rgba(0,0,0,0.7) */
border-radius: var(--radius-large);       /* 12px */

/* Android */
background:    var(--surface-black);      /* black */
border-radius: var(--radius-xs);          /* 4px */
box-shadow: 0px 10px 15px var(--surface-dim-lower),
            0px 4px 6px var(--surface-dim-lowest);
```
