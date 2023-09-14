/*
Create a function that takes a string and returns the first character
Hello   -> H
JavaScript  -> J
*/

// 1 - regular function syntax
function firstChar(str) {
    return str[0];
}


// 2 - function expression
const fChar = function (str) {
    return str[0];
}

// 3 - arrow function 
const firstC = (str) => str[0];


console.log(firstChar('Hello')); // H
console.log(firstChar('JavaScript')); // J

console.log(fChar('Hello')); // H
console.log(fChar('JavaScript')); // J

console.log(firstC('Hello')); // H
console.log(firstC('JavaScript')); // J

// Callback functions: these are the functions called as an argument in another function
// Array forEach() callback function

const numbers = [ 2, 3, 4, 5, 6 ];

numbers.forEach((x) => console.log(x));

// Print only odd numbers -> 3, 5
numbers.forEach((element) => {
    if(element % 2 !== 0) {
        console.log(element);
    }
});



// Array map() callback function
const numbers2 = [10, 5, 2, 6]; // [30, 15, 6, 18]

console.log(numbers2.map((number) => number * 3)); // [ 30, 15, 6, 18 ]

/*
const newArr = [];

for(const number of numbers2){
    newArr.push(number * 3);
}

console.log(newArr); // [ 30, 15, 6, 18 ]
*/

/*
for(let i = 0; i < numbers2.length; i++){
    numbers2[i] *= 3;
}

console.log(numbers2); // [ 30, 15, 6, 18 ]
*/


// Array filter() callback function
const numbers3 = [-5, 0, 5, 10, 23, -10];

// Find all the negative numbers -> [ -5, -10 ]

console.log(numbers3.filter((x) => x < 0)); // [ -5, -10 ]

/*
const newArr = [];

for(const number of numbers3) {
    if(number < 0) newArr.push(number);
}

console.log(newArr);
*/

// Array reduce() callback function -> max, min, sum, product, longestString, shortestString
const names = [ 'James', 'John', 'Jane', 'Max', 'Jennifer' ];

// Count how many names starts with J -> 4

let count = 0;

for(const name of names) {
    if(name[0] === 'J') count++;
}

console.log(count); // 4

const result = names.reduce((count, name) =>  name[0] === 'J' ? count+1 : count, 0);

console.log(result); // 4

// Array find() and findIndex() callback functions

const names2 = ['John', 'Jane', 'Alex', 'Jane', 'Max'];


// Find first name that has a as a letter -> Jane
let firstName;

for(const name of names2){
    if(name.includes('a')) {
        firstName = name;
        break;
    }
}

console.log(firstName); // Jane

console.log(names2.find((name) => name.includes('a'))); // Jane
console.log(names2.findIndex((name) => name.includes('a'))); // 1


// Array some() and every() callback functions
const prices = [ 10.5, 3.33, 5.00, 99.99 ];

// Check if every price is more than zero
console.log(prices.every((price) => price > 0)); // true

// Check if every price is more than 100
console.log(prices.every((price) => price > 100)); // false

console.log(prices.some((price) => price > 100)); // false
console.log(prices.some((price) => price > 99)); // true 