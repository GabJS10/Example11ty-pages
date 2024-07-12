const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("code/css");
    eleventyConfig.addPassthroughCopy("code/js");
    eleventyConfig.addPassthroughCopy("code/img");

    return {
        dir: {
            input: "code",
            output: "docs"
        }
    };
}