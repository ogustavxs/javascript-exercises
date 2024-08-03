const fibonacci = (n) => {
    const fibonacciSequence = [0, 1]
    if (fibonacciSequence.length-1 >= n) {
		if (n < 0) {
			return 'OOPS'
		// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			return fibonacciSequence[n]
		}
    // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
		for (let i = 1; fibonacciSequence.length-1  <= n; i++) {
			const penultimoIndex = fibonacciSequence.length-2
			const ultimoIndex = fibonacciSequence.length-1
			fibonacciSequence.push((fibonacciSequence[penultimoIndex]+ fibonacciSequence[ultimoIndex]))
		}
	}
	return fibonacciSequence[n]
};

// Do not edit below this line
module.exports = fibonacci;
