# Historia Argentina — Blog educativo

Aplicación web para explorar y estudiar la historia argentina, organizada por artículos y periodos. Este proyecto sirve como práctica de programación web moderna y es un recurso didáctico para aprender tecnologías del ecosistema JavaScript.

## Aviso importante (fines educativos)

Esta aplicación es exclusivamente con fines educativos y para el estudio y armado de programación. No persigue objetivos comerciales ni pretende reemplazar fuentes académicas oficiales. El contenido se usa para practicar desarrollo web, organización de contenidos y despliegue.

## Tecnologías utilizadas

- Next.js 14 (App Router) y React 18
- TypeScript
- React Bootstrap + Bootstrap 5 + Bootstrap Icons
- Markdown/MDX para contenidos (lectura con `gray-matter`)
- Next.js Image Optimization (configurado para dominios remotos)
- SEO técnico: `app/sitemap.ts` y `app/robots.ts` (MetadataRoute)
- Testing: Vitest + Testing Library (JSDOM)
- Calidad: ESLint + Prettier + TypeScript type-check
- API de contacto (Nodemailer) con variables de entorno

## Estructura del proyecto

- `app/` — rutas y páginas (App Router)
- `components/` — componentes UI (Header, Footer, Newsletter, etc.)
- `content/posts/` — artículos en Markdown con frontmatter (`title`, `date`, `tags`, `summary`)
- `lib/posts.ts` — utilidades para lectura de posts, tiempo de lectura y relacionados
- `public/` — assets estáticos:
  - `public/avatars/` — avatares y fotos personales
  - `public/images/` — imágenes generales
  - `public/posts/` — imágenes usadas en artículos
  - `public/og/` — imágenes Open Graph para compartir
- `styles/globals.css` — estilos globales (incluye componentes como la línea de tiempo)
- `__tests__/` y `test/` — configuración y pruebas

## Funcionalidades destacadas

- Página de inicio con buscador básico y listado de artículos
- Página de Autores/Colaboradores
- Línea de tiempo de periodos
- Página de artículo con:
  - Tiempo de lectura estimado
  - Barra de progreso de lectura
  - Botones para compartir
  - Artículos relacionados por etiquetas
- Newsletter (componente visual)
- Optimización de imágenes y soporte para dominios remotos (Unsplash, ui-avatars)
- SEO técnico (sitemap y robots)

## Configuración y ejecución

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Desarrollo:
   ```bash
   npm run dev
   ```
3. Build y producción:
   ```bash
   npm run build
   npm start
   ```
4. Calidad y verificación:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

## Contenidos y posts

- Agrega artículos en `content/posts/` como `01-independencia.md` con frontmatter:
  ```yaml
  title: 'Título del artículo'
  date: '2024-01-01'
  tags: ['Periodo', 'Tema']
  summary: 'Breve resumen del contenido'
  ```
- Las etiquetas se usan para listar periodos y calcular artículos relacionados.

## API de contacto (opcional)

Para habilitar el envío de correos, configura variables de entorno:

```
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
SMTP_FROM
```

Sin estos valores, la ruta de contacto responde con un fallback y no envía correos reales.

## Despliegue

El proyecto está preparado para despliegue en Vercel. Al hacer push a `main`, Vercel construye y publica automáticamente (si el repositorio está conectado).

---

Este proyecto es un ejercicio práctico y educativo para aprender Next.js, React y herramientas modernas de desarrollo web.
