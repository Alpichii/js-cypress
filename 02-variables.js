var age = 25;
let balance = 100.5;
const myFavCity = "Chicago";


// Variable declaration
let name;

// Variable assignment
name = "John";
console.log(name); // John

// Re-assignment
name = "Alex";

console.log(name); // Alex


// Multiple variable declaration and initialization
let n1, n2, n3, n4;
let n11 = 11, n22 = 22, n33 = 33, n44 = 44;

let var1 = 'Hello'; // string
let var2 = 25; // byte, short, int, long, float, double
let var3 = 10.5; // float, double
let var4 = true; // boolean



/*
var vs let vs const
const is used for constants (like final) and you cannot re-assign it
let and var can be re-assigned
var is old school
let is ES6 feature - added in 2015 (ES2015)

SCOPE
*/

let city = 'Chicago';
const state = "IL";
var country = 'US';

const pi = 3.14;
const firstMonthOfTheYear = 'January';

// state = "NOT IL"; // TypeError: Assignment to constant variable.

console.log(state);

let balance1 = 100.45;

balance1 -= 5;

console.log(balance1); // 95.45
