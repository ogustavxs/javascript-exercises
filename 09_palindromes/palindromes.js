const palindromes = (text) => {
	const wordReversed = text
		.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/)
		.join("")
		.toLowerCase()
		.split("")
		.reverse()
		.join("")

	const originalWord = text
		.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/)
		.join("")
		.toLowerCase()

	if (wordReversed === originalWord) {
		return true;
		// biome-ignore lint/style/noUselessElse: <explanation>
	} else {
		return false;
	}
};


// Do not edit below this line
module.exports = palindromes;
