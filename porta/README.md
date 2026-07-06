# Portafolio — Juan Ramón M.

Portafolio personal construido con **Vite** (bundler) y **LESS** como preprocesador de CSS.
El CSS final se genera minificado y **purgado** (PurgeCSS elimina cualquier regla no usada
en `index.html` / JS antes de publicar).

## Estructura

```
├── index.html          # HTML de entrada (Vite)
├── vite.config.js       # Config de Vite (base = /work/ para GitHub Pages)
├── package.json
├── public/
│   └── images/pfp.jpg   # Assets estáticos
├── src/
│   ├── style.less        # Estilos en LESS (variables, mixins, anidamiento)
│   └── main.js           # Entry JS (importa el LESS + lógica del scroll)
└── .github/workflows/deploy.yml   # CI/CD -> build y deploy automático a GH Pages
```

## Comandos

```bash
npm install       # instala Vite, less, purgecss
npm run dev       # servidor de desarrollo
npm run build     # build de producción:
                  #   1) vite build -> compila LESS a CSS y minifica JS/CSS
                  #   2) purgecss -> elimina reglas CSS no utilizadas
npm run preview   # sirve la carpeta dist/ localmente para probar el build
```

El resultado final queda en `dist/`, con el CSS purgado y minificado en una sola línea.

## Despliegue a GitHub Pages

Este repo incluye un workflow (`.github/workflows/deploy.yml`) que automáticamente
hace `npm run build` y publica `dist/` en GitHub Pages cada vez que se hace push a `main`.

Pasos (una sola vez):

1. Sube este proyecto a tu repositorio en GitHub (reemplazando el contenido anterior).
2. En GitHub: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
3. Haz push a `main`; el Action se ejecutará y publicará el sitio.
4. La URL quedará como: `https://<tu-usuario>.github.io/<nombre-del-repo>/`

> Importante: si el nombre del repositorio no es `work`, actualiza `base` en
> `vite.config.js` para que coincida (por ejemplo `base: '/mi-repo/'`).
