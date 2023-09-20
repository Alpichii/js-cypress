const {add, average, getRandomNumber} = require('./math-helper.js');
//const myHelper = require('./math-helper.js');
/*
Generate 3 random numbers
First should be between 5 and 10
Second should be between 10 and 15
Third should be between 15 and 20

Find sum and average of these 3 numbers
*/

const r1 = getRandomNumber(5, 10);
const r2 = getRandomNumber(10, 15);
const r3 = getRandomNumber(15, 20);

console.log(r1, r2, r3);

console.log(add(r1, r2, r3)); // 
console.log(average(r1, r2, r3)); // 