import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
const root = process.argv.includes('--dist') ? join(process.cwd(), 'dist') : process.cwd();
const port = Number(process.env.PORT) || 3000;
const host = '0.0.0.0';
const types = { '.html':'text/html; charset=utf-8', '.mjs':'text/javascript; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.ico':'image/x-icon', '.webp':'image/webp', '.xml':'application/xml; charset=utf-8', '.txt':'text/plain; charset=utf-8' };
const resolveFile = async pathname => {
  const decoded = decodeURIComponent(pathname);
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^[/\\\\]+/, '');
  const roots = [root, join(process.cwd(), 'dist')].filter((value, index, values) => values.indexOf(value) === index);
  for (const base of roots) {
    const candidate = join(base, relative);
    try { return { candidate, data: await readFile(candidate) }; } catch {}
    if (!extname(relative)) {
      try { const nested = join(base, relative, 'index.html'); return { candidate: nested, data: await readFile(nested) }; } catch {}
    }
  }
  return null;
};
createServer(async (req, res) => {
  const pathname = req.url?.split('?')[0] || '/';
  const result = await resolveFile(pathname);
  if (result) { res.writeHead(200, { 'Content-Type': types[extname(result.candidate)] || 'application/octet-stream' }); res.end(result.data); return; }
  res.writeHead(404, { 'Content-Type':'text/plain; charset=utf-8' }); res.end('Not found');
}).listen(port, host, () => console.log(`Server listening on http://${host}:${port}`));
