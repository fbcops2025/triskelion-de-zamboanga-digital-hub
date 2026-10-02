// Independent founder/history editorial module. Integration is intentionally opt-in.
// Names and claims are bounded by docs/founding-fathers-history-sourced-draft.md.

const esc = value => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

export const founderSource = {
  label: 'Supplied Tau Gamma Phi Research.pdf, pp. 1–4 and 6–8',
  href: '/references/research-context/',
  status: 'Research lead; authorized founder record and portrait rights pending'
};

export const founders = [
  { id: 'roy-ordinario', name: 'Roy Ordinario', initials: 'RO', profileHref: '/personalities/roy-ordinario/' },
  { id: 'vedasto-venida', name: 'Vedasto Venida', initials: 'VV', profileHref: null },
  { id: 'rodolfo-confesor', name: 'Rodolfo Confesor', initials: 'RC', profileHref: null },
  { id: 'talek-pablo', name: 'Talek Pablo', initials: 'TP', profileHref: null }
];

export const founderNotice = 'Authorized founder portraits are not yet available. These cards use a clearly labelled name/initials fallback rather than an invented or unlicensed likeness.';

export const historyCitations = [
  { id: 'source-1', label: 'Supplied Tau Gamma Phi Research.pdf, pp. 1–4 and 6–8 (research lead, pending authorization)', href: '/references/research-context/' },
  { id: 'source-2', label: 'Tau Gamma Phi history lead (2011)', href: 'http://taugammaphi1968.blogspot.com/2011/01/' },
  { id: 'source-3', label: 'Tau Gamma Phi / Triskelions history lead (2011)', href: 'http://taugammaphi1968.blogspot.com/2011/01/tau-gamma-phi-also-known-as-triskelions.html' },
  { id: 'source-4', label: 'Triskelion de Zamboanga community-history lead (2017)', href: 'https://triskelionzds.wordpress.com/2017/09/07/first-blog-post/' },
  { id: 'source-5', label: 'Official Gazette, Republic Act No. 11053 (2018)', href: 'https://www.officialgazette.gov.ph/2018/06/29/republic-act-no-11053/' },
  { id: 'source-6', label: 'GMA News: public reporting on accountability and hazing', href: 'https://www.gmanetwork.com/news/topstories/nation/404383/recto-prominent-personalities-asked-to-speak-out-vs-hazing/story/' },
  { id: 'source-7', label: 'Current PH: reported anti-hazing stance and chapter boundaries', href: 'https://currentph.com/2024/11/01/tau-gamma-phi-reaffirms-anti-hazing-stance-amid-recent-tragedies-warns-of-renegade-chapters/' }
];

export const historySections = [
  {
    kicker: '01 · The beginning',
    heading: 'A university beginning, held with care',
    paragraphs: [
      'The supplied historical study describes Tau Gamma Phi as beginning at the University of the Philippines Diliman on October 4, 1968, during a period of intense student activism and debate about campus life. It presents the founding project as an attempt to place academic life, civic responsibility, peaceful coexistence, and human solidarity alongside fraternity.',
      'This page treats the date, place, and four-name list as a research lead rather than an authorized institutional record. A custodian-approved historical record remains the missing source needed to make those details canonical.'
    ], citation: 'source-1'
  },
  {
    kicker: '02 · Four names in the record',
    heading: 'The founders are named; the portraits are not yet cleared',
    paragraphs: [
      'Project research currently leads with Roy Ordinario, Vedasto Venida, Rodolfo Confesor, and Talek Pablo. The public archive uses these source-supported short names and does not silently expand them into longer forms.',
      'No identity-verified, rights-cleared portrait is currently present in the supplied image manifest. The archive therefore uses initials and a truthful notice, never a generated face, lookalike, silhouette, or unlicensed image.'
    ], citation: 'source-1'
  },
  {
    kicker: '03 · Growth and belonging',
    heading: 'From a campus initiative to related communities',
    paragraphs: [
      'The supplied study describes later reach through university chapters, community and local structures, a women’s sorority, youth groups, alumni networks, and overseas or diaspora bodies. The meaningful story is a widening set of communities carrying shared ideals into different settings.',
      'Those forms must not be collapsed into a claim that every chapter, council, sorority, youth, alumni, or overseas body is one legal organization or follows one uncontested governance structure. Each local history needs its own approved source, preferred name, date, and relationship statement.'
    ], citation: 'source-1'
  },
  {
    kicker: '04 · Service and memory',
    heading: 'Service belongs in the archive when it is documented',
    paragraphs: [
      'A blood drive, relief response, educational activity, or community partnership belongs in a public history only when the responsible chapter or council, location, date, action, participants, and outcome are recorded from an approved public source.',
      'This project does not independently verify a complete Triskelion de Zamboanga activity archive. Local examples are therefore left open for official submission instead of being turned into invented totals, beneficiary counts, or national audited claims.'
    ], citation: 'source-4'
  },
  {
    kicker: '05 · Accountability now',
    heading: 'Belonging cannot require hazing or coercion',
    paragraphs: [
      'The modern story must include a clear safety boundary: hazing and coercive violence are not acceptable substitutes for belonging, leadership, or fraternity. Republic Act No. 11053, the Philippine Anti-Hazing Act of 2018, is the legal reference for this public safety language.',
      'This is an editorial commitment for the archive, not a claim that every chapter complies or that one incident proves a universal pattern. Public claims about organizations and incidents require careful attribution and an approved source.'
    ], citation: 'source-5'
  },
  {
    kicker: '06 · An open record',
    heading: 'The next chapter should be contributed, not assumed',
    paragraphs: [
      'Brothers, sisters, alumni, chapters, councils, families, and community partners can strengthen this history by contributing an authorized founder portrait, a chapter history, a dated service record, or a correction to a name or source.',
      'Every contribution should carry provenance and approval status. Until those records arrive, the archive shows the gap openly rather than filling it with a generated face, a random lookalike, a fake biography, or an unsupported timeline.'
    ], citation: 'source-1'
  }
];

export function renderFounderCard(founder) {
  const fallback = `<div class="founder-portrait founder-portrait--fallback" role="img" aria-label="Portrait unavailable for ${esc(founder.name)}"><span aria-hidden="true">${esc(founder.initials)}</span><small>Portrait awaiting authorized asset</small></div>`;
  const title = founder.profileHref
    ? `<a href="${esc(founder.profileHref)}">${esc(founder.name)}</a>`
    : esc(founder.name);
  const context = founder.profileHref
    ? `<a class="founder-card-link" href="${esc(founder.profileHref)}">Read grounded context →</a>`
    : `<span class="founder-card-link founder-card-link--muted">Founder context page pending approved source</span>`;
  return `<article class="founder-card founder-card--editorial" data-founder-id="${esc(founder.id)}">${fallback}<div class="founder-card-body"><p class="founder-card-kicker">Founding-generation research lead</p><h3>${title}</h3><p class="founder-card-status">Name spelling follows the current supplied research lead. Identity, biography, and portrait rights remain subject to authorized confirmation.</p>${context}</div></article>`;
}

export function renderFoundersGrid() {
  return `<section class="founders-editorial" aria-labelledby="founders-editorial-title"><div class="founders-editorial-heading"><p class="eyebrow">Four names in the supplied record</p><h2 id="founders-editorial-title">The founding generation</h2><p>${esc(founderNotice)}</p></div><div class="founders-grid founders-grid--editorial">${founders.map(renderFounderCard).join('')}</div></section>`;
}

export function renderHistoryPage() {
  const sections = historySections.map(section => `<section class="history-section"><p class="eyebrow">${esc(section.kicker)}</p><h2>${esc(section.heading)}</h2>${section.paragraphs.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}<p class="history-citation"><a href="${esc(historyCitations.find(source => source.id === section.citation)?.href || '#')}">Source: ${esc(historyCitations.find(source => source.id === section.citation)?.label || 'source note')}</a></p></section>`).join('');
  const sources = historyCitations.map(source => `<li id="${esc(source.id)}"><a href="${esc(source.href)}">${esc(source.label)}</a></li>`).join('');
  return `<article class="founders-history-page"><header class="history-hero"><p class="eyebrow">Tau Gamma Phi · history and context</p><h1>From a university beginning to a living Triskelion family</h1><p class="history-dek">A source-aware account of founding context, growth, service, and the safety responsibilities that shape the record today.</p><p class="history-notice">Research draft for review. This page does not replace an authorized council publication or claim national audited totals.</p></header>${sections}<section class="history-sources" aria-labelledby="history-sources-title"><p class="eyebrow">Source trail</p><h2 id="history-sources-title">Read the references</h2><ol>${sources}</ol></section></article>`;
}
