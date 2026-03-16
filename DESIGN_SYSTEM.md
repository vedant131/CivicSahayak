# CivicSahayak — Design System

## Identity

- **Primary:** Saffron Orange `#F4651A` — hero, buttons, active nav, CTAs
- **Secondary:** Emerald Teal `#0B7B6B` — AI chat, tips, secondary actions
- **Background:** Clean white `#F8F9FC` — never dark
- **Cards:** Pure white `#FFFFFF` with subtle border `#E2E6F0`

## Typography

| Role | Font | Weight |
|---|---|---|
| Headings, brand | Clash Display | 600–700 |
| Body, UI | Bricolage Grotesque | 400–700 |

## Animations

- Panel transitions: `fadeUp` (0.28s)
- Card hover: `translateY(-5px) scale(1.01)` with spring easing
- Sidebar icon: `float` (3s loop), hover `rotate(-5deg) scale(1.15)`
- Hero banner: animated gradient shift (6s loop)
- Sidebar accent strip: animated gradient (4s loop)
- Staggered card entry: 40ms increments per child
- Modal: `scale(.9) + translateY(20px)` → full
- Topbar title: `waveIn` clip-path reveal

## Spacing Scale

`4 → 8 → 12 → 14 → 16 → 18 → 20 → 24 → 28 → 32 → 40`px

## Border Radius Scale

`8 → 10 → 11 → 12 → 14 → 16 → 18 → 20 → 22 → 24`px
