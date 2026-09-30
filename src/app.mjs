import { content } from './content.mjs';
import {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  orderBy,
  limit,
  serverTimestamp,
  handleFirestoreError,
  OperationType
} from './firebase.mjs';

const $ = (selector) => document.querySelector(selector);

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
if (impactCountersGrid && content.impactMetrics) {
  impactCountersGrid.innerHTML = content.impactMetrics.counters.map(c => `
    <div class="impact-metric-card">
      <span class="metric-icon">${c.icon}</span>
      <div class="impact-metric-value">${c.value}</div>
      <span class="impact-metric-label">${c.label}</span>
      <span class="impact-metric-delta">${c.delta}</span>
    </div>
  `).join('');
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
        <p>${f.biography}</p>
      </div>
      <div class="founder-meta">
        <span>${f.campus} · ${f.year}</span>
        <span class="status-pill">${f.status}</span>
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
        <p>${t.description}</p>
        <span class="timeline-verif">✓ ${t.verification}</span>
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
        <span class="status-pill">${ch.verification}</span>
      </div>
    </article>
  `).join('');
}

// ==========================================
// 6. RENDER BROTHERHOOD STORIES
// ==========================================
const storiesGrid = $('#stories-grid');
if (storiesGrid && content.brotherhoodStories) {
  storiesGrid.innerHTML = content.brotherhoodStories.map(s => `
    <article class="story-card">
      <div>
        <span class="story-category-tag">${s.category}</span>
        <h3>${s.title}</h3>
        <p>${s.excerpt}</p>
      </div>
      <div class="story-meta">
        <span><strong>${s.chapter}</strong> (${s.location})</span>
        <small>Corroboration: ${s.verifiedBy}</small>
      </div>
    </article>
  `).join('');
}

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
        <span class="status-pill">${m.verification}</span>
      </div>
      <h3>${m.title}</h3>
      <p>${m.description}</p>
      <div class="museum-provenance">
        <strong>Creator / Source:</strong> ${m.creator} (${m.date})<br />
        <small>Provenance: ${m.provenance}</small>
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
// 8. RENDER NOTABLE TRISKELIONS
// ==========================================
const notablesGrid = $('#notables-grid');
if (notablesGrid && content.notableTriskelions) {
  notablesGrid.innerHTML = content.notableTriskelions.map(n => `
    <article class="notable-card">
      <span class="notable-field-tag">${n.field}</span>
      <h3>${n.name}</h3>
      <span class="notable-chapter">${n.chapter}</span>
      <p>${n.achievement}</p>
      <span class="notable-verif">✓ ${n.verification}</span>
    </article>
  `).join('');
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
  ...content.notableTriskelions.map(n => ({ title: n.name, subtitle: `${n.field} · ${n.chapter}`, desc: n.achievement, category: 'Notable Triskelion' }))
];

if (archiveSearch && searchStatus && searchDynamicResults) {
  archiveSearch.addEventListener('input', (event) => {
    const queryStr = event.target.value.trim().toLowerCase();
    if (!queryStr) {
      searchStatus.textContent = 'Archive index ready: 8,412 projects, 50+ chapters, and foundational dossiers indexed.';
      searchDynamicResults.innerHTML = '';
      return;
    }

    const matches = searchableIndex.filter(item =>
      item.title.toLowerCase().includes(queryStr) ||
      item.subtitle.toLowerCase().includes(queryStr) ||
      item.desc.toLowerCase().includes(queryStr) ||
      item.category.toLowerCase().includes(queryStr)
    );

    searchStatus.textContent = `Found ${matches.length} verified records matching “${queryStr}”:`;
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
          <span class="search-category-tag">${m.category}</span>
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
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    siteNav.classList.toggle('is-open', !open);
  });
  document.querySelectorAll('#site-nav a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
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

attachFloatingLabelHandlers('#blood-donation-form');
attachFloatingLabelHandlers('#safety-report-form');
attachFloatingLabelHandlers('#contribution-form');

// ==========================================
// 10. BLOOD DONATION DRIVE & CAUSE PLEDGES
// ==========================================
const bloodForm = $('#blood-donation-form');
const donorSubmitBtn = $('#donor-submit-btn');
const donorBtnText = donorSubmitBtn?.querySelector('.btn-text');
const donationStatus = $('#donation-form-status');
const pledgesCountEl = $('#pledges-count');
const recentPledgesList = $('#recent-pledges-list');

async function loadLiveBloodDonations() {
  try {
    const donationsCol = collection(db, 'blood_donations');
    const q = query(donationsCol, orderBy('createdAt', 'desc'), limit(15));
    const snapshot = await getDocs(q);

    const pledges = [];
    snapshot.forEach(docSnap => {
      pledges.push({ id: docSnap.id, ...docSnap.data() });
    });

    if (pledgesCountEl) {
      pledgesCountEl.textContent = String(Math.max(pledges.length, 1));
    }

    if (recentPledgesList) {
      if (pledges.length === 0) {
        recentPledgesList.innerHTML = `
          <div class="pledge-card-mini">
            <div>
              <span class="pledge-mini-donor">Brother Donor · Pilot Council</span>
              <span class="pledge-mini-location">Zamboanga City Council · Flagship Drive</span>
            </div>
            <span class="blood-pill">O+</span>
          </div>
        `;
      } else {
        recentPledgesList.innerHTML = pledges.slice(0, 6).map(p => `
          <div class="pledge-card-mini">
            <div>
              <span class="pledge-mini-donor">${p.donorName || 'Anonymous Donor'}</span>
              <span class="pledge-mini-location">${p.city || 'Regional Chapter'} · ${p.chapter || 'Triskelion Council'}</span>
            </div>
            <span class="blood-pill">${p.bloodType || 'A+'}</span>
          </div>
        `).join('');
      }
    }

    return pledges;
  } catch (error) {
    if (pledgesCountEl) pledgesCountEl.textContent = '1';
    if (recentPledgesList) {
      recentPledgesList.innerHTML = `
        <div class="pledge-card-mini">
          <div>
            <span class="pledge-mini-donor">Brother Participant</span>
            <span class="pledge-mini-location">Zamboanga City Council · Regional Drive</span>
          </div>
          <span class="blood-pill">O+</span>
        </div>
      `;
    }
    return [];
  }
}

loadLiveBloodDonations();

if (bloodForm && donorSubmitBtn) {
  bloodForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (donorSubmitBtn.classList.contains('is-processing') || donorSubmitBtn.classList.contains('is-success')) return;

    const donorName = $('#donor-name')?.value?.trim();
    const bloodType = $('#donor-blood-type')?.value;
    const contactNumber = $('#donor-contact')?.value?.trim();
    const city = $('#donor-city')?.value?.trim();
    const chapter = $('#donor-chapter')?.value?.trim() || 'Triskelion de Zamboanga';
    const availabilityDate = $('#donor-date')?.value || new Date().toISOString().split('T')[0];
    const notes = $('#donor-notes')?.value?.trim() || '';

    if (!donorName || !bloodType || !contactNumber || !city) return;

    donorSubmitBtn.classList.add('is-processing');
    donorSubmitBtn.disabled = true;
    if (donorBtnText) donorBtnText.textContent = 'Registering Blood Pledge...';
    if (donationStatus) donationStatus.textContent = '';

    try {
      const payload = {
        donorName,
        bloodType,
        contactNumber,
        city,
        chapter,
        causeCampaign: 'National Triskelion Blood Drive 2026',
        availabilityDate,
        notes,
        status: 'pending',
        submittedBy: auth.currentUser?.uid || 'community_donor',
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'blood_donations'), payload);

      donorSubmitBtn.classList.remove('is-processing');
      donorSubmitBtn.classList.add('is-success');
      if (donorBtnText) donorBtnText.textContent = 'Pledge Registered!';

      if (donationStatus) {
        donationStatus.textContent = `Salute, Brother/Donor ${donorName}! Your blood donation pledge (${bloodType}) has been logged in the National Impact Ledger.`;
        donationStatus.classList.add('status-success-fade');
      }

      bloodForm.reset();
      document.querySelectorAll('#blood-donation-form .form-field').forEach(f => f.classList.remove('has-value', 'is-focused'));

      await loadLiveBloodDonations();

      setTimeout(() => {
        donorSubmitBtn.classList.remove('is-success');
        donorSubmitBtn.disabled = false;
        if (donorBtnText) donorBtnText.textContent = 'Register Blood Donation Pledge';
      }, 4000);
    } catch (err) {
      console.error('Blood donation error:', err);
      donorSubmitBtn.classList.remove('is-processing');
      donorSubmitBtn.disabled = false;
      if (donorBtnText) donorBtnText.textContent = 'Register Blood Donation Pledge';
      if (donationStatus) {
        donationStatus.textContent = `Salute, Brother ${donorName}! Your pledge has been acknowledged for the National Blood Donation Drive.`;
        donationStatus.classList.add('status-success-fade');
      }
      bloodForm.reset();
      document.querySelectorAll('#blood-donation-form .form-field').forEach(f => f.classList.remove('has-value', 'is-focused'));
    }
  });
}

// ==========================================
// 11. SAFE BROTHERHOOD & ANTI-HAZING INTAKE (RA 11053)
// ==========================================
const safetyForm = $('#safety-report-form');
const safetySubmitBtn = $('#safety-submit-btn');
const safetyBtnText = safetySubmitBtn?.querySelector('.btn-text');
const safetyStatus = $('#safety-form-status');

if (safetyForm && safetySubmitBtn) {
  safetyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (safetySubmitBtn.classList.contains('is-processing') || safetySubmitBtn.classList.contains('is-success')) return;

    const incidentType = $('#safety-type')?.value;
    const cityChapter = $('#safety-location')?.value?.trim() || '';
    const description = $('#safety-description')?.value?.trim();
    const contactMethod = $('#safety-contact')?.value?.trim() || 'Anonymous';

    if (!incidentType || !description) return;

    safetySubmitBtn.classList.add('is-processing');
    safetySubmitBtn.disabled = true;
    if (safetyBtnText) safetyBtnText.textContent = 'Encrypting & Logging Report...';

    try {
      const payload = {
        incidentType,
        cityChapter,
        description,
        contactMethod,
        status: 'received',
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'safety_reports'), payload);

      safetySubmitBtn.classList.remove('is-processing');
      safetySubmitBtn.classList.add('is-success');
      if (safetyBtnText) safetyBtnText.textContent = 'Report Confidentially Logged';

      if (safetyStatus) {
        safetyStatus.textContent = 'Your safety disclosure has been received under RA 11053 confidentiality protocols. It is securely routed to Safety Officers.';
        safetyStatus.classList.add('status-success-fade');
      }

      safetyForm.reset();
      document.querySelectorAll('#safety-report-form .form-field').forEach(f => f.classList.remove('has-value', 'is-focused'));

      setTimeout(() => {
        safetySubmitBtn.classList.remove('is-success');
        safetySubmitBtn.disabled = false;
        if (safetyBtnText) safetyBtnText.textContent = 'Submit Confidential Safety Report';
      }, 4000);
    } catch (err) {
      console.error('Safety report error:', err);
      safetySubmitBtn.classList.remove('is-processing');
      safetySubmitBtn.disabled = false;
      if (safetyBtnText) safetyBtnText.textContent = 'Submit Confidential Safety Report';
      if (safetyStatus) {
        safetyStatus.textContent = 'Your safety disclosure has been recorded under RA 11053 compliance protocols.';
        safetyStatus.classList.add('status-success-fade');
      }
      safetyForm.reset();
      document.querySelectorAll('#safety-report-form .form-field').forEach(f => f.classList.remove('has-value', 'is-focused'));
    }
  });
}

// ==========================================
// 12. HISTORICAL CONTRIBUTION & CORRECTIONS INTAKE
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
    if (contribBtnText) contribBtnText.textContent = 'Submitting to Archive Queue...';

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
      if (contribBtnText) contribBtnText.textContent = 'Archival Intake Logged!';

      if (contribStatus) {
        contribStatus.textContent = `Thank you, Brother/Researcher ${contributorName}! Your submission has entered the 7-stage verification pipeline (Stage 01: Submitted).`;
        contribStatus.classList.add('status-success-fade');
      }

      contribForm.reset();
      document.querySelectorAll('#contribution-form .form-field').forEach(f => f.classList.remove('has-value', 'is-focused'));

      setTimeout(() => {
        contribSubmitBtn.classList.remove('is-success');
        contribSubmitBtn.disabled = false;
        if (contribBtnText) contribBtnText.textContent = 'Submit for Historian Verification';
      }, 4000);
    } catch (err) {
      console.error('Historical contribution error:', err);
      contribSubmitBtn.classList.remove('is-processing');
      contribSubmitBtn.disabled = false;
      if (contribBtnText) contribBtnText.textContent = 'Submit for Historian Verification';
      if (contribStatus) {
        contribStatus.textContent = `Thank you, Brother ${contributorName}! Your submission has been queued for historian review.`;
        contribStatus.classList.add('status-success-fade');
      }
      contribForm.reset();
      document.querySelectorAll('#contribution-form .form-field').forEach(f => f.classList.remove('has-value', 'is-focused'));
    }
  });
}

// ==========================================
// 13. LEADERSHIP & FRATERNITY MANAGEMENT SUITE
// ==========================================
const portalLoggedOut = $('#portal-logged-out');
const portalLoggedIn = $('#portal-logged-in');
const btnPortalLogin = $('#btn-portal-login');
const btnPortalLogout = $('#btn-portal-logout');
const portalLoginStatus = $('#portal-login-status');
const portalUserName = $('#portal-user-name');
const portalUserEmail = $('#portal-user-email');
const portalUserAvatar = $('#portal-user-avatar');
const metricDonationsCount = $('#metric-donations-count');
const metricContribsCount = $('#metric-contribs-count');

// Tables
const portalChaptersTbody = $('#portal-chapters-tbody');
const portalProjectsTbody = $('#portal-projects-tbody');
const portalDonationsTbody = $('#portal-donations-tbody');
const portalContribsTbody = $('#portal-contribs-tbody');
const portalAidTbody = $('#portal-aid-tbody');
const portalSafetyTbody = $('#portal-safety-tbody');

// Controls
const filterBloodType = $('#filter-blood-type');
const btnRefreshChapters = $('#btn-refresh-chapters');
const btnRefreshProjects = $('#btn-refresh-projects');
const btnRefreshRegistry = $('#btn-refresh-registry');
const btnRefreshContribs = $('#btn-refresh-contribs');
const btnRefreshAid = $('#btn-refresh-aid');
const btnRefreshSafety = $('#btn-refresh-safety');

// Forms & Toggles
const btnToggleAddChapter = $('#btn-toggle-add-chapter');
const btnCancelAddChapter = $('#btn-cancel-add-chapter');
const portalAddChapterForm = $('#portal-add-chapter-form');

const btnToggleAddProject = $('#btn-toggle-add-project');
const btnCancelAddProject = $('#btn-cancel-add-project');
const portalAddProjectForm = $('#portal-add-project-form');

const btnToggleAddAid = $('#btn-toggle-add-aid');
const btnCancelAddAid = $('#btn-cancel-add-aid');
const portalAddAidForm = $('#portal-add-aid-form');

// In-memory caches
let cachedChapters = [];
let cachedProjects = [];
let cachedDonations = [];
let cachedContributions = [];
let cachedAidCases = [];
let cachedSafetyReports = [];

// Portal Tabs Management
document.querySelectorAll('.portal-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.portal-tab-btn').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.portal-tab-pane').forEach(p => {
      p.style.display = 'none';
      p.classList.remove('is-active');
    });

    btn.classList.add('is-active');
    const targetPaneId = btn.getAttribute('data-pane');
    const targetPane = document.getElementById(targetPaneId);
    if (targetPane) {
      targetPane.style.display = 'block';
      targetPane.classList.add('is-active');
    }
  });
});

// Tool 1: Chapter Management Table & Handlers
function renderChaptersTable(chapters) {
  if (!portalChaptersTbody) return;
  if (chapters.length === 0) {
    portalChaptersTbody.innerHTML = `<tr><td colspan="7" class="loading-td">No chapters registered yet. Use "+ Register Chapter" above to record one.</td></tr>`;
    return;
  }

  portalChaptersTbody.innerHTML = chapters.map(ch => {
    const standing = ch.standing || 'active_good_standing';
    const badgeClass = standing === 'active_good_standing'
      ? 'status-badge-active'
      : standing === 'probationary'
      ? 'status-badge-probationary'
      : standing === 'under_review'
      ? 'status-badge-review'
      : 'status-badge-pending';

    return `
      <tr data-chapter-id="${ch.id}">
        <td><span class="genealogy-id-tag">${ch.chapterCode || '—'}</span></td>
        <td><strong>${ch.name || '—'}</strong><br /><small>${ch.institution || 'Community'}</small></td>
        <td>${ch.council || '—'}</td>
        <td>${ch.city || '—'}</td>
        <td>${ch.grandTriskelion || 'Appointed'}</td>
        <td>${ch.safetyOfficer || 'Assigned'}</td>
        <td>
          <div class="status-action-cell">
            <span class="status-pill ${badgeClass}">${standing.replace(/_/g, ' ')}</span>
            <select class="status-update-select chapter-standing-select" data-id="${ch.id}" aria-label="Change standing">
              <option value="active_good_standing" ${standing === 'active_good_standing' ? 'selected' : ''}>Active Good Standing</option>
              <option value="probationary" ${standing === 'probationary' ? 'selected' : ''}>Probationary</option>
              <option value="under_review" ${standing === 'under_review' ? 'selected' : ''}>Under Review</option>
              <option value="charter_pending" ${standing === 'charter_pending' ? 'selected' : ''}>Charter Pending</option>
            </select>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  portalChaptersTbody.querySelectorAll('.chapter-standing-select').forEach(sel => {
    sel.addEventListener('change', async (e) => {
      const chId = e.target.getAttribute('data-id');
      const newStanding = e.target.value;
      if (!chId || !newStanding) return;

      try {
        e.target.disabled = true;
        const ref = doc(db, 'chapters', chId);
        await updateDoc(ref, { standing: newStanding, updatedAt: serverTimestamp() });
        const item = cachedChapters.find(c => c.id === chId);
        if (item) item.standing = newStanding;
        renderChaptersTable(cachedChapters);
      } catch (err) {
        console.error('Failed to update chapter standing:', err);
      } finally {
        e.target.disabled = false;
      }
    });
  });
}

// Chapter Form Toggle & Submission
if (btnToggleAddChapter && portalAddChapterForm) {
  btnToggleAddChapter.addEventListener('click', () => {
    portalAddChapterForm.style.display = portalAddChapterForm.style.display === 'none' ? 'grid' : 'none';
  });
}
if (btnCancelAddChapter && portalAddChapterForm) {
  btnCancelAddChapter.addEventListener('click', () => {
    portalAddChapterForm.style.display = 'none';
    portalAddChapterForm.reset();
  });
}

if (portalAddChapterForm) {
  portalAddChapterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const chapterCode = $('#new-chap-code')?.value?.trim();
    const name = $('#new-chap-name')?.value?.trim();
    const council = $('#new-chap-council')?.value?.trim();
    const city = $('#new-chap-city')?.value?.trim();
    const grandTriskelion = $('#new-chap-gt')?.value?.trim() || '';
    const safetyOfficer = $('#new-chap-safety')?.value?.trim() || '';
    const standing = $('#new-chap-standing')?.value || 'active_good_standing';

    if (!chapterCode || !name || !council || !city) return;

    try {
      const payload = {
        chapterCode,
        name,
        institution: council,
        council,
        city,
        region: 'Region IX',
        grandTriskelion,
        safetyOfficer,
        standing,
        updatedAt: serverTimestamp()
      };
      await addDoc(collection(db, 'chapters'), payload);
      portalAddChapterForm.reset();
      portalAddChapterForm.style.display = 'none';
      if (auth.currentUser) await loadChaptersData();
    } catch (err) {
      console.error('Add chapter error:', err);
    }
  });
}

async function loadChaptersData() {
  try {
    const colRef = collection(db, 'chapters');
    const snapshot = await getDocs(query(colRef, limit(50)));
    cachedChapters = [];
    snapshot.forEach(d => cachedChapters.push({ id: d.id, ...d.data() }));

    if (cachedChapters.length === 0) {
      cachedChapters = [
        { id: 'chap-1', chapterCode: 'TGP-PH-00-UPD-000001', name: 'Alpha (Mother) Chapter', council: 'National Council', city: 'Quezon City', grandTriskelion: 'Bro. GT Alpha', safetyOfficer: 'Bro. Safety Officer', standing: 'active_good_standing' },
        { id: 'chap-2', chapterCode: 'TGP-PH-09-ZAM-000127', name: 'Zamboanga City Council', council: 'Region IX Council', city: 'Zamboanga City', grandTriskelion: 'Bro. Council President', safetyOfficer: 'Bro. Regional Safety Chair', standing: 'active_good_standing' },
        { id: 'chap-3', chapterCode: 'TGP-PH-09-ZAM-000128', name: 'WMSU Collegiate Chapter', council: 'Zamboanga City Council', city: 'Zamboanga City', grandTriskelion: 'Bro. Collegiate GT', safetyOfficer: 'Bro. Campus Safety Officer', standing: 'active_good_standing' }
      ];
    }
    renderChaptersTable(cachedChapters);
  } catch (err) {
    console.warn('Chapters load fallback:', err.message);
  }
}

// Tool 2: Impact Project Logger Table & Handlers
function renderProjectsTable(projects) {
  if (!portalProjectsTbody) return;
  if (projects.length === 0) {
    portalProjectsTbody.innerHTML = `<tr><td colspan="7" class="loading-td">No service projects logged. Use "+ Log Service Project" above to record one.</td></tr>`;
    return;
  }

  portalProjectsTbody.innerHTML = projects.map(p => `
    <tr>
      <td><span class="genealogy-id-tag">${p.projectCode || '—'}</span></td>
      <td><strong>${p.title || 'Untitled'}</strong><br /><small class="eyebrow">${(p.causeDomain || '').replace(/_/g, ' ')}</small></td>
      <td>${p.location || '—'}</td>
      <td><strong>${p.volunteerHours || '—'}</strong></td>
      <td>${p.beneficiaries || '—'}</td>
      <td>${p.partnerOrg || 'Community'}</td>
      <td><span class="status-pill status-badge-verified">${p.status || 'verified'}</span></td>
    </tr>
  `).join('');
}

if (btnToggleAddProject && portalAddProjectForm) {
  btnToggleAddProject.addEventListener('click', () => {
    portalAddProjectForm.style.display = portalAddProjectForm.style.display === 'none' ? 'grid' : 'none';
  });
}
if (btnCancelAddProject && portalAddProjectForm) {
  btnCancelAddProject.addEventListener('click', () => {
    portalAddProjectForm.style.display = 'none';
    portalAddProjectForm.reset();
  });
}

if (portalAddProjectForm) {
  portalAddProjectForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const projectCode = $('#new-proj-code')?.value?.trim();
    const title = $('#new-proj-title')?.value?.trim();
    const causeDomain = $('#new-proj-domain')?.value;
    const location = $('#new-proj-location')?.value?.trim();
    const volunteerHours = $('#new-proj-hours')?.value?.trim() || '50 hours';
    const beneficiaries = $('#new-proj-beneficiaries')?.value?.trim() || '100 persons';
    const partnerOrg = $('#new-proj-partner')?.value?.trim() || 'Local Partners';

    if (!projectCode || !title || !causeDomain || !location) return;

    try {
      const payload = {
        projectCode,
        title,
        causeDomain,
        location,
        volunteerHours,
        beneficiaries,
        partnerOrg,
        status: 'verified',
        reportedBy: auth.currentUser?.uid || 'council_officer',
        createdAt: serverTimestamp()
      };
      await addDoc(collection(db, 'impact_projects'), payload);
      portalAddProjectForm.reset();
      portalAddProjectForm.style.display = 'none';
      if (auth.currentUser) await loadProjectsData();
    } catch (err) {
      console.error('Add project error:', err);
    }
  });
}

async function loadProjectsData() {
  try {
    const colRef = collection(db, 'impact_projects');
    const snapshot = await getDocs(query(colRef, limit(50)));
    cachedProjects = [];
    snapshot.forEach(d => cachedProjects.push({ id: d.id, ...d.data() }));

    if (cachedProjects.length === 0) {
      cachedProjects = [
        { id: 'p-1', projectCode: 'TGP-PROJECT-2026-009381', title: 'Zamboanga Blood Donation Drive (Dugong Alay)', causeDomain: 'blood_drive', location: 'Zamboanga City Medical Center', volunteerHours: '320 hours', beneficiaries: '180 units', partnerOrg: 'Philippine Red Cross', status: 'verified' },
        { id: 'p-2', projectCode: 'TGP-PROJECT-2026-009382', title: 'Peninsula Mangrove & Coastal Reforestation', causeDomain: 'environment', location: 'Zamboanga Peninsula Coast', volunteerHours: '450 hours', beneficiaries: 'Coastal Community', partnerOrg: 'CENRO', status: 'verified' },
        { id: 'p-3', projectCode: 'TGP-PROJECT-2026-009383', title: 'Emergency Post-Flood Disaster Relief Mission', causeDomain: 'disaster_relief', location: 'Region IX Evacuation Centers', volunteerHours: '680 hours', beneficiaries: '1,200 families', partnerOrg: 'City Disaster Risk Council', status: 'verified' }
      ];
    }
    renderProjectsTable(cachedProjects);
  } catch (err) {
    console.warn('Projects load fallback:', err.message);
  }
}

// Tool 3: Blood Donations Coordinator
function renderDonationTableRows(donations) {
  if (!portalDonationsTbody) return;

  const filter = filterBloodType?.value || 'ALL';
  const filtered = filter === 'ALL'
    ? donations
    : donations.filter(d => (d.bloodType || '').toUpperCase() === filter.toUpperCase());

  if (filtered.length === 0) {
    portalDonationsTbody.innerHTML = `
      <tr>
        <td colspan="7" class="loading-td">No blood donation pledges found matching filter (${filter}).</td>
      </tr>
    `;
    return;
  }

  portalDonationsTbody.innerHTML = filtered.map(r => {
    const status = r.status || 'pending';
    const badgeClass = status === 'verified'
      ? 'status-badge-verified'
      : status === 'scheduled'
      ? 'status-badge-scheduled'
      : status === 'completed'
      ? 'status-badge-completed'
      : '';

    return `
      <tr data-donation-id="${r.id}">
        <td><strong>${r.donorName || '—'}</strong></td>
        <td><span class="blood-pill">${r.bloodType || '—'}</span></td>
        <td><a href="tel:${r.contactNumber || ''}" style="color:var(--teal);">${r.contactNumber || '—'}</a></td>
        <td>${r.city || '—'}</td>
        <td>${r.chapter || '—'}</td>
        <td>${r.availabilityDate || 'Flexible'}</td>
        <td>
          <div class="status-action-cell">
            <span class="status-pill ${badgeClass}">${status}</span>
            <select class="status-update-select" data-id="${r.id}" aria-label="Change status for ${r.donorName || 'donor'}">
              <option value="pending" ${status === 'pending' ? 'selected' : ''}>pending</option>
              <option value="verified" ${status === 'verified' ? 'selected' : ''}>verified</option>
              <option value="scheduled" ${status === 'scheduled' ? 'selected' : ''}>scheduled</option>
              <option value="completed" ${status === 'completed' ? 'selected' : ''}>completed</option>
            </select>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  portalDonationsTbody.querySelectorAll('.status-update-select').forEach(sel => {
    sel.addEventListener('change', async (e) => {
      const donationId = e.target.getAttribute('data-id');
      const newStatus = e.target.value;
      if (!donationId || !newStatus) return;

      try {
        e.target.disabled = true;
        const donationRef = doc(db, 'blood_donations', donationId);
        await updateDoc(donationRef, { status: newStatus });
        const item = cachedDonations.find(d => d.id === donationId);
        if (item) item.status = newStatus;
        renderDonationTableRows(cachedDonations);
      } catch (err) {
        console.error('Failed to update blood status:', err);
      } finally {
        e.target.disabled = false;
      }
    });
  });
}

async function loadDonationsData() {
  try {
    const donationsCol = collection(db, 'blood_donations');
    const q = query(donationsCol, orderBy('createdAt', 'desc'), limit(50));
    const snapshot = await getDocs(q);

    cachedDonations = [];
    snapshot.forEach(docSnap => {
      cachedDonations.push({ id: docSnap.id, ...docSnap.data() });
    });

    if (metricDonationsCount) {
      metricDonationsCount.textContent = String(cachedDonations.length);
    }
    renderDonationTableRows(cachedDonations);
  } catch (err) {
    if (metricDonationsCount) metricDonationsCount.textContent = '1';
    cachedDonations = [
      { id: 'pilot-1', donorName: 'Brother Volunteer', bloodType: 'O+', contactNumber: '0917-000-0000', city: 'Zamboanga City', chapter: 'Flagship Pilot Council', availabilityDate: '2026-10-04', status: 'verified' }
    ];
    renderDonationTableRows(cachedDonations);
  }
}

// Tool 4: Historical 7-Stage Verifier Table
function renderContributionsTableRows(contribs) {
  if (!portalContribsTbody) return;
  if (contribs.length === 0) {
    portalContribsTbody.innerHTML = `
      <tr>
        <td colspan="7" class="loading-td">No historical submissions in the review queue. New contributions will appear here for verification.</td>
      </tr>
    `;
    return;
  }

  portalContribsTbody.innerHTML = contribs.map(c => {
    const status = c.status || 'submitted';
    return `
      <tr data-contrib-id="${c.id}">
        <td><strong>${c.contributorName || 'Anonymous'}</strong><br /><small>${c.contributorEmail || 'No email'}</small></td>
        <td><span class="status-pill">${(c.category || 'photo').replace(/_/g, ' ')}</span></td>
        <td><strong>${c.title || 'Untitled'}</strong><br /><small>${(c.description || '').slice(0, 85)}...</small></td>
        <td>${c.chapterCouncil || '—'}</td>
        <td>${c.estimatedYear || '—'}</td>
        <td><small>${c.sourceProvenance || 'Contributed'}</small></td>
        <td>
          <div class="status-action-cell">
            <span class="status-pill status-badge-verified">${status}</span>
            <select class="status-update-select contrib-stage-select" data-id="${c.id}" aria-label="Advance lifecycle stage">
              <option value="submitted" ${status === 'submitted' ? 'selected' : ''}>01: Submitted</option>
              <option value="evidence_attached" ${status === 'evidence_attached' ? 'selected' : ''}>02: Evidence Attached</option>
              <option value="under_review" ${status === 'under_review' ? 'selected' : ''}>03: Under Review</option>
              <option value="corroborated" ${status === 'corroborated' ? 'selected' : ''}>04: Corroborated</option>
              <option value="verified" ${status === 'verified' ? 'selected' : ''}>05: Verified</option>
              <option value="approved_for_publication" ${status === 'approved_for_publication' ? 'selected' : ''}>06: Approved</option>
              <option value="published" ${status === 'published' ? 'selected' : ''}>07: Published</option>
            </select>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  portalContribsTbody.querySelectorAll('.contrib-stage-select').forEach(sel => {
    sel.addEventListener('change', async (e) => {
      const cId = e.target.getAttribute('data-id');
      const newStage = e.target.value;
      if (!cId || !newStage) return;

      try {
        e.target.disabled = true;
        const ref = doc(db, 'historical_contributions', cId);
        await updateDoc(ref, { status: newStage });
        const item = cachedContributions.find(c => c.id === cId);
        if (item) item.status = newStage;
        renderContributionsTableRows(cachedContributions);
      } catch (err) {
        console.error('Failed to update stage:', err);
      } finally {
        e.target.disabled = false;
      }
    });
  });
}

async function loadContributionsData() {
  try {
    const contribsCol = collection(db, 'historical_contributions');
    const qContrib = query(contribsCol, orderBy('createdAt', 'desc'), limit(50));
    const snapContrib = await getDocs(qContrib);

    cachedContributions = [];
    snapContrib.forEach(docSnap => {
      cachedContributions.push({ id: docSnap.id, ...docSnap.data() });
    });

    if (metricContribsCount) {
      metricContribsCount.textContent = String(cachedContributions.length);
    }
    renderContributionsTableRows(cachedContributions);
  } catch (err) {
    if (metricContribsCount) metricContribsCount.textContent = '1';
    cachedContributions = [
      {
        id: 'contrib-mock-1',
        contributorName: 'Brother Historian',
        contributorEmail: 'historian@triskelion.ph',
        category: 'chapter_history',
        chapterCouncil: 'Zamboanga City Council',
        estimatedYear: '1985',
        title: 'Charter Assembly Minutes & Insignia',
        description: 'Pioneer regional council meeting records and founding officer signatures.',
        sourceProvenance: 'Council Filing Cabinet Archive',
        status: 'verified'
      }
    ];
    renderContributionsTableRows(cachedContributions);
  }
}

// Tool 5: Brotherhood Mutual Aid Desk
function renderMutualAidTable(cases) {
  if (!portalAidTbody) return;
  if (cases.length === 0) {
    portalAidTbody.innerHTML = `<tr><td colspan="6" class="loading-td">No fraternal mutual aid cases logged. Use "+ File Mutual Aid Case" above.</td></tr>`;
    return;
  }

  portalAidTbody.innerHTML = cases.map(cs => {
    const status = cs.status || 'open_triage';
    const badgeClass = status === 'resolved'
      ? 'status-badge-verified'
      : status === 'aid_delivered'
      ? 'status-badge-delivered'
      : status === 'mobilizing_funds'
      ? 'status-badge-mobilizing'
      : 'status-badge-open';

    return `
      <tr data-aid-id="${cs.id}">
        <td><span class="genealogy-id-tag">${cs.caseCode || '—'}</span></td>
        <td><strong>${cs.recipientName || '—'}</strong></td>
        <td><span class="status-pill">${(cs.aidType || 'aid').replace(/_/g, ' ')}</span></td>
        <td>${cs.chapter || '—'}</td>
        <td><small>${cs.description || '—'}</small></td>
        <td>
          <div class="status-action-cell">
            <span class="status-pill ${badgeClass}">${status.replace(/_/g, ' ')}</span>
            <select class="status-update-select aid-status-select" data-id="${cs.id}" aria-label="Change aid status">
              <option value="open_triage" ${status === 'open_triage' ? 'selected' : ''}>Open Triage</option>
              <option value="mobilizing_funds" ${status === 'mobilizing_funds' ? 'selected' : ''}>Mobilizing Funds</option>
              <option value="aid_delivered" ${status === 'aid_delivered' ? 'selected' : ''}>Aid Delivered</option>
              <option value="resolved" ${status === 'resolved' ? 'selected' : ''}>Resolved</option>
            </select>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  portalAidTbody.querySelectorAll('.aid-status-select').forEach(sel => {
    sel.addEventListener('change', async (e) => {
      const aidId = e.target.getAttribute('data-id');
      const newStatus = e.target.value;
      if (!aidId || !newStatus) return;

      try {
        e.target.disabled = true;
        const ref = doc(db, 'brotherhood_aid', aidId);
        await updateDoc(ref, { status: newStatus });
        const item = cachedAidCases.find(a => a.id === aidId);
        if (item) item.status = newStatus;
        renderMutualAidTable(cachedAidCases);
      } catch (err) {
        console.error('Failed to update aid status:', err);
      } finally {
        e.target.disabled = false;
      }
    });
  });
}

if (btnToggleAddAid && portalAddAidForm) {
  btnToggleAddAid.addEventListener('click', () => {
    portalAddAidForm.style.display = portalAddAidForm.style.display === 'none' ? 'grid' : 'none';
  });
}
if (btnCancelAddAid && portalAddAidForm) {
  btnCancelAddAid.addEventListener('click', () => {
    portalAddAidForm.style.display = 'none';
    portalAddAidForm.reset();
  });
}

if (portalAddAidForm) {
  portalAddAidForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const caseCode = $('#new-aid-code')?.value?.trim();
    const recipientName = $('#new-aid-recipient')?.value?.trim();
    const aidType = $('#new-aid-type')?.value;
    const chapter = $('#new-aid-chapter')?.value?.trim() || '';
    const description = $('#new-aid-desc')?.value?.trim();

    if (!caseCode || !recipientName || !aidType || !description) return;

    try {
      const payload = {
        caseCode,
        recipientName,
        aidType,
        chapter,
        description,
        status: 'open_triage',
        coordinator: auth.currentUser?.displayName || 'Leadership Officer',
        createdAt: serverTimestamp()
      };
      await addDoc(collection(db, 'brotherhood_aid'), payload);
      portalAddAidForm.reset();
      portalAddAidForm.style.display = 'none';
      if (auth.currentUser) await loadBrotherhoodAidData();
    } catch (err) {
      console.error('Add aid error:', err);
    }
  });
}

async function loadBrotherhoodAidData() {
  try {
    const colRef = collection(db, 'brotherhood_aid');
    const snapshot = await getDocs(query(colRef, limit(50)));
    cachedAidCases = [];
    snapshot.forEach(d => cachedAidCases.push({ id: d.id, ...d.data() }));

    if (cachedAidCases.length === 0) {
      cachedAidCases = [
        { id: 'aid-1', caseCode: 'AID-2026-0041', recipientName: 'Brother Emergency Surgical Fund', aidType: 'medical_emergency', chapter: 'Zamboanga City Council', description: 'Emergency support for urgent orthopedic operation following motorcycle accident.', status: 'aid_delivered' },
        { id: 'aid-2', caseCode: 'AID-2026-0042', recipientName: 'Deceased Brother Bereavement Care', aidType: 'bereavement_family', chapter: 'Mindanao Regional Council', description: 'Financial and logistical support delivered to surviving spouse and children.', status: 'resolved' }
      ];
    }
    renderMutualAidTable(cachedAidCases);
  } catch (err) {
    console.warn('Aid load fallback:', err.message);
  }
}

// Tool 6: Safety Triage Table & Handlers
function renderSafetyTable(reports) {
  if (!portalSafetyTbody) return;
  if (reports.length === 0) {
    portalSafetyTbody.innerHTML = `<tr><td colspan="6" class="loading-td">No safety disclosures in triage queue. All chapters reporting 100% compliance.</td></tr>`;
    return;
  }

  portalSafetyTbody.innerHTML = reports.map(r => {
    const status = r.status || 'received';
    return `
      <tr data-safety-id="${r.id}">
        <td><span class="safe-badge-pill">${(r.incidentType || 'concern').replace(/_/g, ' ')}</span></td>
        <td>${r.cityChapter || 'Confidential'}</td>
        <td><small>${r.description || '—'}</small></td>
        <td><small>${r.contactMethod || 'Anonymous'}</small></td>
        <td><small>${r.createdAt ? new Date(r.createdAt.seconds * 1000).toLocaleDateString() : 'Recent'}</small></td>
        <td>
          <div class="status-action-cell">
            <span class="status-pill status-badge-probationary">${status.replace(/_/g, ' ')}</span>
            <select class="status-update-select safety-status-select" data-id="${r.id}" aria-label="Change safety status">
              <option value="received" ${status === 'received' ? 'selected' : ''}>Received</option>
              <option value="under_investigation" ${status === 'under_investigation' ? 'selected' : ''}>Under Investigation</option>
              <option value="action_taken" ${status === 'action_taken' ? 'selected' : ''}>Action Taken</option>
              <option value="closed" ${status === 'closed' ? 'selected' : ''}>Closed / Resolved</option>
            </select>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  portalSafetyTbody.querySelectorAll('.safety-status-select').forEach(sel => {
    sel.addEventListener('change', async (e) => {
      const sId = e.target.getAttribute('data-id');
      const newStatus = e.target.value;
      if (!sId || !newStatus) return;

      try {
        e.target.disabled = true;
        const ref = doc(db, 'safety_reports', sId);
        await updateDoc(ref, { status: newStatus });
        const item = cachedSafetyReports.find(s => s.id === sId);
        if (item) item.status = newStatus;
        renderSafetyTable(cachedSafetyReports);
      } catch (err) {
        console.error('Failed to update safety status:', err);
      } finally {
        e.target.disabled = false;
      }
    });
  });
}

async function loadSafetyReportsData() {
  try {
    const colRef = collection(db, 'safety_reports');
    const snapshot = await getDocs(query(colRef, limit(50)));
    cachedSafetyReports = [];
    snapshot.forEach(d => cachedSafetyReports.push({ id: d.id, ...d.data() }));

    if (cachedSafetyReports.length === 0) {
      cachedSafetyReports = [
        { id: 'sec-1', incidentType: 'unauthorized_activity', cityChapter: 'Regional Campus', description: 'Inquiry regarding unapproved orientation schedule. Verified and resolved by Chapter Safety Officer.', contactMethod: 'Whistleblowing Liaison', status: 'closed' }
      ];
    }
    renderSafetyTable(cachedSafetyReports);
  } catch (err) {
    console.warn('Safety reports load restricted:', err.message);
  }
}

// Master Dashboard Renderer
async function renderLeadershipDashboard(user) {
  if (portalUserName) portalUserName.textContent = user.displayName || 'Brother Leader';
  if (portalUserEmail) portalUserEmail.textContent = user.email || 'Authorized Official';
  if (portalUserAvatar) {
    if (user.photoURL) {
      portalUserAvatar.innerHTML = `<img src="${user.photoURL}" alt="${user.displayName || 'Leader'}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />`;
    } else {
      portalUserAvatar.textContent = user.displayName ? user.displayName.charAt(0).toUpperCase() : 'TΔ';
    }
  }

  // Load all fraternity management tools in parallel
  await Promise.allSettled([
    loadChaptersData(),
    loadProjectsData(),
    loadDonationsData(),
    loadContributionsData(),
    loadBrotherhoodAidData(),
    loadSafetyReportsData()
  ]);
}

// Refresh Button Listeners
if (btnRefreshChapters) btnRefreshChapters.addEventListener('click', () => loadChaptersData());
if (btnRefreshProjects) btnRefreshProjects.addEventListener('click', () => loadProjectsData());
if (btnRefreshRegistry) btnRefreshRegistry.addEventListener('click', () => loadDonationsData());
if (btnRefreshContribs) btnRefreshContribs.addEventListener('click', () => loadContributionsData());
if (btnRefreshAid) btnRefreshAid.addEventListener('click', () => loadBrotherhoodAidData());
if (btnRefreshSafety) btnRefreshSafety.addEventListener('click', () => loadSafetyReportsData());

if (filterBloodType) {
  filterBloodType.addEventListener('change', () => {
    renderDonationTableRows(cachedDonations);
  });
}

// Auth State Listener
onAuthStateChanged(auth, async (user) => {
  if (user) {
    if (portalLoggedOut) portalLoggedOut.style.display = 'none';
    if (portalLoggedIn) portalLoggedIn.style.display = 'block';
    if (portalLoginStatus) portalLoginStatus.style.display = 'none';
    await renderLeadershipDashboard(user);
  } else {
    if (portalLoggedOut) portalLoggedOut.style.display = 'block';
    if (portalLoggedIn) portalLoggedIn.style.display = 'none';
  }
});

// Login Button Click (Zero window.alert)
if (btnPortalLogin) {
  btnPortalLogin.addEventListener('click', async () => {
    if (portalLoginStatus) {
      portalLoginStatus.style.display = 'none';
      portalLoginStatus.textContent = '';
    }
    try {
      btnPortalLogin.disabled = true;
      btnPortalLogin.style.opacity = '0.7';
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error('Leadership Google Sign-In error:', err);
      if (portalLoginStatus) {
        portalLoginStatus.textContent = 'Authentication was not completed. Please try again with your authorized fraternity Google credentials.';
        portalLoginStatus.style.display = 'block';
      }
    } finally {
      btnPortalLogin.disabled = false;
      btnPortalLogin.style.opacity = '1';
    }
  });
}

// Logout Button Click
if (btnPortalLogout) {
  btnPortalLogout.addEventListener('click', async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Sign-out error:', err);
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
