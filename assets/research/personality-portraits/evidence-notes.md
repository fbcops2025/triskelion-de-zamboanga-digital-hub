# Personality portrait research evidence

Date accessed: 2026-10-02

## Scope and method

- Read `src/notables.mjs`; the 16 target IDs are: roy-ordinario, errol-garchitorena, joel-villanueva, ralph-recto, richard-gomez, jose-teves, rommel-marbil, vicente-danao, vandolph-quizon, eumir-marcial, raymond-almazan, john-riel-casimero, alvin-aguilar, jm-de-guzman, luis-manzano, and nathan-azarcon.
- Search priority was exact Wikimedia Commons file pages, using the Commons API search with a descriptive User-Agent. The first API attempt returned HTTP 403; the documented alternative with a User-Agent succeeded. Later rate limiting was handled with throttling and curl retries. No logins, access-control bypass, or package installs were used.
- Each approved original was downloaded from its exact Wikimedia upload URL, opened with Pillow to record dimensions, and visually inspected in `contact-sheet.jpg` to confirm the person and reject obvious mismatches. WebP derivatives are resized copies only; originals are retained unchanged.
- Rights are recorded from the exact Commons file-page metadata returned during research. Public-domain status is not inferred merely from government hosting; the manifest retains the named creator/owner and exact file-page URL.

## Approved assets (11)

See `manifest.json` and `manifest.csv` for exact dimensions, hashes, creators, license labels, attribution, original paths, derivative paths, and public-copy paths.

- `joel-villanueva`: TESDA portrait, creator/owner recorded as TESDA, Public domain.
- `ralph-recto`: Senate portrait, creator/owner recorded as Senate of the Republic of the Philippines, Public domain.
- `richard-gomez`: Ormoc City Mayor portrait, creator/owner recorded as Ormoc City Government Facebook page, Public domain.
- `jose-teves`: 20th Congress portrait, creator/owner recorded as House of Representatives of the Philippines, Public domain.
- `rommel-marbil`: PNP portrait, creator/owner recorded as Philippine National Police, Public domain.
- `vicente-danao`: cropped PNA event portrait, creator recorded as Avito Dalan / Philippine News Agency, Public domain.
- `eumir-marcial`: PNA portrait, creator recorded as Primo Agatep for the Philippine News Agency, Public domain.
- `raymond-almazan`: exact portrait file, creator recorded as Jess M. Escaros Jr., Public domain as recorded on the exact Commons file page.
- `jm-de-guzman`: cropped licensed video still, creator recorded as Bulgar TV, CC BY 3.0.
- `luis-manzano`: cropped licensed video still, creator recorded as Bulgar TV, CC BY 3.0.
- `nathan-azarcon`: portrait photograph, creator recorded as Lendl Peralta from Baguio, Philippines, CC BY-SA 2.0.

For CC assets, required attribution and license URLs are in the manifest. For public-domain assets, the manifest records the exact-page public-domain statement and does not claim broader legal clearance beyond that source record.

## Permission needed / no approved copy staged (5)

No public copy was made for these IDs. Exact targeted Commons media-search URLs are retained as the original search source trail; no exact licensed portrait was found in the bounded search pass, and official-person/public images were not treated as reusable without permission.

- `roy-ordinario`: https://commons.wikimedia.org/w/index.php?search=Roy+Ordinario&title=Special%3AMediaSearch&type=image — no exact portrait result; permission or user-provided licensed file required.
- `errol-garchitorena`: https://commons.wikimedia.org/w/index.php?search=Errol+Garchitorena&title=Special%3AMediaSearch&type=image — no exact portrait result; permission or user-provided licensed file required.
- `vandolph-quizon`: https://commons.wikimedia.org/w/index.php?search=Vandolph+Quizon&title=Special%3AMediaSearch&type=image — no exact portrait result; unrelated entertainment results were rejected; permission or user-provided licensed file required.
- `john-riel-casimero`: https://commons.wikimedia.org/w/index.php?search=John+Riel+Casimero&title=Special%3AMediaSearch&type=image — no exact portrait result; permission or user-provided licensed file required.
- `alvin-aguilar`: https://commons.wikimedia.org/w/index.php?search=Alvin+Aguilar+Philippines&title=Special%3AMediaSearch&type=image — no exact portrait result; unrelated results were rejected; permission or user-provided licensed file required.

## Public-copy handoff

Approved WebP files were copied only to the explicitly authorized public asset directory: `src/assets/personalities/{id}.webp`. No application, model, build, style, route, environment, Git, deployment, or existing portrait files were edited. Research-only evidence and originals remain under `assets/research/personality-portraits/`.
