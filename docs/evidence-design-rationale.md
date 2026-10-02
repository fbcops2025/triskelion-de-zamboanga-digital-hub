# Tau Gamma Phi premium UI and evidence rationale

## Scope
This pass treats the supplied `Tau Gamma Phi Research.pdf` as a research synthesis and lead list, not as an official publication authority. No confidential initiation/password material was fetched or published.

## UX decisions
- Added a focused “Start here” journey strip for Read, Explore, Contribute, and Stay safe so the page is not only a long card wall.
- Kept the cinematic first viewport and refined the visual system toward editorial restraint: large type, high-contrast dark moments, tactile rounded controls, and responsive spacing.
- Kept archive search and Gazette filtering functional; preserved existing Firebase/admin paths.
- Added explicit approval-needed states for stories and notable profiles rather than presenting suspect biographies, impact stories, portraits, or professional claims as verified.

## Evidence and privacy decisions
- Founder, timeline, genealogy, and museum records now display research/approval language rather than unqualified verified badges.
- Public blood pledge rendering is aggregate-only and currently unavailable until an authorized owner publishes an audited public aggregate. The public page does not query private donor records; names, blood types, locations, chapters, contacts, and notes are not rendered in the public stream.
- Empty/error donor states no longer invent a count or donor record.
- Public impact cards are labeled as research-synthesis signals, not audited service totals; unsupported Red Cross, hospital, and percentage claims were removed.
- Admin chapter, project, donation, contribution, aid, and safety views preserve returned Firestore records but show an unavailable state on read failure instead of synthetic records or compliance claims.
- Donor, contribution, and safety failure messaging no longer claims a failed write succeeded; entered values are retained for retry.
- The contribution and safety forms remain private-intake attempts; their public copy distinguishes submission attempts from publication and makes no unsupported encryption, confidentiality, or officer-routing promise.
- A visible reference entry identifies the supplied synthesis as 17 pages and 36 references, contextual only and not official approval. Restricted initiation/password material is not published.

## Verification limits
- `npm lint`, `npm test`, and `npm run build` provide static checks only. They do not prove Firebase rules, backend availability, encryption, confidentiality, officer routing, medical eligibility, or public authorization.
- Browser QA covers the local page at 1440, 768, 390, and 320 CSS pixels, keyboard skip/menu paths, and axe checks at desktop/mobile. It does not submit production forms or establish a production security guarantee.

## Limits and next gate
- Official source registry, approved primary records, profile consent, chapter/council approval, and a real private intake backend still need authorization and human review.
- Local browser screenshots and interaction checks are required before release; this document is not a deployment approval.

## Leadership portal restoration
- Restored only the removed leadership portal section from the prior committed markup, retaining the current premium page shell and current Firebase handler IDs.
- Navigation and footer access point to a clearly labeled leadership portal for authorized reviewers; signed-out visitors see only the login gate, never private tables or controls.
- Replaced donor-era static admin contact text and annual-report totals with authorization/availability language. Portal counters are populated by the existing Firestore loaders rather than seeded claims.
- Added the existing editorial-desk controls required by current handlers; drafts remain private until an authorized reviewer publishes them. No new API, auth rule, or publication boundary was introduced.
- Remaining gates: Firebase authentication/authorization, Firestore rules, approved reviewer roles, real record availability, and human publication approval require controlled backend verification. Local QA does not establish those guarantees.
