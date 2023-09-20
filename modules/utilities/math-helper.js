module.exports.add = (a, b) => a + b;
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