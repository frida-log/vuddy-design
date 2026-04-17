# Footer

> Figma: [Vuddy-Component / footer](https://www.figma.com/design/d7eKp1IERJQXyDS4jLqnMX/Vuddy-Component?node-id=8321-1305)

---

## 컴포넌트 종류

| Figma 이름 | 설명 |
|------------|------|
| `footer` `platform=mobile` | 모바일 (360px) |
| `footer` `platform=pc` | PC (1920px, 콘텐츠 영역 1140px) |

---

## Mobile (`platform=mobile`)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 360px | — |
| Background | `--surface-tertiary` | #f3f4f6 |
| Padding Top | 32px | `--padding-xl` |
| Padding Bottom | 48px | `--padding-3xl` |
| Padding H | 24px | `--padding-large` |
| Gap (로고 → 정보) | 20px | `--gap-3xl` |

---

## PC (`platform=pc`)

| 속성 | 값 | 토큰 |
|------|-----|------|
| Width | 1920px (full) | — |
| 콘텐츠 영역 | 1140px, left offset 390px | — |
| Height | 314px | — |
| Background | `--surface-tertiary` | #f3f4f6 |
| Padding V | 48px | `--padding-3xl` |
| Padding H (콘텐츠) | 16px | `--padding-small` |
| Gap (로고 → 정보) | 24px | `--gap-4xl` |

---

## 구성 요소

### 1. 로고

| | Mobile | PC |
|-|--------|----|
| 이미지 | `etc_vuddywordmark` | `etc_vuddywordmark` |
| 크기 | 80×22px | 105×28px |

### 2. 사업자 정보 (`info`)

Font: Pretendard 12px / lh 16px, `--text-tertiary`  
레이블: SemiBold / 값: Regular  
항목 사이 gap: `--gap-xs` (4px)  
레이아웃: flex-wrap (모바일에서 줄바꿈)

| 항목 |
|------|
| 상호 |
| 대표자 |
| 사업장 주소 |
| 사업자 등록 번호 |
| 개인정보 관리 책임자 |
| 통신판매업 신고번호 |
| 대표 번호 |

### 3. 약관 링크 (`link`)

Font: Pretendard SemiBold 12px / lh 16px  
구분자: 1px 세로선, `--surface-gray` (#9ca3af)  
링크 사이 gap: `--gap-small` (6px)

| 링크 | 텍스트 색상 |
|------|-------------|
| 이용약관 | `--text-tertiary` |
| **개인정보처리방침** | **`--text-primary`** (강조) |
| 청소년 보호 정책 | `--text-tertiary` |
| 사업자정보 | `--text-tertiary` |

> `개인정보처리방침`만 `--text-primary`로 강조 처리

### 4. 면책 고지 (disclaimer)

Font: Pretendard Regular 12px / lh 16px, `--text-tertiary`

```
일부 상품의 경우 레벨스는 통신판매의 당사자가 아닌 통신판매중개자로서
상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로,
각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
```

### 5. 저작권

Font: Pretendard Regular 12px / lh 16px, `--text-tertiary`

```
© LEVVELS Inc. All Rights Reserved
```

PC에서는 copyright 위에 구분선(`--line-divider-primary`) 표시.

---

## 사용 규칙

1. **항상 최하단 고정** — 모든 페이지 하단에 배치
2. **개인정보처리방침만 `--text-primary`** — 나머지 링크는 `--text-tertiary`
3. **PC는 콘텐츠 영역 1140px 유지** — 전체 배경은 full-width, 내용은 좌우 여백 390px

---

## Token 요약

```css
background: var(--surface-tertiary);   /* #f3f4f6 */

/* info 텍스트 */
color: var(--text-tertiary);           /* #6b7280 */

/* 개인정보처리방침 강조 */
color: var(--text-primary);            /* #030712 */

/* 구분자 */
background: var(--surface-gray);       /* #9ca3af */
```
