import { cp, mkdir } from 'node:fs/promises';

const out = new URL('../dist/', import.meta.url);
await mkdir(out, { recursive: true });
await cp(new URL('../docs/planner/', import.meta.url), new URL('planner/', out), { recursive: true });
console.log('Static planner built in dist/planner/');
