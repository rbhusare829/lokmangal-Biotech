// Renders the PDF data sheets and catalogues from the built /pdf/ pages using an installed Chrome.
// Run after `npm run build`:  npm run pdf
// Output goes to public/downloads (kept for later builds) and dist/downloads (ready to deploy).
import { createServer } from 'node:http';
import { createReadStream, existsSync, mkdirSync, readdirSync, rmSync, copyFileSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import puppeteer from 'puppeteer-core';

const root = resolve('dist');
const CHROME = process.env.CHROME_PATH ?? ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', '/usr/bin/google-chrome'].find((p) => existsSync(p));
if (!CHROME) throw new Error('Chrome not found. Set CHROME_PATH.');

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let file = normalize(join(root, url));
  if (!file.startsWith(root)) return res.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(4399, '127.0.0.1', r));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--font-render-hinting=none'] });
const page = await browser.newPage();
let count = 0;
for (const lang of ['en', 'mr']) {
  const out = [resolve('public/downloads', lang), resolve('dist/downloads', lang)];
  out.forEach((d) => mkdirSync(d, { recursive: true }));
  const dir = join(root, 'pdf', lang);
  for (const slug of readdirSync(dir)) {
    await page.goto(`http://127.0.0.1:4399/pdf/${lang}/${slug}/`, { waitUntil: 'networkidle0', timeout: 120000 });
    await page.evaluate(() => document.fonts.ready);
    const target = join(out[0], `${slug}.pdf`);
    await page.pdf({ path: target, format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
    copyFileSync(target, join(out[1], `${slug}.pdf`));
    count++;
  }
}
await browser.close();
server.close();
rmSync(join(root, 'pdf'), { recursive: true, force: true });
console.log(`Created ${count} PDFs`);
