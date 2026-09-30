import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.cwd();
const types = { '.html': 'text/html', '.mjs': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png' };
createServer(async (req, res) => {
  const pathname = req.url?.split('?')[0] || '/';
  const safe = normalize(pathname === '/' ? '/index.html' : pathname).replace(/^[/\\]+/, '');
  try { const data = await readFile(join(root, safe)); res.writeHead(200, { 'Content-Type': types[extname(safe)] || 'text/plain' }); res.end(data); }
  catch { res.writeHead(404); res.end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('preview ready: http://localhost:4173'));
