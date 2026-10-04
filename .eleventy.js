module.exports = async function (eleventyConfig) {
    // RSS plugin je od verze 3 ES modul, do CommonJS configu se načítá přes import()
    const { default: pluginRss } = await import("@11ty/eleventy-plugin-rss");
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/scripts");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/sounds");

    // Kopírování fontů z @fontsource (npm) do /assets/fonts
    eleventyConfig.addPassthroughCopy({
        "node_modules/@fontsource-variable/cabin/files": "assets/fonts"
    });
    eleventyConfig.addPassthroughCopy({
        "node_modules/@fontsource-variable/lexend-mega/files": "assets/fonts"
    });
    eleventyConfig.addPassthroughCopy({
        "node_modules/@fontsource-variable/outfit/files": "assets/fonts"
    });
    eleventyConfig.addPassthroughCopy({
        "node_modules/@fontsource/permanent-marker/files": "assets/fonts"
    });

    // Boxicons (npm) - CSS a fonty
    eleventyConfig.addPassthroughCopy({
        "node_modules/boxicons/css/boxicons.min.css": "assets/css/boxicons.min.css"
    });
    eleventyConfig.addPassthroughCopy({
        "node_modules/boxicons/fonts": "assets/fonts"
    });

    eleventyConfig.addPassthroughCopy("src/robots.txt");

    // Rozepsané posty (draft: true) se nevygenerují ani nezobrazí v seznamech.
    // Pro náhled draftů: npm run drafts
    const showDrafts = process.env.BUILD_DRAFTS === "true";

    eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
        return (data) => (data.draft && !showDrafts) ? false : data.permalink;
    });

    eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function () {
        return (data) => (data.draft && !showDrafts) ? true : data.eleventyExcludeFromCollections;
    });

    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));

	function extractExcerpt(post) {
		if(!post.templateContent) return '';
		if(post.templateContent.indexOf('</p>') > 0) {
			let end = post.templateContent.indexOf('</p>');
			return post.templateContent.substr(0, end+4);
		}
		return post.templateContent;
	}

    eleventyConfig.addCollection("categories", function (collectionApi) {
        let categories = new Set();
        let posts = collectionApi.getFilteredByTag('post');
        posts.forEach(p => {
            let cats = p.data.tags;
            cats.forEach(c => categories.add(c));
        });
        return Array.from(categories);
    });

    eleventyConfig.addFilter("filterByCategory", function (posts, cat) {
        cat = cat.toLowerCase();
        let result = posts.filter(p => {
            let cats = p.data.tags.map(s => s.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });

    // ===== Jazykové verze článků =====
    // Přeložené články sdílí translationKey; post bez klíče je jediná verze sám o sobě.
    const translationGroupKey = p => p.data.translationKey || p.url;

    // Do výpisů jen jedna verze každého článku: anglická, jinak ta, která existuje
    eleventyConfig.addFilter("onePerTranslation", function (posts) {
        const chosen = new Map();
        posts.forEach(p => {
            const key = translationGroupKey(p);
            const current = chosen.get(key);
            if (!current || (p.data.lang === "en" && current.data.lang !== "en")) {
                chosen.set(key, p);
            }
        });
        const keep = new Set(chosen.values());
        return posts.filter(p => keep.has(p));
    });

    // Druhá jazyková verze téhož článku (pro přepínač jazyka a hreflang)
    eleventyConfig.addFilter("translationOf", function (posts, translationKey, url) {
        if (!translationKey) return null;
        return posts.find(p => p.data.translationKey === translationKey && p.url !== url) || null;
    });

    // Kontrola při buildu: dvojice musí mít protějšek a shodné datum, obrázek a tagy
    eleventyConfig.addCollection("translationPairs", function (collectionApi) {
        const groups = {};
        collectionApi.getFilteredByTag("post")
            .filter(p => p.data.translationKey)
            .forEach(p => (groups[p.data.translationKey] ||= []).push(p));

        for (const [key, versions] of Object.entries(groups)) {
            const warn = msg => console.warn(`[translations] ${key}: ${msg}`);
            if (versions.length < 2) {
                warn(`chybí druhá jazyková verze (${versions[0].inputPath})`);
                continue;
            }
            const langs = versions.map(p => p.data.lang);
            if (new Set(langs).size !== langs.length) warn(`více verzí ve stejném jazyce (${langs.join(", ")})`);

            const [first, ...rest] = versions;
            const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
            rest.forEach(p => {
                if (p.date.getTime() !== first.date.getTime()) warn(`liší se datum (${p.inputPath})`);
                if (p.data.img !== first.data.img) warn(`liší se obrázek (${p.inputPath})`);
                if (!same([...p.data.tags].sort(), [...first.data.tags].sort())) warn(`liší se tagy (${p.inputPath})`);
            });
        }
        return groups;
    });

    const {DateTime} = require("luxon");

    // Česky celým názvem měsíce (7. února 2026), jinak anglicky zkráceně (Feb 7, 2026)
    eleventyConfig.addFilter("postDate", (dateObj, lang) => {
        const date = DateTime.fromJSDate(dateObj);
        if (lang === "cs") {
            return date.setLocale("cs").toLocaleString(DateTime.DATE_FULL);
        }
        return date.setLocale("en").toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter("currentYear", function() {
        return new Date().getFullYear();
    });

    eleventyConfig.addFilter("breakableLinks", function(content) {
        if (!content) return content;

        // Najde všechny <a> tagy a upraví jejich obsah
        return content.replace(/<a([^>]*)>([^<]+)<\/a>/gi, function(match, attributes, linkText) {
            // Přidá <wbr> po znacích pro lepší zalamování
            const breakableText = linkText
                .replace(/\//g, '/<wbr>')
                .replace(/-/g, '-<wbr>')
                .replace(/\./g, '.<wbr>')
                .replace(/_/g, '_<wbr>');

            return `<a${attributes}>${breakableText}</a>`;
        });
    });

    eleventyConfig.addFilter("nonBreakingSpaces", function(content) {
        if (!content) return content;

        // Nahradí mezery za jednopísmennými předložkami a spojkami nezalomitelnými mezerami
        // České: a, i, k, o, s, u, v, z | Anglické: a, I
        // Regex zachycuje text pouze mimo HTML tagy
        return content.replace(/>([^<]+)</g, function(match, text) {
            const processedText = text.replace(/\b([aAiIkKoOsSuUvVzZ])\s+/g, '$1\u00A0');
            return '>' + processedText + '<';
        });
    });

    // Shortcode pro polaroid obrázky
    eleventyConfig.addShortcode("polaroid", function(position, src, caption) {
        return `<div class="polaroid ${position}">
    <img src="${src}" alt="${caption}">
    <span>${caption}</span>
</div>`;
    });

    return {
        dir: {
            input: "src",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
}