# 💪 GastyFit Dev — Landing Page

> *El único dev del barrio que también levanta fierros.*

Landing page hecha a medida para vender servicios de desarrollo web y apps a gimnasios, boxes de CrossFit y personal trainers del sur del GBA. Sin plantillas genéricas, sin venderte humo: todo construido desde cero con código limpio y diseño que da ganas de contratar.

👉 **[Ver la web en vivo](https://gasty-fit-landing.vercel.app)**

---

## 🧠 ¿De qué se trata?

Soy **Gaston Coria**, de Escalada, y hago dos cosas:

1. **Levanto fierros** — instructor de musculación y personal trainer con más de 8 años en el negocio
2. **Escribo código** — desarrollo web y apps móviles (React, Python, Next.js, PWAs)

Esta landing une las dos cosas para ofrecerle soluciones digitales reales a gimnasios, boxes y trainers que todavía gestionan todo por WhatsApp a las 11 de la noche.

---

## 🛠️ Tech Stack

| Tecnología | Para qué se usa |
|---|---|
| **HTML5 semántico** | Estructura completa de la página |
| **CSS vanilla** | Sistema de diseño custom (tokens, componentes, animaciones) |
| **JavaScript puro** | Navbar scroll, splash screen, toast, formulario, hamburger menu |
| **Font Awesome 6** | Iconografía |
| **Google Fonts** | Barlow Condensed + Inter + Space Grotesk |
| **FormSubmit** | Envío del formulario de contacto sin backend |

> Sin frameworks, sin Tailwind, sin dependencias de NPM. Rápido, liviano y fácil de mantener.

---

## ✨ Secciones de la landing

- **Splash Screen** — intro animada con logo al cargar la página
- **Hero** — propuesta de valor principal con badges flotantes
- **Pain Strip** — los 4 problemas que más duelen en el negocio fitness
- **Servicios** — cards diferenciadas por tipo de cliente (gimnasios / CrossFit / trainers)
- **Proyectos reales** — Fútbol Fácil (PWA) y Bio Hacker (Full-Stack)
- **Sobre mí** — quién soy, por qué me entendés sin explicarme nada
- **Proceso** — 4 pasos de cómo laburamos juntos
- **Contacto** — formulario + cards de WhatsApp, Instagram y zona de cobertura
- **Footer** — redes, zona de cobertura expandida y datos de contacto

---

## 🎨 Diseño

- Paleta **dark mode** hardcore: `#080c14` base + naranja `#ff6b35` + verde `#4ade80` + violeta `#a78bfa`
- Tipografía display: **Barlow Condensed** (títulos potentes y compactos)
- Micro-animaciones: hover effects en cards, splash screen con anillos pulsantes, conectores entre pasos
- Mobile-first y responsive en todos los breakpoints

---

## 🚀 Cómo correrlo localmente

No tiene dependencias ni build steps. Literalmente:

```bash
# Opción 1 — Abrí el index.html directo en el navegador
# (el formulario no va a funcionar desde file://, pero el resto sí)

# Opción 2 — Con Live Server (VS Code)
# Instalá la extensión Live Server → click derecho en index.html → "Open with Live Server"

# Opción 3 — Con Python (si lo tenés instalado)
python -m http.server 8080
# Abrir: http://localhost:8080
```

---

## 📬 FormSubmit (formulario de contacto)

El formulario envía directo a `gastoncoria53@gmail.com` usando [FormSubmit](https://formsubmit.co). No necesita backend ni clave de API.

**Configuración incluida:**
- `_subject` → asunto personalizado del email
- `_captcha: false` → sin captcha molesto
- `_template: table` → email con formato de tabla legible
- `_next` → redirección a página de ✅ gracias después de enviar
- `_autoresponse` → respuesta automática al lead que escribe
- `_honey` → campo trampa anti-bots

---

## 📁 Estructura del proyecto

```
LANDING ZONA FIT CLAUDE/
├── index.html          ← Toda la estructura y contenido
├── css/
│   └── styles.css      ← Sistema de diseño completo (~2200 líneas)
├── js/
│   └── script.js       ← Lógica interactiva
├── images/
│   ├── gastyfit.png        ← Logo principal (favicon + splash + navbar)
│   ├── logo-futbol-facil.png   ← Logo de la app Fútbol Fácil
│   ├── logo-biohacker.png      ← Logo de Bio Hacker
│   └── foto-gasty.jpg          ← Foto para la sección "Sobre mí"
└── README.md
```

---

## 🗺️ Zona de cobertura

Lanús · Remedios de Escalada · Banfield · Lomas de Zamora · Temperley · Adrogué · Turdera

> Si tu gym está en el sur del GBA, estamos a un asado de distancia. 🥩

---

## 📲 Contacto

- **WhatsApp:** [+54 9 11 6424-6726](https://api.whatsapp.com/send?phone=5491164246726)
- **Instagram:** [@gastycoria.ok](https://www.instagram.com/gastycoria.ok/)
- **TikTok:** [@gastycoria.ok](https://www.tiktok.com/@gastycoria.ok)
- **Email:** gastoncoria53@gmail.com

---

© 2026 GastyFit Dev · Gaston Coria · Hecho con fierros y café ☕
