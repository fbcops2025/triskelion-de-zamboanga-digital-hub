# Subpage implementation gap analysis

Source of truth: `TGP_National_Website_Final_Master_Implementation_Prompt.md` (1198 lines)

## Verified current state

18 top-level routes ARE built and return 200:
about, history, founding-fathers, leadership, regions, councils, chapters,
notable-triskelions, service, events, news, videos, archive, documents,
sources, corrections, contribute, contact

But most are THIN STUBS. Measured word counts:
- /events/ 130, /chapters/ 108, /leadership/ 123, /documents/ 125,
  /regions/ 126, /contribute/ 128, /corrections/ 135, /safe-membership/ 144,
  /videos/ 145, /councils/ 202, /sources/ 206, /archive/ 226, /about/ 226,
  /news/ 229, /founding-fathers/ 248
Only /history/ (953), /notable-triskelions/ (553) and /service/ (459) have substance.

## MISSING deeper routes the plan requires (section 6)

```
/history/{decade}/                      MISSING
/founding-fathers/{person-slug}/        MISSING (built at WRONG path /founders/)
/regions/{region-slug}/                 MISSING
/councils/{council-slug}/history/       MISSING
/councils/{council-slug}/leadership/    MISSING
/councils/{council-slug}/chapters/      MISSING
/councils/{council-slug}/service/       MISSING
/councils/{council-slug}/events/        MISSING
/councils/{council-slug}/archive/       MISSING
/chapters/{chapter-slug}/               MISSING
/notable-triskelions/{person-slug}/     MISSING (built at WRONG path /personalities/)
/service/{project-slug}/                MISSING
/events/{event-slug}/                   MISSING
/news/{article-slug}/                   (stories exist at /stories/, not /news/)
/archive/{collection-slug}/             MISSING
/documents/{document-slug}/             MISSING
/videos/{video-slug}/                   BUILT (3)
/councils/zamboanga-city/               BUILT
```

## PATH MISMATCHES to correct

Plan section 10 mandates:
```
/founding-fathers/roy-ordinario/
/founding-fathers/vedasto-tito-venida/
/founding-fathers/rodolfo-rod-confesor/
/founding-fathers/talek-j-pablo/
```
Current build uses `/founders/{slug}/`. Must move to `/founding-fathers/{slug}/`.

Plan section 12 mandates `/notable-triskelions/`. Current profiles are at
`/personalities/{slug}/`. Index exists at /notable-triskelions/ but profiles do not.

## Navigation defect

Homepage header uses same-page anchors (#founders, #history, #museum,
#organization-map) instead of linking to the real subpages. The plan requires a
multi-page site, explicitly: "Do not make the national website one extremely long
scrolling homepage." Generated pages already have correct multi-page nav.

## Data available to build from

- src/content.mjs: 7 chapterGenealogy records (councils + chapters, incl. regions),
  7 org-map nodes, 8-item historicalTimeline, 4 digitalMuseum items,
  4 foundingFathers, service/safety/story blocks
- src/notables.mjs: 16 notable profiles
- src/editorial/content.mjs: 4 published editorial records
- Video dataset: 3 records (global library, Kasaysayan, Solano council)

## Execution order

1. Add /founding-fathers/{slug}/ and keep /founders/{slug}/ as redirect stubs
2. Add /notable-triskelions/{slug}/ profiles (16)
3. Add /history/{decade}/ decade pages from historicalTimeline
4. Add /regions/{slug}/ + /councils/{slug}/ sub-pages + /chapters/{slug}/
5. Add /service/{slug}/, /events/{slug}/, /archive/{slug}/, /documents/{slug}/
6. Deepen the thin index stubs to plan-level substance
7. Point homepage nav at real routes, keep anchors as secondary
8. Extend sitemap, tests, and run full runtime verification

## Constraints

- No fabricated content, biographies, verified status, or provenance
- No bun, no hermes verify, no npm ci, no push without approval
- Keep 56 existing sitemap routes intact; only add
