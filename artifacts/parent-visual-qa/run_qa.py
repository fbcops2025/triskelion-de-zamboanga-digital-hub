from pathlib import Path
import json, re
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:4182'
OUT = Path(r'C:/Users/Administrator/Documents/Client Projects/02_Client Projects/Triskelion de Zamboanga Digital Information & Community Hub/artifacts/parent-visual-qa')
OUT.mkdir(parents=True, exist_ok=True)
PAGES = {
    'home': '/',
    'personalities': '/personalities/',
    'joel-villanueva': '/personalities/joel-villanueva/',
    'roy-ordinario-initials': '/personalities/roy-ordinario/',
    'story-records': '/stories/tau-gamma-phi-national-records-and-membership/',
}
WIDTHS = [1440, 390, 320]


def overflow(page):
    return page.evaluate('''() => {
      const de = document.documentElement;
      const body = document.body;
      const els = [...document.querySelectorAll('*')].map((el) => {
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return {tag: el.tagName.toLowerCase(), id: el.id, cls: String(el.className || '').slice(0,120), text: (el.innerText || '').trim().slice(0,70), left: r.left, right: r.right, width: r.width, display: cs.display, overflowX: cs.overflowX};
      }).filter(x => x.right > de.clientWidth + 0.5 || x.left < -0.5 || x.width > de.clientWidth + 0.5);
      return {innerWidth: innerWidth, clientWidth: de.clientWidth, scrollWidth: de.scrollWidth, bodyScrollWidth: body ? body.scrollWidth : null, offending: els.slice(0,25)};
    }''')


def footer_info(page):
    return page.evaluate('''() => [...document.querySelectorAll('.footer-crest-pair figure')].map(f => { const img=f.querySelector('img'); const r=f.getBoundingClientRect(); const ir=img?.getBoundingClientRect(); return {caption:f.innerText.trim(), figure:{x:r.x,y:r.y,w:r.width,h:r.height}, image:ir?{x:ir.x,y:ir.y,w:ir.width,h:ir.height, naturalWidth:img.naturalWidth,naturalHeight:img.naturalHeight, complete:img.complete}:null, overflow: ir ? (ir.left < r.left-1 || ir.right > r.right+1 || ir.top < r.top-1 || ir.bottom > r.bottom+1) : null}; })''')


def portrait_info(page):
    return page.evaluate('''() => [...document.querySelectorAll('.personality-hero-portrait, .personality-card__portrait, [class*="portrait"]')].map(img => { const r=img.getBoundingClientRect(); return {tag:img.tagName,src:img.getAttribute('src'),alt:img.getAttribute('alt'),class:img.className,box:{x:r.x,y:r.y,w:r.width,h:r.height},objectFit:getComputedStyle(img).objectFit,objectPosition:getComputedStyle(img).objectPosition,complete:img.complete,naturalWidth:img.naturalWidth,naturalHeight:img.naturalHeight}; })''')


def focus_info(page):
    return page.evaluate('''() => { const a=document.activeElement; if(!a) return null; const s=getComputedStyle(a); const r=a.getBoundingClientRect(); return {tag:a.tagName.toLowerCase(), text:(a.innerText||a.getAttribute('aria-label')||'').trim().slice(0,80), id:a.id, outline:s.outline, outlineWidth:s.outlineWidth, outlineStyle:s.outlineStyle, boxShadow:s.boxShadow, rect:{x:r.x,y:r.y,w:r.width,h:r.height}}; }''')


def menu_state(page):
    return page.evaluate('''() => [...document.querySelectorAll('header nav details')].map(d => ({summary:d.querySelector('summary')?.innerText.trim(), open:d.open, aria:d.querySelector('summary')?.getAttribute('aria-expanded')}))''')

results = {'pages': {}, 'interactions': {}, 'errors': []}
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(reduced_motion='reduce')
    page = context.new_page()
    page.on('pageerror', lambda e: results['errors'].append({'url':page.url,'error':str(e)}))
    for name, path in PAGES.items():
        results['pages'][name] = {}
        for width in WIDTHS:
            page.set_viewport_size({'width': width, 'height': 1000})
            page.goto(BASE + path, wait_until='domcontentloaded')
            page.wait_for_timeout(350)
            shot = OUT / f'{name}-{width}.png'
            page.screenshot(path=str(shot), full_page=True)
            results['pages'][name][str(width)] = {
                'url': page.url,
                'title': page.title(),
                'overflow': overflow(page),
                'footer': footer_info(page),
                'portraits': portrait_info(page),
                'reducedMotion': page.evaluate('''() => ({media:matchMedia('(prefers-reduced-motion: reduce)').matches, transitions:[...document.querySelectorAll('*')].filter(e=>{const s=getComputedStyle(e);return s.transitionDuration!='0s'||s.animationDuration!='0s'}).slice(0,15).map(e=>({tag:e.tagName,cls:String(e.className||'').slice(0,80),transition:getComputedStyle(e).transitionDuration,animation:getComputedStyle(e).animationDuration}))})'''),
                'screenshot': str(shot),
            }
    # interactive header/dropdown regression at desktop
    page.set_viewport_size({'width': 1440, 'height': 1000})
    page.goto(BASE + '/', wait_until='domcontentloaded'); page.wait_for_timeout(250)
    details = page.locator('header nav details')
    sums = page.locator('header nav details summary')
    results['interactions']['initialMenu'] = menu_state(page)
    sums.nth(0).click(); page.wait_for_timeout(100)
    results['interactions']['afterExploreClick'] = menu_state(page)
    sums.nth(1).click(); page.wait_for_timeout(100)
    results['interactions']['afterSourcesClick'] = menu_state(page)
    page.keyboard.press('Escape'); page.wait_for_timeout(100)
    results['interactions']['afterEscape'] = {'state':menu_state(page), 'active':focus_info(page)}
    sums.nth(0).click(); page.mouse.click(1200, 700); page.wait_for_timeout(100)
    results['interactions']['afterOutsideClick'] = {'state':menu_state(page), 'active':focus_info(page)}
    sums.nth(0).click(); page.wait_for_timeout(80)
    link_href = page.locator('header nav details').nth(0).locator('a').first.get_attribute('href')
    page.locator('header nav details').nth(0).locator('a').first.click(force=True); page.wait_for_timeout(150)
    results['interactions']['afterLinkSelection'] = {'state':menu_state(page), 'url':page.url, 'href':link_href, 'active':focus_info(page)}
    page.goto(BASE + '/', wait_until='domcontentloaded'); page.wait_for_timeout(150)
    sums = page.locator('header nav details summary')
    sums.nth(0).focus(); page.keyboard.press('Enter'); page.wait_for_timeout(100)
    results['interactions']['keyboardEnter'] = {'state':menu_state(page), 'active':focus_info(page)}
    # skip link and visible focus
    page.goto(BASE + '/', wait_until='domcontentloaded'); page.wait_for_timeout(150)
    page.keyboard.press('Tab'); page.wait_for_timeout(50)
    results['interactions']['skipLink'] = {'active':focus_info(page), 'visible':page.evaluate('''() => { const a=document.activeElement; const r=a?.getBoundingClientRect(); return !!(a && r && r.width>0 && r.height>0 && getComputedStyle(a).visibility!='hidden'); }''')}
    page.keyboard.press('Enter'); page.wait_for_timeout(100)
    results['interactions']['skipActivated'] = {'active':focus_info(page), 'hash':page.evaluate('() => location.hash')}
    # focus style on next tab after reset
    page.goto(BASE + '/', wait_until='domcontentloaded'); page.wait_for_timeout(150); page.keyboard.press('Tab'); page.keyboard.press('Tab'); page.wait_for_timeout(50)
    results['interactions']['secondTabFocus'] = focus_info(page)
    # reduced motion also in default context comparison
    default_ctx = browser.new_context(reduced_motion='no-preference')
    dp = default_ctx.new_page(); dp.set_viewport_size({'width':390,'height':1000}); dp.goto(BASE+'/',wait_until='domcontentloaded'); dp.wait_for_timeout(150)
    results['interactions']['reducedMotionNoPreference'] = dp.evaluate('''() => ({reduce:matchMedia('(prefers-reduced-motion: reduce)').matches, htmlClass:document.documentElement.className, bodyClass:document.body.className})''')
    default_ctx.close()
    browser.close()

(OUT / 'qa-results.json').write_text(json.dumps(results, indent=2), encoding='utf-8')
print(json.dumps(results, indent=2))
