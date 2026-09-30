import { readFile } from 'node:fs/promises';
const files = ['index.html', 'src/app.mjs', 'src/content.mjs', 'src/styles.css'];
for (const file of files) {
  const text = await readFile(file, 'utf8');
  if (!text.trim()) throw new Error(`${file} is empty`);
  if (text.includes('lorem ipsum')) throw new Error(`${file} contains placeholder filler`);
}
console.log(`lint passed: ${files.length} source files checked`);
