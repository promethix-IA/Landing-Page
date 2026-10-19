import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const envPath = new URL('../.env', import.meta.url);
const raw = existsSync(envPath) ? readFileSync(envPath, 'utf8') : '';
const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '',
};

for (const line of raw.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) {
    continue;
  }
  const separator = trimmed.indexOf('=');
  if (separator === -1) {
    continue;
  }
  const key = trimmed.slice(0, separator).trim();
  const value = trimmed.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
  env[key] = value;
}

const source = `// Generado desde .env por scripts/sync-env.mjs. No editar a mano.
export const environment = {
  supabaseUrl: ${JSON.stringify(env.NEXT_PUBLIC_SUPABASE_URL ?? '')},
  supabasePublishableKey: ${JSON.stringify(env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '')},
};
`;

const outputPath = fileURLToPath(new URL('../src/app/core/config/environment.local.ts', import.meta.url));
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, source);
