# historia-argentina

Blog sobre la historia de Argentina (desde la independencia hasta la actualidad).

## Inicio rápido

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:

   ```bash
   npm run dev
   ```

3. Verificar linting, types y tests:

   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

El proyecto usa Next.js (TypeScript) y posts en Markdown. Se pueden agregar artículos en `content/posts/` con frontmatter (`title`, `date`, `tags`, `summary`).

Este proyecto usa estilos básicos en `styles/globals.css` (se optó por CSS estático para compatibilidad). Si quieres activar utilidades Tailwind completas hay que ajustar la configuración de PostCSS y/o plugins.

Estructura relevante:

- `app/` — rutas principales
- `components/` — componentes React reutilizables
- `content/posts/` — posts en Markdown
- `lib/posts.ts` — utilidades para leer posts

- Para ver artículos por periodo/etiqueta: visita `/periods` y luego el periodo deseado.

Añade nuevos posts como `content/posts/07-nombre-del-post.md` con frontmatter al inicio del archivo.
