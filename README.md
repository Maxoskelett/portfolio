# Maximilian Wittwer - Portfolio Website

Ein elegantes, modernes Portfolio für Filmemacher, 3D-Künstler, Fotografen und Sound Designer – inspiriert vom Design des New Yorker Magazins.

## 🎨 Features

- **Elegantes Editorial Design** – New Yorker Magazin Aesthetic
- **Responsive Layout** – Perfekt auf allen Geräten
- **Smooth Animations** – Framer Motion Scroll-Effekte
- **Optimierte Typografie** – Playfair Display + Inter
- **Farbschema** – Creme (#FAF9F6), Deep Black (#1A1A1A), Warm Gold (#D4AF37)
- **Kategorie-Filter** – Work nach Video, 3D, Fotografie, Sound sortieren
- **Contact Form** – Direkt Nachrichten empfangen
- **Social Links** – YouTube, Instagram, LinkedIn, etc.

## 📋 Seiten

1. **Home** – Hero Section mit CTA
2. **About** – Biography, Skills & Expertise
3. **Work** – Portfolio mit Kategorie-Filter (Video, 3D, Photography, Sound)
4. **Contact** – Contact Form + Social Links

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

### Build für Production

```bash
npm run build
npm start
```

### Export für GitHub Pages

```bash
npm run export
```

## 📁 Projektstruktur

```
├── app/
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Home Page
│   ├── globals.css         # Global Styles
│   ├── about/
│   │   └── page.tsx
│   ├── work/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── SectionHeadline.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Anpassungen

### Farben ändern

Passe die Farben in `tailwind.config.js` an:

```js
colors: {
  cream: '#FAF9F6',
  'dark-black': '#1A1A1A',
  'warm-gold': '#D4AF37',
  // ...
}
```

### Projektdaten hinzufügen

Bearbeite die `projects` Array in `app/work/page.tsx`:

```ts
const projects = [
  {
    id: 1,
    title: 'Dein Projekt',
    category: 'video',
    description: 'Beschreibung...',
    tags: ['Tag1', 'Tag2'],
    image: 'URL...'
  },
  // ...
]
```

### Social Links hinzufügen

Aktualisiere die Links in `components/Footer.tsx` und `app/contact/page.tsx`:

```tsx
<a href="https://youtube.com/@yourname" target="_blank">
  <FiYoutube />
</a>
```

### Contact Form Funktionalität

Die Contact Form in `app/contact/page.tsx` braucht eine Backend-Integration. Du kannst z.B. **Formspree**, **Netlify Forms**, oder **EmailJS** nutzen.

## 📤 Deployment auf GitHub Pages

### 1. GitHub Repository erstellen

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main`, Folder: `out`
5. Speichern

### 3. Eigene Domain verwenden
- Wähle `Custom domain` und trage `maxwittwer.com` ein.
- GitHub erstellt dann eine `CNAME`-Datei für dich.

### 4. Deploy Script hinzufügen (optional)

Erstelle `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run export
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display + Inter (Google Fonts)
- **Icons**: React Icons
- **Language**: TypeScript

## 📝 Lizenz

Dein Projekt. Verwende es frei.

---

**Viel Erfolg mit deinem Portfolio! 🎬✨**

Fragen? Öffne ein Issue oder kontaktiere mich direkt.
