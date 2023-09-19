console.log(name); // undefined

var name = 'John';


/*
Above code is interpreted as below

var name; // undefined
console.log(name); // undefined
name = 'John';
*/

console.log(sum(3, 5)); // 8

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5)); // 10

// BE CAREFUL WITH FUNCTION EXPRESSION OR ARROW FUNCTIONS
//myFunction1(); // ReferenceError: Cannot access 'myFunction1' before initialization
//myFunction2(); // ReferenceError: Cannot access 'myFunction2' before initialization

const myFunction1 = function () {
    console.log('FUNCTION 1');
}

const myFunction2 = () => console.log('FUNCTION 2');

myFunction1(); // FUNCTION 1
myFunction2(); // FUNCTION 2