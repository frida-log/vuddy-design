# Top Bar

> Figma: [Vuddy-Component / top bar](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=42-2)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `Top bar` | 상단 앱 바 (플랫폼 × 타입 × bg-color 조합) |
| `topbar-element` | 탑바 내 개별 아이콘 요소들 |
| `search-input` | 탑바 내 검색 입력창 |

---

## 플랫폼별 높이

| Platform | Height |
|----------|--------|
| iOS — main/title/channel/search | 52px |
| iOS — back | 44px |
| Android | 56px |
| Moweb | 56px |
| PC | 56px |

---

## Types

### `type=main`

홈 메인 화면 상단. 로고 + 알림/장바구니 아이콘.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding H | 16px | `--space-xl` |
| Lead | `topbar-lead-home` (Vuddy 로고 24×24px) | — |
| Tail | `topbar-notification` + `topbar-cart` | gap `--space-xl` (16px) |

### `type=title`

리스트/피드 화면 타이틀 바. 제목 텍스트 + 우측 아이콘.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding H | 16px | `--space-xl` |
| Title 폰트 | Pretendard **Bold** 20px / lh 26px | `--text-primary` |
| Tail | 알림 + 장바구니 (교체 가능) | gap `--space-xl` (16px) |

### `type=back`

상세 화면 탑바. 뒤로가기 + 프로필/타이틀 + 우측 액션.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding H | 16px | `--space-xl` |
| Padding V | 10px | `--space-medium` |
| Lead | `topbar-lead-back` (`outline_arrow_iosback`) | — |
| 프로필 | `vuddy-profile` Size=xs (24px), 선택 표시 | — |
| Title 폰트 | Pretendard SemiBold 16px / lh 22px, ellipsis | `--text-primary` |
| Tail | `topbar-search` + `topbar-tail-setting` (교체 가능) | gap `--space-xl` (16px) |

### `type=channel`

채널/채팅 화면 탑바. 뒤로가기 + 우측 액션.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding H | 16px | `--space-xl` |
| Lead | `topbar-lead-back` | — |
| Tail | 알림 + 장바구니 (교체 가능) | gap `--space-xl` (16px) |

### `type=channel-scroll`

채널에서 스크롤 시 나타나는 탑바 (채널명 표시).

### `type=search`

검색 화면 탑바. 뒤로가기 + 검색 입력창.

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding H | 12px | `--space-large` |
| Padding V | 6px | `--space-small` |
| Lead | `topbar-lead-back` | — |
| Search Input | flex-1, `--surface-tertiary`, radius `--radius-2xl` (24px) | |
| Search Icon | `outline_search` 20×20px | |
| Search Font | Pretendard Regular 14px / lh 20px, `--text-placeholder` | |

---

## bg-color Variants

| bg-color | 배경 | 사용 상황 |
|----------|------|----------|
| `white` | `--surface-primary` | 기본 흰 배경 |
| `transparent` | 투명 | 이미지/배너 위 float |
| `blur` | `--surface-dim` + backdrop-blur(8px) | 스크롤 후 이미지 위 |
| `black` | `--surface-black` | 어두운 배경 위 |
| `light-gray` | `--surface-tertiary` | 회색 배경 화면 |

---

## topbar-element (아이콘 요소)

모든 요소 24×24px.

### Lead (좌측)

| 이름 | 아이콘 | 설명 |
|------|--------|------|
| `topbar-lead-blank` | — | 자리 표시 (없음) |
| `topbar-lead-back` | `outline_arrow_iosback` | iOS 뒤로가기 |
| `topbar-lead-back-arrow` | `outline_arrow_left` | 일반 뒤로가기 |
| `topbar-lead-x` | `outline_close` | 모달 닫기 |
| `topbar-lead-home` | Vuddy 로고 | 홈 로고 |

### Tail (우측)

| 이름 | 아이콘 | 설명 |
|------|--------|------|
| `topbar-tail-blank` | — | 자리 표시 |
| `topbar-tail-x` | `outline_close` | 닫기 |
| `topbar-tail-share` | `outline_share` | 공유 |
| `topbar-tail-download` | `outline_download` | 다운로드 |
| `topbar-tail-list` | `outline_list` | 목록 |
| `topbar-tail-more` | `outline_ellipsis_vertical` | 더보기 |
| `topbar-tail-setting` | `outline_setting` | 설정 |
| `topbar-tail-information` | `outline_information` | 정보 |
| `topbar-tail-chat-create` | `outline_chat_create` | 채팅 생성 |
| `topbar-notification` | `outline_notification` + dot | 알림 (badge 포함) |
| `topbar-cart` | `outline_cart` + badge | 장바구니 (숫자 badge) |
| `topbar-search` | `outline_search` | 검색 |
| `topbar-menu` | `outline_menu` | 메뉴 |

### Badge 스펙 (알림·장바구니)

| 속성 | 값 | 토큰 |
|------|-----|------|
| 배경 | black | `--surface-black` |
| 숫자 폰트 | Pretendard SemiBold 9px / lh 12px | `--text-white-primary` |
| Padding H | 6px | `--gap-small` |
| Padding V | 2px | `--gap-2xs` |
| Radius | 40px (pill) | — |
| Position | 아이콘 우상단 오프셋 | absolute |

---

## 사용 규칙

1. **플랫폼에 맞는 높이 사용** — iOS 52/44px, Android/Moweb/PC 56px
2. **Tail 아이콘은 최대 2개** — 3개 이상 시 `topbar-tail-more` 로 묶기
3. **back 타입엔 Lead 고정** — `topbar-lead-back` 또는 `topbar-lead-x` 중 택일
4. **transparent는 absolute 배치** — 콘텐츠 위에 float, 배경 콘텐츠와 z-index 관리 필요
5. **title 폰트는 Bold 20px** — back 타입 SemiBold 16px와 구분
