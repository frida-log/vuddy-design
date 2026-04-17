# Tip

> Figma: [Vuddy-Component / dialog → vuddy-tip](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=889-1298)

---

## 컴포넌트 종류

| 컴포넌트 | Figma 이름 | 설명 |
|----------|------------|------|
| 고정 팁 | `vuddy-tip` `type=short-fixed` | 닫기 없는 짧은 안내 팁 |
| 닫기 팁 | `vuddy-tip` `type=long-removable` | 닫을 수 있는 긴 안내 팁 |

---

## 공통 스펙

| 속성 | 값 | 토큰 |
|------|-----|------|
| Background | black | `--surface-black` |
| Radius | 12px | `--radius-large` |
| Padding H | 12px | `--space-large` |
| Gap (아이콘 → 텍스트) | 6px | `--space-small` |
| Lead Icon | 20×20px (기본: `outline_timer`) | — |
| Font | Pretendard Regular 14px / lh 20px | |
| Text Color | `--text-white-primary` | |

---

## type=short-fixed

> 닫기 없는 고정된 툴팁 / 짧은 텍스트

- Padding V: **6px** (`--space-small`)
- Width: hug (텍스트 길이에 맞춤)
- 닫기 버튼 없음 — 고정 표시

**사용 예시**: 타이머, 잔여 시간, 간단한 상태 안내

---

## type=long-removable

> 도움말 등 누르면 보이는 닫을 수 있는 팁 / 두 줄 이상 긴 텍스트

- Padding V: **8px** (`--space-base`)
- Width: **320px** (고정)
- 우측 닫기 아이콘: `outline_close` 20×20px

**사용 예시**: 도움말 버튼 클릭 후 표시, 가이드 텍스트

---

## 사용 규칙

1. **짧은 텍스트 → short-fixed** / **긴 텍스트 또는 닫기 필요 → long-removable**
2. **Lead 아이콘 교체 가능** (`swapLeadIcon`) — 문맥에 맞는 아이콘으로 변경
3. **어두운 배경 위에선 주의** — `--surface-black`은 흰 배경 위에서만 잘 보임
