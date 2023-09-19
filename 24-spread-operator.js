// The spread operator (...)

// Spread operator with arrays
const arr1 = [1, 2, 3], arr2 = [4, 5, 6], arr3 = [7, 8, 9, 0];

// const digits = [ arr1[0], arr1[1], arr1[2], arr2[0] ]; very primitive

const digits = [...arr1, ...arr2, ...arr3];

console.log(digits);


// Another example
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const h1 = [...q1, ...q2];
const h2 = [...q3, ...q4];
const year = [...h1, ...h2];

console.log(h1);
console.log(h2);
console.log(year);


// Spread operator with objects
const table1 = {
    use: 'Dining',
    material: 'Wood'
};

const table2 = {
    ...table1,
    isExtendable: true
}

const table3 = {
    ...table2,
    shape: 'Rectangle'  
};

console.log(table1);
console.log(table2);
console.log(table3);

// Write function that takes an array and returns the max of numbers
// [4, 10, 3, 15, 8]    -> 15

function max(arr) {
    return Math.max(...arr);
}

function min(arr) {
    return Math.min(...arr);
}

console.log(max([4, 10, 3, 15, 8])); // 15
console.log(min([4, 10, 3, 15, 8])); // 3