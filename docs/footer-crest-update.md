# Latest user-confirmed footer identity

User explicitly supplied and requested footer use of these local images:
- Zamboanga City Triskelion Crest.png: council shield, reads Zamboanga City Council.
- Tau Gamma Phi Limbaga Road Crest.png: round Limbaga Road Chapter crest (attached by user).

User confirms Limbaga Road Chapter is one of the chapters of the Zamboanga City Triskelion de Zamboanga Council. The council's user-confirmed official Facebook page is https://www.facebook.com/TGPZCC . Automated source extraction unavailable, so do not claim independent official-channel verification.

Footer requirement across homepage and all generated pages:
- Keep Tau Gamma Phi as national primary identity.
- Commissioned by Limbaga Road Chapter, Pasonanca, Zamboanga City, with its supplied round crest.
- Clearly identify the council relationship, with the supplied council shield and link to https://www.facebook.com/TGPZCC labelled Zamboanga City Council on Facebook.
- No invented claim that council or national leadership commissioned or endorsed the national website.
- Preserve both originals. Make optimized transparent WebP copies under src/assets/branding with measured dimensions. Do not crop, recolor, distort or blend emblems.
- Restrained professional footer identity block, readable labels, contain-fit images, descriptive alt text, responsive at 320px/390px.

Ownership: active branding implementation owner deleg_737a6812/task-1 owns index, shared footer generator and CSS. Do not race it. New crest asset pack can be prepared independently; apply footer changes only after ownership release or via its shared template implementation.
No push/deployment authorized for these new changes.

## Prepared asset handoff (owner-gated)

Prepared independently on 2026-10-02. The active UI owner remains `deleg_737a6812/task-1`; footer/index/shared-generator/CSS edits are intentionally blocked until that owner explicitly releases the work. No UI lint, build, image HTTP, or focus-link checks were run because the footer implementation is not released.

Exact artifacts:
- `src/assets/branding/zamboanga-city-triskelion-council-crest.webp` — source `Zamboanga City Triskelion Crest.png`; lossless RGBA WebP; 1327×1185 px; measured alpha bbox `(13, 15, 1314, 1173)`; aspect ratio `1.11983122`; 1,172,724 bytes.
- `src/assets/branding/tau-gamma-phi-limbaga-road-chapter-crest.webp` — source `Tau Gamma Phi Limbaga Road Crest.png`; lossless RGBA WebP; 1254×1254 px; measured alpha bbox `(15, 1, 1230, 1207)`; aspect ratio `1.0`; 1,205,586 bytes.
- `src/assets/branding/footer-crest-assets.json` — metadata manifest with source SHA-256 hashes, measured alpha bounds, dimensions, output paths, and preservation constraints.

Originals remain preserved at repository root. No crop, recolor, distortion, blend, AI redraw, or fake upscaling was used. Footer implementation is blocked pending owner release; once released, apply the existing confirmed copy and relationship exactly, including the council Facebook link and labels already documented above.
