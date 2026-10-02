export const SEO_ORIGIN = 'https://triskelion-de-zamboanga-digital-hub.vercel.app';
export const SEO_CONFIG = {
  origin: SEO_ORIGIN,
  siteName: 'Tau Gamma Phi | Triskelions’ Grand Fraternity Philippines',
  homeTitle: 'Tau Gamma Phi | Triskelions’ Grand Fraternity Philippines',
  homeDescription: 'Explore the history, councils, chapters, community service, notable Triskelions, events, and historical archives of Tau Gamma Phi in the Philippines.'
};

/**
 * Static editorial publication model.
 * Only records with status=published and publication=public are generated.
 * Firestore articles are not silently merged here: they require an approved
 * static ingestion/rebuild before receiving a permanent public URL.
 */
export const editorialRecords = [
  {
    slug: 'about-this-public-archive',
    title: 'About This Public Archive',
    section: 'Editorial Explainer',
    description: 'How this Tau Gamma Phi public history and impact archive is organized, and why evidence states remain visible.',
    status: 'published',
    publication: 'public',
    eligibleForArticleSchema: false,
    body: [
      { heading: 'A Public Reading Room, Not an Approval Shortcut', paragraphs: ['Tau Gamma Phi (Triskelions’ Grand Fraternity) has a history shaped by people, places, service, and records. This public archive preserves that context and keeps source trails and review limits visible, while leaving authorized council publication processes in their proper place.', 'The national scope and identity provide the editorial frame. Council context and commissioning credit remain separate from claims of national authorization or endorsement.'] },
      { heading: 'What Readers Can Expect', paragraphs: ['Each published page explains its subject, organizes documented material, and points readers toward references. Records that still need a primary source, consent, or council review remain marked as pending rather than presented as completed news.', 'A submission, research lead, or dynamic database record becomes public fact only after the required source and review steps are complete.'] }
    ],
    sources: [
      { label: 'Commissioning context', href: '/references/commissioning-context/' },
      { label: 'Verification and evidence standards', href: '/references/verification-standards/' }
    ],
    related: ['verification-standards', 'research-context']
  },
  {
    slug: 'verification-standards',
    title: 'How the Archive Marks Evidence and Review',
    section: 'Editorial Explainer',
    description: 'A plain-language guide to submitted, pending, corroborated, approved, and published records in this public archive.',
    status: 'published',
    publication: 'public',
    eligibleForArticleSchema: false,
    body: [
      { heading: 'Status Is Part of the Record', paragraphs: ['A trustworthy archive shows what is known, what is sourced, and what still needs review. Evidence labels stay beside the material they qualify, so “pending” is not mistaken for verified and a research lead is not mistaken for publication approval.', 'A submission moves through source attachment, review, corroboration, and approval as separate steps. Only an approved public record becomes a published update.'] },
      { heading: 'Why Some Stories Are Not News', paragraphs: ['A draft article without an approved source, truthful byline, or publication date stays outside the public news collection. It may remain an internal or research-stage record, but it does not receive NewsArticle markup or a public story URL.', 'That boundary protects members and readers from invented chapter news, accidental attribution, and dates that have not been confirmed.'] }
    ],
    sources: [
      { label: 'Public archive intake', href: '/#contribute' },
      { label: 'Research context note', href: '/references/research-context/' }
    ],
    related: ['about-this-public-archive', 'research-context']
  },
  {
    slug: 'research-context',
    title: 'Research Context Awaiting Source Review',
    section: 'Reference Context',
    description: 'A research-context page for material that may help future review but is not approved news or an official chapter record.',
    status: 'published',
    publication: 'public',
    eligibleForArticleSchema: false,
    pendingSources: true,
    body: [
      { heading: 'Context Is Not Publication Authority', paragraphs: ['Research context can help explain a subject while its public record is still incomplete. This page is marked sources pending, so its material should not be read as an official council announcement, chapter event notice, or verified biography.', 'Readers with an authorized primary source, consent, or correction can use the contribution pathway on the home page.'] },
      { heading: 'What Remains to Be Confirmed', paragraphs: ['Specific chapter histories, personal profiles, service totals, dates, and institutional attributions require traceable primary records and human review. Until that evidence is attached, the material remains contextual and stays outside the news feed.'] }
    ],
    sources: [
      { label: 'Contribution and correction pathway', href: '/#contribute' },
      { label: 'Commissioning context', href: '/references/commissioning-context/' }
    ],
    related: ['about-this-public-archive', 'verification-standards']
  }
,
  {
    slug: 'tau-gamma-phi-national-records-and-membership',
    title: 'What the Public Record Can, and Cannot, Say About Tau Gamma Phi’s Strength',
    section: 'Reviewed Research, Feature',
    description: 'A source-led look at membership estimates, reported structures, public chapter records, and the records needed to preserve a more reliable history.',
    status: 'published',
    publication: 'public',
    eligibleForArticleSchema: true,
    researchDate: '2026-10-02',
    cover: {
      src: '/src/assets/editorial/tau-gamma-phi-records-cover.webp',
      alt: 'Conceptual editorial illustration of archival cards, a gold circular emblem, and connected record lines on a dark field',
      caption: 'Conceptual illustration: public records become more useful when their scope, source, and permission are kept visible.'
    },
    body: [
      { heading: 'A Large Number Needs a Careful Label', paragraphs: [
        'Tau Gamma Phi and the wider Triskelion family are described in public material at a substantial scale, but no current, independently verified Philippines-only census is provided. The most specific figure located in this review is an attributed estimate of about 800,000 members in 2017, including community chapters known as the Triskelion Youth Movement.[1]',
        'The same Senate-hosted research material repeats a separate claim of more than one million registered members worldwide, including Sigmas.[1] Those figures describe different dates, scopes, definitions, and source chains. They cannot be added, compared as like-for-like counts, or republished as a current national total.',
        'The responsible public wording is therefore narrower: public sources describe the wider Triskelion family in the hundreds of thousands, with some claims exceeding one million worldwide. A current, independently verified Philippines-only census was not located.'
      ] },
      { heading: 'What the Figures Can, and Cannot, Establish', paragraphs: [
        'The 800,000 figure can establish that a large historical estimate was publicly attributed and repeated. It cannot establish how many members are active today, in good standing, located in the Philippines, or counted without duplicates. “Worldwide” and “including Sigmas” add further scope that makes the million-plus claim unsuitable for a Philippines-only dashboard.[1]',
        'A reliable count would define its unit: active member, good-standing member, lifetime member, fraternity member, or a wider fraternity, sorority, youth, alumni, and diaspora family. It would also need a date, records custodian, deduplication method, and an explanation of which bodies are included. Without those fields, a large number is context, not a census.'
      ] },
      { heading: 'Organization Structures Are Reported, Not Universally Proven', paragraphs: [
        'A publicly available Global Constitution Q&A describes a structure in which active-member chapters form Areas, and Areas form Clusters. It says school and community chapters sit under an Area Council and lists 12 clusters, including Philippine regional groupings and international groupings.[2][3]',
        'That is useful evidence of how one public constitutional source describes its organization. It is not proof that every council currently uses the same structure, or that all bodies operate under one uncontested authority. A separate public constitution copy hosted on Scribd describes a National Executive Council role in final approval of recognition for newly created chapters or councils; because that copy is hosted by a third party, it should remain a reference lead until an authorized current copy is supplied.[4]'
      ] },
      { heading: 'A Public Chapter Record Is Not a Recognized Directory', paragraphs: [
        'The review located public names and records including a Navotas council website, a date-stamped UPLB organization record, and chapter or council names in a public anniversary project description.[5][6][7] These records show that a name, page, or listing is publicly visible. They do not automatically prove current activity, central recognition, or one shared national chain of authority.',
        'The archive should keep three states separate: a body publicly claiming an identity; a body listed by a public directory or website; and a body confirmed as recognized by the relevant authorized body. That distinction prevents a search result or old event page from quietly becoming a current national directory.'
      ] },
      { heading: 'Identity and Image Permission Belong in the Same Record', paragraphs: [
        'A seal or photograph can help identify a chapter, but a public image is not automatically an approved website asset. The research record found image leads on Wikimedia Commons and public council pages, while also noting that organizational identity, trademark questions, creator ownership, and reuse permission remain separate checks.[8]',
        'For publication, the archive should retain the original URL or supplied-file provenance, creator or owner, license or written permission, credit wording, access date, and any restrictions. The conceptual cover used here is an editorial illustration, not a documentary photograph and not a claim that any pictured mark is an official seal.'
      ] },
      { heading: 'Better Records Preserve More Than a Headline Number', paragraphs: [
        'The next useful record is not simply a bigger total. It is a dated, authorized register that can show unique members, active or good-standing status, classification, council or area, and the deduplication method. A parallel chapter register should record claimed name, location, source kind, authority status, recognizing body, last checked date, and notes on conflicting governance.',
        'That approach lets future readers see what changed and why. It also gives local histories, such as Zamboanga chapter or community records, a way to remain discoverable without being overstated as proof of national strength. Preservation becomes more credible when uncertainty is stored alongside the fact.'
      ] }
    ],
    callout: { label: 'Key Finding', text: 'The evidence supports careful historical context, not a current Philippines-only membership total.' },
    estimateNotes: [
      { label: 'Estimate, 2017', text: 'About 800,000 members, including community chapters known as the Triskelion Youth Movement (TYM). This is a dated estimate from a secondary research record, not a current audited total or Philippines-only census.', source: '[1]' },
      { label: 'Estimate, Separate Worldwide Claim', text: 'More than one million registered members worldwide, including Sigmas. This is a separate claim with a different date, scope, definition, and source chain; it is not comparable with the 2017 estimate.', source: '[1]' }
    ],
    sources: [
      { n: 1, label: 'Secondary research record for the attributed membership estimates (external URL withheld from public build)', href: '/references/research-context/' },
      { n: 2, label: 'Organization-associated constitution context (external URL withheld from public build)', href: '/references/research-context/' },
      { n: 3, label: 'Organization-associated global structure context (external URL withheld from public build)', href: '/references/research-context/' },
      { n: 4, label: 'Third-party constitution reference lead (external URL withheld from public build)', href: '/references/research-context/' },
      { n: 5, label: 'Triskelion Navotas City Council, Inc. public site', href: 'https://tnccinc.org/' },
      { n: 6, label: 'UPLB Office of the Vice Chancellor for Student Affairs organization record', href: 'https://uplbosa.org/orgs/uptgp' },
      { n: 7, label: 'Public anniversary collaboration record (external URL withheld from public build)', href: '/references/research-context/' },
      { n: 8, label: 'Public image rights lead (external URL withheld from public build)', href: '/references/research-context/' }
    ],
    sourceQuality: 'Source quality varies: the Senate-hosted document is a secondary research record; organization-associated materials describe their own structures; public directories and council sites are useful leads but do not by themselves establish current nationwide authority. Image pages are rights leads, not automatic reuse permission.',
    related: ['about-this-public-archive', 'verification-standards']
  }
];

export const publishedRecords = editorialRecords.filter(record => record.status === 'published' && record.publication === 'public');
export const recordBySlug = slug => publishedRecords.find(record => record.slug === slug);
