//return abbreviations for the input ending with a period
function getInitials(name) {
	return name.split(‘ ‘)
		.map(word => '${word.charAt(0)}'.)
		.join(‘’);
}
