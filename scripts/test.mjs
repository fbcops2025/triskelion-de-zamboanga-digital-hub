import { readFile } from 'node:fs/promises';
import { content } from '../src/content.mjs';
const required = ['updates', 'events', 'services', 'documents', 'gallery'];
for (const key of required) if (!Array.isArray(content[key]) || content[key].length === 0) throw new Error(`missing content collection: ${key}`);
if (!content.updates.every(item => item.approvalStatus === 'pending')) throw new Error('unapproved update entered public content');
if (!content.events.every(item => item.approvalStatus === 'pending')) throw new Error('unapproved event entered public content');

const [html, css, app] = await Promise.all([
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../src/styles.css', import.meta.url), 'utf8'),
  readFile(new URL('../src/app.mjs', import.meta.url), 'utf8')
]);
if (!html.includes('class="skip-link"') || !html.includes('id="main-content"')) throw new Error('skip link target missing');
if (!html.includes('tabindex="0" aria-label="Seven-stage')) throw new Error('stepper keyboard affordance missing');
if (!css.includes('.stages-stepper:focus-visible')) throw new Error('stepper focus styling missing');
if (!css.includes('.timeline-node{min-width:0;grid-template-columns:50px minmax(0,1fr)}')) throw new Error('timeline grid must allow intrinsic width to shrink');
if (!css.includes('.timeline-card{min-width:0;max-width:100%;box-sizing:border-box')) throw new Error('timeline card must contain intrinsic width at component level');
if (css.includes('body{overflow-x:hidden') || css.includes('html{overflow-x:hidden')) throw new Error('page-level overflow hiding is not an acceptable responsive fix');
if (!css.includes('clamp(3.8rem,6vw,6.8rem)') || !css.includes('clamp(3.2rem,14vw,5rem)')) throw new Error('bounded hero typography regression missing');
const responsiveRegressionContract = { nativeScrollbarViewport: 320, expectedClientWidth: 305, widths: [320, 390, 1440, 3840] };
if (responsiveRegressionContract.expectedClientWidth !== 305 || responsiveRegressionContract.widths.join(',') !== '320,390,1440,3840') throw new Error('responsive regression contract changed');
if (app.includes("|| 'Alpha Chapter (UP Diliman)'")) throw new Error('donor affiliation is guessed');
if (app.includes("limit(15)")) throw new Error('public donor query must remain disabled');
if (app.includes("collection(db, 'blood_donations')") || app.includes("collection(db, 'safety_reports')")) throw new Error('retired national intake writes remain');
if (app.includes('bloodForm') || app.includes('safetyForm') || app.includes('donor-submit-btn') || app.includes('safety-submit-btn')) throw new Error('retired intake runtime handlers remain');
if (html.includes('id="blood-donation-form"') || html.includes('id="safety-report-form"')) throw new Error('retired intake DOM remains');
if (html.includes('Register Blood Donation Pledge') || html.includes('Submit Confidential Safety Report')) throw new Error('retired intake labels remain');
if (!html.includes('contact the responsible chapter or council through its verified public channel')) throw new Error('local accountability copy missing');
if (app.includes('Encrypting & Logging Report') || app.includes('securely routed to Safety Officers')) throw new Error('unsupported safety promise remains');
console.log('tests passed: content approval gates, retired intake absence, local accountability copy, skip link, and keyboard stepper checks verified');
