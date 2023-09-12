let fname = "John";
let lname = "Doe";
let fullname = `${fname} ${lname}`;
let yearOfBirth = 1990;

// John Doe is __ years old.

console.log(fname + " " + lname + " is " + (new Date().getFullYear() - yearOfBirth) + " years old.");

console.log(`${fname} ${lname} is ${new Date().getFullYear() - yearOfBirth} years old.`);

console.log(fname + " " + lname);
console.log(`${fname} ${lname}`);