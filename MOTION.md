# Motion Spec — Vuddy Home

> 이 문서는 `/buddy-home` 프로토타입의 모든 애니메이션을 플랫폼 독립적 스펙으로 정리한 것입니다.
> Web(CSS) · iOS(SwiftUI) · Android(Compose) 각각의 구현 가이드가 포함됩니다.

---

## 1. spin-once — 팔로우 추가 아이콘 회전

**트리거:** `.following-add` 버튼에 hover 진입 시

| 속성 | 값 |
|------|----|
| duration | 450ms |
| easing | cubic-bezier(0.4, 0, 0.2, 1) — Material Standard |
| from | rotate(0deg) |
| to | rotate(360deg) |
| iterations | 1 (once) |
| fill | forwards |

**Web (CSS)**
```css
@keyframes spin-once {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.following-add:hover .following-add-icon {
  animation: spin-once 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**iOS (SwiftUI)**
```swift
// hover 대신 onTapGesture 또는 .onHover 사용
.rotationEffect(.degrees(isHovered ? 360 : 0))
.animation(
  .timingCurve(0.4, 0, 0.2, 1, duration: 0.45),
  value: isHovered
)
```

**Android (Compose)**
```kotlin
val rotation by animateFloatAsState(
    targetValue = if (isHovered) 360f else 0f,
    animationSpec = tween(
        durationMillis = 450,
        easing = CubicBezierEasing(0.4f, 0f, 0.2f, 1f)
    )
)
Image(modifier = Modifier.rotate(rotation), ...)
```

---

## 2. marquee — 공지 텍스트 흘리기

**트리거:** 화면 진입 즉시 자동 재생

| 속성 | 값 |
|------|----|
| duration | 16s |
| easing | linear |
| from | translateX(0) |
| to | translateX(-50%) |
| iterations | infinite |
| 구현 방식 | 텍스트를 2회 복사해 이어붙여 끊김 없이 순환 |

**Web (CSS)**
```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.notice-marquee {
  display: flex;
  width: max-content;
  animation: marquee 16s linear infinite;
}
```

**iOS (SwiftUI)**
```swift
// 텍스트를 HStack으로 2번 렌더링, offset으로 순환
.offset(x: offset)
.onAppear {
  withAnimation(.linear(duration: 16).repeatForever(autoreverses: false)) {
    offset = -fullWidth / 2
  }
}
```

**Android (Compose)**
```kotlin
val infiniteTransition = rememberInfiniteTransition()
val offsetX by infiniteTransition.animateFloat(
    initialValue = 0f,
    targetValue = -fullWidth / 2f,
    animationSpec = infiniteRepeatable(
        animation = tween(16_000, easing = LinearEasing),
        repeatMode = RepeatMode.Restart
    )
)
```

---

## 3. heroIn — 히어로 요소 등장

**트리거:** 컴포넌트 마운트 시 1회 실행 (현재 CSS에 정의, 적용 지점에서 `animation` 클래스 부여)

| 속성 | 값 |
|------|----|
| duration | 별도 지정 필요 (권장: 400ms) |
| easing | ease-out 권장 |
| from | opacity: 0, translateY(18px) |
| to | opacity: 1, translateY(0) |
| iterations | 1 |

**Web (CSS)**
```css
@keyframes heroIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* 사용처에서 duration/easing 지정 */
.hero-element {
  animation: heroIn 400ms ease-out both;
}
```

**iOS (SwiftUI)**
```swift
.opacity(appeared ? 1 : 0)
.offset(y: appeared ? 0 : 18)
.onAppear {
  withAnimation(.easeOut(duration: 0.4)) {
    appeared = true
  }
}
```

**Android (Compose)**
```kotlin
val alpha by animateFloatAsState(
    targetValue = if (appeared) 1f else 0f,
    animationSpec = tween(400, easing = EaseOut)
)
val offsetY by animateDpAsState(
    targetValue = if (appeared) 0.dp else 18.dp,
    animationSpec = tween(400, easing = EaseOut)
)
```

---

## 4. card-hover — 카드 호버 부상 효과

**트리거:** 카드에 hover 진입 / 이탈

| 속성 | 값 |
|------|----|
| duration | 300ms |
| easing (transform) | cubic-bezier(0.34, 1.56, 0.64, 1) — spring-like overshoot |
| easing (filter) | ease |
| hover 상태 | scale(1.045) translateY(-6px), brightness(1.04) |
| default 상태 | scale(1) translateY(0), brightness(1) |

> `cubic-bezier(0.34, 1.56, 0.64, 1)` 은 살짝 튀어오르는 스프링 느낌을 냄.
> iOS/Android에서는 spring animation으로 대체 권장.

**Web (CSS)**
```css
.card-hover {
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
              filter 300ms ease;
}
.card-hover:hover {
  transform: scale(1.045) translateY(-6px);
  filter: brightness(1.04);
}
```

**iOS (SwiftUI)**
```swift
.scaleEffect(isHovered ? 1.045 : 1.0)
.offset(y: isHovered ? -6 : 0)
.brightness(isHovered ? 0.04 : 0)
.animation(.spring(response: 0.3, dampingFraction: 0.6), value: isHovered)
```

**Android (Compose)**
```kotlin
val scale by animateFloatAsState(
    targetValue = if (isHovered) 1.045f else 1f,
    animationSpec = spring(dampingRatio = 0.6f, stiffness = 400f)
)
val offsetY by animateDpAsState(
    targetValue = if (isHovered) (-6).dp else 0.dp,
    animationSpec = spring(dampingRatio = 0.6f, stiffness = 400f)
)
Modifier.graphicsLayer(scaleX = scale, scaleY = scale)
        .offset(y = offsetY)
```

---

## 5. carousel-snap — 카드 캐러셀 드래그 후 스냅

**트리거:** 드래그 종료 시 카드가 제자리로 이동

| 속성 | 값 |
|------|----|
| duration | 420ms |
| easing (transform) | cubic-bezier(0.25, 1, 0.3, 1) — decelerate |
| easing (opacity) | ease |
| opacity duration | 300ms |
| 드래그 중 | transition: none (즉각 반응) |

**Web (CSS / inline style)**
```js
transition: isDragging
  ? 'none'
  : 'transform 420ms cubic-bezier(0.25,1,0.3,1), opacity 300ms ease'
```

**iOS (SwiftUI)**
```swift
// 드래그 중엔 withAnimation 없이, 종료 시에만 애니메이션 적용
withAnimation(.timingCurve(0.25, 1, 0.3, 1, duration: 0.42)) {
  cardOffset = targetOffset
}
```

**Android (Compose)**
```kotlin
// 드래그 중: animatable.snapTo(value)
// 드래그 종료:
animatable.animateTo(
    targetValue = snapTarget,
    animationSpec = tween(
        durationMillis = 420,
        easing = CubicBezierEasing(0.25f, 1f, 0.3f, 1f)
    )
)
```

---

## 6. background-crossfade — 배경 이미지 전환

**트리거:** 카테고리 탭 선택 시

| 속성 | 값 |
|------|----|
| duration | 700ms |
| easing | ease |
| 방식 | 레이어를 겹쳐 놓고 opacity 0↔1 교차 |

**Web (CSS / inline style)**
```jsx
style={{ transition: 'opacity 700ms ease', opacity: isActive ? 1 : 0 }}
```

**iOS (SwiftUI)**
```swift
.opacity(isActive ? 1 : 0)
.animation(.easeInOut(duration: 0.7), value: activeCategory)
```

**Android (Compose)**
```kotlin
val alpha by animateFloatAsState(
    targetValue = if (isActive) 1f else 0f,
    animationSpec = tween(700, easing = FastOutSlowInEasing)
)
Modifier.alpha(alpha)
```

---

## Easing 레퍼런스

| 이름 | cubic-bezier | 용도 |
|------|-------------|------|
| Material Standard | `(0.4, 0, 0.2, 1)` | 아이콘 회전 |
| Spring Overshoot | `(0.34, 1.56, 0.64, 1)` | 카드 호버 부상 |
| Decelerate | `(0.25, 1, 0.3, 1)` | 캐러셀 스냅 |
| Ease (기본) | `(0.25, 0.1, 0.25, 1)` | 배경 크로스페이드, filter |
| Linear | `(0, 0, 1, 1)` | 마키 스크롤 |
