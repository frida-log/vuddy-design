# Chat (채팅방 컴포넌트)

> Figma: [Vuddy-Component / chat](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=8879-3950)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `text-bubble` | 텍스트 말풍선 (from × type 조합) |
| `message` | 전체 메시지 행 (아바타 + 이름 + 말풍선 + 시간) |
| `media` | 미디어 메시지 (사진·동영상·링크·음성) |
| `photo` | 사진 묶음 레이아웃 (1~4장) |
| `chatfield-media` | 미디어 첨부 가능 입력창 |
| `chatfield-textonly` | 텍스트 전용 입력창 |
| `chatfield` | 전체 입력 영역 (플랫폼 × 타입 × 상태 조합) |
| `chat-alert` | 날짜·입장 알림 칩 |

---

## text-bubble (텍스트 말풍선)

### 말풍선 Radius 규칙

| from | top-left | top-right | bottom-right | bottom-left |
|------|----------|-----------|--------------|-------------|
| `you` (상대방) | 2px (`--radius-2xs`) | 16px (`--radius-xl`) | 16px | 16px |
| `me` (내 메시지) | 16px | 2px (`--radius-2xs`) | 16px | 16px |

> **"꺾인 모서리(2px)"가 발신자 방향** — you=좌상단, me=우상단

### from=you 기본 스펙

| 속성 | 값 | 토큰 |
|------|-----|------|
| Background | #f3f4f6 | `--surface-tertiary` |
| Text color | #030712 | `--text-primary` |
| Shadow | 없음 | — |

### from=me 기본 스펙

| 속성 | 값 | 토큰 |
|------|-----|------|
| Background | 세로 그라디언트 | `--gray-600` (#4b5563) → `--gray-800` (#1f2937) |
| Text color | white | `--text-white-primary` |
| Shadow | `shadow-base` | — |

Shadow (from=me 공통):
```css
box-shadow: 0px 4px 6px var(--surface-dim-lower),
            0px 2px 4px var(--surface-dim-lowest);
```

### 공통 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding H | 12px | `--space-large` |
| Padding V | 10px | `--space-medium` |
| Max width | 248px | — |
| Font | Regular 14px / lh 20px | — |

---

### Types

#### `default` — 일반 텍스트

| from | 배경 | 텍스트 |
|------|------|--------|
| `you` | `--surface-tertiary` | `--text-primary` |
| `me` | dark gradient | `--text-white-primary` |

---

#### `deleted` — 삭제된 메시지

| from | 아이콘 | 텍스트 | 텍스트 색상 |
|------|--------|--------|------------|
| `you` | `outline_hide` 20px | "삭제된 메세지 입니다." | `--text-placeholder` |
| `me` | `outline_hide` 20px | "삭제된 메세지 입니다." | `--icon-disabled` (#d1d5db) |

아이콘 + 텍스트 gap: 4px (`--space-xs`)

---

#### `show-all` — 전체 공개 메시지

| from | 배경 | 뱃지 배경 |
|------|------|----------|
| `you` | `--surface-quaternary` (#edeff2), border 1px `--line-divider-primary` | white (`--surface-primary`) |
| `me` | dark gradient | `--surface-white-tertiary` (rgba(255,255,255,0.2)) |

**"전체 공개" 뱃지:**

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding H | 8px | `--space-base` |
| Padding V | 4px | `--space-xs` |
| Radius | 6px | `--radius-small` |
| Gap | 4px | — |
| Icon | `fill_show` 12px | — |
| Font | Regular 12px / lh 16px | — |
| from=you 텍스트 | `--text-tertiary` | — |
| from=me 텍스트 | `--text-white-primary` | — |

---

#### `reply-1:1` — 1:1 답장

보낸 사람에게만 보이는 답장. 말풍선 내부 상단에 인용 헤더 + 구분선 + 본문.

**헤더 영역:**

| 속성 | 값 |
|------|----|
| 이름 | SemiBold 12px / lh 16px |
| "에게만 답장" | Regular 12px |
| 하트 아이콘 | `fill_heart` 12px |
| Gap | 2px (`--space-2xs`) |
| from=you | `--text-primary` |
| from=me | `--text-white-primary` |

**구분선:** 1px 수평선, 너비 full

**인용 텍스트:** Regular 12px / lh 16px
- from=you: `--text-secondary`
- from=me: `--text-disabled`

**본문 텍스트:** Regular 14px / lh 20px, max-width 240px

---

## message (전체 메시지 행)

### from=you 레이아웃

```
[프로필 32px] [발신자이름 / 말풍선1 / 말풍선2 / ...] [시간]
```

| 요소 | 스펙 |
|------|------|
| 프로필 | `vuddy-profile` Size=small (32px) |
| 발신자 이름 | SemiBold 12px / lh 16px, `--text-primary` |
| 아바타 ↔ 콘텐츠 gap | 8px |
| 말풍선 간 gap | 4px (`--space-xs`) |
| 말풍선 + 시간 gap | 4px, `items-end` |
| 시간 | Regular 10px / lh 14px, `--text-tertiary` |

### from=me 레이아웃

```
                        [시간] [말풍선1 / 말풍선2 / ...]
```

- 프로필·이름 없음
- 시간은 말풍선 묶음 좌측 하단
- 우측 정렬

---

## media (미디어 메시지)

### photo (사진)

| 비율 | 크기 | 반경 | 테두리 |
|------|------|------|--------|
| 1:1 | 240×240px | 16px (`--radius-xl`) | 1px `--line-img-outline` |
| 2:1 | 240×119px | 16px | 1px `--line-img-outline` |

**다운로드 상태:**

| State | 시각 처리 |
|-------|----------|
| `다운로드전` | dim overlay `--surface-dim-low` (rgba(0,0,0,0.2)) + 36px 원형버튼 + `fill_photo` 20px |
| `다운로드중` | 진행 indicator |
| `다운로드후` | 이미지 그대로 (테두리+radius만) |
| `전송중` | 전송 진행 indicator |

---

### video (동영상)

| 속성 | 값 |
|------|----|
| 크기 | 240×420px (세로 비율) |
| Radius | 16px (`--radius-xl`) |
| 상태 | 다운로드전 / 다운로드중 / 다운로드후 / 전송중 |

---

### link (URL 미리보기)

| 속성 | 값 | 토큰 |
|------|-----|------|
| 너비 | 240px | — |
| Background | white | `--surface-primary` |
| Border | 1px | `--line-img-outline` |
| Radius | 16px | `--radius-xl` |
| OG 이미지 영역 | 128px 높이 (전체 너비) | — |
| 정보 영역 Padding H | 12px | `--space-large` |
| 정보 영역 Padding T | 8px | `--space-base` |
| 정보 영역 Padding B | 12px | `--space-large` |
| 정보 영역 gap | 4px | `--space-xs` |

**텍스트 스펙:**

| 요소 | 폰트 | 색상 | 처리 |
|------|------|------|------|
| 제목 | Regular 14px / lh 20px | `--text-primary` | ellipsis 1줄 |
| 설명 | Regular 12px / lh 16px | `--text-tertiary` | ellipsis |
| URL | Regular 12px, underline | `--text-secondary` (#374151) | — |

title + sub gap: 2px (`--space-2xs`)

---

### voice (음성 메시지)

| 속성 | 값 | 토큰 |
|------|-----|------|
| 너비 | 240px | — |
| 높이 | 44px | — |
| Padding | 12px | `--space-large` |
| Gap | 6px (`--space-small`) | — |
| Shadow | `shadow-base` | — |

**from=me 스타일:**
- Background: dark gradient (텍스트 말풍선과 동일, `--gray-600` → `--gray-800`)
- Radius: top-left/right 16px, bottom-left 16px, bottom-right 2px

**from=you 스타일:**
- Background: `--surface-tertiary`
- Radius: top-right/bottom-left/bottom-right 16px, top-left 2px

**내부 구성:**

| 요소 | 스펙 |
|------|------|
| 재생 버튼 | `fill_play` / `fill_pause` 20px |
| 파형 바 영역 | 148px, 4px 너비 bars × 25개, 높이 가변(6~16px) |
| 파형 바 색상 | `--surface-white-secondary` (rgba(255,255,255,0.5)) |
| 시간 텍스트 | Regular 14px / lh 20px, `--text-white-primary` |

---

## photo 묶음

| num | 레이아웃 | 크기 |
|-----|----------|------|
| 1개 | 단일 | 240×240px |
| 2개 | 2열 | 240×119px |
| 3개 | 비대칭 3분할 | 240×240px |
| 4개 | 2×2 그리드 | 240×240px |

---

## chatfield-media / chatfield-textonly (입력창 내부)

### input 버튼

| 속성 | 값 | 토큰 |
|------|-----|------|
| Height | 48px | — |
| Background | white | `--surface-primary` |
| Border | 1px `--line-container-outline` | `--stroke-base` |
| Shadow | `shadow-base` | — |
| Padding H | 12px | `--space-large` |
| Padding V | 8px | `--space-base` |
| Radius | TL 24px, TR 24px, BR 4px, BL 24px | `--radius-2xl` / `--radius-xs` |
| 플러스 아이콘 | `fill_plus_circle` 32px (media만) | — |
| Placeholder | Regular 15px, `--text-placeholder` | — |

> bottom-right 4px(`--radius-xs`)가 전송 버튼 쪽 모서리

### 전송 버튼

| 속성 | 값 | 토큰 |
|------|-----|------|
| 크기 | 40×40px (padding 10px + icon 20px) | — |
| Radius | 24px | `--radius-2xl` |
| Icon | `outline_arrow_up` 20px | — |
| 비활성 배경 | `--surface-gray-low` (#dcdfe3) | — |
| 활성 배경 | `--surface-black` | — |

### States

| State | 설명 |
|-------|------|
| `placeholder` | 입력 전, 플레이스홀더 표시 |
| `focused` | 포커스됨 (1row) |
| `typing, 1row` | 1줄 입력 중 |
| `typing, multirow` | 여러 줄 (높이 자동 증가) |
| `disabled` | 비활성 |
| `record-ing` | 음성 녹음 중 (media만) |
| `record-end` | 녹음 완료 (media만) |

---

## chatfield (전체 입력 영역)

입력창 + 상단 그라디언트 + 플랫폼별 하단 영역으로 구성.

### 플랫폼별 전체 높이

| Platform | chatfield | 기본 | typing | media-open |
|----------|-----------|------|--------|------------|
| iOS | media | 110px | 342px | 182px |
| iOS | textonly | 110px | 342px | — |
| Android | media | 124px | 378px | 196px |
| Android | textonly | 124px | 378px | — |

### 구조 (iOS)

```
[16px 상단 흰색 그라디언트 (스크롤 영역 구분)]
[입력바: --surface-primary, padding 12px]
[34px iOS Safe Area (홈 인디케이터)]
```

### 구조 (Android)

```
[16px 상단 흰색 그라디언트]
[입력바: --surface-primary, padding 12px]
[48px Android 시스템 내비게이션 바]
```

---

## chat-alert (날짜·입장 알림)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Height | 24px | — |
| Padding H | 12px | `--space-large` |
| Padding V | 4px | `--space-xs` |
| Radius | 12px | `--radius-large` |

### type=date (날짜 구분선)

| 속성 | 값 |
|------|----|
| Background | rgba(0,0,0,0.2) | `--surface-dim-low` |
| 텍스트 | Regular 12px / lh 16px, `--text-white-primary` |
| 예시 | "2026년 1월 23일 월요일" |

### type=enter (입장 알림)

| 속성 | 값 |
|------|----|
| Background | #f9fafb | `--surface-secondary` |
| 이름 | SemiBold 12px, `--text-secondary` |
| "님이 입장하셨습니다." | Regular 12px, `--text-tertiary` |
| Gap | 2px |

---

## 사용 규칙

1. **말풍선 꺾인 모서리 방향** — from=you는 좌상단 2px, from=me는 우상단 2px (발신자 방향)
2. **from=me는 항상 dark gradient** — 단색이 아닌 `--gray-600`→`--gray-800` 그라디언트 + shadow-base
3. **삭제된 메시지는 아이콘+텍스트** — `outline_hide` 아이콘과 함께 표시, 레이아웃 변경 없음
4. **시간은 items-end 정렬** — 말풍선 묶음의 가장 아래쪽 말풍선과 수직 정렬
5. **입력창 radius** — 전송버튼 인접 모서리(bottom-right)만 4px, 나머지 24px pill
6. **플랫폼별 하단 여백 포함** — iOS 34px safe area, Android 48px nav bar를 chatfield에 포함
7. **link 미리보기는 240px 고정** — OG 이미지 없으면 이미지 영역 생략
8. **voice 파형 바는 상태 표현** — pause=모두 동일 높이, playing=재생 위치 표시
