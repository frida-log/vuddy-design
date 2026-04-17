# Empty (빈 화면)

> Figma: [Vuddy-Component / dialog → vuddy-empty](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=889-1298)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `vuddy-empty-screen` | 콘텐츠 없음 / 오류 상태의 전체 화면 |

---

## 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 360px (화면 너비) | — |
| Height | 640px (화면 높이) | — |
| Padding Top | 160px | — |
| Padding H | 32px | `--space-4xl` |
| Gap | 16px | `--space-xl` |
| 정렬 | 가로 가운데 | — |

---

## 구성 요소

### Graphic
- 크기: 64×64px
- 배경: `--surface-gray-low` (#dcdfe3)
- Radius: `--radius-xl` (16px)
- 기본 이미지: Vuddy 마스코트 (`etc_errorgraphic`)
- **교체 가능** (`swapGraphic`) — 빈 상태 유형에 맞는 그래픽으로 변경

### 텍스트

| 요소 | Font | Color |
|------|------|-------|
| Title | Pretendard SemiBold 15px / lh 20px | `--text-primary` |
| Body | Pretendard Regular 15px / lh 20px | `--text-tertiary` |
| Gap (title → body) | 4px (`--gap-xs`) | — |
| 정렬 | center | — |

> `showTitle` / `showBody` 로 각각 표시 여부 제어 가능

### 버튼 (선택)

기본값: `outline_reload` + "새로 고침" 텍스트 (Small Outline Secondary)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Height | 32px | — |
| Padding H | 10px | `--padding-2xs` |
| Radius | 6px | `--radius-small` |
| Border | `--stroke-base` (1px) `--line-container-outline` | |
| Icon | `outline_reload` 16×16 | — |
| Font | Pretendard SemiBold 12px / lh 16px | |
| Text Color | `--text-secondary` | |

- `showButton=false` 로 숨김 가능
- **교체 가능** (`swapButton`) — 상황에 맞는 버튼으로 변경 (예: "다시 시도", "홈으로")

---

## 사용 규칙

1. **전체 화면 점유** — 리스트, 피드 등 콘텐츠가 0개일 때만 사용
2. **Graphic은 상황에 맞게 교체** — 검색 결과 없음, 알림 없음 등 문맥별 그래픽 사용
3. **버튼은 재시도 또는 이동 액션** — 단순 안내만 필요하면 `showButton=false`
4. **타이틀은 상태를 명확히** — "검색 결과가 없어요", "아직 알림이 없어요" 등 구체적으로 작성
