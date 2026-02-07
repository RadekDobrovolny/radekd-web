module.exports = function (eleventyConfig) {
    const pluginRss = require("@11ty/eleventy-plugin-rss");
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

    // Filtr pro zobrazení pouze default jazykových verzí (bez cs alternativ)
    eleventyConfig.addFilter("onlyDefaultLang", function (posts) {
        return posts.filter(p => {
            // Vyfiltrovat posty s lang: cs
            const lang = p.data?.lang;
            return lang !== 'cs';
        });
    });

    const {DateTime} = require("luxon");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
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