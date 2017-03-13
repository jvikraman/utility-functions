//print whatever message passed on to this function to console
function printMessage(message) {
    console.log(message);
}

function printMessageWithNewLine(message) {
	console.log(message);
	console.log(‘’);
}

module.exports = printMessage, printMessageWithNewLine;