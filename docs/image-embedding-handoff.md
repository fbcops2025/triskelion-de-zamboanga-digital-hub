# Image embedding handoff

**Status:** asset-only handoff. The builder and existing images were not modified.

## Measurement scope

A static preview was started with `PORT=3201 node scripts/serve.mjs --dist`. Every URL in `dist/sitemap.xml` was fetched from that preview. Content-image counts include `<img>` elements except the header seal and footer crest images (`/src/assets/brand/seal-*` and `/src/assets/branding/*crest*`). Open Graph metadata is not counted.

The prepared abstract assets are **not embedded yet** because this handoff intentionally does not edit the builder. Therefore “after” below means the verified post-preparation preview state: counts are unchanged and document the expected baseline before the builder owner applies the snippets.

## Prepared abstract assets

These are original Pillow-generated WebP graphics derived from the official seal’s circular/angular geometry and the approved palette (`#0a0d10`, `#121417`, `#d6aa4b`, `#f3ca68`). They are intentionally abstract and decorative: no text, portraits, historical documents, photography, or invented insignia.

| Asset | True dimensions | Byte size | Suitable pages | Suggested alt text |
|---|---:|---:|---|---|
| `src/assets/context/editorial-section-banner-1600.webp` | 1600 × 640 px | 27,232 bytes | history, about, service, events, archive, documents, sources, leadership, contribute, corrections, safe-membership, contact, and other text-led section pages | `Abstract gold geometric lines and circular forms on a charcoal field` (decorative; use empty alt in HTML) |
| `src/assets/context/editorial-section-banner-800.webp` | 800 × 320 px | 11,606 bytes | same section pages at compact/mobile widths | `Abstract gold geometric lines and circular forms on a charcoal field` (decorative; use empty alt in HTML) |
| `src/assets/context/editorial-category-header-1200.webp` | 1200 × 720 px | 25,892 bytes | regions, councils, chapters, videos, references, and category/index pages | `Abstract gold ring and angular line motif on a charcoal field` (decorative; use empty alt in HTML) |
| `src/assets/context/editorial-category-header-600.webp` | 600 × 360 px | 11,344 bytes | same category/index pages at compact/mobile widths | `Abstract gold ring and angular line motif on a charcoal field` (decorative; use empty alt in HTML) |

All four files were opened and verified with Pillow after generation. Use the wide/compact pair as a responsive source set; do not upscale the compact asset.

## Exact HTML snippets

### Text-led section pages

Use this for `/history/`, `/about/`, `/service/`, `/events/`, `/archive/`, `/documents/`, `/sources/`, `/leadership/`, `/contribute/`, `/corrections/`, `/safe-membership/`, `/contact/`, and comparable prose sections. Because the image is decorative, its accessible name is intentionally empty and the nearby heading supplies meaning.

```html
<img
  src="/src/assets/context/editorial-section-banner-800.webp"
  srcset="/src/assets/context/editorial-section-banner-800.webp 800w, /src/assets/context/editorial-section-banner-1600.webp 1600w"
  sizes="(max-width: 720px) 100vw, 1600px"
  width="1600"
  height="640"
  alt=""
  aria-hidden="true"
  loading="lazy"
  decoding="async"
>
```

### Category and index pages

Use this for `/regions/`, `/councils/`, `/chapters/`, `/videos/`, `/references/`, and similar category/index pages.

```html
<img
  src="/src/assets/context/editorial-category-header-600.webp"
  srcset="/src/assets/context/editorial-category-header-600.webp 600w, /src/assets/context/editorial-category-header-1200.webp 1200w"
  sizes="(max-width: 720px) 100vw, 1200px"
  width="1200"
  height="720"
  alt=""
  aria-hidden="true"
  loading="lazy"
  decoding="async"
>
```

Do not use these abstract assets as evidence of a historical event, chapter, person, document, service activity, or official insignia.

## Existing Zamboanga contextual images

These are **not Triskelion-owned media**. They are geography/context only and must not imply organizational ownership, activity, jurisdiction, membership, endorsement, or affiliation. Client/authorized approval remains required.

| `src/assets/context/zamboanga-city-sunset-800.webp` | 800 × 598 px | 55,190 bytes | Existing research-stage contextual image; approval required |
| `src/assets/context/zamboanga-city-sunset-1600.webp` | 1600 × 1195 px | 397,288 bytes | Existing research-stage contextual image; approval required |
| `src/assets/context/zamboanga-peninsula-map-640.webp` | 640 × 844 px | 35,096 bytes | Existing research-stage contextual image; approval required |
| `src/assets/context/zamboanga-peninsula-map-1280.webp` | 1280 × 1689 px | 99,564 bytes | Existing research-stage contextual image; approval required |

### Sunset — CC BY-SA 2.0

Source creator: Akhmad Jaafar Albeso via Wikimedia Commons. Use the exact license name **Creative Commons Attribution-ShareAlike 2.0 International** and keep attribution visible on the page.

```html
<figure>
  <img
    src="/src/assets/context/zamboanga-city-sunset-800.webp"
    srcset="/src/assets/context/zamboanga-city-sunset-800.webp 800w, /src/assets/context/zamboanga-city-sunset-1600.webp 1600w"
    sizes="(max-width: 720px) 100vw, 1600px"
    width="1600"
    height="1195"
    alt="Sunset over Zamboanga City, shown as regional context"
    loading="lazy"
    decoding="async"
  >
  <figcaption>Regional context image by Akhmad Jaafar Albeso via Wikimedia Commons,
    licensed under
    <a rel="license" href="https://creativecommons.org/licenses/by-sa/2.0/">
      Creative Commons Attribution-ShareAlike 2.0 International
    </a>.
    This image does not depict or imply Triskelion activity or endorsement.
  </figcaption>
</figure>
```

### Peninsula map — CC BY-SA 3.0

Creator: TUBS via Wikimedia Commons. Use the exact license name **Creative Commons Attribution-ShareAlike 3.0 Unported** and keep attribution visible on the page.

```html
<figure>
  <img
    src="/src/assets/context/zamboanga-peninsula-map-640.webp"
    srcset="/src/assets/context/zamboanga-peninsula-map-640.webp 640w, /src/assets/context/zamboanga-peninsula-map-1280.webp 1280w"
    sizes="(max-width: 720px) 100vw, 1280px"
    width="1280"
    height="1689"
    alt="Map of the Zamboanga Peninsula, shown as regional geographic context"
    loading="lazy"
    decoding="async"
  >
  <figcaption>Regional map by TUBS via Wikimedia Commons, licensed under
    <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">
      Creative Commons Attribution-ShareAlike 3.0 Unported
    </a>.
    This map does not establish Triskelion jurisdiction, membership, coverage, or activity.
  </figcaption>
</figure>
```

## Measured route coverage

The sitemap contains **110 routes**. The full route-level count is below; `before` and `after` are content-image counts under the exclusion rule above.

| Route | Before | After |
|---|---:|---:|
| `/` | 1 | 1 |
| `/news/` | 1 | 1 |
| `/history/` | 0 | 0 |
| `/references/` | 0 | 0 |
| `/notable-triskelions/` | 11 | 11 |
| `/sitemap/` | 0 | 0 |
| `/about/` | 0 | 0 |
| `/founding-fathers/` | 0 | 0 |
| `/regions/` | 0 | 0 |
| `/councils/` | 0 | 0 |
| `/chapters/` | 0 | 0 |
| `/service/` | 0 | 0 |
| `/events/` | 0 | 0 |
| `/videos/` | 0 | 0 |
| `/archive/` | 0 | 0 |
| `/documents/` | 0 | 0 |
| `/sources/` | 0 | 0 |
| `/contribute/` | 0 | 0 |
| `/corrections/` | 0 | 0 |
| `/contact/` | 0 | 0 |
| `/safe-membership/` | 0 | 0 |
| `/leadership/` | 0 | 0 |
| `/privacy/` | 0 | 0 |
| `/accessibility/` | 0 | 0 |
| `/videos/tau-gamma-phi-global-library/` | 0 | 0 |
| `/videos/nakamamanghang-kasaysayan/` | 0 | 0 |
| `/videos/solano-municipal-council/` | 0 | 0 |
| `/councils/zamboanga-city/` | 0 | 0 |
| `/stories/about-this-public-archive/` | 0 | 0 |
| `/stories/verification-standards/` | 0 | 0 |
| `/stories/research-context/` | 0 | 0 |
| `/stories/tau-gamma-phi-national-records-and-membership/` | 1 | 1 |
| `/notable-triskelions/roy-ordinario/` | 0 | 0 |
| `/notable-triskelions/errol-garchitorena/` | 0 | 0 |
| `/notable-triskelions/joel-villanueva/` | 1 | 1 |
| `/notable-triskelions/ralph-recto/` | 1 | 1 |
| `/notable-triskelions/richard-gomez/` | 1 | 1 |
| `/notable-triskelions/jose-teves/` | 1 | 1 |
| `/notable-triskelions/rommel-marbil/` | 1 | 1 |
| `/notable-triskelions/vicente-danao/` | 1 | 1 |
| `/notable-triskelions/vandolph-quizon/` | 0 | 0 |
| `/notable-triskelions/eumir-marcial/` | 1 | 1 |
| `/notable-triskelions/raymond-almazan/` | 1 | 1 |
| `/notable-triskelions/john-riel-casimero/` | 0 | 0 |
| `/notable-triskelions/alvin-aguilar/` | 0 | 0 |
| `/notable-triskelions/jm-de-guzman/` | 1 | 1 |
| `/notable-triskelions/luis-manzano/` | 1 | 1 |
| `/notable-triskelions/nathan-azarcon/` | 1 | 1 |
| `/founding-fathers/roy-ordinario/` | 0 | 0 |
| `/founding-fathers/vedasto-tito-venida/` | 0 | 0 |
| `/founding-fathers/rodolfo-rod-confesor/` | 0 | 0 |
| `/founding-fathers/talek-j-pablo/` | 0 | 0 |
| `/history/founding/` | 0 | 0 |
| `/history/1960s/` | 0 | 0 |
| `/history/1970s/` | 0 | 0 |
| `/history/1980s/` | 0 | 0 |
| `/history/1990s/` | 0 | 0 |
| `/history/2000s/` | 0 | 0 |
| `/history/2010s/` | 0 | 0 |
| `/history/2020s/` | 0 | 0 |
| `/chapters/university-of-the-philippines-diliman-diliman-quezon-city/` | 0 | 0 |
| `/chapters/pmi-colleges-quiapo-manila/` | 0 | 0 |
| `/chapters/feati-university-santa-cruz-manila/` | 0 | 0 |
| `/chapters/map-a-university-main-campus-intramuros-manila/` | 0 | 0 |
| `/chapters/national-university-sampaloc-manila/` | 0 | 0 |
| `/chapters/university-of-santo-tomas-sampaloc-manila/` | 0 | 0 |
| `/chapters/adamson-university-manila/` | 0 | 0 |
| `/chapters/university-of-the-east-manila/` | 0 | 0 |
| `/chapters/manuel-l-quezon-university-quiapo-manila/` | 0 | 0 |
| `/chapters/san-sebastian-college-recoletos-manila/` | 0 | 0 |
| `/chapters/far-eastern-university-sampaloc-manila/` | 0 | 0 |
| `/chapters/technological-university-of-the-philippines-ermita-manila/` | 0 | 0 |
| `/chapters/university-of-manila-sampaloc-manila/` | 0 | 0 |
| `/chapters/philippine-college-of-criminology-quiapo-manila/` | 0 | 0 |
| `/chapters/lyceum-of-the-philippines-intramuros-manila/` | 0 | 0 |
| `/chapters/gregorio-araneta-university-foundation-malabon/` | 0 | 0 |
| `/chapters/de-ocampo-memorial-college-santa-mesa-manila/` | 0 | 0 |
| `/chapters/eulogio-amang-rodriguez-institute-of-science-and-technology-santa-mesa/` | 0 | 0 |
| `/chapters/patts-college-of-aeronautics-pasay/` | 0 | 0 |
| `/chapters/pmi-colleges-marikina/` | 0 | 0 |
| `/chapters/ama-university-manila-campus-santa-mesa-manila/` | 0 | 0 |
| `/chapters/university-of-caloocan-city-caloocan/` | 0 | 0 |
| `/chapters/san-beda-college-high-school-manila/` | 0 | 0 |
| `/chapters/triskelion-youth-movement-paco-manila/` | 0 | 0 |
| `/chapters/guam-triskelions-guam-us/` | 0 | 0 |
| `/chapters/triskelion-alumni-association/` | 0 | 0 |
| `/service/chapter-blood-donation-support/` | 0 | 0 |
| `/service/national-disaster-relief-and-operation-damayan/` | 0 | 0 |
| `/service/educational-assistance-and-mentorship/` | 0 | 0 |
| `/archive/historical-photographs/` | 0 | 0 |
| `/archive/documents-and-publications/` | 0 | 0 |
| `/archive/anniversary-records/` | 0 | 0 |
| `/archive/chapter-histories/` | 0 | 0 |
| `/archive/news-coverage/` | 0 | 0 |
| `/archive/videos/` | 0 | 0 |
| `/archive/memorabilia/` | 0 | 0 |
| `/archive/certificates/` | 0 | 0 |
| `/archive/posters/` | 0 | 0 |
| `/archive/council-records/` | 0 | 0 |
| `/archive/oral-histories/` | 0 | 0 |
| `/archive/historical-timelines/` | 0 | 0 |
| `/documents/anti-hazing-compliance-charter-ra-11053/` | 0 | 0 |
| `/documents/historical-verification-and-evidence-standards/` | 0 | 0 |
| `/regions/ncr/` | 0 | 0 |
| `/regions/luzon/` | 0 | 0 |
| `/regions/visayas/` | 0 | 0 |
| `/regions/mindanao/` | 0 | 0 |
| `/references/commissioning-context/` | 0 | 0 |
| `/references/verification-standards/` | 0 | 0 |
| `/references/research-context/` | 0 | 0 |

**Totals:** 25 content-image elements across the sitemap before and after; 95 of 110 routes have zero.

## Verification notes

- Preview server: `http://127.0.0.1:3201/` (started locally from `dist`).
- Sitemap source: `dist/sitemap.xml`.
- Generated files are new files under `src/assets/context/`; no existing image was overwritten.
- Pillow verification passed for all four prepared assets and all four existing contextual WebP derivatives.
- No builder files, source content, styles, existing images, Git state, deployment, or credentials were changed/read.
