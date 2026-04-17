# Avatar (프로필 이미지)

> Figma: [Vuddy-Component / img → vuddy-profile](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=1258-795)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `vuddy-profile` | 원형 프로필 이미지. 이미지 없을 때 플레이스홀더 자동 표시 |

---

## 사이즈 시스템

| Size | 토큰 | px |
|------|------|----|
| `2xs` | `--image-2xs` | 16px |
| `xs` | `--image-xs` | 24px |
| `small` | `--image-small` | 32px |
| `base` | `--image-base` | 40px |
| `large` | `--image-large` | 48px |
| `xl` | `--image-xl` | 56px |
| `2xl` | `--image-2xl` | 64px |
| `3xl` | `--image-3xl` | 72px |
| `4xl` | `--image-4xl` | 80px |
| `5xl` | `--image-5xl` | 96px |
| `6xl` | `--image-6xl` | 120px |

> 크기는 항상 `--image-*` 토큰으로 지정 — 하드코딩 금지

---

## 스펙

| 속성 | 값 |
|------|-----|
| Shape | 원형 (border-radius: 50%) |
| Image | object-fit: cover, `--image-{size}` × `--image-{size}` |
| Placeholder | `etc_profile_blank` (Vuddy 기본 아바타 그래픽) |
| Outline | — (프로필은 img-outline 없음) |

- `showImage=false` 일 때 플레이스홀더 자동 표시

---

## 사용 규칙

1. **크기는 `--image-*` 토큰만** — 상황별 기준: 댓글/목록 → `base`(40), 상세 헤더 → `3xl`(72) 이상
2. **이미지 없을 때 플레이스홀더 자동 처리** — null/undefined 이미지에 별도 분기 불필요
3. **원형 고정** — 정사각 썸네일이 필요하면 `vuddy-thumbnail` 사용
