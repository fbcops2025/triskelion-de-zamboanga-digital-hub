import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.cwd();
const port = Number(process.env.PORT) || 3000;
const host = '0.0.0.0';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};
createServer(async (req, res) => {
  const pathname = req.url?.split('?')[0] || '/';
  const safe = normalize(pathname === '/' ? '/index.html' : pathname).replace(/^[/\\]+/, '');
  try {
    const data = await readFile(join(root, safe));
    res.writeHead(200, { 'Content-Type': types[extname(safe)] || 'text/plain' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(port, host, () => console.log(`Server listening on http://${host}:${port}`));
