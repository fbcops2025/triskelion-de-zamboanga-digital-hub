import { content } from './content.mjs';
const $ = (selector) => document.querySelector(selector);
const pending = '<span class="status-pill">Awaiting official information</span>';

$('#updates-list').innerHTML = content.updates.map(item => `<article class="info-card"><div class="card-meta"><span>${item.type}</span><span>${item.date}</span></div><h3>${item.title}</h3><p>${item.excerpt}</p>${pending}<small>Source: ${item.source}</small></article>`).join('');
$('#events-list').innerHTML = content.events.map(item => `<article class="event-row"><div class="event-date"><strong>—</strong><span>DATE</span></div><div><h3>${item.title}</h3><p>${item.location} · ${item.status}</p><small>Source: ${item.source}</small></div>${pending}</article>`).join('');
$('#services-list').innerHTML = content.services.map(item => `<article class="service-card"><span class="service-index">0${content.services.indexOf(item)+1}</span><h3>${item.title}</h3><p>${item.description}</p><span class="muted-label">${item.status}</span></article>`).join('');
$('#gallery-list').innerHTML = content.gallery.map(item => `<article class="gallery-card"><div class="gallery-placeholder"><span>▧</span><small>APPROVED MEDIA PENDING</small></div><div><strong>${item.year}</strong><p>${item.event}</p></div></article>`).join('');
$('#documents-list').innerHTML = content.documents.map(item => `<article class="document-card"><span class="document-icon">↗</span><div><h3>${item.title}</h3><p>${item.description}</p><span class="status-pill">${item.status}</span></div></article>`).join('');

const navToggle = $('.menu-toggle');
navToggle.addEventListener('click', () => { const open = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', String(!open)); $('#site-nav').classList.toggle('is-open', !open); });
document.querySelectorAll('#site-nav a').forEach(link => link.addEventListener('click', () => { navToggle.setAttribute('aria-expanded', 'false'); $('#site-nav').classList.remove('is-open'); }));
$('#archive-search').addEventListener('input', (event) => { const query = event.target.value.trim(); $('#search-status').textContent = query ? `Search-ready archive received “${query}”. Approved records will appear here after publication.` : 'Archive index is ready for approved records.'; });
$('#concern-form').addEventListener('submit', (event) => { event.preventDefault(); $('#form-status').textContent = 'Demo only: no concern was transmitted. Configure an approved secure intake channel before launch.'; event.target.reset(); });
$('#year').textContent = new Date().getFullYear();
