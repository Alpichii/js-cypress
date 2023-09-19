// Global Scope
var city = 'Chicago';
const state = 'IL';
let country = 'US';


console.log(city);
console.log(state);
console.log(country);

if(true) {
    console.log(city, state, country);
}

let str = 'civic';
let strReversed = '';

for(let i = str.length - 1; i >= 0; i--) {
    strReversed += str[i];
}

if(str === strReversed) console.log('PALINDROME');
else console.log('NOT PALINDROME');


// Function Scope
function sum(arr) {
    let total = 0; // belongs to sum function - function scope
    for(const number of arr) {
        total += number;
    }
    return total;
}

// console.log(total); // ReferenceError: total is not defined - this behavior is same for var, let or const
console.log(sum([1, 2, 3])); // 6


// Block Scope
{
    var num1 = 1;
    let num2 = 2;
    const num3 = 3;

    console.log(num1); // 1
    console.log(num2); // 2
    console.log(num3); // 3
}

console.log(num1); // 1
//console.log(num2); // ReferenceError: num2 is not defined
//console.log(num3); // ReferenceError: num3 is not defined



// Lexical Scope: nested functions
function outer() {
    let outerVariable = 'OUTER';

    function inner() {
        let innerVariable = 'INNER';
        console.log(innerVariable, outerVariable); // Access to both is valid
    }
     console.log(outerVariable); // OUTER
     //console.log(innerVariable); // ReferenceError: innerVariable is not defined

     inner(); // INNER OUTER
}

outer();


// Closure
function score() {
    let initialScore = 0; // function scope and it cannot be accessed outside the function - it is private to the score function
    
    const inner = function () {
        return initialScore += 1;
    };

    return inner;
}

const anyFunction = score();  // initialScore = 0 and inner function is returned

console.log(anyFunction()); // 1
console.log(anyFunction()); // 2
console.log(anyFunction()); // 3

