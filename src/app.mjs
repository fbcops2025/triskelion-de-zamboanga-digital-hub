import { content } from './content.mjs';
import { notableDomains, notableProfiles } from './notables.mjs';
import { portraitMap } from './portrait-map.mjs';
import { initHeaderNavigation } from './header-navigation.mjs';
import * as d3 from 'd3';
import {
  auth,
  db,
  collection,
  addDoc,
  serverTimestamp,
} from './firebase.mjs';

const $ = (selector) => document.querySelector(selector);

const siteNav = $('#site-nav');
if (siteNav) initHeaderNavigation({ root: siteNav, menuToggle: '.menu-toggle', mobilePanel: siteNav });
// ==========================================
// 1. RENDER PLATFORM PILLARS
// ==========================================
const pillarsContainer = $('#pillars-container');
if (pillarsContainer && content.pillars) {
  pillarsContainer.innerHTML = content.pillars.map(p => `
    <article class="pillar-card">
      <div>
        <span class="eyebrow">${p.eyebrow}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
      <div class="pillar-quote">“${p.quote}”</div>
    </article>
  `).join('');
}

// ==========================================
// 2. RENDER NATIONAL IMPACT METRICS
// ==========================================
const impactCountersGrid = $('#impact-counters-grid');
const evidenceSourceById = new Map((content.evidenceSources || []).map(source => [source.id, source]));
const escapeEvidenceHtml = value => String(value ?? '').replace(/[&<>\"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#39;' }[char]));
const evidenceCorrectionHref = metric => `mailto:hello@weforgeweb.com?subject=${encodeURIComponent(`Suggest an evidence correction: impact metric ${metric.label}`)}&body=${encodeURIComponent(`Impact metric: ${metric.label}\\nDisplayed value: ${metric.value}\\n\\nPlease identify the claim and provide a public supporting reference.`)}`;
function renderEvidenceSource(source) {
  const link = source.actualUrl
    ? `<a href="${escapeEvidenceHtml(source.actualUrl)}" target="_blank" rel="noreferrer">Open actual source ↗</a>`
    : '<span>Local source only; no public URL</span>';
  return `<li><strong>${escapeEvidenceHtml(source.title)}</strong><span class="evidence-source-meta">${escapeEvidenceHtml(source.sourceKind)} · ref ${escapeEvidenceHtml(source.refNumber)} · ${escapeEvidenceHtml(source.pdfPage)}</span><span>${escapeEvidenceHtml(source.supports)}</span><span class="evidence-review-status">${escapeEvidenceHtml(source.reviewStatus)}</span>${link}</li>`;
}
if (impactCountersGrid && content.impactMetrics) {
  impactCountersGrid.innerHTML = content.impactMetrics.counters.map(c => {
    const sources = (c.sourceIds || []).map(id => evidenceSourceById.get(id)).filter(Boolean);
    return `
    <article class="impact-metric-card" id="impact-${escapeEvidenceHtml(c.id)}">
      <span class="metric-icon" aria-hidden="true">${escapeEvidenceHtml(c.icon)}</span>
      <div class="impact-metric-value">${escapeEvidenceHtml(c.value)}</div>
      <span class="impact-metric-label">${escapeEvidenceHtml(c.label)}</span>
      <span class="impact-metric-delta">${escapeEvidenceHtml(c.delta)}</span>
      <details class="impact-evidence">
        <summary aria-label="See references for ${escapeEvidenceHtml(c.label)}">See references</summary>
        <p class="impact-evidence-context">Claim-level evidence for this tile. This is the associated source set currently known from the research mapping—not an exhaustive bibliography.</p>
        <ul>${sources.map(renderEvidenceSource).join('')}</ul>
        <p class="impact-evidence-correction"><a href="${evidenceCorrectionHref(c)}">Suggest an evidence correction</a></p>
      </details>
    </article>`;
  }).join('');
}

// ==========================================
// 2B. RENDER PUBLIC PRINCIPLES CONTEXT
// ==========================================
const principlesGrid = $('#principles-grid');
if (principlesGrid && content.publicPrinciples) {
  principlesGrid.innerHTML = content.publicPrinciples.map(principle => {
    const sources = (principle.sourceIds || []).map(id => evidenceSourceById.get(id)).filter(Boolean);
    return `<article class="principle-card">
      <span class="principle-kind">${escapeEvidenceHtml(principle.kind)}</span>
      <h4>${escapeEvidenceHtml(principle.title)}</h4>
      <p>${escapeEvidenceHtml(principle.text)}</p>
      <a class="principle-source-anchor" href="#${escapeEvidenceHtml(principle.sourceAnchor)}">See supporting sources ↗</a>
      <span class="principle-source-count">${sources.length} associated source${sources.length === 1 ? '' : 's'} in the current mapping</span>
    </article>`;
  }).join('');
}

// ==========================================
// 3. RENDER FOUNDING FATHERS DOSSIER
// ==========================================
const foundersGrid = $('#founders-grid');
if (foundersGrid && content.foundingFathers) {
  foundersGrid.innerHTML = content.foundingFathers.map(f => `
    <article class="founder-card">
      <div>
        <span class="founder-title">${f.title}</span>
        <h3>${f.name}</h3>
        <p>Listed in a historical source. Public biography withheld until an approved primary record and consent are attached.</p>
      </div>
      <div class="founder-meta">
        <span>${f.campus} · ${f.year}</span>
        <span class="status-pill">Research lead · approval needed</span>
      </div>
    </article>
  `).join('');
}

// ==========================================
// 4. RENDER HISTORICAL TIMELINE
// ==========================================
const timelineContainer = $('#timeline-container');
if (timelineContainer && content.historicalTimeline) {
  timelineContainer.innerHTML = content.historicalTimeline.map(t => `
    <div class="timeline-node">
      <div class="timeline-era-badge">${t.era.split(' ')[0]}</div>
      <article class="timeline-card">
        <span class="timeline-year">${t.year}</span>
        <h3>${t.title}</h3>
        <p>Historical lead for this period. Public detail remains pending approved primary records and council review.</p>
        <span class="timeline-verif">Source trail: ${t.verification} · approval needed</span>
      </article>
    </div>
  `).join('');
}

// ==========================================
// 5. RENDER CHAPTER GENEALOGY & GLOBAL PILOT TREE
// ==========================================
const genealogyTree = $('#genealogy-tree');
if (genealogyTree && content.chapterGenealogy) {
  genealogyTree.innerHTML = content.chapterGenealogy.map(ch => `
    <article class="genealogy-card">
      <span class="genealogy-id-tag">${ch.id}</span>
      <h3>${ch.name}</h3>
      <p><strong>${ch.institution}</strong> · ${ch.location}</p>
      <div class="genealogy-footer">
        <span>Established: ${ch.established}</span>
        <span class="status-pill">${ch.verification} · approval needed</span>
      </div>
    </article>
  `).join('');
}

// ==========================================
// 6. D3 ORGANIZATION MAP
// ==========================================
const organizationMapCanvas = $('#organization-map-canvas');
const organizationMapStatus = $('#organization-map-status');
function renderOrganizationMap() {
  if (!organizationMapCanvas || !content.organizationMap?.length) return;
  organizationMapCanvas.innerHTML = '';
  const width = Math.max(320, organizationMapCanvas.clientWidth || 900);
  const height = width < 620 ? 620 : 560;
  const nodes = content.organizationMap.map(node => ({ ...node }));
  const links = nodes.filter(node => node.parentId).map(node => ({ source: node.parentId, target: node.id }));
  const svg = d3.select(organizationMapCanvas).append('svg').attr('viewBox', `0 0 ${width} ${height}`).attr('role', 'presentation');
  const group = svg.append('g');
  svg.append('defs').append('marker').attr('id', 'map-arrow').attr('viewBox', '0 -5 10 10').attr('refX', 18).attr('refY', 0).attr('markerWidth', 5).attr('markerHeight', 5).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#c6a13b');
  const link = group.append('g').attr('class', 'map-links').selectAll('line').data(links).join('line').attr('class', 'map-link').attr('marker-end', 'url(#map-arrow)');
  const node = group.append('g').attr('class', 'map-nodes').selectAll('g').data(nodes).join('g').attr('class', d => `map-node map-node-${d.level}`).call(d3.drag().on('start', (event, d) => { if (!event.active) simulation.alphaTarget(0.25).restart(); d.fx = d.x; d.fy = d.y; }).on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; }).on('end', (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));
  node.append('circle').attr('r', d => d.level === 'national' ? 25 : d.level === 'regional' ? 18 : 13);
  node.append('text').attr('class', 'map-node-label').attr('dy', d => d.level === 'national' ? 42 : 34).text(d => d.shortName);
  node.append('title').text(d => `${d.name} · ${d.location} · ${d.status}`);
  const simulation = d3.forceSimulation(nodes).force('link', d3.forceLink(links).id(d => d.id).distance(width < 620 ? 95 : 125)).force('charge', d3.forceManyBody().strength(-280)).force('center', d3.forceCenter(width / 2, height / 2)).force('collision', d3.forceCollide().radius(d => d.level === 'national' ? 48 : 40)).on('tick', () => {
    link.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    node.attr('transform', d => `translate(${Math.max(30, Math.min(width - 30, d.x))},${Math.max(30, Math.min(height - 45, d.y))})`);
  });
  if (organizationMapStatus) organizationMapStatus.textContent = `${nodes.length} platform nodes · ${links.length} reporting connections · Drag a node to explore.`;
}
renderOrganizationMap();
window.addEventListener('resize', renderOrganizationMap);

// ==========================================
// 7. RENDER BROTHERHOOD STORIES
// ==========================================
const storiesGrid = $('#stories-grid');
if (storiesGrid && content.brotherhoodStories) {
  storiesGrid.innerHTML = `<article class="approval-empty-state"><span class="eyebrow">Public records pending</span><h3>Stories will appear after source review.</h3><p>This is a historical lead, not publication authority. Submit a story with a source and consent. No biography, beneficiary account, or impact story is treated as verified by default.</p><a class="button button-secondary" href="#contribute">Submit a sourced story</a></article>`;
}

// ==========================================
// 8. ARTICLES & NEWS PUBLIC FEED
// ==========================================
const articlesGrid = $('#articles-grid');
const articleCategoryLabels = { news: 'National news', service: 'Service and impact', history: 'History and legacy', councils: 'Councils and chapters', safety: 'Safety and accountability' };
const articleSearch = $('#article-search');
const articleSearchClear = $('#article-search-clear');
const articleSearchStatus = $('#article-search-status');
const articleReader = $('#article-reader');
const articleReaderContent = $('#article-reader-content');
const articleReaderClose = $('#article-reader-close');
let allPublishedArticles = [];
let activeArticleCategory = 'all';
const escapeArticleHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function openArticle(article) {
  if (!articleReader || !articleReaderContent) return;
  articleReaderContent.innerHTML = `
    <span class="story-category-tag">${escapeArticleHtml(articleCategoryLabels[article.category] || article.category || 'National update')}</span>
    <h3>${escapeArticleHtml(article.title)}</h3>
    <div class="article-reader-meta">${escapeArticleHtml(article.author || 'National Council')} · ${escapeArticleHtml(article.date || 'Date to be confirmed')}</div>
    ${article.imageUrl ? `<img class="article-reader-image" src="${escapeArticleHtml(article.imageUrl)}" alt="${escapeArticleHtml(article.title)} article image" />` : ''}
    <div class="article-reader-body">${escapeArticleHtml(article.body || article.excerpt || '')}</div>
    ${article.sourceUrl ? `<a class="article-reader-source" href="${escapeArticleHtml(article.sourceUrl)}" target="_blank" rel="noreferrer">View the source or reference ↗</a>` : ''}
  `;
  articleReader.hidden = false;
  articleReader.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderArticles(articles, query = '', category = 'all') {
  if (!articlesGrid) return;
  allPublishedArticles = articles.filter(article => article.status === 'published');
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = allPublishedArticles.filter(article => {
    const matchesCategory = category === 'all' || article.category === category;
    const searchable = [article.title, article.excerpt, article.body, article.author, articleCategoryLabels[article.category]].join(' ').toLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });
  if (articleSearchStatus) articleSearchStatus.textContent = `${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'} found`;
  articlesGrid.innerHTML = filtered.length ? filtered.map((article, index) => `
    <article class="article-card">
      <div class="article-card-image-wrap">${article.imageUrl ? `<img class="article-card-image" src="${article.imageUrl}" alt="${article.title} article image" loading="lazy" />` : '<div class="article-card-image article-card-image-empty">National editorial desk</div>'}</div>
      <div class="article-card-body">
        <div class="article-card-meta"><span class="story-category-tag">${articleCategoryLabels[article.category] || article.category || 'National update'}</span><time datetime="${article.date || ''}">${article.date || 'Undated'}</time></div>
        <h3><button class="article-read-button" type="button" data-article-index="${index}">${article.title}</button></h3>
        <p>${article.excerpt || article.body || ''}</p>
        <div class="article-card-byline"><strong>${article.author || 'National Council'}</strong><button class="article-read-button" type="button" data-article-index="${index}">Read story ↗</button></div>
      </div>
    </article>
  `).join('') : '<p class="empty-state">Walang nahanap na story. Subukan ang ibang keyword o category.</p>';
  articlesGrid.querySelectorAll('.article-read-button').forEach(button => {
    button.addEventListener('click', () => openArticle(filtered[Number(button.dataset.articleIndex)]));
  });
}
renderArticles(content.articles || []);

if (articleSearch) articleSearch.addEventListener('input', () => renderArticles([...allPublishedArticles], articleSearch.value, activeArticleCategory));
if (articleSearchClear) articleSearchClear.addEventListener('click', () => { articleSearch.value = ''; activeArticleCategory = 'all'; document.querySelectorAll('.article-filter').forEach(button => button.classList.toggle('is-active', button.dataset.category === 'all')); renderArticles([...allPublishedArticles]); });
document.querySelectorAll('.article-filter').forEach(button => button.addEventListener('click', () => {
  activeArticleCategory = button.dataset.category || 'all';
  document.querySelectorAll('.article-filter').forEach(filter => filter.classList.toggle('is-active', filter === button));
  renderArticles([...allPublishedArticles], articleSearch?.value || '', activeArticleCategory);
}));
if (articleReaderClose) articleReaderClose.addEventListener('click', () => { if (articleReader) articleReader.hidden = true; });

// ==========================================
// 7. RENDER DIGITAL MUSEUM WITH ERA FILTER
// ==========================================
const museumGrid = $('#museum-grid');
function renderMuseumArtifacts(eraFilter = 'ALL') {
  if (!museumGrid || !content.digitalMuseum) return;
  const filtered = eraFilter === 'ALL'
    ? content.digitalMuseum
    : content.digitalMuseum.filter(m => m.era.toLowerCase().includes(eraFilter.toLowerCase()));

  museumGrid.innerHTML = filtered.map(m => `
    <article class="museum-card">
      <div class="museum-card-header">
        <span class="museum-era">${m.era}</span>
        <span class="status-pill">Contextual lead · approval needed</span>
      </div>
      <h3>${m.title}</h3>
      <p>Contextual catalog lead from cited sources. Description and source details remain pending rights and review.</p>
      <div class="museum-provenance">
        <strong>Creator / Source:</strong> ${m.creator} (${m.date})<br />
        <small>Source: ${m.provenance}</small>
      </div>
    </article>
  `).join('');
}

renderMuseumArtifacts('ALL');

const eraButtons = document.querySelectorAll('#museum-era-buttons .era-btn');
eraButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    eraButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const era = btn.getAttribute('data-era') || 'ALL';
    renderMuseumArtifacts(era);
  });
});

// ==========================================
// 8. RENDER NOTABLE PERSONALITIES RESEARCH COLLECTION
// ==========================================
const notablesGrid = $('#notables-grid');
const notablesCollection = $('#notables-collection');
const notableDetail = $('#notable-detail');
let activeNotableDomain = 'all';

function renderNotableDetail(profile) {
  if (!notableDetail || !profile) return;
  const professionalSource = profile.source
    ? `<a href="${escapeArticleHtml(profile.source.url)}" target="_blank" rel="noreferrer">${escapeArticleHtml(profile.source.label)} <span aria-hidden="true">↗</span></a>`
    : '<span>Professional source link is being normalized.</span>';
  const associationSource = profile.associationSource
    ? `<a href="${escapeArticleHtml(profile.associationSource.url)}" target="_blank" rel="noreferrer">${escapeArticleHtml(profile.associationSource.label)} <span aria-hidden="true">↗</span></a>`
    : '<span>Affiliation source is still under review.</span>';
  notableDetail.innerHTML = `
    <div class="notable-detail-mark">${escapeArticleHtml(profile.initials)}</div>
    <div class="notable-detail-copy">
      <span class="notable-detail-kicker">Selected research record</span>
      <h3>${escapeArticleHtml(profile.name)}</h3>
      <p>${escapeArticleHtml(profile.summary)}</p>
      <dl class="notable-evidence-list">
        <div><dt>Association record</dt><dd>${escapeArticleHtml(profile.association)}</dd></div>
        <div><dt>Professional record</dt><dd>${professionalSource}</dd></div>
        <div><dt>Affiliation source</dt><dd>${associationSource}</dd></div>
      </dl>
    </div>
  `;
}

function renderNotables(domain = 'all') {
  if (!notablesGrid) return;
  const visibleProfiles = domain === 'all'
    ? notableProfiles
    : notableProfiles.filter(profile => profile.domainKey === domain);
  notablesGrid.innerHTML = visibleProfiles.map((profile, index) => `
    <button class="notable-card" type="button" data-notable-id="${escapeArticleHtml(profile.id)}" style="--notable-index:${index}" aria-pressed="false">
      <span class="notable-orbit" aria-hidden="true"></span>
      <span class="notable-monogram" aria-hidden="true">${portraitMap.get(profile.id) ? `<img src="${escapeArticleHtml(portraitMap.get(profile.id))}" alt="" width="320" height="400" loading="lazy" decoding="async" />` : escapeArticleHtml(profile.initials)}</span>
      <span class="notable-field-tag">${escapeArticleHtml(profile.domain)}</span>
      <h3>${escapeArticleHtml(profile.name)}</h3>
      <span class="notable-role">${escapeArticleHtml(profile.role)}</span>
      <p>${escapeArticleHtml(profile.summary)}</p>
      <span class="notable-verif">${escapeArticleHtml(profile.evidence)}</span>
      <span class="notable-select">Open research note <span aria-hidden="true">↗</span></span>
    </button>
  `).join('');
  notablesGrid.querySelectorAll('.notable-card').forEach(card => {
    card.addEventListener('click', () => {
      const profile = notableProfiles.find(item => item.id === card.dataset.notableId);
      notablesGrid.querySelectorAll('.notable-card').forEach(item => item.setAttribute('aria-pressed', String(item === card)));
      renderNotableDetail(profile);
      if (window.matchMedia('(max-width: 800px)').matches) notableDetail?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

if (notablesGrid && notablesCollection) {
  notablesCollection.innerHTML = `
    <div class="notables-collection-intro">
      <div>
        <span class="notables-count">${notableProfiles.length} records in review</span>
        <p>Professional achievements and association evidence are intentionally separated. Select a profile to see what is linked, what remains contextual, and what needs an approved source.</p>
      </div>
      <div class="notable-filter-row" role="group" aria-label="Filter notable personalities by field">
        ${notableDomains.map(domain => `<button class="notable-filter${domain.key === 'all' ? ' is-active' : ''}" type="button" data-notable-domain="${domain.key}">${domain.label}</button>`).join('')}
      </div>
    </div>
  `;
  notablesCollection.querySelectorAll('.notable-filter').forEach(button => {
    button.addEventListener('click', () => {
      activeNotableDomain = button.dataset.notableDomain || 'all';
      notablesCollection.querySelectorAll('.notable-filter').forEach(item => item.classList.toggle('is-active', item === button));
      renderNotables(activeNotableDomain);
      renderNotableDetail(notableProfiles.find(profile => activeNotableDomain === 'all' || profile.domainKey === activeNotableDomain));
    });
  });
  renderNotables();
  renderNotableDetail(notableProfiles[0]);
}

// ==========================================
// 9. UNIFIED INSTANT SEARCH ACROSS ARCHIVE
// ==========================================
const archiveSearch = $('#archive-search');
const searchStatus = $('#search-status');
const searchDynamicResults = $('#search-dynamic-results');

const searchableIndex = [
  ...content.historicalTimeline.map(t => ({ title: t.title, subtitle: `${t.year} · Timeline`, desc: t.description, category: 'Historical Event' })),
  ...content.chapterGenealogy.map(c => ({ title: c.name, subtitle: `${c.id} · ${c.location}`, desc: c.institution, category: 'Chapter Genealogy' })),
  ...content.foundingFathers.map(f => ({ title: f.name, subtitle: f.title, desc: f.biography, category: 'Founding Father' })),
  ...content.digitalMuseum.map(m => ({ title: m.title, subtitle: `${m.era} · ${m.date}`, desc: m.description, category: 'Museum Artifact' })),
  ...content.brotherhoodStories.map(s => ({ title: s.title, subtitle: `${s.category} · ${s.chapter}`, desc: s.excerpt, category: 'Brotherhood Story' })),
  ...notableProfiles.map(n => ({ title: n.name, subtitle: `${n.domain} · ${n.role}`, desc: `${n.summary} ${n.evidence}`, category: 'Notable Personality Research' }))
];

if (archiveSearch && searchStatus && searchDynamicResults) {
  const archiveRecordCount = searchableIndex.length;
  archiveSearch.addEventListener('input', (event) => {
    const queryStr = event.target.value.trim().toLowerCase();
    if (!queryStr) {
      searchStatus.textContent = `Archive index ready: ${archiveRecordCount} cited records currently indexed.`;
      searchDynamicResults.innerHTML = '';
      return;
    }

    const matches = searchableIndex.filter(item =>
      item.title.toLowerCase().includes(queryStr) ||
      item.subtitle.toLowerCase().includes(queryStr) ||
      item.desc.toLowerCase().includes(queryStr) ||
      item.category.toLowerCase().includes(queryStr)
    );

    searchStatus.textContent = `Found ${matches.length} indexed leads matching “${queryStr}”. Each result still needs source approval:`;
    if (matches.length === 0) {
      searchDynamicResults.innerHTML = `
        <div class="search-result-item" style="grid-column: 1 / -1;">
          <h4>No immediate records found for “${queryStr}”</h4>
          <p>You can submit historical documents, photos, or propose a correction via the Contribute form below.</p>
        </div>
      `;
    } else {
      searchDynamicResults.innerHTML = matches.slice(0, 8).map(m => `
        <div class="search-result-item">
          <span class="search-category-tag">Indexed lead · ${m.category}</span>
          <h4>${m.title}</h4>
          <p><strong>${m.subtitle}</strong></p>
          <p>${m.desc.slice(0, 140)}...</p>
        </div>
      `).join('');
    }
  });
}

// Navigation Toggle
const navToggle = $('.menu-toggle');
const siteNav = $('#site-nav');
if (navToggle && siteNav) {
  let lastMenuFocus = navToggle;
  const closeMenu = ({ restoreFocus = false } = {}) => {
    navToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
    document.querySelectorAll('#site-nav details').forEach(menu => { menu.open = false; });
    if (restoreFocus) lastMenuFocus?.focus();
  };
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    if (open) closeMenu({ restoreFocus: true });
    else {
      lastMenuFocus = document.activeElement instanceof HTMLElement ? document.activeElement : navToggle;
      navToggle.setAttribute('aria-expanded', 'true');
      siteNav.classList.add('is-open');
      siteNav.querySelector('a, summary')?.focus();
    }
  });
  document.querySelectorAll('#site-nav a').forEach(link => {
    link.addEventListener('click', () => closeMenu());
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      closeMenu({ restoreFocus: true });
    }
  });
}

// Floating Label Helper
function attachFloatingLabelHandlers(formSelector) {
  document.querySelectorAll(`${formSelector} .form-input`).forEach(input => {
    const field = input.closest('.form-field');
    if (!field) return;

    const updateState = () => {
      if (input.value && input.value.trim() !== '') {
        field.classList.add('has-value');
      } else {
        field.classList.remove('has-value');
      }
    };

    input.addEventListener('focus', () => field.classList.add('is-focused'));
    input.addEventListener('blur', () => {
      field.classList.remove('is-focused');
      updateState();
    });
    input.addEventListener('input', updateState);
    input.addEventListener('change', updateState);
    updateState();
  });
}

attachFloatingLabelHandlers('#contribution-form');

// ==========================================
// 10. HISTORICAL CONTRIBUTION & CORRECTIONS INTAKE
// ==========================================
const contribForm = $('#contribution-form');
const contribSubmitBtn = $('#contrib-submit-btn');
const contribBtnText = contribSubmitBtn?.querySelector('.btn-text');
const contribStatus = $('#contrib-form-status');

if (contribForm && contribSubmitBtn) {
  contribForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (contribSubmitBtn.classList.contains('is-processing') || contribSubmitBtn.classList.contains('is-success')) return;

    const contributorName = $('#contrib-name')?.value?.trim();
    const contributorEmail = $('#contrib-email')?.value?.trim() || '';
    const category = $('#contrib-category')?.value;
    const chapterCouncil = $('#contrib-chapter')?.value?.trim() || '';
    const estimatedYear = $('#contrib-year')?.value?.trim() || '';
    const title = $('#contrib-title')?.value?.trim();
    const description = $('#contrib-desc')?.value?.trim();
    const sourceProvenance = $('#contrib-provenance')?.value?.trim() || '';

    if (!contributorName || !category || !title || !description) return;

    contribSubmitBtn.classList.add('is-processing');
    contribSubmitBtn.disabled = true;
    if (contribBtnText) contribBtnText.textContent = 'Submitting to the archive queue...';

    try {
      const payload = {
        contributorName,
        contributorEmail,
        category,
        chapterCouncil,
        estimatedYear,
        title,
        description,
        sourceProvenance,
        status: 'submitted',
        submittedBy: auth.currentUser?.uid || 'community_historian',
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'historical_contributions'), payload);

      contribSubmitBtn.classList.remove('is-processing');
      contribSubmitBtn.classList.add('is-success');
      if (contribBtnText) contribBtnText.textContent = 'Archival intake logged.';

      if (contribStatus) {
        contribStatus.textContent = `Thank you, ${contributorName}. Your submission has entered the review process at Stage 01: Submitted.`;
        contribStatus.classList.add('status-success-fade');
      }

      contribForm.reset();
      document.querySelectorAll('#contribution-form .form-field').forEach(f => f.classList.remove('has-value', 'is-focused'));

      setTimeout(() => {
        contribSubmitBtn.classList.remove('is-success');
        contribSubmitBtn.disabled = false;
        if (contribBtnText) contribBtnText.textContent = 'Submit for historian review';
      }, 4000);
    } catch (err) {
      console.error('Historical contribution error:', err);
      contribSubmitBtn.classList.remove('is-processing');
      contribSubmitBtn.disabled = false;
      if (contribBtnText) contribBtnText.textContent = 'Submit for historian review';
      if (contribStatus) {
        contribStatus.textContent = 'We could not submit this contribution. Nothing was confirmed; your entered values remain so you can retry.';
        contribStatus.classList.remove('status-success-fade');
      }
    }
  });
}

// Year in Footer
const yearEl = $('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Section Scroll Reveal
if (typeof IntersectionObserver !== 'undefined') {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('main > section').forEach((section, index) => {
    section.classList.add('reveal-section');
    if (index === 0 && window.scrollY < 120) {
      requestAnimationFrame(() => section.classList.add('is-revealed'));
    } else {
      sectionObserver.observe(section);
    }
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) target.classList.add('is-revealed');
    }
  });
}

// Top Scroll Progress Bar
const scrollProgress = $('#scroll-progress');
if (scrollProgress) {
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
    scrollProgress.style.transform = `scaleX(${progress})`;
  };
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();
}
