# Design System Specification: The Agile Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Agile Curator."** 

This aesthetic moves away from the rigid, "bootstrap" layouts of the past decade and embraces a high-end editorial feel. It balances the structural stability of a **Bento-box** layout with the ethereal, nimble quality of **Glassmorphism**. By using high-contrast typography against soft, layered surfaces, we create an interface that feels both authoritative and dangerously fast. We do not use lines to define space; we use light, shadow, and tonal shifts to curate the user's focus.

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a "Crisp White" foundation, punctuated by a vibrant, electric violet-to-blue primary pulse.

*   **Primary Accent:** `primary` (#6a1cf6) and `primary-container` (#ac8eff). Use these to draw the eye to the most critical actions.
*   **The "No-Line" Rule:** To achieve a premium feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined through background color shifts. For example, a sidebar should be `surface-container-low` sitting against a `background` viewport. 
*   **Surface Hierarchy & Nesting:** Use the surface tiers to create physical depth.
    *   **Level 0 (Base):** `surface` (#f5f6f7).
    *   **Level 1 (Bento Containers):** `surface-container-low` (#eff1f2).
    *   **Level 2 (In-container Cards):** `surface-container-lowest` (#ffffff).
*   **The Glass & Gradient Rule:** Floating toolbars and modal overlays must utilize backdrop-blur (minimum 20px) with a semi-transparent `surface-container-lowest` (80% opacity). For primary CTAs, apply a subtle linear gradient from `primary-dim` to `primary` to provide a "lit from within" soul.

## 3. Typography: Editorial Authority
We pair the geometric precision of **Manrope** for expression with the Swiss-style utility of **Inter** for data.

*   **Display & Headlines (Manrope):** Use `display-lg` through `headline-sm` to create a bold, editorial rhythm. These should feel intentional and spacious, utilizing `on-surface` (#2c2f30) to maintain high contrast.
*   **Utility & Body (Inter):** Use `title-md` down to `label-sm` for functional content. The tight kerning of Inter provides the "nimble" feel required for professional tools. 
*   **Hierarchy Tip:** Never settle for "medium" weight for everything. Contrast a `display-md` (bold/heavy) with a `body-md` (regular) to create a clear visual map.

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a result of physics, not just aesthetics. We achieve hierarchy through "stacking" rather than traditional structural lines.

*   **The Layering Principle:** A card should never have a border. Instead, place a `surface-container-lowest` card on top of a `surface-container` background. This creates a soft "lift" that feels integrated into the environment.
*   **Ambient Shadows:** When an element must "float" (like a toolbar), use extra-diffused shadows.
    *   **Blur:** 32px to 48px.
    *   **Opacity:** 4% - 8% of the `on-surface` color. 
    *   Avoid pure black shadows; they look "dirty" on high-contrast white themes.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a container edge (e.g., in high-glare environments), use a "Ghost Border." Use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use backdrop-blur on any element with a `surface-container-lowest` fill that sits above content. This ensures the "Agile" part of our North Star—the UI feels light and permeable.

## 5. Components: Precision Objects

### Buttons & Chips
*   **Primary Button:** Uses `primary` background with `on-primary` text. Use `radius-lg` (16px) to match the Bento containers.
*   **Secondary/Tertiary:** Use `surface-container-high` or transparent backgrounds. Never use a border.
*   **Chips:** Use `secondary-container` for active states. They should be "Pill" shaped (`radius-full`).

### The Bento Sidebar
*   Sidebars are not full-height drawers. They are a collection of "Bento Cards" (containers) using `radius-xl` (24px) or `radius-lg` (16px).
*   **Spacing:** Use a consistent 16px or 24px gap between containers to allow the `background` color to breathe through.

### Floating Toolbars
*   Positioned at the bottom-center or top-center of the viewport.
*   **Style:** `surface-container-lowest` at 85% opacity + 24px backdrop-blur. 
*   **Border:** A top-edge Ghost Border (10% opacity `outline-variant`) can be used to catch the light.

### Input Fields
*   **State:** Default inputs use `surface-container-highest` background.
*   **Focus:** Transition to a 2px `primary` Ghost Border. 
*   **Labels:** Use `label-md` in `on-surface-variant` for a sophisticated, subdued look.

### Cards & Lists
*   **No Dividers:** Prohibit the use of `1px` lines between list items. Use 8px–12px of vertical white space or a very subtle background hover state (`surface-container-low`).

## 6. Do's and Don'ts

### Do:
*   **Do** embrace negative space. If a container feels cramped, increase the padding to 24px or 32px.
*   **Do** use `primary-fixed-dim` for subtle accent backgrounds behind icons.
*   **Do** ensure all interactive elements have a minimum target of 44px, even if the visual footprint is smaller.

### Don't:
*   **Don't** use pure #000000 for text. It creates "chromatic vibration" on crisp white backgrounds. Use `on-background` (#2c2f30).
*   **Don't** mix border radii. If the Bento container is `radius-xl`, the internal elements should be `radius-lg` or `radius-md`. 
*   **Don't** use drop shadows on nested cards. Only floating, "out-of-plane" elements receive shadows.