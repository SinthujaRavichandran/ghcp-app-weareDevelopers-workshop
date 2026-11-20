import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};
const root = new URL('../docs/', import.meta.url);
const port = Number(process.env.PORT ?? 4173);
createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (!/^\/(?:[\w.-]+\/)*[\w.-]*$/.test(path) || path.split('/').includes('..')) {
    res.writeHead(404).end('Not found');
    return;
  }
  const file = path.endsWith('/') ? `${path}index.html` : path;
  try {
    const data = await readFile(new URL(`.${file}`, root));
    res.writeHead(200, {
      'Content-Type': contentTypes[extname(file)] ?? 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    }).end(data);
  } catch (error) {
    if (['ENOENT', 'EISDIR', 'ENOTDIR'].includes(error.code)) res.writeHead(404).end('Not found');
    else {
      console.error(error);
      res.writeHead(500).end('Could not read the file');
    }
  }
}).listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}/planner/`));
