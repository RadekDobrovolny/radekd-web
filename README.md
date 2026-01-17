# Osobní web hippou.cz

Můj osobní web sloužící jako portfolio, CV a blog. Inspiroval jsem se grafickým stylem neo-brutalism. Web má dva grafické režimy: zmrzlinový (světlý) a lesní (tmavý).

🌐 **Live:** [hippou.cz](https://hippou.cz)

## Tech Stack

- **[Eleventy](https://www.11ty.dev/)** (v2.0.1) - Statický generátor stránek
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Template engine
- **Node.js** 20.x
- **GitHub Pages** - Hosting

### Plugins

- `@11ty/eleventy-plugin-rss` - Generování sitemap.xml

## Lokální vývoj

### Požadavky

- Node.js 20.x nebo vyšší
- npm

### Instalace

```bash
npm install
```

### Spuštění dev serveru

```bash
npm start
```

Web běží na `http://localhost:16161`

### Build

```bash
npm run hippou-cz-build
```

Vygeneruje statické soubory do složky `_site/`.

## CI/CD

Projekt používá **GitHub Actions** pro automatický deployment:

- **Trigger:** Push do `main` větve
- **Node.js verze:** 20.x
- **Build proces:**
  1. Instalace dependencies (`npm install`)
  2. Build pomocí Eleventy (`npm run hippou-cz-build`)
  3. Deploy na GitHub Pages

Workflow soubor: `.github/workflows/static.yml`

## Struktura projektu

```
src/
  ├── _data/          # Data soubory
  ├── _includes/      # Částečné šablony (partials)
  ├── _layouts/       # Layouty stránek
  ├── assets/         # CSS, JS, obrázky, zvuky
  ├── posts/          # Blog příspěvky
  ├── index.md        # Domovská stránka
  ├── resume.md       # CV
  └── robots.txt      # SEO
```

## SEO

- ✅ `robots.txt` - Pravidla pro crawlery
- ✅ `sitemap.xml` - Automaticky generovaná sitemap

## License

**Kód:** ISC License - volně použitelný

**Obsah (texty, články):** [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/)
- Citace vyžaduje uvedení autora a odkazu na [hippou.cz](https://hippou.cz)
- Modifikace obsahu nejsou povoleny
- Sdílení originálu je povoleno

© 2026 Radek Dobrovolný

