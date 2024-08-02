const add = (num1, num2) => {
	return num1 + num2;
};

const subtract = (num1, num2) => {
	return num1 - num2;
};

const sum = (array) => {
	return array.reduce((acc, item) => {
		return acc + item;
	}, 0);
};

const multiply = (array) => {
	return array.reduce((acc, item) => {
		return acc * item;
	}, 1);
};

const power = (num1, num2) => {
	return num1 ** num2;
};

const factorial = (num) => {
	if (num < 0) {
		return 0;
		// biome-ignore lint/style/noUselessElse: <explanation>
	} else if (num === 0) {
		return 1;
		// biome-ignore lint/style/noUselessElse: <explanation>
	} else {
		return num * factorial(num - 1);
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
