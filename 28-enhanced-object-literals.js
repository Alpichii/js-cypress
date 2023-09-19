const fName = 'John';
const lName = 'Doe';

//Before ES6
/*
const person = {
    fName: fName,
    lName: lName,
    age: 25
}

const instructor = {
    fName: fName,
    lName: lName,
    field: 'Science',
    age: 45,
    university: 'UIC'
}
*/

// After ES6
const person = {
    fName,
    lName,
    age: 25
}

const instructor = {
    fName,
    lName,
    field: 'Science',
    age: 45,
    university: 'UIC'
}

console.log(person);
console.log(instructor);