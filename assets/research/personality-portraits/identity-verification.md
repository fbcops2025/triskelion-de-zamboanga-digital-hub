# Approved personality portrait identity verification

**Audit date:** 2026-10-03
**Scope:** the 11 manifest records whose status is `approved`
**Method:** opened each original JPEG with Pillow; inspected the actual pixels; queried the exact Commons file page metadata (`ImageDescription`, `Artist`, `LicenseShortName`/`UsageTerms`); and compared the visible subject against an independent reference portrait retrieved from the Wikipedia `pageimages` API. The manifest itself was not treated as identity evidence.

## Second pass: independent reference comparison

The first pass conservatively flagged 9 of 11 as `unclear` because no independent comparison image had been retrieved. A second pass fetched each person's Wikipedia page image via the `pageimages` API and compared it against our file with side-by-side visual inspection.

**Five people have a genuinely independent reference** (a different file, not the same Commons upload):

| Person | Ours | Reference | Reference is a different file? | Verdict |
|---|---|---|---|---|
| Ralph G. Recto | 1228x1536 | `DOF_Secretary_Ralph_Recto_(cropped).png` 555x784 | Yes | **Confirmed same person** |
| Richard Gomez | 673x720 | `Rep._Richard_Gomez,_DPA_(20th_Congress).jpg` 288x387 | Yes | **Confirmed same person** |
| Rommel Marbil | 799x1024 | `Chief_of_the_Philippine_National_Police_Rommel_Francisco_Dayleg_Marbil.png` 2481x3178 | Yes | **Confirmed same person** |
| Joel Villanueva | 284x368 | `Senator_Joel_Villanueva_(2022)_(cropped).jpg` 671x895 | Yes | **Confirmed same person** |
| Nathan Azarcon | 489x800 | `Nathan7.JPG` 1288x1936 | Yes | **Confirmed same person** |

The remaining six (Jose Teves Jr., Eumir Marcial, Raymond Almazan, JM de Guzman, Luis Manzano) return **the same Commons file** through the Wikipedia infobox, so Wikipedia is not an independent source for them. Vicente Danao has no Wikipedia page image at all.

## Identity verdict summary

- **Independently confirmed (5):** Ralph Recto, Richard Gomez, Rommel Marbil, Joel Villanueva, Nathan Azarcon.
- **Licence verified, identity not independently corroborated (6):** Jose Teves Jr., Vicente Danao, Eumir Marcial, Raymond Almazan, JM de Guzman, Luis Manzano. Each is a single-person image whose Commons description names the correct person, but no separate authoritative portrait was available to compare against.
- **Licence mismatches:** 0 of 11. Every exact Commons page returned the same licence category recorded in the manifest.
- **Group photos:** none. Several are event photographs, but the named person is the apparent main subject in each.

## Low-resolution caution

Vicente Danao (309x380, angled event crop), Joel Villanueva (284x368), Jose Teves Jr. (288x387) and Nathan Azarcon (489x800) are modest resolution. All remain usable at the sizes the profile pages actually render, but they are not suitable for large hero placement.

## Publication recommendation

The five independently confirmed images are safe to publish under their named profiles with the existing attribution.

The six unconfirmed images are **not evidence of a wrong person**. They are images where independent facial corroboration was not obtainable in this environment. Recommended handling: keep them published only if the client accepts the Commons file description as sufficient evidence, otherwise hold them behind the initials fallback until an authoritative portrait (official government page, news portrait, or client-supplied photo) is provided for comparison.

## Source notes

Exact Commons file URLs above are the source of the extracted description, author, and licence fields. Independent references were retrieved from the Wikipedia `pageimages` API on 2026-10-03. No application, template, CSS, data, or public-copy file was modified by this audit.
