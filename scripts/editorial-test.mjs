import { readFile, readdir } from 'node:fs/promises';
import { SEO_CONFIG, SEO_ORIGIN, editorialRecords, publishedRecords } from '../src/editorial/content.mjs';
import { notableProfiles } from '../src/notables.mjs';
import { portraitMap } from '../src/portrait-map.mjs';
const assert = (ok, message) => { if (!ok) throw new Error(message); };
assert(SEO_ORIGIN === 'https://triskelion-de-zamboanga-digital-hub.vercel.app', 'verified SEO origin changed');
assert(editorialRecords.every(r => r.status === 'published' ? r.publication === 'public' : true), 'publication guard allows invalid record');
assert(publishedRecords.every(r => r.status === 'published' && r.publication === 'public'), 'unapproved record entered public collection');
assert(!publishedRecords.some(r => r.section === 'National News' && (!r.author || !r.date)), 'unapproved news record exposed');
const [sourceHome, builtHome, sitemap, robots, news, story] = await Promise.all(['index.html','dist/index.html','dist/sitemap.xml','dist/robots.txt','dist/news/index.html',`dist/stories/${publishedRecords[0].slug}/index.html`].map(path => readFile(path,'utf8')));
for (const [label, html] of [['source', sourceHome], ['build', builtHome]]) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  assert(blocks.length === 1, `${label} homepage must have exactly one JSON-LD block`);
  const graph = blocks[0]['@graph'];
  assert(Array.isArray(graph) && graph.some(item => item['@type'] === 'WebSite' && item.name === SEO_CONFIG.siteName && item.url === `${SEO_CONFIG.origin}/`), `${label} homepage WebSite schema missing or mismatched`);
  assert(graph.some(item => item['@type'] === 'WebPage' && item.name === SEO_CONFIG.homeTitle && item.description === SEO_CONFIG.homeDescription && item.url === `${SEO_CONFIG.origin}/`), `${label} homepage WebPage schema missing or mismatched`);
  const schemaTypes = JSON.stringify(blocks).match(/\"@type\":\"([^\"]+)\"/g) ?? [];
  assert(!schemaTypes.some(type => type === '\"@type\":\"Organization\"' || type === '\"@type\":\"NewsArticle\"'), `${label} homepage contains unsupported schema type`);
}
assert(robots.includes(`${SEO_ORIGIN}/sitemap.xml`), 'robots does not reference stable sitemap');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert(new Set(urls).size === urls.length, 'duplicate sitemap canonical URLs');
assert(urls.every(url => url.startsWith(SEO_ORIGIN) && !url.includes('#') && !url.includes('?')), 'invalid sitemap URL');
const globalPaths = ['/global/','/global/structure/','/global/clusters/','/global/western-overseas/','/global/western-overseas/leadership/','/global/western-overseas/councils-and-chapters/','/global/eastern-overseas/','/global/tdap/','/global/events/','/global/videos/','/global/sources/'];
assert(globalPaths.every(path => urls.includes(`${SEO_ORIGIN}${path}`)), 'global archive routes missing from sitemap');
const [globalIndex, globalStructure, globalSources] = await Promise.all(['dist/global/index.html','dist/global/structure/index.html','dist/global/sources/index.html'].map(path => readFile(path, 'utf8')));
assert(globalIndex.includes('Two Related, Separate Maps') && globalIndex.includes('Philippines → Regions → Councils → Chapters'), 'global archive hierarchy separation missing');
assert(globalStructure.includes('without recasting it as a settled universal structure') && globalStructure.includes('https://www.taugammaphi.info/about-global-structure'), 'global structure attribution or source link missing');
assert(globalSources.includes('Public visibility does not create permission to copy') && globalSources.includes('https://www.taugammaphi.info/wo-chapters'), 'global rights or original-source link missing');
assert(news.includes('rel="canonical"') && news.includes('og:url'), 'collection metadata missing');
assert(story.includes('BreadcrumbList') && story.includes('Source trail') && story.includes('Related context'), 'reader context missing');
assert(!story.includes('NewsArticle'), 'unapproved story received NewsArticle schema');
const personalityIndex = await readFile('dist/notable-triskelions/index.html', 'utf8');
assert(personalityIndex.includes('PUBLIC PERSONALITY GALLERY') && personalityIndex.includes('not an official membership roster'), 'personality gallery framing missing');
for (const profile of notableProfiles) {
  const profileHtml = await readFile(`dist/notable-triskelions/${profile.id}/index.html`, 'utf8');
  assert(profileHtml.includes('A Life Beyond the Brotherhood') && profileHtml.includes('Place in the Triskelion Story') && profileHtml.includes('Milestones') && profileHtml.includes('Related Records') && profileHtml.includes('Sources'), `profile page incomplete: ${profile.id}`);
  if (portraitMap.has(profile.id)) assert(profileHtml.includes('style="height:auto"'), `profile portrait sizing guard missing: ${profile.id}`);
  assert(profileHtml.toLowerCase().includes('membership research pending') || profile.associationSource, `profile association status missing: ${profile.id}`);
}
assert(urls.filter(url => url.includes('/notable-triskelions/')).length === notableProfiles.length + 1, 'personality routes missing from sitemap');
const htmlFiles = (await readdir('dist', { recursive:true })).filter(path => path.endsWith('.html'));
const renderedPages = await Promise.all(htmlFiles.map(path => readFile(`dist/${path}`, 'utf8')));
assert(renderedPages.every(page => !page.includes('—')), 'public copy contains an em dash');
for (const path of ['about','councils','service','videos','archive']) {
  const page = await readFile(`dist/${path}/index.html`, 'utf8');
  assert(page.includes('<h1>') && page.includes('class="read-link"'), `editorial hierarchy or next step missing: ${path}`);
}
console.log(`editorial tests passed: ${publishedRecords.length} guarded public records, ${notableProfiles.length} personality profiles, ${urls.length} canonical sitemap URLs, schema/source/draft guards verified`);
