module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/images");

    eleventyConfig.addShortcode("exampleShortcode", function (name) {
        return `<div class="example-shortcode">Hello, ${name}!</div>`;
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