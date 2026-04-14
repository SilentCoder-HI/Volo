# Volo Roadmap

## Day Log - 14 April 2026

This document captures the current status of the app from initial setup up to today, with clear focus on what is already built and what is still in progress.

### Current App State (Snapshot)

1. **Core route structure is now in place.**  
   The app uses Next.js App Router with active pages for home (`/`), about (`/about`), stitch section (`/stitch`, `/stitch/gallery`, `/stitch/contact`), and the design workspace (`/design/[id]`).

2. **Shared navigation has been introduced globally.**  
   A reusable `Navbar` component is connected in the root layout, so users can navigate key areas without per-page duplication.

3. **Design workspace foundation is functional.**  
   The dynamic design page is composed of `Sidebar`, `Stage`, `Toolbar`, and `RightPanel`, giving a complete editor-like shell for future product expansion.

4. **Canvas interactions are working with Konva + Zustand.**  
   The `Stage` supports shape rendering, drag/select behavior, and zoom/pan interaction while state is managed through `useCanvasStore` for shared editor data.

5. **State management exists but is still lightweight.**  
   The store currently covers shape list, selected shape, and zoom helpers, but project persistence/history/collaboration logic is not yet fully implemented.

6. **UI layer is strong visually, with logic still being expanded.**  
   Major screens and controls are designed and wired, but many panel actions (effects/export/alignment-style controls) are currently scaffolding and need deeper functionality.

7. **Platform and styling stack are modern and ready to scale.**  
   The project is running on Next.js 16 + React 19 + TypeScript, with Tailwind CSS as the primary styling system, and includes additional libraries (`zustand`, `konva`, `react-konva`, `@silentcoderhi/superform`) for editor and form workflows.

## Next Focus Areas

- Add persistent save/load for design projects.
- Expand right panel tools into real editing operations.
- Unify zoom/control logic (remove overlap between `Stage` and `TopBar` patterns).
- Connect stitch/about flows with real data/content sources.
- Add validation, error states, and test coverage for key user flows.
