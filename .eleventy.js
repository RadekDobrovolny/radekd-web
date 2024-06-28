module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/scripts");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/sounds");

    eleventyConfig.addShortcode("exampleShortcode", function (name) {
        return `<div class="example-shortcode">Hello, ${name}!</div>`;
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

    const {DateTime} = require("luxon");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
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