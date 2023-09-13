const numbers = [ 1, 2, 10, 23];
const cities = [ 'Madrid', 'Rome', 'Barcelona' ];

// const names = new Array('John', 'Max', 'Alex'); not preferred

console.log(numbers); // [ 1, 2, 10, 23 ]
console.log(cities); // [ 'Madrid', 'Rome', 'Barcelona' ]

// Access some data - elements
console.log(numbers[2]); // 10
console.log(cities[cities.length-1]); // Barcelona

// Update some elements
cities[1] = 'Milan';
console.log(cities); // [ 'Madrid', 'Milan', 'Barcelona' ]
console.log(cities[1]); // Milan

// Iteration of arrays with for...of loops
for(let city of cities){
    console.log(city);
}


/*
Store below numbers in array
And calculate the sum of the numbers
And count how many numbers are even

-2, 10, 0, 3, 13, 17, 1000

Sum = 1041
Evens = 4
*/
const myNums = [ -2, 10, 0, 3, 13, 17, 1000 ];

let sum = 0, evens = 0;

for(const number of myNums){
    sum += number;
    if(number % 2 === 0) evens++;
}

console.log(`The sum = ${sum}`);
console.log(`The evens = ${evens}`);

console.log(myNums.filter(number => number % 2 === 0));
console.log(myNums.filter(number => number % 2 === 0).length);
console.log(`The evens = ${myNums.filter(number => number % 2 === 0).length}`);
console.log(`The sum = ${myNums.reduce((sum, curr) => sum += curr, 0)}`);


// adding or removing elements to/from an array
const arr = [];
console.log(arr.length); // 0

arr.push('Pencil'); // adds element to the tail of the array (last index)
arr.push('Pen', 'Eraser', 'Phone');
arr.push('Pencil');

console.log(arr); // [ 'Pencil', 'Pen', 'Eraser', 'Phone', 'Pencil' ]

arr.unshift('Sticky Notes'); //  adds element to the head of the array (index of zero) - 6
console.log(arr); // [ 'Sticky Notes', 'Pencil', 'Pen', 'Eraser', 'Phone', 'Pencil' ]

let elementRemoved = arr.pop(); // Pencil
console.log(arr); // [ 'Sticky Notes', 'Pencil', 'Pen', 'Eraser', 'Phone' ]

arr.shift(); // Sticky Notes
console.log(arr); // [ 'Pencil', 'Pen', 'Eraser', 'Phone' ]

arr.splice(1, 0, 'Eraser', 'Phone');
console.log(arr); // [ 'Pencil', 'Eraser', 'Phone', 'Pen', 'Eraser', 'Phone' ]


arr.splice(3, 3);
console.log(arr); // [ 'Pencil', 'Eraser', 'Phone' ]