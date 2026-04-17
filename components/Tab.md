# Tab

> Figma: [Vuddy-Component / tab](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=892-1300)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `vuddy-tab-button` | 필터/카테고리용 pill 탭 버튼 (기본 크기) |
| `vuddy-tab-button-small` | 소형 pill 탭 버튼 (아이콘 전용 state 포함) |
| `vuddy-segmented-bar` | 언더라인 세그먼트 탭 바 (360px, 3-tab) |
| `vuddy-segmented-cell` | 세그먼트 바 개별 셀 |

---

## vuddy-tab-button (기본)

Pill 형태의 흑/백 토글 탭. 가로 스크롤 필터 목록 등에 사용.

| 속성 | on (선택) | off (미선택) |
|------|----------|-------------|
| Background | `--surface-black` (black) | `--surface-primary` (white) |
| Border | — | 1px `--line-container-outline` (#e5e7eb) |
| Text Color | `--text-white-primary` | `--text-secondary` |
| Font | Pretendard SemiBold 14px / lh 20px | Pretendard Regular 14px / lh 20px |
| Padding H | 16px | `--gap-2xl` |
| Padding V | 8px | `--gap-base` |
| Radius | 24px | `--radius-2xl` |

---

## vuddy-tab-button-small (소형)

기본과 동일한 pill 구조이나 크기가 작고, 텍스트 없이 아이콘만 표시하는 `icon` state 추가.

| 속성 | on (선택) | off (미선택) | icon |
|------|----------|-------------|------|
| Background | `--surface-black` | `--surface-primary` | `--surface-primary` |
| Border | — | 1px `--line-container-outline` | 1px `--line-divider-secondary` |
| Text Color | `--text-white-primary` | `--text-secondary` | — |
| Font | SemiBold 12px / lh 16px | Regular 12px / lh 16px | — |
| Icon | — | — | 16×16px (예: `outline_search`) |
| Padding H | 12px | `--padding-xs` | 12px |
| Padding V | 8px | `--padding-3xs` | 8px |
| Radius | 24px | `--radius-2xl` | 24px |

> `icon` state는 텍스트 없이 아이콘만 표시 — 검색 등 보조 액션 버튼에 사용

---

## vuddy-segmented-bar

화면 상단 탭 네비게이션. 3개 탭 고정 너비(360px) 배치.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 360px | — |
| Background | white | `--surface-primary` |
| Layout | 가로 flex, 셀 균등 분배 | — |
| 탭 수 | 3개 (Select=1/2/3 variants) | — |

---

## vuddy-segmented-cell

세그먼트 바 내 개별 탭 셀.

### 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | flex-1 (균등) | — |
| Padding V | 12px | `--space-12` |
| Font Size | 15px / lh 20px | — |
| 하단 구분선 | 1px (미선택) / 2px 블랙 인디케이터 (선택) | `--line-divider-primary` |

### States

| State | Background | Font | Text Color | 하단 라인 |
|-------|-----------|------|------------|---------|
| `Selected` | `--surface-primary` | SemiBold 15px | `--line-black-primary` (black) | 2px black 인디케이터 |
| `Pressed` | `--surface-secondary` (#f9fafb) | SemiBold 15px | `--text-primary` | 2px 인디케이터 |
| `Unselected` | `--surface-primary` | Regular 15px | `--text-tertiary` | 1px `--line-divider-primary` |

> `Selected`는 `--line-black-primary` 토큰 사용 (black) — `Pressed`의 `--text-primary`와 시각적으로 동일

---

## 사용 규칙

1. **pill 탭 (`vuddy-tab-button`)은 가로 스크롤 필터 목록** — 여러 개를 가로로 나열, 독립 선택
2. **small 탭의 `icon` state는 보조 버튼** — 검색 등 아이콘 단독 액션, 텍스트 탭과 혼용 가능
3. **세그먼트 바는 화면 전체 너비 탭 전환** — `vuddy-segmented-bar` 360px, 탭 균등 분배
4. **선택된 셀은 하단 2px 인디케이터로 표시** — border가 아닌 별도 indicator 요소 사용
5. **`Pressed` state는 터치 피드백** — 배경이 `--surface-secondary`로 변경됨
