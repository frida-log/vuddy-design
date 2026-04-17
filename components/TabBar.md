# Tab Bar / Navigation Bar

> Figma: [Vuddy-Component / tab bar](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=9212-2758)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `Tab bar` | 탭 바 전체 컨테이너 (플랫폼 × bg-color 조합) |
| `tabbar` | 탭 아이템 영역 (56px 고정 높이) |
| `item` | 개별 탭 아이템 (state=on/off) |

---

## 플랫폼별 전체 높이

| Platform | 탭바 높이 | 하단 영역 | 전체 높이 |
|----------|----------|----------|----------|
| iOS | 56px | 34px (Safe Area) | **90px** |
| Android | 56px | 48px (시스템 내비게이션 바) | **104px** |

---

## tabbar (아이템 영역)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 360px | — |
| Height | 56px | — |
| Background | white | `--surface-primary` |
| Border Top | 1px | `--stroke-base` + `--line-divider-secondary` |
| Layout | 가로 flex, 아이템 균등 분배 | — |
| Shadow | `shadow-high` | `--surface-dim-lower` + `--surface-dim-lowest` |

Shadow:
```css
box-shadow: 0px 10px 15px var(--surface-dim-lower),   /* rgba(0,0,0,0.1) */
            0px 4px 6px var(--surface-dim-lowest);     /* rgba(0,0,0,0.05) */
```

---

## item (탭 아이템)

### 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | flex-1 (균등 분배) | — |
| Padding Top | 8px | `--space-base` |
| Padding Bottom | 6px | `--space-small` |
| Padding H | 16px | `--space-xl` |
| Gap (아이콘 → 레이블) | 4px | `--space-xs` |
| Icon Size | 24×24px | — |
| Label Font | Pretendard 10px / lh 14px | — |

### States

| State | 아이콘 | 레이블 폰트 | 레이블 색상 |
|-------|--------|------------|-------------|
| `on` (활성) | fill 아이콘 | SemiBold 10px | `--text-primary` |
| `off` (비활성) | outline 아이콘 | Regular 10px | `--text-primary` |

---

## 메뉴 구성

| 메뉴 | 활성 아이콘 | 비활성 아이콘 |
|------|-----------|--------------|
| 홈 | `fill_home` | `outline_home` |
| 채팅 | `fill_chat_menu` | `outline_chat_menu` |
| 마이 | `fill_person` | `outline_person` |

---

## 하단 영역

### iOS — Safe Area (34px)

| 속성 | 값 |
|------|----|
| Height | 34px |
| Background | `--surface-primary` (white) |
| 용도 | 홈 인디케이터 영역 확보 |

### Android — 시스템 내비게이션 바 (48px)

| 속성 | 값 |
|------|----|
| Height | 48px |
| Background | `--surface-primary` (white) |
| 구성 | 뒤로가기(`◁`) / 홈(`○`) / 앱 목록(`□`) |
| 아이콘 색상 | `#404040` (`UI / color-ui-dark`) |

---

## bg-color Variants

| bg-color | 배경 |
|----------|------|
| `white` | `--surface-primary` |

---

## 사용 규칙

1. **항상 화면 최하단 고정** — `position: fixed; bottom: 0`
2. **Safe Area / Navigation Bar 포함 높이 사용** — iOS 90px, Android 104px (내부 콘텐츠 56px 기준으로 레이아웃 잡기)
3. **활성 탭은 fill 아이콘 + SemiBold** — 비활성은 outline 아이콘 + Regular
4. **텍스트 색상은 active/inactive 동일** — `--text-primary` 단일 색상 사용
5. **Shadow는 탭바 상단** — 콘텐츠 영역과의 구분감 확보
