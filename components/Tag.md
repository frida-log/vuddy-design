# Tag

> Figma: [Vuddy-Component / tag](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=2025-1701)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `vuddy-tag-small` | 20px 높이 소형 태그 |
| `vuddy-tag-medium` | 24px 높이 중형 태그 |

---

## 사이즈 비교

| 속성 | Small | Medium |
|------|-------|--------|
| Height | 20px | 24px |
| Font | Pretendard SemiBold **9px** / lh 12px | Pretendard SemiBold **12px** / lh 16px |
| Padding H | 6px (`--padding-4xs`) | 6px (`--padding-4xs`) |
| Gap (아이콘 → 텍스트) | 2px (`--gap-2xs`) | 2px (`--gap-2xs`) |
| Radius | 4px (`--radius-xs`) | 4px (`--radius-xs`) |
| Icon Size | 12×12px | 12×12px |

---

## 스타일 일람

| Style | 배경 토큰 | 배경값 | 텍스트 토큰 | small | medium |
|-------|----------|--------|------------|-------|--------|
| `black` | `--surface-black` | black | `--text-white-primary` | ✅ | ✅ |
| `darknavy` | `--surface-vuddy-primary` | #111827 | `--text-white-primary` | ✅ | ✅ |
| `lightgray` | `--surface-tertiary` | #f3f4f6 | `--text-secondary` | ✅ | ✅ |
| `gray` | `--surface-quaternary` | #edeff2 | `--text-tertiary` | ✅ | ✅ |
| `transparent` | `--surface-white-tertiary` | rgba(255,255,255,0.2) | `--text-white-primary` | ✅ | ✅ |
| `yellowgreen` | `--surface-vuddy-highlight` | #d0ff0c | `--text-primary` | ✅ | ✅ |
| `bluegradiant` | gradient (teal→blue→purple) | — | `--text-white-primary` | ✅ | ✅ |
| `lightred` | `--surface-danger-lowest` | #fef2f2 | `--text-danger` | ✅ | ✅ |
| `red` | `--surface-sale` | #ef4444 | `--text-white-primary` | ✅ | ✅ |
| `lightgreen` | `--surface-success-lowest` | #e3fcef | `--text-success` | ✅ | ✅ |
| `dim` | `--surface-dim` | rgba(0,0,0,0.5) | `--text-white-primary` | ✅ | ❌ |

> `dim`은 `vuddy-tag-small`에만 존재 — 이미지 위 오버레이 상황 전용

---

## 아이콘 옵션

- `showIcon=false` 기본값 (텍스트만)
- `showIcon=true` + `swapIcon` 으로 교체 가능
- 기본 아이콘: `outline_siren` 12×12px
- 아이콘 색상은 텍스트 색상과 동일

---

## bluegradiant 그라디언트

```css
background: linear-gradient(
  166deg,
  var(--teal-400)    0%,   /* rgb(0, 184, 217) */
  var(--blue-600)   50%,   /* rgb(35, 78, 231) */
  var(--purple-400) 100%   /* rgb(152, 134, 248) */
);
```

---

## 사용 규칙

1. **small은 이미지/카드 위에 겹쳐 쓸 수 있음** — `dim` / `transparent`는 이미지 오버레이 전용
2. **yellowgreen은 브랜드 하이라이트** — 주목도가 필요한 신규/이벤트 태그에 사용
3. **red는 할인/세일 전용** — `--surface-sale` 토큰 사용
4. **lightred / lightgreen은 상태 표시** — 오류/경고(lightred), 성공/완료(lightgreen)
5. **아이콘은 레이블과 함께만** — `showLabel=false` + `showIcon=true` 조합은 사용하지 않음
