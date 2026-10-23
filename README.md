# Promethixia — Landing Page

Sitio comercial de **Promethixia**, el POS inteligente. Explica el producto, pide demostraciones y manda a iniciar sesión en el POS real.

Esta app **no es el sistema de ventas**. El POS está en `Sistema-Pos-Front` (`https://pos.promethixia.com`) y el API en `Sistema-Pos-Back`.

## Qué hace

- Página única en español: hero, problema, módulos, asistente IA, FAQ y CTA.
- Navbar y footer con marca Promethixia.
- **Iniciar sesión** abre `https://pos.promethixia.com/` (`POS_URL`).
- **Solicitar demostración** usa `mailto:contacto@promethixia.com`.
- SEO: meta Open Graph/Twitter, JSON-LD, `robots.txt` y `sitemap.xml` (solo la home).
- Responsive (móvil, tablet y escritorio).
- Tailwind v4 + tipografías Sora y Manrope.

Los mockups del dashboard, el POS y el asistente IA son demostraciones visuales. Los testimonios son placeholders. No hay precios inventados ni login embebido.

## Stack

- Angular 19 (standalone, sin SSR)
- TypeScript
- SCSS + Tailwind CSS v4
- Netlify (`dist/promethixia-landing/browser`)

```text
src/app/
  core/              # constantes, modelos, config
  shared/            # logo, botones, headers, reveal
  layout/            # navbar y footer
  features/landing/  # secciones comerciales
public/
  robots.txt
  sitemap.xml
  og/
```

Ruta única: `/`. Cualquier otra vuelve a la home.

## Arranque

```bash
npm install
npm start
```

Abre [http://localhost:4200](http://localhost:4200).

`npm start` y `npm run build` ejecutan `scripts/sync-env.mjs`. Si no hay `.env`, el script sigue (el login no depende de ese archivo).

```bash
npm run build
```

Salida: `dist/promethixia-landing/browser`.

## Despliegue

- Host: Netlify (`netlify.toml`, Node 20).
- Dominio: [https://promethixia.com](https://promethixia.com) (`www` redirige 301).
- El POS no entra al sitemap a propósito: es una app privada (`noindex` en el front).
