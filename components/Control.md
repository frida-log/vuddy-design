# Control

> Figma: [Vuddy-Component / control](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=11389-2588)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `vuddy-button-check` | 체크박스 (24px, Partial 포함) |
| `Vuddy-button-Checkbox` | 소형 체크박스 (16px) |
| `vuddy-button-radio` | 라디오 버튼 (24px) |
| `Toggle(iOS)` | iOS 토글 스위치 (48×28px) |
| `Toggle(Android)` | Android 토글 스위치 (40×24px) |
| `vuddy-button-play` | 재생/일시정지 버튼 (52px) |
| `indicator` | 슬라이드 페이지 인디케이터 |

---

## vuddy-button-check (체크박스 24px)

| 속성 | 값 |
|------|----|
| Size | 24×24px |
| Selection | `Unchecked` / `Checked` / `Partial` |
| State | `Default` / `Pressed` / `Disabled` |
| Pressed 리플 | 32×32px 원형 인터랙션 오버레이 |

### Selection 별 아이콘

| Selection | 아이콘 | 설명 |
|-----------|--------|------|
| `Unchecked` | 빈 원 (ring) | 미선택 |
| `Checked` | `fill_check_circle` | 체크 완료 |
| `Partial` | `fill_minus_circle` | 부분 선택 (전체선택 indeterminate) |

### State 별 시각

| State | Unchecked | Checked / Partial |
|-------|-----------|-------------------|
| `Default` | 회색 ring | 검정 fill 아이콘 |
| `Pressed` | 회색 ring + 32px 리플 | 검정 fill + 32px 리플 |
| `Disabled` | 연회색 ring | 연회색 fill 아이콘 |

---

## Vuddy-button-Checkbox (소형 체크박스 16px)

폼 리스트 등 밀도 높은 UI에서 사용하는 소형 사각형 체크박스.

| State | Background | Border | 아이콘 |
|-------|-----------|--------|--------|
| `Unselected` | `--surface-primary` (white) | 1px `--line-divider-primary` (#e5e7eb) | — |
| `Selected` | `--surface-black` (black) | — | `outline_check` 12×12px (white) |
| `Disabled` | `--surface-tertiary` (#f3f4f6) | 1px `--line-divider-secondary` (#edeff2) | — |

| 속성 | 값 | 토큰 |
|------|-----|------|
| Size | 16×16px | — |
| Radius | 4px | `--radius-xs` |
| 아이콘 여백 | 2px (아이콘 12px + 여백 2px = 16px) | — |

---

## vuddy-button-radio (라디오 버튼)

| 속성 | 값 |
|------|----|
| 외부 크기 | 24×24px (padding 2px 포함) |
| 내부 원 | 20×20px |

| State | 시각 |
|-------|------|
| `Unselected` | 연회색 ring |
| `Selected` | 다크 네이비(`--surface-vuddy-primary`) filled circle with 내부 dot |
| `Pressed` | Selected 외형 + 32px 리플 오버레이 |
| `Disabled` | 연회색 filled (비활성) |

---

## Toggle(iOS)

| 속성 | 값 | 토큰 |
|------|-----|------|
| 트랙 크기 | 48×28px | — |
| 트랙 Radius | 100px (pill) | — |
| Padding | 2px | — |
| Knob 크기 | 24×24px (원형) | — |
| Knob 색상 | white | `--surface-primary` |
| Knob Shadow | `shadow-base` | — |

| Active | 트랙 색상 | Knob 위치 |
|--------|----------|----------|
| `false` | `--surface-gray-low` (#dcdfe3) | 좌측 |
| `true` | `--surface-vuddy-primary` (#111827) | 우측 |

Knob Shadow:
```css
box-shadow: 0px 4px 6px var(--surface-dim-lower),   /* rgba(0,0,0,0.1) */
            0px 2px 4px var(--surface-dim-lowest);   /* rgba(0,0,0,0.05) */
```

---

## Toggle(Android)

| 속성 | 값 |
|------|----|
| 전체 크기 | 40×24px |
| 트랙 Radius | 8px |
| Knob 크기 | 24×24px |

| Active | 트랙 색상 | 트랙 너비 | Knob 위치 |
|--------|----------|----------|----------|
| `false` | `--surface-gray-low` (#dcdfe3) | 32px | 좌측 |
| `true` | `--surface-vuddy-primary` (#111827) | 40px (full) | 우측 |

> Android는 iOS보다 트랙이 작고(40×24px vs 48×28px), 모서리가 8px radius (iOS는 pill)

---

## vuddy-button-play (재생/일시정지)

이미지 썸네일 위에 오버레이되는 재생 컨트롤 버튼.

| 속성 | 값 | 토큰 |
|------|-----|------|
| 크기 | 52×52px | — |
| Radius | 32px | `--radius-3xl` |
| 아이콘 | `fill_play` / `fill_pause` (32px) | — |

| State | 배경색 | 토큰 |
|-------|--------|------|
| `default` | rgba(0,0,0,0.2) | `--surface-dim-low` |
| `pressed` | rgba(0,0,0,0.5) | `--surface-dim` |

---

## indicator (슬라이드 페이지 표시)

이미지 슬라이드 위에 오버레이하는 페이지 번호 표시 (예: `1 / 3`).

| 속성 | small | xs |
|------|-------|----|
| Padding H | 12px (`--space-large`) | 8px (`--space-base`) |
| Padding V | 6px (`--space-small`) | 4px (`--space-xs`) |
| Gap (숫자 사이) | 2px (`--space-2xs`) | 0px |
| Radius | 24px (`--radius-2xl`) | 24px |
| 현재 페이지 폰트 | SemiBold 14px / lh 20px | SemiBold 12px / lh 16px |
| 구분자·전체 폰트 | Regular 14px / lh 20px | Regular 12px / lh 16px |
| 현재 페이지 색상 | `--text-white-primary` | `--text-white-primary` |
| 구분자·전체 색상 | `--text-white-secondary` (rgba(255,255,255,0.7)) | 동일 |

### color 변형

| color | 배경 | 토큰 |
|-------|------|------|
| `white-dim` | rgba(255,255,255,0.2) | `--surface-white-tertiary` |
| `dim` | rgba(0,0,0,0.5) | `--surface-dim` |

> `white-dim`은 밝은 이미지 위에, `dim`은 어두운 이미지 위에 사용

---

## 사용 규칙

1. **체크박스 24px은 Partial 지원** — 전체선택 헤더 체크박스에 indeterminate 상태 사용
2. **체크박스 16px은 폼/리스트 전용** — 밀도 높은 UI, Partial 없음
3. **라디오는 단일 선택** — 그룹 내 하나만 `Selected` 가능
4. **Toggle은 플랫폼에 맞게** — iOS 48×28px pill / Android 40×24px radius-8px
5. **play 버튼은 이미지 위 오버레이** — `--surface-dim-low` 기본, 터치 시 `--surface-dim`
6. **indicator는 이미지 오버레이** — 밝은 이미지에 `white-dim`, 어두운 이미지에 `dim`
