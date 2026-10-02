# Design verification — editorial redesign

## Visual direction
- The public homepage now uses a light editorial canvas, a dark evidence/service panel, a warm archive band, and a restrained safety-red section rather than one repeated card grid.
- The hero artwork is an original abstract illustration of interlocking gold, ivory, and charcoal ribbons. It is explicitly labeled **original editorial art** and **not documentary evidence**; no community photo is presented as proof.
- Public copy keeps headings task-oriented (Read, Explore, Contribute, Stay safe) and does not expose a private portal.

## Image provenance and dimensions
- Source: generated image supplied in the local Hermes image cache; inspected as abstract/editorial sculpture, not documentary photography.
- Measured supplied source: `1916 × 821` RGB PNG (the source file did not measure 1536 × 1024).
- Web delivery: `src/assets/editorial/tau-gamma-editorial-native.webp` at `1916 × 821`; `src/assets/editorial/tau-gamma-editorial-3840.webp` at `3840 × 1645`.
- Upscale: Pillow `Image.Resampling.LANCZOS`, preserving the source aspect ratio. The 3840px derivative is an upscale, not native 4K capture. SVG/CSS/vector treatments remain resolution-independent.
- `picture` selects the 3840px derivative at viewport widths ≥1600px; smaller screens use the native-size WebP.

## Motion specification
- Hero entry: `0.9s`, cubic-bezier `.16,1,.3,1`, opacity + 22px lift + subtle scale.
- Editorial image hover: `1.2s` ease-out, max `1.035` scale and restrained saturation shift.
- Section reveal: existing IntersectionObserver, threshold `0.08`, root margin `0 0 -40px`; no-JS content remains visible because reveal classes are only applied by JS.
- Reduced motion disables hero/reveal animation and image transition.
- Removed persistent `will-change` from card and reveal selectors; no compositor layer is reserved for every card.

## Source truth / approval blockers
- `assets/research/triskelion-de-zamboanga/` links now resolve locally, but its rights notes and candidate manifests remain approval-gated. `triskelion-public-activities` reports zero licensed community photos; courtesy is not treated as permission.
- The generated art is not used as a community activity photo, event proof, member portrait, or service claim.
- Public portal remains absent from `index.html`; no private dashboard was added.

## Required QA matrix
- Render targets: `3840×2160`, `1440×900`, `390px`, `320px` viewport widths.
- Check: hero art crop, no horizontal page overflow, dark/light contrast, nav and article interactions, reduced-motion CSS, and WebP response MIME.
