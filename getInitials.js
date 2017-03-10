//return capitalized abbreviations for the input
function getInitials(name) {
	return name.split(‘ ‘)
		.map(word => word.charAt(0).toUpperCase())
		.join(‘’);
}