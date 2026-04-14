# Informe de Deploy — Poxahuac Web

**Fecha:** 2026-04-14
**Commit:** 4dc3235
**Deploy ID:** dpl_Gt3DnLBP9vgJEBZDdxTn6LiPJZs2

## URLs en Produccion

### Landing Pages (Google Ads)
- LP Pozole Amecameca: https://poxahuac-web.vercel.app/lp/pozole-amecameca
- LP Eventos: https://poxahuac-web.vercel.app/lp/eventos
- LP Escapada Volcanes: https://poxahuac-web.vercel.app/lp/escapada-volcanes

### Herramientas (mejoradas)
- Horarios y Afluencia: https://poxahuac-web.vercel.app/herramientas/horarios
- Estimador de Insumos: https://poxahuac-web.vercel.app/herramientas/insumos

### Blogs Nuevos (5)
- Mejores Restaurantes Amecameca: https://poxahuac-web.vercel.app/blog/mejores-restaurantes-amecameca
- Guia Turismo Amecameca: https://poxahuac-web.vercel.app/blog/que-hacer-amecameca-guia-turismo
- Pozole Rojo vs Blanco vs Verde: https://poxahuac-web.vercel.app/blog/pozole-rojo-blanco-verde-diferencias
- Restaurantes Pet-Friendly: https://poxahuac-web.vercel.app/blog/restaurantes-pet-friendly-amecameca
- Como Llegar desde CDMX: https://poxahuac-web.vercel.app/blog/como-llegar-amecameca-desde-cdmx

### Repositorio
- GitHub: https://github.com/cromosoide/poxahuac-web

## Estado del Build

- **Build:** Pass (27 paginas generadas, 0 errores TypeScript)
- **Lint:** Pass (0 errores, 0 warnings)
- **Deploy Vercel:** Pass (produccion)

### Errores Resueltos
- `react-hooks/set-state-in-effect` en CountUp.tsx — refactorizado para usar rendering condicional
- `react-hooks/set-state-in-effect` en FloatingElements.tsx — refactorizado con useState initializer
- `react-hooks/set-state-in-effect` en horarios/page.tsx — refactorizado con useMemo
- `react-hooks/use-memo` en horarios/page.tsx — inline function expression
- `@typescript-eslint/no-unused-vars` en blog/page.tsx (FadeIn) — import removido
- `@typescript-eslint/no-unused-vars` en MenuNav.tsx (useState) — import removido

### Warnings Pendientes
- Ninguno

## Cambios Realizados

### Archivos Creados (5)
- `src/app/lp/layout.tsx` — Layout standalone para landing pages (sin Header/Footer, WhatsApp flotante, noindex)
- `src/app/lp/pozole-amecameca/page.tsx` — LP conversion: pozole + social proof + mapa
- `src/app/lp/eventos/page.tsx` — LP conversion: eventos con formulario a WhatsApp
- `src/app/lp/escapada-volcanes/page.tsx` — LP conversion: turismo + itinerario + horarios
- `src/app/herramientas/horarios/layout.tsx` — Metadata SEO para pagina de horarios

### Archivos Modificados (9)
- `src/app/herramientas/horarios/page.tsx` — Indicador "abierto ahora", WhatsApp CTA, contenido SEO, removido noindex
- `src/app/herramientas/insumos/page.tsx` — Pozole verde, salsas, costos estimados, boton WhatsApp, grid responsive
- `src/data/blog-posts.ts` — 5 blogs nuevos (800+ palabras c/u, SEO optimizado)
- `src/lib/schema.tsx` — getBreadcrumbSchema(), getWebPageSchema(), menu en Restaurant schema
- `src/app/blog/[slug]/page.tsx` — Breadcrumb schema en paginas de blog
- `src/app/blog/page.tsx` — Removido import no usado
- `src/components/animations/CountUp.tsx` — Fix lint React 19
- `src/components/animations/FloatingElements.tsx` — Fix lint React 19
- `src/components/menu/MenuNav.tsx` — Removido import no usado

## Resumen de Funcionalidad

| Feature | Detalle |
|---------|---------|
| **3 Landing Pages** | Conversion-focused, mobile-first, WhatsApp CTA, noindex, analytics tracking |
| **5 Blogs SEO** | 800+ palabras, internal linking, keywords de conversion, schema BlogPosting |
| **Horarios mejorado** | SEO indexable, indicador tiempo real, WhatsApp con hora sugerida |
| **Insumos mejorado** | Pozole verde + salsas, costos por ingrediente, total estimado, WhatsApp |
| **Schema.org** | Restaurant (con menu), BreadcrumbList, WebPage con speakable |

## Pendientes
- Conectar Vercel MCP para deploys automaticos (requiere autenticacion)
- Configurar dominio personalizado en Vercel (poxahuac.com)
- Agregar Google Maps API key real para embeds funcionales
- Configurar Google Analytics y Meta Pixel con IDs reales
- Crear campanas de Google Ads apuntando a las 3 landing pages
