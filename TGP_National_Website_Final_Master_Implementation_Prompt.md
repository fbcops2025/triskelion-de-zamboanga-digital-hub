# Tau Gamma Phi National Website
## Final Master Implementation Prompt

### Purpose of This Prompt

Use this prompt as the final implementation specification for the Tau Gamma Phi national main website.

This is no longer a research-only exercise. The project owner has reviewed the existing homepage audit and confirmed that the current dataset and information should be carried forward into the final website content.

The implementation must preserve the underlying evidence, source, provenance, and revision structure, while transforming the public-facing experience into a polished, intentional, readable, multi-page national website.

Do not turn the website into a research report.

The internal system may retain evidence states, sources, review notes, provenance, record history, and audit data. The public website should present approved information as clear, useful, engaging editorial content.

---

# 1. Core Project Goal

Build the Tau Gamma Phi national main website as a modern institutional website, historical archive, council and chapter discovery platform, public service record, media library, and living documentation system.

The website should help visitors understand:

- who Tau Gamma Phi is
- where the fraternity began
- how the organization developed through generations
- the founding figures and early history
- how councils and chapters connect across the Philippines and overseas
- documented community service and civic activities
- notable Triskelions and their public contributions
- historical documents, photographs, videos, events, and memorabilia
- current public updates, announcements, and activities
- how to contribute records, corrections, photographs, documents, and historical material

The site should feel like a credible national institution and digital historical archive, not a generic fraternity template.

---

# 2. Existing Project and Source of Truth

Work from the existing project first.

Current audited project details:

- Current route: `/`
- Primary static file: `index.html`
- Runtime population: `src/app.mjs`
- Primary data: `src/content.mjs`
- Notable profiles: `src/notables.mjs`
- Founder editorial content: `src/editorial/founders-content.mjs`
- Current branch at audit time: `main`
- Current project version at audit time: `0.1.0`

Before changing anything:

1. Inspect the existing project structure.
2. Read the current homepage implementation.
3. Read every data object currently feeding the homepage.
4. Preserve existing useful assets, source records, historical data, research notes, and approved information.
5. Refactor deliberately rather than rebuilding blindly.
6. Do not delete source/provenance information simply because the public copy becomes more editorial.

The current pre-publication audit is the baseline inventory of the homepage.

## Project Owner Approval Rule

The project owner has confirmed the current homepage dataset for use in the final content.

Therefore:

- Carry the current approved data into the final site.
- Preserve exact dates where exact dates exist.
- Preserve `circa` or approximate dates where the current record is approximate.
- Preserve spelling, names, relationships, organizations, and chapter/council labels from the approved dataset unless the source project contains a more authoritative approved version.
- Do not invent missing dates, relationships, titles, council names, chapter affiliations, biographies, service totals, or source information.
- Do not silently “improve” uncertain precision.
- New information added after this approved dataset must still use the verification and approval workflow defined later in this prompt.

---

# 3. Approved Historical Data to Carry Forward

The implementation must retain the currently approved national historical dataset, including the following core records.

## Founding Record

Use the current approved founding record:

- Date: October 4, 1968
- Location: University of the Philippines Diliman
- Alpha / Mother Chapter: UP Diliman
- Founding figures currently recorded:
  - Roy A. Ordinario
  - Vedasto “Tito” Venida
  - Rodolfo “Rod” Confesor
  - Talek J. Pablo

The public website should present this as readable historical storytelling, not as a database dump.

## Current Historical Timeline Dataset

Preserve the existing national timeline records covering:

- pre-1968 conceptual beginnings at UP Diliman
- 1968 foundation
- 1970s collegiate expansion
- 1980s regional growth across Visayas and Mindanao
- 1990s community and alumni expansion
- 2000s international growth
- 2010s organizational and legal-context developments
- 2020s digital preservation and documentation

Do not compress these into a single long homepage timeline.

Create a national history hub and decade-based pages or expandable sections.

Recommended structure:

```text
/history/
/history/founding/
/history/1960s/
/history/1970s/
/history/1980s/
/history/1990s/
/history/2000s/
/history/2010s/
/history/2020s/
```

## Approved Network / Genealogy Dataset

Preserve the currently recorded network and genealogy entries, including:

- Alpha (Mother) Chapter, UP Diliman, Quezon City, October 4, 1968
- Metro Manila Regional Council, NCR, circa 1971
- Central Luzon Regional Council, Region III, circa 1975
- Visayas Regional Council, Cebu and Western/Eastern Visayas, circa 1980
- Mindanao Regional Council, Davao, Cagayan de Oro, and General Santos, circa 1982
- Triskelion Canada National Council
- Triskelion USA National Council

Also preserve all currently approved organization-map records from `src/content.mjs`.

Do not replace approximate dates with exact dates unless a newly approved record exists.

---

# 4. Public Content Philosophy

The public site must not sound like a research document.

Use this principle:

> Research establishes the record. Public copy explains why it matters. The archive shows where it came from.

The public copy should be intentional, readable, human, historically grounded, authoritative without sounding bureaucratic, proud without becoming exaggerated, clear enough for the general public, structured for mobile reading, optimized for search without keyword stuffing, and connected through strong internal linking.

Avoid walls of text, repetitive “research shows” wording, excessive verification terminology in normal body copy, generic AI copy, vague inspirational filler, exaggerated claims, overly aggressive fraternity language, gaming-style language, political campaign-style language, and keyword-stuffed SEO paragraphs.

---

# 5. Writing and Editorial Formatting Rules

These rules apply site-wide.

## Title Case

Use proper editorial Title Case for H1 headings, H2 headings, H3 headings, major card titles, navigation section titles, and important CTA labels where appropriate.

Examples:

Correct:
- Where the Story Began
- A Brotherhood Built Across Generations
- Explore the National Timeline
- Community Service and Public Impact
- Councils and Chapters
- Help Preserve the History

Avoid:
- Where The Story Began
- WHERE THE STORY BEGAN
- where the story began

Small connector words such as `and`, `or`, `the`, `of`, `to`, `in`, and `for` normally remain lowercase unless they start the heading.

## Hierarchy

Use H1 for one primary page title, H2 for major sections, H3 for subsections, and H4 only when genuinely needed. Do not skip heading levels for visual styling.

## Paragraphs

Use short, intentional paragraphs. Prefer approximately 2 to 4 sentences per paragraph on standard editorial pages.

Break long historical narratives into introductions, dated milestones, contextual sections, quotes, archive callouts, related links, and timelines.

## Emphasis

Use bold text strategically for significant names, meaningful dates, key historical takeaways, important calls to action, and concise phrases that deserve scanning emphasis. Do not bold entire paragraphs.

## Dimensional Writing

Create visual and editorial dimension using section intros, timeline nodes, pull quotes, archive callouts, “Why It Matters” blocks, “From the Archive” blocks, related-record cards, source notes, context cards, photo captions, featured statistics only when meaningful, and internal links at natural decision points.

Do not create decorative boxes merely to make the page look busy.

## Punctuation

Do not use em dashes in public copy. Use commas, periods, colons, parentheses, or simple hyphens instead.

---

# 6. National Website Information Architecture

The website must be multi-page. Do not make the national website one extremely long scrolling homepage.

Recommended top-level routes:

```text
/
├── about/
├── history/
├── founding-fathers/
├── leadership/
├── regions/
├── councils/
├── chapters/
├── notable-triskelions/
├── service/
├── events/
├── news/
├── videos/
├── archive/
├── documents/
├── sources/
├── corrections/
├── contribute/
└── contact/
```

Recommended deeper structure:

```text
/history/{decade}/
/founding-fathers/{person-slug}/
/regions/{region-slug}/
/councils/{council-slug}/
/councils/{council-slug}/history/
/councils/{council-slug}/leadership/
/councils/{council-slug}/chapters/
/councils/{council-slug}/service/
/councils/{council-slug}/events/
/councils/{council-slug}/archive/
/chapters/{chapter-slug}/
/notable-triskelions/{person-slug}/
/service/{project-slug}/
/events/{event-slug}/
/news/{article-slug}/
/videos/{video-slug}/
/archive/{collection-slug}/
/documents/{document-slug}/
```

---

# 7. Homepage Role

The homepage should introduce the national story and guide people deeper into the site. It should not attempt to display every historical record.

Recommended homepage flow:

## Hero

Present:

**Tau Gamma Phi**
**Triskelions’ Grand Fraternity**

Use an intentional introduction based on the approved current direction:

A brotherhood shaped by generations, strengthened by service, and carried forward through communities across the Philippines and beyond.

Support it with concise copy inviting visitors to explore history, people, councils, chapters, public service, and the archive.

Primary CTA: **Explore Our History**
Secondary CTA: **Find a Council**

## A Brotherhood Built Across Generations

Explain that the story extends beyond one chapter or generation. Link to the national history hub.

## Where the Story Began

Feature **October 4, 1968 · UP Diliman** and introduce the founding story and the four founding figures. Use four concise founder cards linking to individual pages.

## History by Generation

Show a concise national timeline by decade. Each decade should link to its own history page.

## One Brotherhood, Many Communities

Introduce the council and chapter network. Provide regional browsing for Metro Manila / NCR, Luzon, Visayas, Mindanao, and Overseas / International. Link to the full council and chapter directory.

## Service Beyond Brotherhood

Introduce documented service categories and representative activities. Link to the service archive.

## People Who Carried the Brotherhood Forward

Feature selected approved notable profiles. Link to the complete Notable Triskelions directory.

## Featured Videos

Show a curated row from the new video library. Link to `/videos/`.

## Stories Worth Preserving

Introduce the digital archive. Link to historical photographs, documents, anniversary records, chapter histories, videos, memorabilia, and oral histories.

## Latest From the Brotherhood

Display approved national announcements, community activities, council updates, historical discoveries, and newly added archive records.

## Help Preserve the History

Invite contributions of photographs, documents, chapter histories, anniversary programs, old newspaper clippings, certificates, corrections, and oral-history leads. Explain that submissions are reviewed before publication.

## Closing Section

Use a strong editorial close centered on continuity, preservation, service, and future generations.

---

# 8. About Page

Create `/about/`.

Recommended sections:

1. Who We Are
2. A Brotherhood Across Generations
3. History, Service, and Community
4. How This Digital Archive Works
5. Public Information and Privacy Boundaries
6. Explore the National Network
7. Related Pages

Use natural, intentional copy.

---

# 9. National History System

Create `/history/` as a major editorial hub.

It should contain a concise history introduction, founding overview, interactive or visually structured timeline, decade navigation, historical milestones, related founders, related councils, archive materials, relevant videos, and source access.

Do not expose internal research notes inline as the main narrative. Use source links and archive notes as supporting material.

---

# 10. Founding Fathers Section

Create:

```text
/founding-fathers/
/founding-fathers/roy-ordinario/
/founding-fathers/vedasto-tito-venida/
/founding-fathers/rodolfo-rod-confesor/
/founding-fathers/talek-j-pablo/
```

The index page should introduce the founding generation.

Individual profiles should use Name, Role in the founding story, Historical context, Documented contributions, Timeline, Related records, Historical photographs if rights-cleared, Sources, and Related history pages.

Do not make biographies feel like resumes. Write them as historical profiles.

---

# 11. Regions, Councils, and Chapters

Build a scalable discovery system.

## Regions

Create regional hubs.

## Councils

Create a searchable/filterable council directory with filters for Region, Province, City, Council type, Historical period, and Status.

Each council page can contain overview, history, leadership, chapter directory, community service, events, gallery/archive, videos, documents, and sources.

## Chapters

Create chapter profiles as separate records with official name, location, parent council, founding information, historical overview, public leadership where approved, notable milestones, service activities, events, archive materials, related people, related videos, and sources.

## Zamboanga City Council

Retain Zamboanga City Council as a complete council record within the national hierarchy at `/councils/zamboanga-city/` and connect it to the existing Zamboanga City Council knowledge base and approved research.

---

# 12. Notable Triskelions

Create `/notable-triskelions/`.

Recommended categories:

- Founding Figures
- Government and Public Service
- Sports
- Business and Entrepreneurship
- Education
- Arts and Entertainment
- Military and Public Safety
- Professionals
- Community Leadership

Preserve the current approved notable-profile dataset from `src/notables.mjs`.

Current records in the audited project include:

- Roy Ordinario
- Vedasto “Tito” Venida
- Rodolfo “Rod” Confesor
- Talek J. Pablo
- Errol Garchitorena Jr.
- Joel Villanueva
- Ralph G. Recto
- Richard Frank Gomez
- Jose “Bong” J. Teves Jr.
- Rommel Francisco D. Marbil
- Vicente Dupa Danao Jr.
- Vandolph Lacsamana Quizon
- Eumir Felix Marcial
- Raymond Almazan
- John Riel Reponte Casimero
- Arthur Alvin A. Aguilar
- Juan Miguel “JM” Gob de Guzman
- Luis Philippe Santos Manzano
- Nathan Peter Hachero Azarcon

Do not merge professional-achievement evidence with fraternity-affiliation evidence. Keep those as separate fields internally.

For public officials and political figures, present documented roles and biographical facts neutrally. Do not endorse, oppose, rank, score, or campaign for any person. Do not turn the page into political advocacy. Do not infer motives, competence, health, ideology, or electoral prospects.

Each profile page should read like an editorial biography, not a research table.

---

# 13. Community Service and Public Impact

Create `/service/`.

Preserve and organize the service themes already present in the project, including Health and Medical Missions, Blood Donation, Disaster Relief, Youth Education, Scholarships, Environmental Programs, Reforestation, Member Assistance, Bereavement Support, Public Safety and Rescue, Livelihood Training, Food Security, Professional Networking, Community Infrastructure, Senior Citizen Support, Peacebuilding, and Sports and Culture.

Do not present category existence as a numerical impact claim.

When an activity has verified totals, dates, beneficiaries, partners, or locations, display them. When there is no quantified record, write the page descriptively without inventing metrics.

---

# 14. Blood Donation and Humanitarian Content

Preserve the existing public-safety principle: the national website documents service and historical records. It is not automatically the operational organizer of every local activity.

For current blood drives or community-support requests, direct visitors to the responsible verified chapter or council when available.

Do not collect sensitive health information through the general archive unless a separate compliant system is intentionally implemented.

---

# 15. Safe Membership and Anti-Hazing Page

Create `/safe-membership/`.

Use Republic Act No. 11053 as legal context.

Do not write language that falsely implies that displaying the law itself proves compliance by every chapter or individual.

Keep the tone educational, direct, and responsible, centered on dignity, safety, respect, accountability, non-violence, and legal awareness.

---

# 16. Video Library, YouTube-Style Experience

This is a confirmed major feature.

Create `/videos/`.

The experience should resemble a clean, editorial YouTube-style library without copying YouTube branding.

## Video Library Page

Include a featured video, search, category filters, playlists/collections, responsive thumbnail grid, latest videos, historical videos, council videos, service videos, interviews, anniversaries, documentaries, public statements, and oral-history videos where approved.

Possible categories:

- History
- Founding and Early Years
- National Events
- Community Service
- Council Activities
- Chapter Activities
- Anniversaries
- Interviews
- Oral Histories
- Sports
- Documentaries
- Public Statements

## Video Detail Pages

Each video should have its own route at `/videos/{video-slug}/`.

Include embedded original-source player when permitted, video title, source channel, source platform, original publication date, event date if different, council, chapter, location, readable description, historical or event context, related people, related council, related chapter, related event, related archive records, related videos, and original source link.

Do not re-upload third-party videos merely to host them locally. Prefer embedding the original public source. If embedding is not permitted, show **Watch on the Original Source**.

## Initial Video Dataset

Preserve the currently captured video leads:

- Tau Gamma Phi Global Video Library: `https://www.taugammaphi.info/tgpg-videos`
- `Ang Nakamamanghang Kasaysayan ng Tau Gamma Phi`: `https://www.youtube.com/watch?v=xqXEvTS_MZY`
- Solano Municipal Triskelion Council YouTube channel: `https://www.youtube.com/taugammaphismtc`

Move these into the proper video-source/data model rather than keeping the homepage as a simple list of outbound links.

## Video Data Model

```text
id
title
slug
description
summary
source_platform
source_channel
source_url
embed_url
thumbnail
published_date
event_date
category
tags
region
council_id
chapter_id
people_ids[]
event_id
historical_period
source_status
rights_status
featured
publication_status
created_at
updated_at
```

## Video SEO

Each public video page should support unique title, unique meta description, H1, descriptive transcript/summary where rights permit, `VideoObject` structured data when appropriate, thumbnail metadata, upload/publication date, embed URL or content URL, related internal links, and breadcrumbs.

Do not auto-generate fabricated transcripts.

---

# 17. Digital Archive

Create `/archive/`.

Recommended collections:

- Historical Photographs
- Documents and Publications
- Anniversary Records
- Chapter Histories
- News Coverage
- Videos
- Memorabilia
- Certificates
- Posters
- Council Records
- Oral Histories
- Historical Timelines

Use filters such as Year, Decade, Region, Council, Chapter, Person, Event, and Material Type.

Every asset should retain source, owner, permission/license, caption, date, creator, rights status, provenance, and publication state.

Do not treat online availability as reuse permission.

---

# 18. News and Updates

Create `/news/`.

Only approved/published records should render.

Recommended categories:

- National Announcements
- Council Updates
- Community Service
- Events
- Historical Discoveries
- Archive Additions
- Corrections and Record Updates

Draft content must never enter the public feed or public search index.

---

# 19. Events

Create `/events/`.

Support upcoming public events, past events, anniversaries, assemblies, community activities, sports events, and public commemorations.

Each event page should include event name, date, place, organizer, description, related council/chapter, media, related videos, source, and archive links.

---

# 20. Search

The national search must index only content allowed for public discovery.

**Research Record ≠ Public Search Record**

Only records with `publication_status = published` or an equivalent approved public state should enter the public search index.

Never expose hidden research stories, draft biographies, unpublished service records, internal notes, or candidate archive items through client-side search.

Search should cover history, founders, councils, chapters, people, service, events, news, videos, archive, and documents.

---

# 21. Content Status and Publication Workflow

Use internal content states such as:

```text
draft
needs_review
confirmed
approved
published
archived
disputed
```

For the existing dataset, treat the project-owner-confirmed content as approved input for the rebuild.

For newly added information:

```text
Candidate Record
→ Source Added
→ Editorial Review
→ Confirmation
→ Approval
→ Publication
```

No AI-generated discovery should auto-publish.

---

# 22. Contributions and Corrections

Create `/contribute/` and `/corrections/`.

Allow visitors to submit historical photographs, documents, chapter records, event programs, old publications, newspaper clippings, certificates, source links, corrections, and oral-history leads.

Clearly explain that submission does not equal publication, records are reviewed, copyright remains with the appropriate owner, personal information should be minimized, and corrections retain revision history.

If the system promises tracking IDs, historian review, or audit logs, ensure the backend actually implements those features before showing those promises publicly.

---

# 23. Public Layer vs. Evidence Layer

Maintain two layers.

## Public Content Layer

Visitors see clear editorial stories, timelines, profiles, council pages, chapter pages, service records, archive collections, videos, news, and events.

## Evidence and Provenance Layer

Internally retain source IDs, source URLs, original documents, date precision, provenance, record owner, editor, reviewer, revision history, rights notes, affiliation evidence, professional-source evidence, approval state, and last reviewed date.

Where appropriate, provide a tasteful public “Sources” or “View Record Sources” section without turning every paragraph into a research table.

---

# 24. SEO Strategy

The website should be structured for national and local discoverability.

Primary topical entities include Tau Gamma Phi, Triskelions’ Grand Fraternity, Tau Gamma Phi Philippines, Tau Gamma Phi history, Tau Gamma Phi founding fathers, Tau Gamma Phi chapters, Tau Gamma Phi councils, Triskelion Philippines, Triskelion history, Tau Gamma Phi community service, Tau Gamma Phi notable members, Tau Gamma Phi videos, and Tau Gamma Phi archive.

Local pages should naturally target combinations such as Tau Gamma Phi Zamboanga, Tau Gamma Phi Zamboanga City Council, Triskelion Zamboanga, Tau Gamma Phi Cebu, and Tau Gamma Phi Davao.

Do not keyword stuff.

## Page-Level SEO

Every indexable page should have a unique SEO title, unique meta description, canonical URL, one H1, logical H2/H3 structure, descriptive internal links, breadcrumb navigation, meaningful image alt text, Open Graph metadata, and social preview image where appropriate.

## Structured Data

Use only when the content actually supports it.

Potential types:

- `WebSite`
- `WebPage`
- `BreadcrumbList`
- `Organization`
- `Person`
- `Article`
- `NewsArticle`
- `Event`
- `VideoObject`
- `ImageObject`

Schema must match visible page content.

---

# 25. Internal Linking Strategy

Every page should help visitors continue exploring.

Examples:

Founder profile → founding history → national timeline → related archive records

Council → region → chapters → service → events → videos → archive

Notable person → category → related council/chapter where applicable → related events → related videos

Video → related people → council → chapter → event → historical period

Archive item → relevant history page → person → council → event

Avoid generic “click here” links. Use descriptive anchor text.

---

# 26. Design Direction

Create a premium, institutional, historical, and modern visual system.

The site should communicate brotherhood, history, service, continuity, strength, institutional credibility, and respect for archival material.

Avoid nightclub aesthetics, gaming aesthetics, overly aggressive black/red themes, generic fraternity templates, excessive metallic effects, clutter, large amounts of glowing UI, and political campaign styling.

Use existing approved brand assets where appropriate.

The current project direction may use deep charcoal / near black, warm ivory, restrained gold, archival neutrals, and high-contrast readable typography.

Gold should feel premium and restrained, not decorative everywhere.

---

# 27. Typography

Use a refined editorial typography system.

Recommended direction:

- dignified serif or editorial display type for important historical H1/H2 headings
- highly readable sans-serif for body copy, navigation, labels, forms, and metadata

Requirements:

- strong hierarchy
- readable line length
- generous line height
- mobile-friendly sizes
- avoid tiny captions
- avoid excessive uppercase

All headings must follow the Title Case rule defined earlier.

---

# 28. Cards and Components

Use components only when they improve comprehension.

Recommended reusable components:

- Founder Card
- Person Card
- Council Card
- Chapter Card
- Service Project Card
- Event Card
- Video Card
- Archive Item Card
- Source Note
- Timeline Node
- Decade Navigator
- Historical Callout
- Related Record Card
- Breadcrumb
- Filter Bar
- Search Result
- Contribution Status Notice

Cards must not all look identical. Use different patterns where context demands it.

---

# 29. Homepage Navigation

Simplify current navigation language.

Prefer clear top-level labels such as About, History, Councils, Chapters, Service, Events, Videos, Archive, and News.

Secondary navigation can expose Founding Fathers, Notable Triskelions, Sources, Contribute, and Contact.

Avoid forcing users to decode abstract navigation labels before they understand the site.

---

# 30. Footer

The national footer should be national in scope.

Do not make the national footer feel like a Zamboanga-only site.

Move Zamboanga-specific provenance, commissioning notes, or local project context to an appropriate credits/research page if it must remain visible.

Recommended footer links:

- About
- History
- Councils
- Chapters
- Service
- Videos
- Archive
- News
- Sources
- Contribute
- Corrections
- Contact
- Privacy
- Accessibility

---

# 31. Media Rights and Attribution

For every image, video, and document, retain source, owner, permission/license, caption, date, creator, and rights status.

If rights are unclear, do not automatically publish the full asset. Use a placeholder or source link until rights are resolved.

Editorial illustrations must be labelled as illustrations when there is any chance they could be mistaken for documentary material.

---

# 32. Accessibility

Meet modern accessibility expectations.

Include semantic HTML, keyboard navigation, visible focus states, sufficient contrast, descriptive alt text, captions/transcripts where appropriate, form labels, error messaging, reduced-motion support, skip navigation, logical heading order, accessible dialogs, and accessible video controls.

Do not use hover as the only way to reveal essential information.

---

# 33. Mobile Experience

Mobile is a first-class experience.

Requirements:

- no clipped layouts
- no horizontal page overflow
- readable typography
- responsive cards
- tap targets approximately 44px minimum
- filters that remain usable on small screens
- mobile-friendly timelines
- mobile video library
- simplified navigation
- optimized images
- no giant decorative hero that pushes useful content too far below the fold

---

# 34. Performance

Optimize responsive images, lazy loading below the fold, WebP/AVIF where appropriate, asset sizing, JavaScript payload, route-level loading, fonts, caching, code splitting, and Core Web Vitals.

Do not sacrifice accessibility or content quality for animation.

---

# 35. Data Architecture

Create scalable collections/entities for:

```text
people
founders
leaders
regions
councils
chapters
historical_events
service_projects
events
articles
videos
archive_assets
documents
sources
corrections
contributions
```

Common fields should include:

```text
id
slug
title/name
summary
body
publication_status
source_ids[]
created_at
updated_at
published_at
last_reviewed_at
revision
```

Specific relationships should use IDs rather than repeated free-text wherever practical.

---

# 36. Content Relationships

The data model should support many-to-many relationships.

A video may relate to multiple people, one or more chapters, a council, an event, and a historical period.

A service activity may relate to multiple chapters, several partners, a council, an event, and media assets.

An archive photograph may relate to people, council, chapter, event, date, and location.

Build these relationships so users can explore the archive naturally.

---

# 37. Source Registry

Maintain an internal source registry with:

```text
source_id
title
url
source_type
publisher
published_date
retrieved_at
supports[]
rights_note
archived_copy
reliability_note
```

Retain current evidence source records such as `src-tenets-mirror`, `src-code-secondary`, `src-ra-11053`, and `src-research-pdf`.

Keep Republic Act No. 11053 linked to its government legal source.

Do not automatically expose internal source-status language in public narrative copy.

---

# 38. Existing Homepage Content Migration

Do not simply discard the current homepage.

Map each current section to its proper future location.

- `Featured Video Sources` → `/videos/` plus a homepage featured-video row
- `Where the Journey Began` → Homepage preview + `/history/founding/` + `/founding-fathers/`
- `A Living National Timeline` → Homepage preview + `/history/`
- `Find a Council or Chapter` → Homepage discovery preview + `/councils/` + `/chapters/`
- `Notable Triskelions` → Homepage preview + `/notable-triskelions/`
- `Stories Worth Preserving` → Homepage preview + `/archive/`
- `Help Preserve the History` → Homepage CTA + `/contribute/`
- `Sources and Historical Context` → `/sources/`

This keeps the homepage focused and prevents excessive scrolling.

---

# 39. Content That Must Never Leak Publicly by Accident

Do not expose through HTML, search, client-side JSON, source maps, or hidden cards:

- private membership rosters
- initiation details
- ritual material
- passwords
- confidential internal documents
- personal addresses
- private phone numbers
- beneficiary identities
- health information
- unpublished complaint records
- minors' personal data
- internal moderation notes
- draft biographies
- research leads not approved for publication

Public search must never index unpublished content.

---

# 40. Implementation Workflow

Execute in this order.

## Phase 1: Audit and Preserve

- inspect current project
- create a migration inventory
- preserve current content/data/assets
- preserve source and provenance data
- identify existing routes/components

## Phase 2: Architecture

- establish route structure
- establish content/data model
- separate public content from internal research data
- build shared navigation and footer
- establish SEO metadata system

## Phase 3: Homepage

- rewrite and restructure homepage using approved data
- reduce excessive scrolling
- link into deeper pages
- preserve strong current concepts

## Phase 4: Core Pages

Build About, History, Founding Fathers, Councils, Chapters, Service, Events, Videos, Archive, Notable Triskelions, News, Sources, Contribute, Corrections, and Contact.

## Phase 5: Dynamic Collections

Implement search, filters, related records, video library, archive collections, and council/chapter browsing.

## Phase 6: SEO and Structured Data

Implement metadata, canonical handling, XML sitemap, robots, schema, breadcrumbs, and internal links.

## Phase 7: Quality

Test mobile, desktop, accessibility, keyboard navigation, broken links, content hierarchy, search, draft leakage, structured data, Core Web Vitals, and metadata consistency.

---

# 41. Copy Review Checklist

Before a page is considered finished, verify:

- Does the H1 clearly tell the reader what page they are on?
- Are all headings in proper Title Case?
- Is the first paragraph useful rather than generic?
- Does the page read like public editorial content rather than internal research?
- Are paragraphs easy to scan?
- Is emphasis used intentionally?
- Are important names and dates easy to identify?
- Are internal links useful?
- Does every section earn its place?
- Is duplicate copy removed?
- Are keywords used naturally?
- Does the page answer likely search intent?
- Does it provide a logical next action?
- Are sources available without overwhelming the narrative?
- Are claims drawn only from the approved dataset or newly approved records?
- Are approximate dates still approximate?
- Are political/public-official profiles neutral and factual?
- Are there any em dashes? If yes, replace them.

---

# 42. Technical Acceptance Criteria

The final implementation should not be considered complete unless:

- the homepage is substantially shorter and acts as a gateway
- all major topics have dedicated routes
- the video library works as a real multi-page media experience
- council/chapter pages are scalable
- public search excludes drafts and research-only data
- metadata is unique by page
- canonical URLs are environment-aware and ready for the final domain
- structured data matches visible content
- mobile navigation is usable
- all headings follow Title Case
- no em dashes remain in public copy
- internal linking connects related entities
- source/provenance data is preserved
- media rights metadata is preserved
- contributions do not auto-publish
- approved current dataset has been migrated
- no current approved historical record is accidentally lost
- approximate date precision is preserved
- notable-person professional records and fraternity-affiliation records remain distinct internally
- Zamboanga City Council is integrated as a council within the national hierarchy
- current outbound video leads have been migrated into the video system
- the current homepage does not remain a giant one-page archive after migration

---

# 43. Required Final Deliverables

When implementation is complete, return:

## A. Implementation Summary
Explain what was changed.

## B. Route Map
List every new and modified route.

## C. Content Migration Summary
Show where each major old homepage section moved.

## D. Data Migration Summary
List preserved and transformed datasets.

## E. SEO Summary
List title/meta changes, canonical approach, schema used, sitemap changes, and internal-link improvements.

## F. Video Library Summary
List video routes, categories, playlists, source handling, and embedded vs outbound behavior.

## G. Publication and Search Safety Summary
Confirm drafts are not searchable publicly, internal research notes are not exposed, and unpublished records are not in client-side public indexes.

## H. Accessibility and Mobile Summary
List improvements.

## I. Remaining Issues
Do not hide unfinished items.

## J. Final Change Log
Provide a concise file-by-file change summary.

---

# 44. Final Instruction

Do not produce a generic redesign.

Build a national digital institution.

The website should allow a visitor to begin with a simple question such as:

- What is Tau Gamma Phi?
- Where did it begin?
- Who were the founding figures?
- What happened in each generation?
- Is there a council in my area?
- What is the history of this chapter?
- What community work has been documented?
- Who are some notable Triskelions?
- Are there videos about this event or period?
- Where can I see historical photographs and documents?
- How can I contribute a record or correction?

and reach a clear, useful answer without scrolling through an enormous homepage or reading raw research notes.

The system behind the website should preserve the depth of the historical record.

The public experience should make that depth easy to discover.

**Preserve the record. Tell the story well. Make the history navigable.**
