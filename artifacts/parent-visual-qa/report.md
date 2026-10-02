# Parent visual QA — live build

- **Target:** `http://localhost:4182` (served preview)
- **Browser:** headless Chromium via Python Playwright
- **Viewports exercised:** 1440×1000, 390×1000, 320×1000 CSS px; screenshots are full-page unless named `scrolled-footer`
- **Pages:** `/`, `/personalities/`, `/personalities/joel-villanueva/`, `/personalities/roy-ordinario/` (permission-needed initials fallback), `/stories/tau-gamma-phi-national-records-and-membership/`
- **Console/page errors:** none observed
- **Status:** `LOCAL_BROWSER_VERIFIED` for the requested visual/interaction scope, with findings below.

## Findings

### F-01 — Approved profile hero portrait ignores the intended 3:4 crop ratio
- **Severity:** Medium — visual consistency
- **Exact reproduction:** At `390×1000`, open `/personalities/joel-villanueva/`. The approved portrait renders at `350×1000` CSS px (`getBoundingClientRect()`), while the same stylesheet declares `aspect-ratio: 3 / 4`. At `320×1000` it renders at `280×1000`. At `1440×1000` it renders at `420×1000`.
- **Comparison:** `/personalities/roy-ordinario/` initials fallback at `390×1000` renders `350×466.66` (3:4). Thus approved portraits and initials fallbacks are not uniform on profile pages; the approved Joel crop becomes an unusually tall, narrow panel and the face is enlarged/cropped differently.
- **Likely cause/evidence:** The generated `<img>` carries HTML `height="1000"`, which wins over the CSS aspect-ratio sizing despite `aspect-ratio: 3 / 4`.
- **Evidence:** `artifacts/parent-visual-qa/joel-villanueva-390.png`, `roy-ordinario-initials-390.png`; captured dimensions in `qa-results.json`.

### F-02 — Homepage process strip has off-viewport children at narrow widths
- **Severity:** Medium — responsive visual clipping
- **Exact reproduction:** At `390×1000` or `320×1000`, open `/`. DOM geometry reports `documentElement.scrollWidth === clientWidth` (390/390 and 320/320), but the `.stage-step` for `03 Review` is positioned at `left:314.375, right:419.375` and its `.stage-arrow` reaches `right:441.06` at the 390px viewport. At 320px the same child still reaches `right:419.375`.
- **Actual behavior:** Page-level horizontal scroll is contained, but the third workflow step/arrow extends beyond the viewport and is visually clipped rather than reflowing or becoming an intentional scroll region.
- **Evidence:** `artifacts/parent-visual-qa/home-390.png`, `home-320.png`; offending-element geometry in `qa-results.json`.

### F-03 — Reduced-motion mode does not remove all homepage transitions
- **Severity:** Low — accessibility/motion
- **Exact reproduction:** Launch with Playwright `reduced_motion='reduce'`, open `/` at any tested viewport, and inspect computed styles. `matchMedia('(prefers-reduced-motion: reduce)').matches` is true, but homepage elements retain non-zero transitions, including `.skip-link` (`0.2s`), `.brand-mark` (`0.2s, 0.2s`), and `.nav-cta` (`0.2s`). The page’s reveal/card animations are disabled, and editorial routes had no non-zero transitions in this check.
- **Expected:** Reduced-motion mode should suppress or minimize non-essential homepage transitions consistently.
- **Evidence:** `qa-results.json` reducedMotion records; source rule locations observed in `src/styles.css` (no source changes made).

## Passed checks

- **Horizontal overflow:** `/personalities/`, Joel profile, Roy fallback, and illustrated story reported equal `scrollWidth`/`clientWidth` at 1440, 390, and 320. Homepage also reported equal page-level widths; F-02 is contained child clipping, not page scroll overflow.
- **Footer crest pair:** After scrolling to the footer, both crests loaded and were legible/contained at 390px; no stretching or clipping was observed. JS bounds checks showed both images inside their figure bounds. See `personalities-390-scrolled-footer.png` and `joel-390-scrolled-footer.png`.
- **Initials fallback:** Roy’s `RO` monogram is deliberate, centered, high-contrast, and visually consistent with the dark editorial card; no broken-image icon or missing asset was present.
- **Dropdown mutual exclusion:** Homepage header details passed: opening Discover then Our Story leaves only Our Story open; Escape closes and restores focus to the triggering summary; outside click closes; link selection closes and navigates; keyboard Enter opens the focused summary. `aria-expanded` tracked native `open` state.
- **Skip link/focus:** First Tab focuses a visible skip link at 390px; Enter moves focus to `#main-content`. Subsequent keyboard focus showed a visible 3px outline.
- **Illustrated article:** Rendered at all three widths with illustration and no page-level overflow. `story-records-1440.png`, `story-records-390.png`, `story-records-320.png`.
- **Founder hero / History:** Homepage founder/history content is rendered. `/history/` is also rendered and responsive; `history-390.png` confirms the new History page is present.

## Artifacts created

All files are under `artifacts/parent-visual-qa/`:
- `qa-results.json`
- `qa-run-output.json`
- `lazy-output.json`
- `run_qa.py` and `verify_lazy.py` (QA-only helper scripts)
- viewport screenshots for each requested page and width, plus scrolled-footer/history evidence

No source files, Git state, or application code were changed.
