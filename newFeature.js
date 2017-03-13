//sample code to snake-case words that are passed as input
function getUrlSlug(words) {
	return words
		.replace(/\s+/g, ‘-‘)
		.toLowerCase();
}