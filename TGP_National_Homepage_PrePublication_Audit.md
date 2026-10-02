# Tau Gamma Phi National Homepage

## Pre-Publication Content & Verification Snapshot

Capture Date: 2026-10-02, Asia/Manila

Website URL: `https://triskelion-de-zamboanga-digital-hub.vercel.app/`

Environment: Local checked-out source and generated `dist/` build. This snapshot is source-derived. The browser automation bridge was unavailable during capture, so this is **not** a new visual or live-production verification.

Branch: `main`

Commit Hash: `b5d95bcf3f4fa008078a9463a98f3c4e95e05c9a`

Homepage Route: `/` (`index.html`)

Primary Homepage Component/File: `index.html`, with runtime population by `src/app.mjs`

Project Version: `0.1.0` (`package.json`)

Last Modified: `index.html` source timestamp: 2026-10-02 23:46:43 +08:00

Captured By: Codex source inspection

Status:

> **DO NOT PUBLISH - PENDING FACTUAL AND CONTENT VERIFICATION**

## Capture Method and Boundary

This file captures current source content without rewriting, correcting, optimizing, or publishing it. Static homepage text is in `index.html`. Runtime content is rendered by `src/app.mjs` from `src/content.mjs` and `src/notables.mjs`; founder-card replacement is mounted from `src/editorial/founders-content.mjs`. The homepage does not use a CMS at capture time. It uses a static ES-module implementation with Firebase libraries available for form/data functions.

Statuses below use only: `VERIFIED`, `PRIMARY-SOURCE CLAIM`, `SECONDARY-SOURCE CLAIM`, `NEEDS VERIFICATION`, `CONFLICTING`, and `UNSOURCED`.

“Verified” in a current code field is not adopted as an audit conclusion unless an independently reviewable source is attached in the current implementation.

---

# Metadata and Structured Data

## Current metadata

| Item | Exact current value | Source | Audit status / note |
|---|---|---|---|
| HTML title | `Tau Gamma Phi \| Triskelions Grand Fraternity Philippines` | `index.html:11` | NEEDS VERIFICATION. Branding/title authorization is not attached. |
| Meta description | `Explore the history, councils, chapters, community service, notable Triskelions, events, and historical archives of Tau Gamma Phi in the Philippines.` | `index.html:6` | NEEDS VERIFICATION. Broad national-scope statement. |
| Canonical URL | `https://triskelion-de-zamboanga-digital-hub.vercel.app/` | `index.html:9` | VERIFIED as current source configuration only; production/domain authorization is not established by this file. |
| Open Graph title | `Tau Gamma Phi \| Triskelions Grand Fraternity Philippines` | `index.html:7` | NEEDS VERIFICATION. |
| Open Graph description | Same as meta description | `index.html:8` | NEEDS VERIFICATION. |
| Open Graph URL | Canonical URL above | `index.html:10` | VERIFIED as current source configuration only. |
| JSON-LD WebSite name | `Tau Gamma Phi \| Triskelions Grand Fraternity Philippines` | `index.html:12` | NEEDS VERIFICATION. |
| JSON-LD WebPage name | `Tau Gamma Phi \| Triskelions Grand Fraternity Philippines` | `index.html:12` | NEEDS VERIFICATION. |
| JSON-LD WebPage description | Same as meta description | `index.html:12` | NEEDS VERIFICATION. |

### Structured-data audit notes

- The homepage contains one JSON-LD block with `WebSite` and `WebPage` only.
- It does not declare an `Organization`, `Person`, `NewsArticle`, or factual event schema on the homepage.
- Canonical, Open Graph, and JSON-LD values must remain aligned if this site moves from the current Vercel URL to an approved national domain.

---

# Homepage Structure

The following is in current DOM order. “Exact body copy” reproduces text emitted by the static HTML or current render functions. Dynamic data is reproduced in dedicated data tables later in this file.

## Section: Header and Primary Navigation

### Location

Component/file: `index.html:31-73`, behavior in `src/header-navigation.mjs` and `src/app.mjs:435-464`

### Current Heading

`TAU GAMMA PHI`

### Current Subheading

`Triskelions’ Grand Fraternity · Philippines`

### Current Body Copy

Navigation groups and exact labels:

- Discover: `What Keeps Us Together`, `Service, Documented`, `The Work Continues`, `News and Updates`, `Video Sources`
- Our Story: `Where It Began`, `How the Work Grew`, `Chapter Genealogy`, `Mga Record at Keepsake`
- Serve Together: `Chapter Network`, `Chapter-Led Service`, `Safe Membership`, `Share Your Story`
- Direct links: `Personalities`, `References`

### CTA

| Text | Destination | Internal/external | Status |
|---|---|---|---|
| Personalities | `/personalities/` | Internal | Working/unknown pending served-route check |
| References | `#references` | Internal | Working/unknown pending rendered check |

### Images / Visuals

| Asset | Path | Alt | Source / ownership currently stated |
|---|---|---|---|
| Seal | `src/assets/brand/seal-512.png` | `Tau Gamma Phi official seal` | User-supplied brand asset in current project; independent ownership/official authorization is not attached in homepage code. |

### Data Displayed

The header calls the seal “official” and the site “Triskelions’ Grand Fraternity · Philippines.”

### Source Currently Attached

None in the header.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- Header navigation uses older labels such as `Service, Documented` and `How the Work Grew`, while the body copy has newer national-story labels. Review editorial consistency.
- “Official seal” is a claim in alt text; the project evidence is user-supplied authorization, not an independently attached public source.

## Section: Hero

### Location

Component/file: `index.html:77-101`; SEO/source configuration also in `src/content.mjs:1-6` and `src/editorial/content.mjs:1-8`

### Current Heading

`Tau Gamma Phi` / `Triskelions’ Grand` / `Fraternity`

### Current Subheading

Eyebrow: `Tau Gamma Phi`

Badge: `Triskelions’ Grand Fraternity`

### Current Body Copy

`A brotherhood shaped by generations, strengthened by service, and carried forward through communities across the Philippines and beyond.`

`Explore the history, people, councils, chapters, and public service that continue to shape the story of Tau Gamma Phi.`

`Historical records are presented with care. Sources, dates, and affiliations are reviewed before they are treated as verified public history.`

### CTA

| Button text | Destination | Internal/external | Status |
|---|---|---|---|
| `Explore Our History ↓` | `#history` | Internal | Working/unknown pending rendered check |
| `Find a Council` | `#organization-map` | Internal | Working/unknown pending rendered check |

### Images / Visuals

| Asset filename | Asset path | Alt text | Caption | Source / owner/licensing information if known |
|---|---|---|---|---|
| `tau-gamma-editorial-3840.webp` | `src/assets/editorial/tau-gamma-editorial-3840.webp` | Supplied through responsive `<source>` only | `A shared history` / `Every generation adds its own people, milestones, and stories.` / `Original editorial illustration · not documentary evidence` | Current caption says original editorial illustration; no license record is present in hero markup. |
| `tau-gamma-editorial-native.webp` | `src/assets/editorial/tau-gamma-editorial-native.webp` | `Abstract editorial sculpture of interlocking gold, ivory, and charcoal ribbons` | Same as above | Not documentary evidence per current caption. |

### Data Displayed

Assertions: a multi-generation brotherhood; service; communities across the Philippines and beyond; historical records are reviewed before verified-public-history treatment.

### Source Currently Attached

No per-claim source URL or source ID in the hero.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- The hero makes national and overseas scope assertions without an attached source.
- The review-process assertion should be checked against the actual editorial/governance process before publication.
- The hero artwork is properly labelled as non-documentary, but ownership/license evidence should be kept with the asset record.

## Section: Journey Strip

### Location

Component/file: `index.html:103-109`

### Current Heading

`One brotherhood, many communities`

### Current Subheading

`Begin the story`

### Current Body Copy

`From national history to the local records that keep it alive.`

### CTA

| Text | Destination | Internal/external | Status |
|---|---|---|---|
| `History` / `Where the journey began ↗` | `#history` | Internal | Unknown |
| `Communities` / `Explore councils and chapters ↗` | `#organization-map` | Internal | Unknown |
| `Service` / `Discover documented community work ↗` | `#impact` | Internal | Unknown |
| `Archive` / `Enter the digital collection ↗` | `#museum` | Internal | Unknown |

### Verification Status

NEEDS VERIFICATION

### Audit Notes

The “national history” and “local records” relationship is broad editorial framing, not source-cited historical evidence.

## Section: A Story Larger Than One Chapter

### Location

Component/file: static framing `index.html:112-151`; pillar cards `src/app.mjs:37-50` from `src/content.mjs` (`pillars`)

### Current Heading

`A story larger than one chapter`

### Current Subheading

`A brotherhood built across generations`

### Current Body Copy

`From universities and neighborhoods to cities and generations, Triskelions carried identity, traditions, relationships, and a commitment to service into new places.`

`These are concise editorial paraphrases of public tenets/code leads cited in the supplied research. They are not presented as verified official quotations. The public mirror and secondary copy remain awaiting authorized wording approval.`

`History deserves careful stewardship`

`Sources support the story. They do not have to interrupt it.`

Verification-stepper labels: `Shared / Story received`; `Source / Details added`; `Review / Someone checks it`; `Check / Details compared`; `Confirmed / Council review`; `Approved / Ready to share`; `Shared / Visible to everyone`.

### Dynamic Body Copy: Six Pillars

| Pillar | Eyebrow | Exact current description | Exact current quote | Current source | Verification status |
|---|---|---|---|---|---|
| Membership and Solidarity | Mutual commitment | `Pagkilala sa mga taong nagbibigay ng payo, nagbubukas ng pinto, tumutulong sa pamilya, at hindi nang-iiwan kapag mahirap ang sitwasyon.` | `Hindi lamang membership. Ito ay aktuwal na pagkilos.` | None | UNSOURCED |
| Cause | Collective purpose | `Pasasalamat sa mga gawaing tumutulong sa kapitbahay: medical missions, blood donation, disaster response, education, at community care.` | `Kapag sama-sama, mas may lakas ang bawat chapter.` | None | UNSOURCED |
| Service | Measurable impact | `Maayos na pagtatala ng oras na ibinigay, dugong na-donate, pamilyang natulungan, at project na natapos. Isang kuwento at isang service record sa bawat pagkakataon.` | `Mas mahalaga ang totoong serbisyo kaysa malaking salita.` | None | UNSOURCED |
| Legacy | Generational continuity | `Pag-iingat sa mga pangalan, litrato, charter, sulat, at alaala para makilala ng younger members kung sino ang nagbuo ng chapter na kinabibilangan nila.` | `Ang ginawa ngayon ay magiging gabay ng susunod.` | None | UNSOURCED |
| Evidence | Historical integrity | `Pagiging maingat sa pangalan at kuwento ng bawat tao. Chine-check ang kaya, kasama ang source sa record, at sinasabi kung may kailangan pang kumpirmahin.` | `Tapat sa alam, tapat din sa hindi pa sigurado.` | None | UNSOURCED |
| Accountability | Safety and ethics | `Pasasalamat sa bawat member na tumutulong gawing mas ligtas ang fraternity. Walang initiation, tradition, o posisyon na dapat humingi ng pananakit, takot, o kahihiyan.` | `Hindi kailangan ang pananakit para patunayan ang membership.` | Republic Act No. 11053 is linked elsewhere, not at this card | NEEDS VERIFICATION |

### Source Currently Attached

`src-tenets-mirror`, `src-code-secondary`, `src-research-pdf`, and `src-ra-11053` are attached to the separate principles grid. Their exact current source records appear in the Evidence Register below.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- The source file calls the items “editorial paraphrases,” not official quotations.
- The current code’s verification workflow names an “Historical and Impact Council” in data, but no public authority/source is attached to establish that body.

## Section: What Communities Remember

### Location

Component/file: static framing `index.html:156-203`; metric rendering `src/app.mjs:54-81`; data `src/content.mjs` (`impactMetrics`, `evidenceSources`)

### Current Heading

`What communities remember`

### Current Subheading

`Service beyond brotherhood`

### Current Body Copy

`Across different councils and chapters, publicly documented initiatives include blood donation activities, feeding programs, environmental projects, disaster response, community assistance, youth activities, and other civic efforts.`

`Service, preserved with care`

`This archive keeps service from being remembered only in passing. It preserves what can be responsibly documented, while totals, dates, and outcomes remain clearly marked when source review is still incomplete.`

`Service stories across the brotherhood`

Service-area tags: `Health and medical missions`; `National blood donation drives`; `Disaster relief logistics`; `Youth education and scholarships`; `Environmental reforestation`; `Member assistance and bereavement`; `Public safety and rescue`; `Livelihood training`; `Food security`; `Professional networking`; `Community infrastructure`; `Senior citizen support`; `Peacebuilding`; `Sports and culture`.

### Data Displayed

| Metric | Exact value / descriptor | Current attached source IDs | Verification status | Audit note |
|---|---|---|---|---|
| Founding date | `1968` / `October 4 · UP Diliman` | `src-tenets-mirror`, `src-research-pdf` | SECONDARY-SOURCE CLAIM | No public primary source URL attached. |
| Founders named | `04` / `PDF-reported canonical finding` | `src-code-secondary`, `src-research-pdf` | SECONDARY-SOURCE CLAIM | Current text acknowledges PDF reporting. |
| Philosophical themes | `03` / `Fortis · Voluntas · Fraternitas` | `src-tenets-mirror`, `src-code-secondary`, `src-research-pdf` | SECONDARY-SOURCE CLAIM | Wording/authority not confirmed in code. |
| Sectoral wings | `04` / `1969 · 1975 · 1976 · 1979` | `src-research-pdf` | NEEDS VERIFICATION | No names or public source displayed. |
| Governance topics | `03` / `Tenets · Code · anti-hazing law` | `src-code-secondary`, `src-ra-11053`, `src-research-pdf` | NEEDS VERIFICATION | RA 11053 is an official legal source; it does not establish the fraternity tenets/code. |
| References listed | `36` / `Derived bibliography count` | `src-research-pdf` | SECONDARY-SOURCE CLAIM | Current reference note says this is a bibliography count, not 36 independently verified authorities. |

### CTA

`Read the record and source context ↗` → `#references` (internal; unknown pending rendered check).

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- Current visual framing says “Documented so far,” but several service-area tags are unquantified categories rather than documented totals.
- The current evidence detail shows source records per metric; it does not make the source records public when `actualUrl` is `null`.

## Section: Where the Journey Began

### Location

Component/file: static frame `index.html:205-217`; current founder card mounting `src/editorial/founders-content.mjs`; legacy/data fallback `src/app.mjs:105-120` and `src/content.mjs` (`foundingFathers`)

### Current Heading

`Where the journey began`

### Current Subheading

`Our story · October 4, 1968 · UP Diliman`

### Current Body Copy

`Every generation inherits a story. The national archive gathers documented founding figures, early chapters, and the milestones that shaped the fraternity through succeeding decades.`

### Data Displayed

Four current data records: Roy A. Ordinario; Vedasto “Tito” Venida; Rodolfo “Rod” Confesor; Talek J. Pablo. Each current `src/content.mjs` record labels the status `Canonical Record Verified`, identifies UP Diliman, and identifies year `1968`.

### Source Currently Attached

The homepage fallback data has no per-founder public source URL. Founder editorial assets and source links are controlled by `src/editorial/founders-content.mjs`; review that file and its source metadata before treating a profile as verified.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- Founder biographies contain substantive biographical/historical claims and should be independently audited against primary records.
- The static heading states a date and location but does not link to a source at the heading level.

## Section: A Living National Timeline

### Location

Component/file: `index.html:219-231`; renderer `src/app.mjs:123-136`; data `src/content.mjs` (`historicalTimeline`)

### Current Heading

`A living national timeline`

### Current Subheading

`History by generation`

### Current Body Copy

`The larger story unfolds by decade. Each period can hold its own people, places, records, and milestones instead of reducing history to a wall of dates.`

### Data Displayed

The eight exact timeline claims are in **Homepage Historical Claims** below. Current renderer text for every item is: `Historical lead for this period. Public detail remains pending approved primary records and council review.` followed by `Source trail: [current verification field] · approval needed`.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

The data itself contains labels such as `verified`, `canonical`, and named source types. The audit does not adopt those labels because the claimed source documents are not attached as independently reviewable homepage sources.

## Section: Every Council Has Its Own Story

### Location

Component/file: `index.html:233-252`; renderer `src/app.mjs:142-157`; data `src/content.mjs` (`chapterGenealogy`)

### Current Heading

`Every council has its own story`

### Current Subheading

`From national history to local stories`

### Current Body Copy

`Chapters and councils add their own leadership, community work, photographs, and historical records to the wider history of Tau Gamma Phi.`

`One brotherhood, many communities`

`From the 1968 UP Diliman Mother Chapter to regional collegiate, community, and overseas bodies, the network is a way to discover the local stories within a shared national history.`

### Data Displayed

Current genealogy records: Alpha (Mother) Chapter / UP Diliman / Quezon City / October 4, 1968; Metro Manila Regional Council / NCR / circa 1971; Central Luzon Regional Council / Region III / circa 1975; Visayas Regional Council / Cebu and Western/Eastern Visayas / circa 1980; Mindanao Regional Council / Davao, Cagayan de Oro and General Santos / circa 1982; Triskelion Canada National Council; and Triskelion USA National Council.

### Source Currently Attached

None per genealogy record in the homepage data.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

Every location, date, parent relationship, chapter/council name, and verification label in this data requires source review. The current code presents its own labels such as `Council Charter Verified` and `International Registry Verified` without URLs/documents.

## Section: Find a Council or Chapter

### Location

Component/file: `index.html:254-273`; interactive D3 renderer `src/app.mjs:159-184`; data `src/content.mjs` (`organizationMap`)

### Current Heading

`Find a council or chapter`

### Current Subheading

`Explore the network`

### Current Body Copy

`Discover documented councils and chapters across Luzon, Visayas, Mindanao, Metro Manila, and overseas communities. Each record is an invitation to learn its local history.`

Legend: `National council`; `Regional council`; `Local chapter`.

Current runtime status: `[N] platform nodes · [N] reporting connections · Drag a node to explore.` (N is calculated from current data.)

### Data Displayed

Current map nodes: National Council of the Philippines; National Capital Region Council; Luzon Regional Council; Visayas Regional Council; Mindanao Regional Council; UP Diliman Alpha Chapter; Metro Manila Community Chapters; Central Luzon Collegiate Chapters; Cebu Collegiate Chapters; Western Visayas Community Chapters; Davao Community Chapters; Zamboanga Community Chapters.

Current data explicitly labels most regional nodes `Illustrative topology`; several local nodes `Pending council verification`; and Zamboanga `Research handoff only`.

### Source Currently Attached

None per map node.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- This is an interactive topology, not a confirmed public directory.
- The heading calls records “documented,” while current data labels include illustrative/pending/research-only states. Review for possible ambiguity.

## Section: The People Behind the Record

### Location

Component/file: `index.html:275-287`; renderer `src/app.mjs:188-193`; data `src/content.mjs` (`brotherhoodStories`)

### Current Heading

`The people behind the record`

### Current Subheading

`Stories worth preserving`

### Current Body Copy

`History often survives in photographs, anniversary publications, chapter files, newspapers, certificates, memorabilia, and the memories of people who experienced it.`

Current rendered empty state: `Public records pending`; `Stories will appear after source review.`; `This is a historical lead, not publication authority. Submit a story with a source and consent. No biography, beneficiary account, or impact story is treated as verified by default.`

### CTA

`Submit a sourced story` → `#contribute` (internal; unknown pending rendered check).

### Data Displayed

Although not rendered as story cards, the source data contains three hidden/indexed stories: `Members Who Answered: National Disaster Relief and Operation Damayan`; `The Scholar’s Hand: An Education Finished Through Chapter Solidarity`; `Emergency Blood Relay: When Minutes Counted`. These are used by archive search and must be audited as hidden/conditional homepage content.

### Source Currently Attached

The hidden records list internal-sounding verifier labels only: `National Disaster Triage Directorate`; `Collegiate Alumni Ledger`; `Hospital Transfusion Log Cross-Match`. No URLs/documents are attached.

### Verification Status

UNSOURCED

### Audit Notes

The section visually avoids publishing story cards, but search indexing makes these records discoverable in the homepage client-side search.

## Section: News, Service, and New Discoveries

### Location

Component/file: `index.html:289-318`; renderer/filter `src/app.mjs:196-260`; data `src/content.mjs` (`articles`)

### Current Heading

`News, service, and new discoveries`

### Current Subheading

`Latest from the brotherhood`

### Current Body Copy

`Verified public updates, community activities, council news, and newly reviewed photographs, documents, records, or corrections from the archive.`

Search labels: `Search related articles`; `Clear`; filters `All stories`, `News`, `Service`, `History`, `Chapters and councils`.

### Data Displayed

One current article record exists but has `status: draft` and `approvalStatus: pending`, so it is not rendered in the public article grid:

`Salamat sa mga Taong Patuloy na Naglilingkod`

Excerpt: `Bawat litrato, charter, at memory ay pagkakataong magpasalamat sa brothers and sisters na patuloy na tumutulong at naglilingkod.`

### Source Currently Attached

None; `sourceUrl: null`.

### Verification Status

UNSOURCED

### Audit Notes

Current renderer only displays `status === published`. The static section promise “Verified public updates” should be evaluated against the actual available published feed, which is currently empty in source data.

## Section: Featured Video Sources

### Location

Component/file: `index.html:320-367`

### Current Heading

`Featured Video Sources`

### Current Subheading

`Watch from the source`

### Current Body Copy

`A small, accountable viewing guide. We link to source-managed videos and label their status instead of reproducing footage without the publisher’s approval.`

`Why links instead of autoplay? Source owners retain control of their work. This protects viewers, creators, and the record while we collect clear council-approved service videos for future publication.`

`Have a council-approved service video?`

`Share the source link, activity date, place, partner, participant release status, and a short description. The editorial team can review it before it is shown here.`

### CTA and External Links

| Text | Destination | Current card description | Current status text | Status |
|---|---|---|---|---|
| `Open the video library` | `https://www.taugammaphi.info/tgpg-videos` | `Tau Gamma Phi Global Video Library` | `External source · embeds disabled by publisher` | NEEDS VERIFICATION |
| `Watch on YouTube` | `https://www.youtube.com/watch?v=xqXEvTS_MZY` | `Ang Nakamamanghang Kasaysayan ng Tau Gamma Phi` | `YouTube · council review recommended` | SECONDARY-SOURCE CLAIM |
| `Explore the channel` | `https://www.youtube.com/taugammaphismtc` | `Solano Municipal Triskelion Council` | `YouTube channel · individual videos need review` | NEEDS VERIFICATION |
| `Propose a Video Source` | `#contribute` | Internal intake route | Not applicable | Unknown |

### Audit Notes

- External destinations were captured from source only, not opened or authenticated in this audit.
- The first card’s “publisher’s own media library” wording needs ownership verification.

## Section: Stories Worth Preserving (Digital Archive)

### Location

Component/file: `index.html:369-391`; renderer `src/app.mjs:261-298`; data `src/content.mjs` (`digitalMuseum`)

### Current Heading

`Stories worth preserving`

### Current Subheading

`The Tau Gamma Phi Digital Archive`

### Current Body Copy

`Historical photographs, documents and publications, anniversary records, chapter histories, news coverage, videos, memorabilia, and oral histories belong here when they can be responsibly reviewed.`

Era filters: `All eras`; `Founding era`; `1980s`; `2000s`; `Modern`.

For each current museum item, the renderer adds: `Contextual catalog lead from cited sources. Description and source details remain pending rights and review.` and `Contextual lead · approval needed`.

### Data Displayed

| Current record | Date / creator / provenance as currently displayed | Source attached | Verification status |
|---|---|---|---|
| `1968 Founding Charter and Tenets Draft (UP Diliman Genesis)` | October 4, 1968; Founding Fathers (Roy Ordinario, Tito Venida, Rod Confesor, Talek Pablo); `National Archive Repository · Digitized Copy` | None | UNSOURCED |
| `Official Tau Gamma Phi Seal and Heraldic Regalia (Gold and Black)` | Circa 1968; Founding Fathers & Pioneer Batch; `National Historical Registry Archive` | None | UNSOURCED |
| `National Blood Drive (Dugong Alay) Partner Citation` | September 2012; Philippine Red Cross & National Health Directorate; `National Red Cross Health Partnership` | None | UNSOURCED |
| `RA 11053 Anti-Hazing Compliance Resolution` | July 2018; National Executive & Legal Directorate; `National Legal Archive` | Official Gazette law is linked elsewhere, but not this alleged resolution | NEEDS VERIFICATION |

### Audit Notes

The collection is currently described as leads requiring approval, but its data includes strong claims such as `Verified Original Document`, `Canonical Seal Authenticated`, and `Third-Party Verified`. No document assets/URLs are attached to validate those labels.

## Section: Notable Triskelions

### Location

Component/file: `index.html:393-409`; renderer `src/app.mjs:299-379`; source `src/notables.mjs`; portraits mapped in `src/portrait-map.mjs`

### Current Heading

`Notable Triskelions`

### Current Subheading

`People who carried the brotherhood forward`

### Current Body Copy

`Explore publicly documented Triskelions whose work reached sports, government and public service, business, education, entertainment, community leadership, and other fields. Membership and chapter affiliations are shown only with supporting evidence.`

Collection intro: `[count] records in review`; `Professional achievements and association evidence are intentionally separated. Select a profile to see what is linked, what remains contextual, and what needs an approved source.`

### CTA

`Explore notable Triskelions →` → `/personalities/` (internal; unknown pending served-route check).

### Data Displayed

See **People Referenced on Homepage** below. The initial visible detail panel is the first record in `src/notables.mjs` (Roy Ordinario); filters can expose all current profiles.

### Source Currently Attached

Some profiles link a professional source and/or an association source. Most only state `Research context · source link pending`.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

The section title itself frames profiles as Triskelions. The implementation’s own text correctly separates professional evidence from association evidence, but that distinction must remain visible in review.

## Section: Chapter-Led Blood and Community Service

### Location

Component/file: `index.html:411-460`

### Current Heading

`Chapter-Led Blood and Community Service`

### Current Subheading

`Humanitarian service · Dugong Alay, Dugtong Buhay`

### Current Body Copy

`Blood drives and other direct support are organized and accounted for by the responsible chapter or council, not by this national archive.`

`Every service effort has a responsible local organizer`

`This website documents sourced history and service records. It does not collect blood pledges, donations, money, or payment details. For a current blood drive or community-support request, contact the responsible chapter or council through its verified public channel.`

Displayed labels: `Unavailable / Public audited aggregate`; `8 / Blood types are set locally`; `Unstated / Publicly evidenced purpose`; `Where to ask`; `No national intake is available.`

### Source Currently Attached

No chapter/council contacts or service-event sources are attached in this section.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- The claim that eight blood types are set locally should be evaluated for relevance and accuracy.
- Current source explicitly avoids a national intake and avoids publishing unverified contact information.

## Section: Safe Membership and Accountability

### Location

Component/file: `index.html:462-494`

### Current Heading

`Safe Membership and Accountability`

### Current Subheading

`Republic Act No. 11053 compliance`

### Current Body Copy

`Sa fraternity at sa wider member community, walang puwang ang hazing. Dapat malinaw ang safety, dignity, at respeto sa bawat isa.`

`Membership should never require abuse as proof of belonging.`

`Under the Anti-Hazing Act of 2018 (RA 11053), all forms of hazing in school-based and community-based organizations are strictly prohibited. The Triskelion Legacy & Impact Platform enshrines active accountability:`

Current list: `Zero tolerance`; `Safe activity standards`; `Member rights`; `Local responsibility`.

Additional copy: `This page keeps the anti-hazing and safe-membership standard for education. It does not collect complaints, incident details, safety reports, or personal contact information.`

### Source Currently Attached

External footer source: `https://www.officialgazette.gov.ph/2018/06/29/republic-act-no-11053/`

### Verification Status

PRIMARY-SOURCE CLAIM for the existence of Republic Act No. 11053; NEEDS VERIFICATION for claims about specific platform/fraternity policy and compliance.

### Audit Notes

`RA 11053 compliance` in the badge may imply compliance rather than legal context. Confirm approved wording.

## Section: Search the National Archive

### Location

Component/file: `index.html:496-514`; client index/search `src/app.mjs:383-434`

### Current Heading

`Search the national archive`

### Current Subheading

`Explore the record`

### Current Body Copy

`Search for a chapter, council, pioneer, service project, city, year, photograph, document, or story from the wider Triskelion family.`

Placeholder: `Try “UP Diliman”, “Roy Ordinario”, “Blood Donation”, “1968”, or “Relief”`

Initial status: `Archive index ready: [count] cited records currently indexed.`

### Data Displayed

Search indexes timeline records, chapter genealogy, founders, digital-museum records, hidden brotherhood stories, and notable profiles. It returns up to eight matching records, marked `Indexed lead · [category]`.

### Source Currently Attached

Search results inherit the data object’s stated evidence only; they do not expose a dedicated source link per result.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

The initial status calls the index “cited records,” although several indexed data records have no public citation URL.

## Section: Help Preserve the History

### Location

Component/file: `index.html:516-593`; form processing `src/app.mjs:495-567`

### Current Heading

`Some of the most important records may still be at home`

### Current Subheading

`Help preserve the history`

### Current Body Copy

`Former officers, members, chapters, councils, families, and researchers can contribute materials for historical review. A submission is reviewed before anything is published.`

`Every record can add to the larger story`

`An old folder, photo album, newspaper clipping, chapter file, certificate, or personal memory may hold a piece of history that deserves to be preserved. If a public record needs correction, share the source so it can be reviewed with care.`

Submission standards: `Provide the original source if known.`; `Include approximate year, chapter, and city.`; `Each submission receives a tracking ID and is routed for historian review.`; `Corrections preserve prior versions in the audit log for historical transparency.`

Form fields: name/identity; optional email; contribution type; chapter/council/city; estimated year; record title; detailed description; source/provenance.

### CTA

`Submit for historian review` → client-side Firebase-linked contribution handler. Do not submit during this capture.

### Source Currently Attached

No public source. The data flow must be checked in the Firebase configuration and security rules before publication.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- The claims about tracking IDs, historian review, and audit logs are operational commitments. Confirm the current backend implements all three before publication.
- This form may collect personal information; privacy notice, retention, and consent review are required before activation.

## Section: Sources and Historical Context

### Location

Component/file: `index.html:595-629`

### Current Heading

`Sources and historical context`

### Current Subheading

`Research beneath the story`

### Current Body Copy

`Research tells us what is true. Public copy explains why it matters. The archive shows where the information came from.`

`How “References listed · 36” was derived: count of the 36-item works-cited list reproduced in the supplied research PDF. It is a bibliography count, not 36 independently verified authorities. Restricted ritual, password, pledge, and sensitive material were excluded from public links; unrelated bibliography entries are not attached to individual claims. Tenets and Code of Conduct wording still requires authorized review.`

### CTA / Links

| Text | Destination | Status |
|---|---|---|
| Facebook discovery route | `https://www.facebook.com/public/Triskelion-de-Zamboanga` | SECONDARY-SOURCE CLAIM / external destination untested |
| Instagram discovery route | `https://www.instagram.com/explore/search/keyword/?q=triskelion%20zamboanga` | SECONDARY-SOURCE CLAIM / external destination untested |
| Read the safety standard | `#safety` | Internal / unknown |
| Read the public research context | `/references/research-context/` | Internal / unknown |

### Verification Status

NEEDS VERIFICATION

### Audit Notes

This is the clearest current disclosure that the reference count is not an authority count. It should be preserved unless an approved replacement is supplied.

## Section: Footer

### Location

Component/file: `index.html:632-671`

### Current Heading

`TAU GAMMA PHI`

### Current Subheading

`Triskelions’ Grand Fraternity · Philippines`

### Current Body Copy

`The story continues. Every chapter, council, generation, community project, photograph, document, and memory adds another piece to the larger history of Tau Gamma Phi.`

Current local/council context: `Limbaga Road Chapter, Pasonanca · Triskelion de Zamboanga Council, Zamboanga City`

Current disclaimer: `This archive is not a national endorsement or official approval.`

### Images / Visuals

| Asset | Path | Alt text | Caption | Verification status |
|---|---|---|---|---|
| Seal | `src/assets/brand/seal-512.png` | `Tau Gamma Phi official seal` | None | NEEDS VERIFICATION |
| Crest | `src/assets/branding/tau-gamma-phi-limbaga-road-chapter-crest.webp` | `Tau Gamma Phi Limbaga Road Chapter crest` | `Limbaga Road Chapter` | NEEDS VERIFICATION |
| Crest | `src/assets/branding/zamboanga-city-triskelion-council-crest.webp` | `Zamboanga City Triskelion Council crest` | `Zamboanga City Council` | NEEDS VERIFICATION |

### CTA / Links

`News and updates` → `#articles`; `National history` → `#history`; `Community service` → `#impact`; `Public references` → `#references`; `Share a record` → `#contribute`; `Zamboanga City Council on Facebook ↗` → `https://www.facebook.com/TGPZCC`; `Back to top` → `#home`.

### Verification Status

NEEDS VERIFICATION

### Audit Notes

- Footer makes a local commissioning/context claim while the rest of the page uses national framing. Keep this distinction clear.
- The final disclaimer says the archive is not a national endorsement or official approval; this conflicts with any reading of “official” in brand alt text or national-scope SEO as formal authorization.

---

# Homepage Historical Claims

| Claim ID | Exact Claim | Homepage Section | Date/Person/Place | Current Source | Verification Status | Notes |
|---|---|---|---|---|---|---|
| HC-001 | `The Triskelions’ Grand Fraternity (Tau Gamma Phi) is officially established at the University of the Philippines Diliman by Founding Fathers Roy Ordinario, Vedasto Venida, Rodolfo Confesor, and Talek Pablo.` | Timeline | October 4, 1968; UP Diliman; four named people | Data field says `Primary charter & university historical registry`; no URL/document attached | NEEDS VERIFICATION | Current code calls it canonical; audit source is not attached. |
| HC-002 | `Students at the University of the Philippines Diliman conceptualized an alternative to traditional elitist campus fraternities...` | Timeline | Pre-1968; UP Diliman | Data field says `Corroborated by UP founding documents & oral accounts`; no attachment | NEEDS VERIFICATION | Historical interpretation and source trail need review. |
| HC-003 | `Pioneer chapters emerge across collegiate centers throughout Metro Manila and Luzon (UST, FEU, UE, Adamson, MLQU, UP Los Baños)...` | Timeline | 1970–1979; Metro Manila and Luzon | Data field says `Chapter historical dossiers & pioneer rosters`; no attachment | NEEDS VERIFICATION | Includes named institutions and expansion claim. |
| HC-004 | `Triskelions establish regional councils across the Visayas and Mindanao... founding the Triskelion Youth Movement (TYM)...` | Timeline | 1980–1989; Visayas and Mindanao | Data field says `Regional council archives & historical photo documentation`; no attachment | NEEDS VERIFICATION | Council, youth-movement, and empowerment claims require sources. |
| HC-005 | `Pioneered barangay and municipal community chapters alongside the Triskelion Alumni Organization (TRILEG)...` | Timeline | 1990–1999 | Data field says `National resolutions & contemporary press records`; no attachment | NEEDS VERIFICATION | Includes organization name and service-expansion claims. |
| HC-006 | `Filipino Triskelions in North America, the Middle East, Europe, and the Asia-Pacific establish international councils...` | Timeline | 2000–2009; international | Data field says `International registry charters & consulate records`; no attachment | NEEDS VERIFICATION | Overseas expansion and genealogical-linkage claims require record review. |
| HC-007 | `Proactive national organizational reform aligning fraternity policies with Republic Act No. 11053...` | Timeline | 2010–2019 | Data field says `National congress resolutions & statutory compliance covenants`; no attachment | NEEDS VERIFICATION | RA 11053 is primary law; claimed organization reform/compliance is not evidenced here. |
| HC-008 | `Deployment of the National Triskelion Legacy & Impact Platform to permanently document history, blood donation registries, auditable service projects, and institutional memory.` | Timeline | 2020–Present | Data field says `Live digital platform records & audit logs`; no attachment | NEEDS VERIFICATION | Current site is a platform; permanent/auditable/registry claims need operational proof. |
| HC-009 | `1968` / `October 4 · UP Diliman` | Impact metric / Hero context | 1968; UP Diliman | `src-tenets-mirror`, supplied research PDF | SECONDARY-SOURCE CLAIM | No attached primary public source. |
| HC-010 | `04` founders named | Impact metric / founders | Roy Ordinario, Vedasto Venida, Rodolfo Confesor, Talek Pablo | supplied research PDF and secondary document host | SECONDARY-SOURCE CLAIM | Names and relationship must be independently checked. |
| HC-011 | `Fortis · Voluntas · Fraternitas` | Impact metric/principles | Philosophical themes | public mirror, secondary host, research PDF | SECONDARY-SOURCE CLAIM | Exact official wording/authority is explicitly pending in source. |
| HC-012 | Alpha (Mother) Chapter at UP Diliman | Genealogy/map | October 4, 1968; Quezon City | No per-record source | NEEDS VERIFICATION | Includes mother-chapter and genealogy claim. |
| HC-013 | National/Regional/International council names and dates in genealogy | Genealogy/map | NCR, Central Luzon, Visayas, Mindanao, Canada, USA | No per-record source | NEEDS VERIFICATION | Current “verified” labels are not source attachments. |
| HC-014 | `1968 Founding Charter and Tenets Draft (UP Diliman Genesis)` exists as described | Digital archive | October 4, 1968 | No asset/document URL | UNSOURCED | Current render labels it a contextual lead awaiting approval. |
| HC-015 | `National Blood Drive (Dugong Alay) Partner Citation` | Digital archive | September 2012; Philippine Red Cross | No certificate/source URL | UNSOURCED | Requires direct partner/certificate evidence. |
| HC-016 | `RA 11053 Anti-Hazing Compliance Resolution` | Digital archive | July 2018 | Official Gazette links the law, not the asserted fraternity resolution | NEEDS VERIFICATION | Do not conflate the law with an organization resolution. |

---

# People Referenced on Homepage

| Person | Homepage Description | Claimed TGP Relationship | Council/Chapter | Membership Evidence | Independent Source | Verification Status |
|---|---|---|---|---|---|---|
| Roy A. Ordinario / Roy Ordinario | Founder data says he co-founded at UP Diliman; notables says originating generation | Founding Father / historical significance | UP Diliman | Research context in notables; no profile-level public membership link in this snapshot | None attached in notables data | NEEDS VERIFICATION |
| Vedasto “Tito” Venida | Key ideological architect | Founding Father | UP Diliman | No public membership source in homepage data | None attached | NEEDS VERIFICATION |
| Rodolfo “Rod” Confesor | Founding leader | Founding Father | UP Diliman | No public membership source in homepage data | None attached | NEEDS VERIFICATION |
| Talek J. Pablo | Founder and cultural-foundation description | Founding Father | UP Diliman | No public membership source in homepage data | None attached | NEEDS VERIFICATION |
| Errol Garchitorena Jr. | 2025–2027 National Premier term and public-safety career | National fraternity leadership | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Joel Villanueva | Public career in House, TESDA, Senate | Not stated beyond association context | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Ralph G. Recto | Public-service career | Not stated beyond association context | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Richard Frank Gomez | Entertainment, local government, Congress, shooting | Not stated beyond association context | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Jose “Bong” J. Teves Jr. | Congressional service; TGP Party-list separated from membership | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Rommel Francisco D. Marbil | Senior national police leadership | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Vicente Dupa Danao Jr. | Senior national police service/OIC role | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Vandolph Lacsamana Quizon | Film, television, local elected service | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Eumir Felix Marcial | Tokyo Olympic bronze medalist | Association context under source review | Not stated | Association source pending | Olympics.com athlete record for professional achievement | NEEDS VERIFICATION |
| Raymond Almazan | FIBA-listed 2019 World Cup player | Association context under source review | Not stated | Association source pending | FIBA player record for professional achievement | NEEDS VERIFICATION |
| John Riel Reponte Casimero | Three-division world-championship boxing career | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Arthur Alvin A. Aguilar | Wrestling-association president and combat-sport institution building | Explicit Tau Gamma Phi member | Not stated | Supreme Court decision linked in data | United World Wrestling for role; Lawphil Supreme Court decision for stated membership | PRIMARY-SOURCE CLAIM |
| Juan Miguel “JM” Gob de Guzman | Entertainment career and claimed chapter leadership description | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Luis Philippe Santos Manzano | Television and film career | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |
| Nathan Peter Hachero Azarcon | Bassist and songwriter | Association context only | Not stated | `Research context · source link pending` | None attached | NEEDS VERIFICATION |

## Current Notable-Profile Source Register

| Profile / evidence type | Current URL | Current label | Audit note |
|---|---|---|---|
| Eumir Marcial professional record | `https://olympics.com/en/athletes/eumir-marcial` | Olympics.com athlete record | Professional achievement only; not TGP affiliation evidence. |
| Raymond Almazan professional record | `https://www.fiba.basketball/en/players/235795-raymond-almazan` | FIBA player record | Professional achievement only; not TGP affiliation evidence. |
| Arthur Alvin Aguilar professional record | `https://cms.uww.org/about-uww/national-federation/wrestling-association-philippines` | United World Wrestling federation profile | Professional role source. |
| Arthur Alvin Aguilar association record | `https://lawphil.net/judjuris/juri2007/dec2007/gr_127980_2007.html` | Supreme Court decision: DLSU v. Court of Appeals | Current code treats this as explicit membership evidence. |

---

# Evidence Register Currently Attached to Homepage Data

| Source ID | Current title | URL | Source type | Current supports statement | Current review status | Audit status |
|---|---|---|---|---|---|---|
| `src-tenets-mirror` | The Tenets of Triskelion | None | Public mirror / secondary copy | Reported founding context and Fortis–Voluntas–Fraternitas themes | `Public lead; authority and exact official wording not confirmed` | SECONDARY-SOURCE CLAIM |
| `src-code-secondary` | Tenets and Code of Conduct of Tau Gamma Phi | None | Public secondary document host | Reported code themes and non-harm/respect principles | `Secondary evidence; official wording approval missing` | SECONDARY-SOURCE CLAIM |
| `src-ra-11053` | Republic Act No. 11053 (Anti-Hazing Act of 2018) | `https://www.officialgazette.gov.ph/2018/06/29/republic-act-no-11053/` | Official government law | Public safety wording about legal prohibition on hazing | `Public legal source; does not prove universal chapter compliance` | PRIMARY-SOURCE CLAIM |
| `src-research-pdf` | Tau Gamma Phi Research (supplied research PDF) | None | Supplied local research synthesis | Six tile counts and mapping of public tenets/code leads to claims | `Research report, not automatic official proof; local-only source` | SECONDARY-SOURCE CLAIM |

---

# Hidden, Conditional, and Data-Driven Homepage Content

| Content | Source | Current visibility / condition | Audit note |
|---|---|---|---|
| Founder data fallback | `src/content.mjs` → `src/app.mjs` | May be replaced by `mountFounderEditorial(document)` | Audit both data and mounted founder content before approval. |
| Brotherhood stories | `src/content.mjs` → archive search | Not shown as cards; indexed/searchable | Hidden service/beneficiary claims still need audit. |
| Articles | `src/content.mjs` → `src/app.mjs` | Only `status === published` appears; current sole item is draft | Review future CMS/Firestore content separately. |
| Museum records | `src/content.mjs` → filterable museum cards | Rendered; description is substituted with pending-rights wording | Source data still supplies title/date/creator/provenance claims. |
| Notable profiles | `src/notables.mjs` → filters/detail | All profiles filterable; initial detail is first profile | Membership evidence varies by profile. |
| Organization map | `src/content.mjs` → D3 | Interactive; node labels/statuses visible | Illustrative and pending labels must not be read as directory confirmation. |
| Contribution form | `index.html` / `src/app.mjs` | Visible; submission handler only on interaction | Review Firestore, privacy, consent, and rules before enabling publication. |

---

# Image and Asset Inventory

| Homepage use | Current path | Alt/caption | Provenance / license currently known | Status |
|---|---|---|---|---|
| Header/footer seal | `src/assets/brand/seal-512.png` | `Tau Gamma Phi official seal` | User-supplied brand asset within project; no public license document in homepage source | NEEDS VERIFICATION |
| Favicons / touch icon | `src/assets/brand/favicon.ico`, `favicon-32.png`, `favicon-monogram-192.png`, `seal-180.png` | Not separately narrated | Derived brand assets; no license document in homepage source | NEEDS VERIFICATION |
| Hero editorial art | `src/assets/editorial/tau-gamma-editorial-3840.webp`, `tau-gamma-editorial-native.webp` | Explicitly non-documentary original editorial illustration | No license metadata in homepage source | NEEDS VERIFICATION |
| Limbaga Road crest | `src/assets/branding/tau-gamma-phi-limbaga-road-chapter-crest.webp` | `Tau Gamma Phi Limbaga Road Chapter crest` | No source/rights record in homepage markup | NEEDS VERIFICATION |
| Zamboanga council crest | `src/assets/branding/zamboanga-city-triskelion-council-crest.webp` | `Zamboanga City Triskelion Council crest` | No source/rights record in homepage markup | NEEDS VERIFICATION |
| Notable portraits | `src/assets/research/personality-portraits/webp/*.webp` through `src/portrait-map.mjs` | Empty alt in card portrait (the name is textual) | Evidence/rights notes exist under `assets/research/personality-portraits/`; audit them before publication | NEEDS VERIFICATION |

---

# Link Inventory

## Internal destinations

`#home`, `#pillars`, `#impact`, `#stories`, `#articles`, `#video-sources`, `#founders`, `#history`, `#genealogy`, `#museum`, `#organization-map`, `#blood-donation`, `#safety`, `#contribute`, `#references`, `#search-section`, `/history/`, `/news/`, `/personalities/`, `/references/research-context/`.

Status: **unknown pending browser/HTTP route verification for this capture**. The project’s pre-existing build test checks generated routes, but this capture does not claim a new click-through test.

## External destinations

| URL | Current purpose | Status |
|---|---|---|
| `https://www.taugammaphi.info/tgpg-videos` | Video library | NEEDS VERIFICATION |
| `https://www.youtube.com/watch?v=xqXEvTS_MZY` | Community historical-context video | SECONDARY-SOURCE CLAIM |
| `https://www.youtube.com/taugammaphismtc` | Solano Municipal Triskelion Council channel discovery | NEEDS VERIFICATION |
| `https://www.facebook.com/public/Triskelion-de-Zamboanga` | Facebook discovery route | SECONDARY-SOURCE CLAIM |
| `https://www.instagram.com/explore/search/keyword/?q=triskelion%20zamboanga` | Instagram discovery route | SECONDARY-SOURCE CLAIM |
| `https://www.officialgazette.gov.ph/2018/06/29/republic-act-no-11053/` | Anti-Hazing Act legal reference | PRIMARY-SOURCE CLAIM |
| `https://www.facebook.com/TGPZCC` | Zamboanga City Council Facebook | NEEDS VERIFICATION |

---

# Audit Findings Requiring External Review

1. **National authorization and identity:** Confirm whether title, “national” scope, and `official` seal wording are authorized. The footer states the archive is not a national endorsement or official approval.
2. **Founder and chronology claims:** Audit each 1968 founding, four-founder, campus, date, expansion, chapter/council, and international-growth claim against primary or independently reviewable sources.
3. **Council directory risk:** Treat genealogy and D3 topology as unverified until each name, parent relationship, location, and date has an attached source and council approval.
4. **Service claims:** The site uses service-oriented language, categories, hidden stories, and museum records without source URLs for most claims. Verify before describing them as documented activity.
5. **Museum/archive claims:** Do not publish “charter,” “authenticated seal,” “citation,” or “resolution” records as factual collections until actual documents, rights, and provenance are attached.
6. **Notable-person relationships:** Professional achievements and fraternity affiliation must remain separate. Only the Arthur Alvin Aguilar record currently includes an association source in code; audit even that citation in context.
7. **Operational claims:** Confirm actual review, tracking ID, audit log, consent, privacy, Firestore rules, and support ownership before activating contribution workflows.
8. **External links and rights:** Open and check every external link, official-channel status, destination safety, image ownership, and reuse permission before publication.
9. **SEO consistency:** Align title/meta/JSON-LD/canonical URL with the final authorized domain and actual organization status before publication.

## Snapshot Decision

**DO NOT PUBLISH - PENDING FACTUAL AND CONTENT VERIFICATION.**

This capture documents the current implementation only. It does not certify factual accuracy, institutional authorization, trademark/crest rights, external-link validity, privacy compliance, source ownership, or production readiness.
