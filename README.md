# Portfolio_aitor

Portfolio personal de **Aitor Berrocal** — sociólogo, investigador social y desarrollador de software con IA.

Construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) y desplegado en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run preview    # sirve /dist localmente
```

## Estructura

```
src/
├── components/    # Header, Footer, Hero, About, Projects, Experience, Contact
├── data/site.ts   # Datos editables (proyectos, experiencia, contacto)
├── layouts/       # Layout base con meta tags y fuentes
├── pages/         # index.astro
└── styles/        # Estilos globales (Tailwind)
```

### Editar contenido

Casi todo el contenido editable vive en `src/data/site.ts`:

- `site`: nombre, rol, email, redes sociales.
- `projects`: lista de proyectos (software e investigación).
- `experience`: trayectoria profesional y académica.

## Despliegue

El repositorio incluye un workflow (`.github/workflows/deploy.yml`) que publica automáticamente en GitHub Pages cuando se hace push a `main`.

Para activarlo:

1. En GitHub → **Settings → Pages → Source: GitHub Actions**.
2. Hacer push a `main`.
3. El sitio quedará disponible en `https://aitorberrocal14.github.io/Portfolio_aitor/`.

El `base` del sitio está configurado en `astro.config.mjs`. Si cambias el nombre del repo, actualízalo allí.
