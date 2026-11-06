# Button

## Overview

Button is a single-element wrapper around the Button component set: its whole API (variant, size, label, leadingIcon, trailingIcon) is the child's configuration promoted to the parent. The default configuration is a hugging horizontal row of 88×48 with 14/20 padding, a 20 gap and an 8 radius, laying out an optional leading icon, the label and an optional trailing icon; variant drives fill and text color, while size sets padding and height, with the icon* sizes producing square icon-only buttons. Every configuration is one focus stop with a button role whose accessible name comes from the label, and icon-only sizes need an explicit accessible name. Only the default variant and size were measured, so the other variants and sizes still need re-extraction to be fully specified.

**Source:** [Figma](https://www.figma.com/design/MrLoeDUoaga8joFAIlWzfQ/Untitled?node-id=46-2193) · **Variants:** none

## Composition

- **Button** — constitutive · 54:1996. Set by designer in the uSpec Extract plugin.

## Anatomy

```text
Button (component)
└─ Button (instance)
   ├─ Leading icon (frame)
   │  └─ Glyph (vector)
   ├─ Label (text)
   └─ Trailing icon (frame)
      └─ Glyph (vector)
```

## Implementation invariants

- Always present: `label`.
- Optional-property defaults: `variant`=default, `size`=default, `leadingIcon`=none, `trailingIcon`=none.
- Button is a thin wrapper COMPONENT (46:2193) around one constitutive instance of the Button component set (54:1996). The wrapper adds no padding, gap, radius or visible border (its strokeWeight 1 is configured but unpainted), so every rendered dimension comes from the embedded child. Child spacing is token-driven from the spacing/button/* family: padding-y 14, padding-x 20, gap 20. Icon boxes and glyphs share size/button/glyph/default (16), and the glyph outline uses border-width/button/icon (1.5). Default height derives from 14 + 20 (label line height) + 14 = 48. Anomalies: (1) cornerRadius 8 is hardcoded although a radius/button (8) token exists in the file. (2) Label typography is inline (Inter Medium 15/20, no text style) although typography/button/label/* tokens exist; letterSpacing was not captured by the extraction. (3) The 16 glyph box with 20 gap is a wide icon-label gap relative to the 15 label size; confirm this is intentional. No multi-mode variable collections (density/shape) exist. The primitive and semantic collections have one mode each. Known gaps: the plugin skipped the Phase I variant walk for the Button set (cross-product 48 exceeds cap 20), and the Figma MCP was unavailable for a delta. As a result, all xs, sm, lg, icon, icon-xs, icon-sm and icon-lg columns in the Button section are — (not measured), and the Variant axis (outline, ghost, destructive, secondary, link) was not measured. The file defines size-specific tokens that are probably bound in those variants (size/button/icon/{xs 28, sm 36, default 48, lg 56}, spacing/button/lg/padding-y 18, size/button/glyph/large 20, border-width/button/outline 1, typography/button/label/xs/line-height 16), but their bindings are unverified and were not used as values. Extraction warning: Phase I skipped "Button" sub-component variant walk (48 combos > cap 20).
- Accessibility focus stops: 1; visual variants must not alter reading order.

## API

> Button is a single-element wrapper around the Button component set; its public API is the child's configuration promoted to the parent. `size` covers both text sizes (default, xs, sm, lg) and square icon-only sizes (icon, icon-xs, icon-sm, icon-lg); for icon-only sizes provide an accessible name since no visible label is expected. `leadingIcon` and `trailingIcon` are independent and may be combined. No variable-mode collections (density, shape) control this component.

### Component API

| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| variant | enum | default \| outline \| ghost \| destructive \| secondary \| link | default | Visual style. Use default for the primary action, destructive for dangerous actions, link for inline text-style actions. |
| size | enum | default \| xs \| sm \| lg \| icon \| icon-xs \| icon-sm \| icon-lg | default | Height and padding scale. icon* values are square icon-only sizes. |
| label | string | — | – | Visible button text (design placeholder: "Button"). Use an accessible name instead for icon-only sizes. |
| leadingIcon | enum | none \| icon | none | Optional icon before the label; supply the glyph from the icon library. |
| trailingIcon | enum | none \| icon | none | Optional icon after the label, e.g. a chevron or external-link indicator. |

### Example 1 — Primary button

| Property | Value | Notes |
|---|---|---|
| label | "Save changes" | – |
| variant | default | Main call to action |

### Example 2 — Outline button with leading icon

| Property | Value | Notes |
|---|---|---|
| label | "Upload" | – |
| variant | outline | – |
| size | sm | – |
| leadingIcon | icon | Upload glyph from the icon library |

### Example 3 — Destructive action

| Property | Value | Notes |
|---|---|---|
| label | "Delete project" | – |
| variant | destructive | Pair with a confirmation step |

### Example 4 — Icon-only ghost button

| Property | Value | Notes |
|---|---|---|
| variant | ghost | – |
| size | icon | Square icon-only button |
| leadingIcon | icon | Requires an accessible name, e.g. "More options" |

## Structure

### Button composition

Button is a standalone wrapper COMPONENT around one constitutive instance of the Button component set (Variant × Size). The wrapper adds no padding, spacing, radius or visible border; all dimensions come from the embedded child, documented in the Button section.

| Spec | Default | Notes |
|---|---|---|
| Host container | – | Wrapper COMPONENT; hosts a single Button instance |
| ↳ widthMode | hug | Hugs the inner Button; measures 88 with the default "Button" label |
| ↳ heightMode | hug | Hugs the inner Button; measures 48 at Size=default |
| ↳ padding | 0 | No inset: the wrapper adds no space around the inner Button |
| ↳ itemSpacing | 0 | Only one child, so no gap applies |
| ↳ counterAxisSpacing | 0 | No wrapping; not used |
| ↳ cornerRadius | 0 | Shape comes from the inner Button (8), not the wrapper |
| ↳ borderWidth | none | strokeWeight 1 (inside) is configured but no stroke paint is applied, so there is no visible border |
| ↳ clipsContent | false | Wrapper does not clip; the inner Button clips its own content |
| Button instance | – | Constitutive Button component-set instance (see Button section) |

### Button

Internals of the embedded Button component-set instance. Columns follow the child's own Size axis. Only Size=default (with Variant=default) was measured. The plugin skipped the Phase I variant walk (cross-product 48 exceeds cap 20), so every other size column is —. Leading and trailing icon rows describe the hidden icon frames that appear when leadingIcon / trailingIcon = icon.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Container | – | – | – | – | – | – | – | – | Tap target and content row of the Button set |
| ↳ widthMode | hug | — | — | — | — | — | — | — | Width follows label length; measures 88 with "Button". xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ heightMode | hug | — | — | — | — | — | — | — | Height comes from 14+20+14 (padding + line height) = 48. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ verticalPadding | spacing/button/padding-y (14) | — | — | — | — | — | — | — | With the 20 label line height this gives the 48 total height. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ horizontalPadding | spacing/button/padding-x (20) | — | — | — | — | — | — | — | Symmetric inset from the container edges. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ itemSpacing | spacing/button/gap (20) | — | — | — | — | — | — | — | Gap between icon and label; only visible when an icon is on. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ counterAxisSpacing | 0 | — | — | — | — | — | — | — | Single row, no wrapping. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ cornerRadius | 8 | — | — | — | — | — | — | — | Hardcoded 8; the file also has a radius/button (8) token that is not bound here. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ borderWidth | 0 | — | — | — | — | — | — | — | No border on Variant=default. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ clipsContent | true | — | — | — | — | — | — | — | Clips content to the rounded container. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| Leading icon | – | – | – | – | – | – | – | – | Fixed icon box, hidden unless leadingIcon=icon; zero internal spacing |
| ↳ width | size/button/glyph/default (16) | — | — | — | — | — | — | — | Fixed width from the glyph size token. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ height | size/button/glyph/default (16) | — | — | — | — | — | — | — | Square 1:1 icon box. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ padding | 0 | — | — | — | — | — | — | — | Glyph fills the box edge to edge. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ cornerRadius | 0 | — | — | — | — | — | — | — | Square box; no rounding. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ borderWidth | none | — | — | — | — | — | — | — | strokeWeight 1 is configured but unpainted, so the box has no visible border. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ clipsContent | true | — | — | — | — | — | — | — | Clips glyph overflow to the 16 box. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| Leading icon glyph | – | – | – | – | – | – | – | – | Vector glyph inside the icon box |
| ↳ width | size/button/glyph/default (16) | — | — | — | — | — | — | — | Shares the icon-box token, so the glyph always fills the box. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ height | size/button/glyph/default (16) | — | — | — | — | — | — | — | Square glyph. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ strokeWeight | border-width/button/icon (1.5) | — | — | — | — | — | — | — | Painted outline stroke weight of the glyph. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ strokeAlign | inside | — | — | — | — | — | — | — | Stroke drawn inside the glyph bounds so it never exceeds 16. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| Label | – | – | – | – | – | – | – | – | Visible button text (label) |
| ↳ widthMode | hug | — | — | — | — | — | — | — | Grows with text; measures 48 for "Button". xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ heightMode | hug | — | — | — | — | — | — | — | Height comes from the 20 line height. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ fontFamily | Inter | — | — | — | — | — | — | — | Inline font family; no text style is bound. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ fontWeight | Medium | — | — | — | — | — | — | — | Inline weight. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ fontSize | 15 | — | — | — | — | — | — | — | Inline size. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ lineHeight | 20 | — | — | — | — | — | — | — | Inline line height; sets the content height. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| Trailing icon | – | – | – | – | – | – | – | – | Fixed icon box, hidden unless trailingIcon=icon; zero internal spacing |
| ↳ width | size/button/glyph/default (16) | — | — | — | — | — | — | — | Fixed width from the glyph size token. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ height | size/button/glyph/default (16) | — | — | — | — | — | — | — | Square 1:1 icon box. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ padding | 0 | — | — | — | — | — | — | — | Glyph fills the box edge to edge. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ cornerRadius | 0 | — | — | — | — | — | — | — | Square box; no rounding. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ borderWidth | none | — | — | — | — | — | — | — | strokeWeight 1 is configured but unpainted, so the box has no visible border. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ clipsContent | true | — | — | — | — | — | — | — | Clips glyph overflow to the 16 box. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| Trailing icon glyph | – | – | – | – | – | – | – | – | Vector glyph inside the icon box |
| ↳ width | size/button/glyph/default (16) | — | — | — | — | — | — | — | Shares the icon-box token, so the glyph always fills the box. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ height | size/button/glyph/default (16) | — | — | — | — | — | — | — | Square glyph. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ strokeWeight | border-width/button/icon (1.5) | — | — | — | — | — | — | — | Painted outline stroke weight of the glyph. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |
| ↳ strokeAlign | inside | — | — | — | — | — | — | — | Stroke drawn inside the glyph bounds so it never exceeds 16. xs–icon-lg not measured (cross-product 48 exceeds cap 20). |

## Color

> All painted colors are rendered inside the constitutive Button instance (Variant=default, Size=default); tokens here are measured from colorWalk[] and are authoritative for this component. The child Button set's own spec holds its per-variant color canon. Only the default child variant was measured: outline, ghost, destructive, secondary and link were not walked (48 combos > cap 20). Leading and trailing icon glyphs are hidden by default (Leading icon / Trailing icon booleans off) and share the label token when shown. All tokens are semantic aliases from single-mode collections; no hard-coded colors.

| Context | Element | Token | Notes |
|---|---|---|---|
| Button | Background fill | color/action/dark/background · #000000 | Button container surface color |
| Button | Leading icon glyph | color/text/on-dark/strong · #FFFFFF | Leading icon stroke. Hidden by default. |
| Button | Label | color/text/on-dark/strong · #FFFFFF | Button label text color |
| Button | Trailing icon glyph | color/text/on-dark/strong · #FFFFFF | Trailing icon stroke. Hidden by default. |

## Accessibility

- Single focus stop: the Button is one element. The visible label text and any leading/trailing icon merge into it; there is no focus order section because only one stop exists.
- The outer COMPONENT "Button" (46:2193) is a transparent wrapper around the nested Button instance (46:2187); it carries no semantics of its own and must not add a second focusable layer.
- Prefer native controls: SwiftUI Button / Material Button / HTML <button type="button">. They provide role, focusability and activation (Enter/Space on web) without custom wiring.
- The label describes the action, not the appearance. variant (default, outline, ghost, destructive, secondary, link) is purely visual; a destructive action must say so in its label text.
- variant=link still renders a button. Use an anchor (<a href>, .isLink, link semantics) only when activation navigates to a URL.
- leadingIcon / trailingIcon are decorative when a visible label is present: hide them (accessibilityHidden / contentDescription = null / aria-hidden="true").
- Icon-only sizes (icon, icon-xs, icon-sm, icon-lg) have no visible text: the label prop value must become the accessible name (accessibilityLabel / contentDescription / aria-label). An icon-only button without one is announced only as "button".
- Icon-only targets must still meet minimum touch-target size (44x44pt iOS, 48x48dp Android, 24x24 CSS px WCAG 2.5.8); expand the hit area rather than the visual size if needed.
- The Figma API exposes no disabled or loading props. If the implementation adds them, use the native disabled attribute / .notEnabled / disabled() and aria-busy respectively; they are not documented as states here.
- Do not reorder focus across states; keep the stop index stable so user gestures remain predictable.
- Do not stuff the accessible name with the hint, value, and error; each belongs on its dedicated property.
- Platform parity: iOS merges via accessibilityElement(children: .combine), Android via mergeDescendants = true, Web via the button's text content; all three expose the same single stop.

### enabled

Labelled button (size = default / xs / sm / lg) across every variant value, with or without leadingIcon/trailingIcon. All of these share one focus stop, role and announcement pattern, so they are grouped. Only the default child (Variant=default, Size=default) was measured.

| Platform | Native implementation | Announcement | Role and focus | Nested content | Guardrails | Order |
|---|---|---|---|---|---|---|
| VoiceOver (iOS) | — | "Button, button" | .isButton | — | Do not: Duplicate label; Do not: Announce icons | 1 |
| TalkBack (Android) | — | "Button, button, double-tap to activate" | Role.Button | — | Do not: Duplicate label; Do not: Announce icons | 1 |
| ARIA (Web) | <button type="button"> | "Button, button" | button (implicit) | — | Do not: div role="button"; Do not: Duplicate label; Do not: Announce icons | 1 |

### size='icon' / 'icon-xs' / 'icon-sm' / 'icon-lg'

Icon-only button. No visible label, so the accessible name must be supplied explicitly from the label prop. The four icon sizes are visually different but semantically identical, so they are grouped.

| Platform | Native implementation | Announcement | Role and focus | Nested content | Guardrails | Order |
|---|---|---|---|---|---|---|
| VoiceOver (iOS) | — | "Button, button" | .isButton | .accessibilityHidden(true) | Do not: Unnamed button; Do not: Announce icons | 1 |
| TalkBack (Android) | — | "Button, button, double-tap to activate" | Role.Button | — | Do not: Unnamed button; Do not: Announce icons | 1 |
| ARIA (Web) | <button type="button"> | "Button, button" | button (implicit) | aria-hidden="true" focusable="false" | Do not: Unnamed button; Do not: Announce icons | 1 |

## Known gaps

- Button / Container: source target is unresolved
- Button / Leading icon: source target is unresolved
- Button / Leading icon glyph: source target is unresolved
- Button / Label: source target is unresolved
- Button / Trailing icon: source target is unresolved
- Button / Trailing icon glyph: source target is unresolved
- color: variant outline, ghost, destructive, secondary, link not measured; child variant walk skipped (48 > cap 20). Re-extract to cover them.

## Evidence coverage

| Domain | Total | Emitted | Merged | Omitted | Unresolved |
|---|---|---|---|---|---|
| api | 2 | 2 | 0 | 0 | 0 |
| structure | 96 | 67 | 29 | 0 | 0 |
| color | 4 | 4 | 0 | 0 | 0 |
| voice | 2 | 1 | 1 | 0 | 0 |

---

Canonical JSON: `button.json`
