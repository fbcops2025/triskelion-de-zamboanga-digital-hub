# Latest image integration acceptance requirement

User: “Make sure you upload and embed all images I asked you too.”

The user requests real working local web asset delivery and embedding, not files merely staged in a research folder. No new Git push or deployment has been requested since the previous release.

Check all requested placements:
1. Council crest and Limbaga Road Chapter crest in footer on homepage and every generated page, with user-provided TGPZCC Facebook link and commissioning/affiliation copy.
2. Approved real portraits for all 16 personality records in homepage curated cards, full gallery, individual profiles. Record explicit source/permission blockers for any remaining people; do not claim all portraits are complete when placeholders remain.
3. Four founders in hero and founder pages. No approved real founder photos have been established yet, so transparent name/initial placeholders are not completion of requested photographs. Preserve photo gap honestly while implementing the feature.
4. Generated national-records article cover embedded in article and story card; generated art clearly labeled illustration.

Current parent filesystem check: src/assets/personalities contains 11 WebPs (eumir-marcial, jm-de-guzman, joel-villanueva, jose-teves, luis-manzano, nathan-azarcon, ralph-recto, raymond-almazan, richard-gomez, rommel-marbil, vicente-danao). Manifest assets/research/personality-portraits/manifest.json exists; approve only on exact rights evidence. Footer crests exist in src/assets/branding with footer-crest-assets.json. Actual rendered usage must be checked after integration.

Acceptance: real browser image requests HTTP 200 correct MIME, naturalWidth > 0, source-credit links, intended source identity, all route/placement coverage counted in code. Images cannot be treated as completed just because files exist. Do not bypass licensing or fabricate faces.

Active shared branding owner deleg_737a6812/task-1 and founder integration owner deleg_f619403d need release before another editor changes their files. Header module src/header-navigation.mjs also awaits integration.
