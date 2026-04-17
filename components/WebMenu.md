# Web Menu

> Figma: [Vuddy-Component / web-menu](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=9334-1936)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `Web-menu` | 전체 메뉴 패널 (Moweb / PC × 로그인 상태) |
| `login` | 계정 영역 카드 (log in=on/off) |
| `item` | 개별 메뉴 항목 (selected / hover / unselected) |

---

## login (계정 카드)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 전체 너비 채움 (패널 내 full) | — |
| Background | `--surface-secondary` (#f9fafb) | — |
| Border | 1px `--line-divider-secondary` (#edeff2) | `--stroke-base` |
| Radius | 12px | `--radius-large` |
| Padding | 12px | `--space-large` |
| 프로필 아바타 | `vuddy-profile` Size=base (40×40px) | — |
| 내부 gap | 8px (카드 전체) / 10px (아바타 → 텍스트) | `--gap-base` / `--gap-large` |
| 우측 아이콘 | `outline_chevron_right` 16×16px | — |

### log in 상태별

| 상태 | 프로필 | 텍스트 |
|------|--------|--------|
| `off` | 빈 프로필(blank) | "로그인해 주세요" — SemiBold 14px, `--text-primary` |
| `on` | 유저 프로필 이미지 | 닉네임 SemiBold 14px `--text-primary` + 이메일 Regular 12px `--text-tertiary` (gap 2px) |

---

## item (메뉴 항목)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding V | 12px | `--space-large` |
| Gap (바 → 아이콘 → 텍스트) | 16px | `--space-xl` |
| 좌측 인디케이터 바 | 4px 너비, 전체 높이 | — |
| 아이콘 | 20×20px | — |
| 텍스트 | SemiBold 16px / lh 22px, `--text-primary` | — |

### States

| State | 좌측 바 색상 | 아이콘 종류 | 배경 |
|-------|------------|------------|------|
| `selected` | `--surface-black` (black) | fill 아이콘 | 없음 |
| `unselected` | 투명 | outline 아이콘 | 없음 |
| `hover` | 투명 | outline 아이콘 | `--surface-dim-lower` (rgba(0,0,0,0.1)) |

---

## 메뉴 구성

### 1그룹 (주요 탐색)

| 메뉴 | 선택 아이콘 | 비선택 아이콘 |
|------|-----------|-------------|
| 홈 | `fill_home` | `outline_home` |
| 채팅 | `fill_chat_menu` | `outline_chat_menu` |
| 마이 | `fill_person` | `outline_person` |

### 구분선

1px `--line-divider-primary` 수평선 (Moweb 240px / PC 300px)

### 2그룹 (부가 기능)

| 메뉴 | 선택 아이콘 | 비선택 아이콘 |
|------|-----------|-------------|
| 마이박스 | `fill_box` | `outline_box` |
| 강의실 | `fill_class` | `outline_class` |

---

## Web-menu 전체 패널

### Moweb (280×730px)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 280px | — |
| Height | 730px | — |
| Background | white | `--surface-primary` |
| Border | 없음 | — |
| Radius | 없음 | — |
| Shadow | `shadow-high` | — |
| Padding (상단 영역) | 20px | `--space-2xl` |
| Padding (하단 버튼 영역) | pb 32px, pH 20px | `--space-4xl` / `--space-2xl` |

**레이아웃 (위→아래):**

1. **상단 영역** (padding 20px, gap 20px)
   - `etc_vuddywordmark` 로고 (90×24px) + `outline_close` 닫기 버튼 (24×24px, 우측)
   - `login` 카드 (full width)
2. **메뉴 리스트** (top: 148px, 고정, gap 12px)
   - 1그룹 → 구분선 → 2그룹
3. **하단 버튼** (pb 32px)
   - "크리에이터 / 2차 창작자 신청" — `vuddy-button-medium-outline` + `outline_outlink` 16px

---

### PC (340×430px)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 340px | — |
| Height | 430px | — |
| Background | white | `--surface-primary` |
| Border | 1px `--line-divider-primary` | `--stroke-base` |
| Radius | 16px | `--radius-xl` |
| Shadow | `shadow-high` | — |
| 상단 padding | pt 20px, pb 12px, pH 20px | — |
| 하단 padding | 20px | `--space-2xl` |

**레이아웃 (위→아래):**

1. **상단 영역** (pt 20px, pb 12px, pH 20px)
   - `login` 카드 (full width) — 로고/닫기 버튼 없음
2. **메뉴 리스트** (gap 12px)
   - 1그룹 → 구분선 → 2그룹
3. **하단 버튼** (padding 20px)
   - "크리에이터 / 2차 창작자 신청" — `vuddy-button-medium-outline` + `outline_outlink` 16px

---

## 크리에이터 신청 버튼 스펙

`vuddy-button-medium-outline` 컴포넌트 사용.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Height | 40px | — |
| Padding H | 16px | `--padding-small` |
| Border | 1px `--line-container-outline` (#e5e7eb) | `--stroke-base` |
| Radius | 8px | `--radius-base` |
| 텍스트 | SemiBold 14px / lh 20px, `--text-secondary` | — |
| 아이콘 | `outline_outlink` 16px (우측) | — |
| Gap | 4px | `--gap-xs` |

---

## 플랫폼 비교

| 항목 | Moweb | PC |
|------|-------|----|
| 너비 | 280px | 340px |
| 높이 | 730px | 430px |
| 테두리 | 없음 | 1px + radius-xl |
| 로고/닫기 | ✅ 있음 | ❌ 없음 |
| 구분선 너비 | 240px | 300px |
| 메뉴 아이템 | 280px full | 340px full |

---

## Shadow

```css
box-shadow: 0px 10px 15px var(--surface-dim-lower),   /* rgba(0,0,0,0.1) */
            0px 4px 6px var(--surface-dim-lowest);     /* rgba(0,0,0,0.05) */
```

---

## 사용 규칙

1. **Moweb은 슬라이드 드로어** — 화면 좌측에서 슬라이드인, 오버레이 배경 처리 필요
2. **PC는 드롭다운 패널** — 탑바 계정 아이콘 클릭 시 표시, 절대 위치
3. **로그인 상태에 따라 login 카드 교체** — off: "로그인해 주세요" / on: 닉네임+이메일
4. **선택된 메뉴만 fill 아이콘 + 블랙 좌측 바** — 나머지는 outline 아이콘
5. **hover는 웹 전용** — 모바일 터치 환경에서는 pressed state 별도 처리
