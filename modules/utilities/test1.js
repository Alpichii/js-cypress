// const {add, pi} = require('./math-helper.js');

const mathHelper = require('./math-helper.js'); // this will import everything from math-helper.js
console.log(mathHelper.add(3, 5)); // 8
console.log(mathHelper.add(5, 5)); // 10

console.log(mathHelper.pi); // 3.14

console.log(mathHelper.getRandomNumber(3, 5));
console.log(mathHelper.getRandomNumber(1, 10));
console.log(mathHelper.getRandomNumber(95, 100));


