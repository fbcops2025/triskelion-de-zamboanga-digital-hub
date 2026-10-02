from pathlib import Path
import json
from playwright.sync_api import sync_playwright
BASE='http://localhost:4182'
OUT=Path(r'C:/Users/Administrator/Documents/Client Projects/02_Client Projects/Triskelion de Zamboanga Digital Information & Community Hub/artifacts/parent-visual-qa')
with sync_playwright() as p:
    b=p.chromium.launch(headless=True); c=b.new_context(viewport={'width':390,'height':1000}); page=c.new_page()
    page.goto(BASE+'/personalities/',wait_until='domcontentloaded')
    page.evaluate('window.scrollTo(0, document.body.scrollHeight)'); page.wait_for_timeout(700)
    page.screenshot(path=str(OUT/'personalities-390-scrolled-footer.png'), full_page=False)
    imgs=page.evaluate('''() => [...document.querySelectorAll('.personality-card img, .footer-crest-pair img')].map(i=>({src:i.src,alt:i.alt,complete:i.complete,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight,rect:(()=>{const r=i.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}})()}))''')
    footer=page.locator('.footer-crest-pair').evaluate('e=>e.outerHTML')
    page.goto(BASE+'/personalities/joel-villanueva/',wait_until='domcontentloaded'); page.evaluate('window.scrollTo(0,document.body.scrollHeight)'); page.wait_for_timeout(500); page.screenshot(path=str(OUT/'joel-390-scrolled-footer.png'),full_page=False)
    f2=page.locator('.footer-crest-pair').evaluate('''e=>[...e.querySelectorAll('img')].map(i=>({alt:i.alt,complete:i.complete,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))''')
    page.goto(BASE+'/history/',wait_until='domcontentloaded'); page.wait_for_timeout(250)
    history={'url':page.url,'title':page.title(),'h1':page.locator('h1').inner_text() if page.locator('h1').count() else None,'body':page.locator('body').inner_text()[:300]}
    page.screenshot(path=str(OUT/'history-390.png'),full_page=True)
    print(json.dumps({'personalitiesImgs':imgs,'footer':footer,'joelFooter':f2,'history':history},indent=2))
    b.close()
