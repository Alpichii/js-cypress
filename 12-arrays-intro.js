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


const favNumbers = [ 7, 5, 8, 10, 15, 10 ];
console.log(favNumbers.indexOf(10)); // 3
console.log(favNumbers.lastIndexOf(10)); // 5

console.log(favNumbers.includes(5)); // true
console.log(favNumbers.includes(15)); // true
console.log(favNumbers.includes(50)); // false
console.log(favNumbers.includes(100)); // false

console.log([ 'abc', 'FOO', 'bar', 123, true ].includes('ABC')); // false
console.log([ 'abc', 'FOO', 'bar', 123, true ].indexOf('ABC')); // -1
console.log([ 'abc', 'FOO', 'bar', 123, true ].lastIndexOf('ABC')); // -1


const newArr = [ 1, 5, -3, 100];
const newArrReversed = newArr;
newArrReversed.reverse();

console.log(newArr); // [ 1, 5, -3, 100]
console.log(newArrReversed); // [ 100, -3, 5, 1 ]


// Multi-dimentional array
const multi = [
    ['Phone', 'Computer'],
    ['Cup', 'Fork', 'Spoon', 'Plate'],
    ['Mouse']
];

console.log(multi[1][2]); // Spoon


for(const arr of multi){
    console.log('The inner array', arr);
    for(const obj of arr){
        console.log('\tElement', obj)
    }
}

// Count all the element starting with P -> 2
const multiFlat = multi.flat();
console.log(multiFlat);
console.log(multiFlat.length); // 7

let count = 0;
for(const element of multiFlat){
    if(element.startsWith('P')) count++;
}

console.log(count); // 2


const lastArray = [5, 10, 20, 43];

console.log(lastArray.toString()); // 5,10,20,43
console.log(lastArray.join()); // 5,10,20,43
console.log(lastArray.join(" | ")); // 5 | 10 | 20 | 43
console.log(lastArray.join(" - ")); // 5 - 10 - 20 - 43
console.log(lastArray.join(" ### ")); // 5 ### 10 ### 20 ### 43