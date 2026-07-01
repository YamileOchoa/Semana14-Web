<div align="center">

# 🚀 my-portfolio

### Portafolio personal con SEO optimizado

**Yamile Ochoa Marin**

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

Portafolio personal desarrollado con **Next.js 15 (App Router)**, optimizado para **SEO** y **rendimiento**, como parte del laboratorio _"Desarrollo de Aplicaciones Web Avanzado: Optimización y SEO"_.

Incluye todo lo pedido en la guía **y** lo solicitado en la **TAREA**:

- ✅ Meta tags dinámicos (layout, home, projects, detalle de proyecto, about, contact)
- ✅ Componentes compartidos (`Header`, `Footer`)
- ✅ Optimización de imágenes y lazy loading con `next/image`
- ✅ Sitemap dinámico (`app/sitemap.ts`)
- ✅ `robots.txt` dinámico (`app/robots.ts`)
- ✅ **Página de contacto** (`/contact`) con formulario
- ✅ `sitemap.xml` y `robots.txt` actualizados incluyendo `/contact`
- ⬜ Dominio personalizado + despliegue en Vercel (pendiente de que tú lo hagas, ver guía abajo)

---

## 📋 Requisitos previos

- **Node.js** ≥ 18.18 (recomendado 20+)
- **npm** (viene con Node)

Verifica tu versión:

```bash
node -v
npm -v
```

---

## ⚙️ Instalación

Clona el repositorio y entra a la carpeta del proyecto:

```bash
git clone https://github.com/YamileOchoa/Semana14-Web.git
cd Semana14-Web
npm install
```

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

Abre en el navegador:

- http://localhost:3000
- http://localhost:3000/projects
- http://localhost:3000/projects/ecommerce-platform
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/sitemap.xml
- http://localhost:3000/robots.txt

---

## ✏️ Antes de desplegar: personaliza tus datos

Edita **`src/lib/data.ts`**:

- Cambia `personalInfo` (nombre, título, descripción, email, github, linkedin, `siteUrl`).
  - **`siteUrl`** es clave: se usa para generar los meta tags OpenGraph, el `sitemap.xml` y el `robots.txt`. Debe ser el dominio final donde publiques la app (ej. `https://yamile-ochoa.vercel.app` o tu dominio personalizado).
- Cambia/agrega los `projects` con tus proyectos reales.

Agrega las imágenes Open Graph a la carpeta `public/` (reemplaza el archivo `public/README-images.txt`):

- `og-image.jpg` (1200x630) — usada en el layout general / home
- `og-projects.jpg` (1200x630) — usada en `/projects`
- `og-contact.jpg` (1200x630) — usada en `/contact`

También puedes agregar tu propio `favicon.ico` en `src/app/`.

---

## ☁️ Despliegue en Vercel

1. Sube el proyecto a un repositorio en GitHub:

   ```bash
   git init
   git add .
   git commit -m "Portafolio personal con SEO optimizado"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/my-portfolio.git
   git push -u origin main
   ```

2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub.
3. Click en **"Add New... > Project"** e importa el repositorio `my-portfolio`.
4. Vercel detecta automáticamente que es un proyecto Next.js. Deja la configuración por defecto y dale a **Deploy**.
5. Al finalizar obtendrás una URL tipo `https://my-portfolio-xxxx.vercel.app`.
6. **Importante:** actualiza `siteUrl` en `src/lib/data.ts` con esa URL (o tu dominio personalizado, ver siguiente sección), haz commit y push — Vercel volverá a desplegar automáticamente y tu `sitemap.xml`/`robots.txt`/meta tags usarán la URL correcta.

---

## 🔍 Verificación de SEO

- **Meta tags:** clic derecho → Inspeccionar → revisa las etiquetas `<meta>` dentro de `<head>` (title, description, og:title, og:description, og:image, twitter:card, etc.)
- **Lighthouse:** abre Chrome DevTools (F12) → pestaña **Lighthouse** → ejecuta auditoría en modo **Desktop** y **Mobile** → objetivo: **Score > 90** en todas las categorías.

---

## 📁 Estructura del proyecto

```
my-portfolio/
├── public/
│   └── README-images.txt        # reemplazar por og-image.jpg, og-projects.jpg, og-contact.jpg
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx     # TAREA: página de contacto
│   │   ├── projects/
│   │   │   ├── [slug]/page.tsx  # meta tags dinámicos por proyecto
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx           # meta tags globales
│   │   ├── not-found.tsx
│   │   ├── page.tsx             # home
│   │   ├── robots.ts            # robots.txt dinámico (incluye /contact)
│   │   └── sitemap.ts           # sitemap.xml dinámico (incluye /contact)
│   ├── components/
│   │   ├── ContactForm.tsx      # TAREA: formulario de contacto
│   │   ├── Footer.tsx
│   │   ├── Header.tsx           # incluye link a /contact
│   │   └── ProjectCard.tsx      # imágenes con lazy loading
│   ├── lib/
│   │   └── data.ts              # datos de ejemplo + personalInfo (editar aquí)
│   └── types/
│       └── index.ts
├── next.config.ts               # optimización de imágenes (AVIF/WEBP)
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

<div align="center">

Hecho con 💙 por **Yamile Ochoa Marin**

</div>
