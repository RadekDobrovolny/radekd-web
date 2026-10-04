# Osobní web hippou.cz

Můj osobní web sloužící jako portfolio, CV a blog. Inspiroval jsem se grafickým stylem neo-brutalism. Web má dva grafické režimy: zmrzlinový (světlý) a lesní (tmavý).

🌐 **Live:** [hippou.cz](https://hippou.cz)

## Tech Stack

- **[Eleventy](https://www.11ty.dev/)** (v2.0.1) - Statický generátor stránek
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Template engine
- **Node.js** 24.x (LTS)
- **GitHub Pages** - Hosting

### Plugins

- `@11ty/eleventy-plugin-rss` - RSS feed (`/feed.xml`) a data pro sitemap.xml

## Lokální vývoj

### Požadavky

- Node.js 24.x (LTS) nebo vyšší
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

Náhled i s rozepsanými články (`draft: true`):

```bash
npm run drafts
```

### Build

```bash
npm run hippou-cz-build
```

Vygeneruje statické soubory do složky `_site/`.

## CI/CD

Projekt používá **GitHub Actions** pro automatický deployment:

- **Trigger:** Push do `main` větve
- **Node.js verze:** 24.x
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
  ├── posts/          # Blog příspěvky (posts.json = výchozí hodnoty pro všechny)
  ├── index.md        # Domovská stránka
  ├── resume.md       # CV
  └── robots.txt      # SEO
```

## Psaní článků

Článek je Markdown soubor v `src/posts/`. Layout `post`, tag `post` a jazyk `en`
doplní `src/posts/posts.json`, v hlavičce stačí:

```yaml
---
title: "Šuplík"
desc: 'Digitální šuplík na nápady'
date: 2026-02-07
permalink: '/post/suplik.html'
lang: cs                  # jen u českých textů, výchozí je en
translationKey: suplik    # jen u článků s překladem
img: '/assets/images/posts/010-light.png'
tags:
  - portfolio
  - web
---
```

- **Rozepsaný článek:** `draft: true` – negeneruje se a není ve výpisech ani v sitemapě.
- **Překlad:** obě verze (např. `010-suplik.md` a `010-suplik.cs.md`) mají stejný
  `translationKey`. Přepínač jazyka a `hreflang` se dopočítají samy, ve výpisech
  se ukáže anglická verze. Build vypíše varování `[translations]`, když verzi chybí
  protějšek nebo se liší datum, obrázek či tagy.
- **Datum** vypisuje layout podle jazyka (`7. února 2026` / `Feb 7, 2026`).

## SEO

- ✅ `robots.txt` - Pravidla pro crawlery
- ✅ `sitemap.xml` - Automaticky generovaná sitemap
- ✅ `feed.xml` - Atom feed článků
- ✅ Open Graph, canonical a `hreflang` pro jazykové verze
- ✅ `404.html` - Vlastní stránka pro neexistující adresy

## License

**Kód:** ISC License - volně použitelný

**Obsah (texty, články):** [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/)
- Citace vyžaduje uvedení autora a odkazu na [hippou.cz](https://hippou.cz)
- Modifikace obsahu nejsou povoleny
- Sdílení originálu je povoleno

© 2026 Radek Dobrovolný

