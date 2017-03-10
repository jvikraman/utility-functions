//sample code to snake-case words
function getUrlSlug(words) {
	return words
		.replace(/\s+/g, ‘-‘)
		.toLowerCase();
}