# Vuddy Design System

This repository is the single source of truth for the Vuddy design system.

## Key files
- `DESIGN.md` — full token reference, alias tokens, size tokens, component overview
- `tokens/tokens.css` — CSS custom properties (import this in your project)
- `tokens/tokens.json` — raw token data (Figma Variables export)
- `components/` — per-component specs and Figma links
- `icons/catalog.md` — icon name → SVG path mapping
- `icons/svg/` — SVG icon files
- `logos/catalog.md` — brand logo name → SVG path + Figma links
- `logos/svg/` — brand logo SVGs (wordmark, logographic, app icon, symbol variants). Refresh: `FIGMA_TOKEN=… node scripts/download-logos.js`
- `images/catalog.md` — raster / composite PNG name + Figma links
- `images/png/` — exported PNGs (default @2x). Refresh: `FIGMA_TOKEN=… node scripts/download-images.js`

## Figma
- Foundation file: https://www.figma.com/design/ikUaHBnl5dZRmpiGEwLgZW/Vuddy-Foundation

## Rules for implementing screens

1. **Always use alias tokens** (`--text-*`, `--icon-*`, `--surface-*`, `--line-*`, `--button-*`) — never use primitive colors directly.
2. **Size tokens**: use `--radius-*`, `--gap-*`, `--padding-*`, `--space-*`, `--stroke-*` from `tokens/tokens.css`.
3. **Image sizes**: use `--image-*` tokens for avatar and thumbnail dimensions.
4. **Brand highlight color** is `--color-yellowgreen-300` (`#d0ff0c`) — use via `--text-vuddy-highlight` / `--surface-vuddy-highlight`.
5. **Icons**: use SVGs from `icons/svg/`. Do not use external icon libraries.
6. **Image outlines**: apply `--line-img-outline` (black 5%) on image containers.

## Semantic token categories
- `--text-*` — text colors
- `--icon-*` — icon colors
- `--line-*` — borders, dividers, outlines
- `--surface-*` — backgrounds, overlays, dim layers
- `--button-*` — button fill colors per variant and state
