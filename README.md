# Promethixia — Landing Page

Landing comercial del POS/ERP inteligente **Promethixia**, construida en **Angular 19** con arquitectura modular.

## Stack

- Angular 19 (standalone components)
- TypeScript
- SCSS
- Arquitectura por features (`core`, `shared`, `layout`, `features/landing`)

## Arranque

```bash
npm install
npm start
```

Abre [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

## Estructura

```
src/app/
  core/           # modelos y constantes de contenido
  shared/         # botones, headers de sección, directivas
  layout/         # navbar y footer
  features/
    landing/      # página comercial y secciones
```

## Notas

- Esta aplicación es una **landing comercial**, no el sistema POS/ERP real.
- Los mockups (dashboard, POS, asistente IA) son demostraciones visuales.
- Los testimonios son placeholders de diseño.
- Los precios dirigen a “Solicitar información” sin montos inventados.
