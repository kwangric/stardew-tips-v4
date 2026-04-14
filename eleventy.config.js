module.exports = async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' })

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
