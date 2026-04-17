# Dialog

> Figma: [Vuddy-Component / dialog](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=889-1298)

---

## 컴포넌트 종류

| 컴포넌트 | Figma 이름 | 설명 |
|----------|------------|------|
| 기본 다이얼로그 | `vuddy-dialog` | 타이틀 + 본문 + 버튼 조합 |
| 입력 다이얼로그 | `vuddy-dialog-textfield` | 다이얼로그 내 텍스트 입력 포함 |

---

## vuddy-dialog

### 레이아웃

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 296px | — |
| Background | white | `--surface-primary` |
| Radius | 16px | `--radius-xl` |
| Padding Top | 32px | `--padding-xl` |
| Padding Bottom | 16px | `--padding-small` |
| Padding H | 16px | `--space-xl` |
| Gap (텍스트 → 버튼) | 24px | `--space-3xl` |

### 텍스트 영역

| 요소 | Font | Color |
|------|------|-------|
| Title | Pretendard SemiBold 16px / lh 22px | `--text-primary` |
| Body | Pretendard Regular 14px / lh 20px | `--text-tertiary` |
| Gap (title → body) | 4px (`--space-xs`) | — |
| 정렬 | center | — |

> `showTitle` / `showBody` 로 각각 표시 여부 제어 가능

### 버튼 Variants

#### `button=1` — 확인 버튼 1개
- Solid Primary Medium (40px, `--button-primary`, `--radius-base` 8px)
- 버튼 텍스트: `--text-white-primary`, SemiBold 14px

#### `button=2` — 취소 + 확인
- 버튼 2개 나란히, gap `--gap-small` (6px)
- 취소: Solid Tertiary (`--button-tertiary`), 텍스트 `--text-tertiary`
- 확인: Solid Primary (`--button-primary`), 텍스트 `--text-white-primary`

#### `button=2-danger` — 취소 + 경고 액션
- 취소: Outline Secondary (`--line-container-outline`, `--text-secondary`)
- 경고: Outline Danger (`--line-danger`, `--text-danger`)
- 삭제 등 파괴적 액션에 사용

#### `button=x-close` — X 닫기만
- 우상단 `outline_close` 아이콘 버튼 (24×24px)
- 하단 확인 버튼 없음
- Padding Top: `--padding-small` (16px) — 다른 variants보다 작음

---

## vuddy-dialog-textfield

입력이 필요한 다이얼로그 (ex: 댓글 신고 사유, 닉네임 변경 등).

### 레이아웃

`vuddy-dialog`와 동일한 외부 컨테이너. Padding Top만 다름:

| 속성 | 값 | 토큰 |
|------|-----|------|
| Padding Top | 20px | `--space-2xl` |
| Gap (label+field → 버튼) | 24px | `--space-3xl` |
| Gap (label → textfield) | 8px | `--space-base` |

### 구성

- `vuddy-data-label` — 라벨 + 글자 수 카운터 포함
- `vuddy-textfield` — Entering 상태로 포커스된 채 표시
- 버튼: `button=1` (확인) 또는 `button=2` (취소+확인)

### Textfield Variants

| 속성 | 값 |
|------|-----|
| `textfield=1 row` | 단일 줄 46px 높이 |
| `textfield=multi row` | 여러 줄, 90px 이상 |

---

## 사용 규칙

1. **딤 레이어 필수** — 다이얼로그 뒤에 `--surface-dim` 오버레이 적용
2. **버튼 1개 원칙** — `button=1`은 확인만, 취소 동작이 필요하면 `button=2` 또는 `button=x-close`
3. **Danger는 파괴적 액션에만** — 삭제, 탈퇴 등에만 `button=2-danger` 사용
4. **`x-close`는 정보성 다이얼로그** — 확인이 불필요한 단순 안내에 사용
5. **타이틀 없이 본문만 사용 가능** — `showTitle=false` 조합 허용

---

## Token 요약

```css
/* 컨테이너 */
background:    var(--surface-primary);    /* white */
border-radius: var(--radius-xl);          /* 16px */

/* 버튼 — Primary */
background: var(--button-primary);        /* #111827 */
color:      var(--text-white-primary);

/* 버튼 — Tertiary (취소) */
background: var(--button-tertiary);       /* #edeff2 */
color:      var(--text-tertiary);

/* 버튼 — Outline Danger */
border: var(--stroke-base) solid var(--line-danger);
color:  var(--text-danger);
```
