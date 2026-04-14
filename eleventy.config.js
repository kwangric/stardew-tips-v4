module.exports = async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' })
	eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" })

	return {
		dir: {
			input: 'src',
			includes: '_includes',
			data: '_data',
			output: '_site',
		},
		htmlTemplateEngine: 'liquid',
		markdownTemplateEngine: 'liquid',
	}
}
