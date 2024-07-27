function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

const sumAll = function(num1, num2) {
    let acc = 0
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) || isNaN(num1) || isNaN(num2) || !isNumber(num1) || !isNumber(num2)) {
        return "ERROR"
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            acc += i
        }
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            acc += i
        }
    }
    return acc
};

// Do not edit below this line
module.exports = sumAll;
