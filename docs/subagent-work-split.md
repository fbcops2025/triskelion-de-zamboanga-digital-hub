# Subagent work split — master plan completion

Repo root (default cwd, Documents path is an alias):
C:\Users\Administrator\Desktop\We Forge Web - Command Center\Client Projects\02_Client Projects\Triskelion de Zamboanga Digital Information & Community Hub

Source of truth: TGP_National_Website_Final_Master_Implementation_Prompt.md

## Current verified state (do not redo)

- 89 sitemap routes, all HTTP 200, real 404s for unknown routes
- Paths corrected: /founding-fathers/{slug}/ and /notable-triskelions/{slug}/,
  with noindex legacy redirect stubs at /founders/ and /personalities/
- 8 decade pages built: /history/{founding,1960s..2020s}/
- 25 chapter pages + deepened /chapters/ index, from the public Wikipedia
  chapter list (charter dates recorded as research leads)
- Homepage nav now links to real subpages, not same-page anchors
- Unsupported claims removed: no "Canonical Record Verified", no invented
  biographies, no fabricated provenance or archive registries
- Images: 11 portrait WebPs, 2 crests, official seal, editorial art.
  Context images prepared but NOT yet embedded: src/assets/context/*.webp

## Hard constraints for every agent

- Do NOT run bun, hermes verify, npm ci, or install dependencies
- Do NOT commit, push, or deploy
- Canonical checks are plain node: `node scripts/build.mjs`,
  `node scripts/test.mjs`, `node scripts/editorial-test.mjs`, `node scripts/lint.mjs`
- Never fabricate facts, biographies, verified status, provenance, totals, or images
- Exclude hazing deaths and rivalry incidents entirely (client instruction)
- Keep existing routes working; only add
- One writer per file. Coordinate via the file list below.

## File ownership (prevents collisions)

- Agent A (thin stubs): scripts/editorial-build.mjs nationalPages/aliasPages entries ONLY
- Agent B (about + sources): scripts/editorial-build.mjs about/sources entries ONLY
- Agent C (service/events/archive/videos/documents): scripts/editorial-build.mjs
  service/events/archive/videos/documents entries ONLY

Because all three touch scripts/editorial-build.mjs, they must run SEQUENTIALLY,
not in parallel. Run A, then B, then C. Each verifies before handing off.
