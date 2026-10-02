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
  { id: 'roy-ordinario', name: 'Roy Ordinario', initials: 'RO', profileHref: '/founding-fathers/roy-ordinario/' },
  { id: 'vedasto-venida', name: 'Vedasto Venida', initials: 'VV', profileHref: '/founding-fathers/vedasto-tito-venida/' },
  { id: 'rodolfo-confesor', name: 'Rodolfo Confesor', initials: 'RC', profileHref: '/founding-fathers/rodolfo-rod-confesor/' },
  { id: 'talek-pablo', name: 'Talek Pablo', initials: 'TP', profileHref: '/founding-fathers/talek-j-pablo/' }
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
  { kicker: '01 · Founding context', heading: 'A university beginning on October 4, 1968', paragraphs: ['The supplied historical study places Tau Gamma Phi at the University of the Philippines Diliman on October 4, 1968, amid intense student activism and debate about campus life. It frames the founding project around academic life, civic responsibility, peaceful coexistence, and human solidarity alongside fraternity.[1]', 'That date and place remain a cited research lead, not an authorized institutional record. The archive keeps the distinction visible until an approved historical custodian confirms the canonical account.'], citation: 'source-1' },
  { kicker: '02 · Four names in the record', heading: 'Roy Ordinario, Vedasto Venida, Rodolfo Confesor, and Talek Pablo', paragraphs: ['Those are the four short names supported by the current supplied research. This page does not invent expanded given names, titles, biographies, or other identity details.[1]', 'Verified photographs are pending. The hero uses labelled initials only: no AI-generated faces, fake likenesses, silhouettes presented as people, or unlicensed portraits.'], citation: 'source-1' },
  { kicker: '03 · Beyond the university', heading: 'A campus initiative becomes a wider family of communities', paragraphs: ['The research describes the movement extending beyond its initial university setting through university chapters and community or local structures.[1][2] That expansion is best read as a history of related communities carrying shared ideals into different places, not as proof that every body has one legal form or uncontested governance.', 'A chapter or council history should therefore name its place, date, action, relationship, and source before it is treated as a public institutional claim.'], citation: 'source-2' },
  { kicker: '04 · University and community chapters', heading: 'Different settings, shared responsibility', paragraphs: ['University chapters carry the founding memory in campus settings; community chapters connect the tradition to neighborhoods and local civic life.[1][3] The public archive preserves both kinds of story while keeping local recognition and governance questions separate from the national Tau Gamma Phi identity.', 'The Zamboanga context is commissioned by Limbaga Road Chapter and connected to the Triskelion de Zamboanga Council; that local context does not by itself establish national authorization.'], citation: 'source-3' },
  { kicker: '05 · Sorority, youth, and alumni structures', heading: 'The family widened through women, youth, and alumni', paragraphs: ['The supplied study also records a women’s sorority, youth structures, and alumni networks as part of the wider Triskelion story.[1] These are important forms of belonging and continuity, but their names, dates, relationships, and governance should be documented from their own approved records rather than inferred from a general fraternity narrative.', 'The archive welcomes those records with provenance and consent, especially where a local group’s preferred identity differs from a national or historical label.'], citation: 'source-1' },
  { kicker: '06 · Overseas presence', heading: 'A diaspora presence that needs local records', paragraphs: ['The research describes overseas or diaspora bodies carrying connections into Filipino communities abroad.[1][2] This page records that presence as a research-supported theme, not as a complete directory, membership census, or legal recognition list.', 'Each overseas account should identify the community, place, period, activity, and source. Unsupported totals and claims of universal coordination are intentionally left out.'], citation: 'source-2' },
  { kicker: '07 · Service', heading: 'Service belongs in the archive when it is documented', paragraphs: ['Blood drives, relief responses, education, and community partnerships can connect the founding ideal to present work, but only a dated, sourced record can establish who acted, where, what happened, and what outcome was reported.[4]', 'This project does not independently verify a complete Triskelion de Zamboanga activity archive. It therefore invites official submissions rather than inventing beneficiaries, totals, or national audit claims.'], citation: 'source-4' },
  { kicker: '08 · Safety and accountability', heading: 'Contemporary fraternity history must reject hazing', paragraphs: ['Hazing and coercive violence are not acceptable substitutes for belonging, leadership, or fraternity. Republic Act No. 11053, the Philippine Anti-Hazing Act of 2018, is the legal reference for this safety boundary.[5]', 'Public reporting and organizational statements show why attribution and accountability matter.[6][7] This page does not claim that every chapter complies or that one incident proves a universal pattern; it states the responsibility plainly and points readers to the law and sources.'], citation: 'source-5' },
  { kicker: '09 · An open record', heading: 'The next chapter should be contributed, not assumed', paragraphs: ['Brothers, sisters, alumni, chapters, councils, families, and community partners can contribute an authorized portrait, chapter history, dated service record, or correction.[1] Every contribution should retain provenance and approval status.', 'Until those records arrive, the archive shows the gap openly rather than filling it with a generated face, random lookalike, fake biography, or unsupported timeline.'], citation: 'source-1' }
];

// Per-founder status lines so the four cards do not repeat one sentence.
const founderStatus = {
  'roy-ordinario': 'The earliest of the four names in the supplied record, and the one most often cited as first among the founding group. The record supports the name; it does not yet support a biography.',
  'vedasto-venida': 'Cited in public reporting as having spoken about the fraternity decades later, which is why this name reaches beyond the founding era itself. Full identity details remain unconfirmed.',
  'rodolfo-confesor': 'A name carried in the founding record whose later role in the wider expansion is described in the supplied material but not yet documented from an authorized source.',
  'talek-pablo': 'The fourth name in the founding record. As with the others, the archive holds the name and waits for an approved record before adding biography or likeness.'
};

export function renderFounderCard(founder) {
  const fallback = `<div class="founder-portrait founder-portrait--fallback" role="img" aria-label="Portrait unavailable for ${esc(founder.name)}"><span aria-hidden="true">${esc(founder.initials)}</span><small>Portrait awaiting authorized asset</small></div>`;
  const title = founder.profileHref
    ? `<a href="${esc(founder.profileHref)}">${esc(founder.name)}</a>`
    : esc(founder.name);
  const context = founder.profileHref
    ? `<a class="founder-card-link" href="${esc(founder.profileHref)}">Read Historical Context →</a>`
    : `<span class="founder-card-link founder-card-link--muted">Additional historical context will be added with an authorized source.</span>`;
  const status = founderStatus[founder.id] || 'This name is preserved as it appears in the supplied historical record. Biographical detail and an authorized portrait will be added when they can be documented.';
  return `<article class="founder-card founder-card--editorial" data-founder-id="${esc(founder.id)}">${fallback}<div class="founder-card-body"><p class="founder-card-kicker">FOUNDING GENERATION</p><h3>${title}</h3><p class="founder-card-status">${esc(status)}</p>${context}</div></article>`;
}

export function renderFoundersGrid() {
  return `<section class="founders-editorial" aria-labelledby="founders-editorial-title"><div class="founders-editorial-heading"><p class="eyebrow">Four names in the supplied record</p><h2 id="founders-editorial-title">The founding generation</h2><p>${esc(founderNotice)}</p></div><div class="founders-grid founders-grid--editorial">${founders.map(renderFounderCard).join('')}</div></section>`;
}

const citeText = value => esc(value).replace(/\[(\d+)\]/g, '<sup class="history-inline-citation"><a href="#source-$1" aria-label="Go to source $1">[$1]</a></sup>');

export function renderHistoryPage() {
  const sections = historySections.map(section => `<section class="history-section"><p class="eyebrow">${esc(section.kicker)}</p><h2>${esc(section.heading)}</h2>${section.paragraphs.map(paragraph => `<p>${citeText(paragraph)}</p>`).join('')}<p class="history-citation"><a href="#${esc(section.citation)}">Read the linked source note →</a></p></section>`).join('');
  const sources = historyCitations.map((source, index) => `<li id="${esc(source.id)}"><a href="${esc(source.href)}"${source.href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''}>[${index + 1}] ${esc(source.label)}</a></li>`).join('');
  return `<article class="founders-history-page"><header class="history-hero"><p class="eyebrow">NATIONAL HISTORY</p><h1>From a University Beginning to a Living Triskelion Family</h1><p class="history-dek">At the University of the Philippines Diliman, the founding generation established what would become Tau Gamma Phi.</p><p class="history-dek">That beginning created the reference point from which later chapters, councils, and generations would trace their own place within the fraternity developing history. The pages below follow that thread through people, places, events, and the significance each period carried forward.</p><p class="history-notice">This history follows the available sources and preserves the limits of the record. Authorized founder portraits and fuller biographies have not yet been added.</p><p><a class="read-link" href="#history-sources-title">Read the Sources and Historical Record →</a></p></header>${sections}<section class="history-sources" aria-labelledby="history-sources-title"><p class="eyebrow">SOURCES AND HISTORICAL RECORD</p><h2 id="history-sources-title">Read the References</h2><ol>${sources}</ol></section></article>`;
}

export function mountFounderEditorial(root = document) {
  const grid = root.querySelector('#founders-grid');
  if (grid) grid.innerHTML = founders.map(renderFounderCard).join('');
  root.querySelectorAll('.timeline-verif').forEach(node => { node.textContent = 'Research lead · approval needed'; });
  root.querySelectorAll('.timeline-card p').forEach(node => {
    if (node.textContent.includes('Deployment of the National Triskelion Legacy & Impact Platform')) node.textContent = 'Digital preservation is an editorial direction for this archive; deployment does not establish national audit infrastructure.';
  });
}
