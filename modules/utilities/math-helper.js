module.exports.add = (...args) => {
    let sum = 0;
    for(const number of args) {
        sum += number;
    }
    return sum;
};

module.exports.average = (...args) => {
    let sum = 0;
    for(const number of args) {
        sum += number;
    }
    return sum/args.length;
};

module.exports.multiply = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;
module.exports.getRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
const pi = 3.14;

module.exports.pi = pi;

/*
// 3- way to export functions or variables or object
const math = {
    add,
    multiply,
    divide
};

module.exports = math;
*/

/*
// 2- way to export functions or variables or object
exports.add = add;
exports.multiply = multiply;
exports.divide = divide;
*/

/*
// 1 - way to export functions or variables or object
module.exports.add = add;
module.exports.multiply = multiply;
module.exports.divide = divide;
*/