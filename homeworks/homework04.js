// Task - 1
// Requirement:
// Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).

// Expected Output: 7 
// 14
// 21
// .
// .
// .
// .
// 91
// 98

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {

    console.log(i);
  }
}

// Task - 2
// Requirement:
// Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).

// Expected Output: 6
// 12
// 18 
// .
// .
// 36
// 42
// 48

for (let i = 1; i <= 50; i++) {
  if (i % 6 === 0) {

    console.log(i);
  }
}

// Task - 3
// Requirement:
// Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).

// Expected Output: 100
// 95
// 90
// 85
// .
// .
// .
// 60
// 55
// 50

for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Task - 4
// Requirement:
// Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
// NOTE: Use loop!!!

// Expected Output: The square of 0 is =  0
// The square of 1 is =  1
// The square of 2 is =  4
// The square of 3 is =  9
// The square of 4 is =  16
// The square of 5 is =  25
// The square of 6 is =  36
// The square of 7 is =  49

for (let i = 0; i <= 7; i++) {
  const square = i * i;
  
  console.log(`The square of ${i} is =  ${square}`);
}

// Task - 5
// Requirement:
// Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
// Calculation => 1+2+3+4+5+6+7+8+9+10

// NOTE: Use loop!!!

// Expected Output:
// 55

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// Task - 6
// Requirement:
// Write a program generates a random number between 1 and 10 (both inclusive).
// And find the factorial of the number.

// Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1

// For example:
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// 4! = 4 × 3 × 2 × 1 = 24
// 0! (by convention) is defined as 1.

const randomNumber = Math.floor(Math.random() * 10) + 1;

let factorial = 1;

console.log(`The random number is ${randomNumber}`);

for (let i = 1; i <= randomNumber; i++) {
  factorial *= i;
}

console.log(`The factorial of ${randomNumber} is ${factorial}`);

// Task - 7
// Requirement:
// Write a program generates a random number between 1 and 100 (both inclusive).
// Keep generating a new number till you get a number that is divisible by 5.

// The program should also count how many attempts it takes to generate such a number.

// Eventually, print the random number divisible by 5 with the number of attempts as below.

// Expected Output: The random number is {randomNumber} and it took {attempts} attempt/s to generate it.

let randomNumbers;
let attempts = 0;

do {
  randomNumbers = Math.floor(Math.random() * 100) + 1;

  attempts++;
} while (randomNumbers % 5 !== 0);

console.log(`The random number is ${randomNumbers} and it took ${attempts} attempt/s to generate it.`);

// Task - 8
// Requirement:
// -Create an array that stores countries below.
// Germany, Argentina, Ukraine, Romania

// THEN:
// -Output the entire array
// -Ouput the entire array sorted lexicographically

// Expected Result:
// ['Germany', 'Argentina', 'Ukraine', 'Romania' ]
// [ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(countries);

const sortedCountries = countries.sort();
console.log(sortedCountries);

// Task - 9
// Requirement:
// -Create a String array that stores cartoon dogs below
// Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

// THEN:
// -Output the entire array
// -Then, check if the array has Pluto element
// 	if it has Pluto, then output true
// 	if it does not have Pluto, output false

// Expected Result:
// [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
// true

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(cartoonDogs);

const hasPluto = cartoonDogs.includes('Pluto');
console.log(hasPluto);

// Task - 10
// Requirement:
// -Create an array that stores cartoon cats below.
// Garfield, Tom, Sylvester, Azrael

// THEN:
// -Output the entire array sorted lexicographically
// -Then, check if the array has both Garfield and Felix
// 	if it has both, then output true
// 	if it does not have both, output false

// Expected Result:
// [ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
// false

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
const sortedCartoonCats = cartoonCats.sort();

console.log(sortedCartoonCats);

const hasBoth = sortedCartoonCats.includes('Garfield') && sortedCartoonCats.includes('Felix');

console.log(hasBoth);

// Task - 11
// Requirement:
// -Create an array that stores numbers below
// 10.5, 20.75, 70, 80, 15.75

// THEN:
// -Output the entire array
// -Ouput each element

// Expected Result:
// [ 10.5, 20.75, 70, 80, 15.75 ]
// 10.5
// 20.75
// 70
// 80
// 15.75


const myNumbers = [10.5, 20.75, 70, 80, 15.75];

console.log(myNumbers);

for (let i = 0; i < myNumbers.length; i++) {
  console.log(myNumbers[i]);
}

// Task - 12
// Requirement:
// -Create an array that stores objects below.
// Pen, notebook, Book, paper, bag, pencil, Ruler

// THEN:
// -Output the entire array.
// -Output how many elements starts with 'B' or 'P', ignoring cases.
// -Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

// Expected Result:
// ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
// Elements starting with 'B' or 'P' = 5
// Elements having 'book' or 'pen' = 4 

const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(objects);

let countStartBP = 0;
for (let i = 0; i < objects.length; i++) {
  const firstChar = objects[i].charAt(0).toUpperCase();
  if (firstChar === 'B' || firstChar === 'P') {
    countStartBP++;
  }
}

let countContainsBookPen = 0;
for (let i = 0; i < objects.length; i++) {
  const lowerCaseObj = objects[i].toLowerCase();
  if (lowerCaseObj.includes('book') || lowerCaseObj.includes('pen')) {
    countContainsBookPen++;
  }
}

console.log(`Elements starting with 'B' or 'P' = ${countStartBP}`);
console.log(`Elements having 'book' or 'pen' = ${countContainsBookPen}`);

// Task - 13
// Requirement:
// -Create an array that stores numbers below.
// 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

// THEN:
// -Output the entire array
// -Output how many elements are more than 10
// -Output how many elements are less than 10
// -Output how many elements are 10

// Expected Result:
// [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
// Elements that are more than 10 = 5
// Elements that are less than 10 = 4
// Elements that are 10 = 2

const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers);

let countMoreThan10 = 0;
let countLessThan10 = 0;
let countEqualTo10 = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    countMoreThan10++;
  } else if (numbers[i] < 10) {
    countLessThan10++;
  } else if (numbers[i] === 10) {
    countEqualTo10++;
  }
}

console.log(`Elements that are more than 10 = ${countMoreThan10}`);
console.log(`Elements that are less than 10 = ${countLessThan10}`);
console.log(`Elements that are 10 = ${countEqualTo10}`);

// Task - 14
// Requirement:
// -Create 2 arrays that stores numbers below.
// First array-> 		[ 5, 8, 13, 1, 2 ]
// Second array -> 	[ 9, 3, 67, 1, 0 ]

// THEN:
// -Output both arrays
// –Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

// Expected Result:
// 1st array is =  [ 5, 8, 13, 1, 2 ]
// 2nd array is = [ 9, 3, 67, 1, 0 ]
// 3rd array is =  [ 9, 8, 67, 1, 2 ]

const firstArray = [5, 8, 13, 1, 2];
const secondArray = [9, 3, 67, 1, 0];

console.log("1st array is = ", firstArray);
console.log("2nd array is = ", secondArray);

const thirdArray = [];

for (let i = 0; i < firstArray.length; i++) {
  thirdArray.push(Math.max(firstArray[i], secondArray[i]));
}

console.log("3rd array is = ", thirdArray);

//!!!!! Last 5 tasks in homework 4 complicated, need to review if possible!!!!!!

// Task - 15 ?
// Requirement:
// Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
// NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

// Examples:
// firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
// firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
// firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
// firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
// firstDuplicate([ 1, 2, 3])			-> -1
// firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1

function firstDuplicate(arr) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (seen.has(element)) {
      return element; 
    }

    seen.add(element);
  }

  return -1; 
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // Output should be 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // Output should be 5 // result are 7?
console.log(firstDuplicate([5, '5', 3, 7, 4])); // Output should be -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // Output should be 'abc'
console.log(firstDuplicate([1, 2, 3])); // Output should be -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); // Output should be -1



// Task - 16 ?
// Requirement:
// Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.

// NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

// Examples:
// getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
// getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
// getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
// getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]

function getDuplicates(arr) {
  const elementCount = {};  
  const duplicates = new Set();  

  for (const element of arr) {
    const key = typeof element + '-' + element;

    if (elementCount[key] !== undefined) {
      elementCount[key]++;
    } else {
      elementCount[key] = 1;
    }
  }

  for (const [key, count] of Object.entries(elementCount)) {
    if (count > 1) {
      const [type, value] = key.split('-');

      let originalValue;
      if (type === 'number') {
        originalValue = Number(value);
      } else if (type === 'string') {
        originalValue = value;
      } else {
        originalValue = value;
      }
      duplicates.add(originalValue);
    }
  }

  return Array.from(duplicates);
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));  // [0, -7]
console.log(getDuplicates([1, 2, 5, 0, 7]));  // []
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));  // ['foo', 'a']
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));  // []

// Task - 17 ?
// Requirement:
// Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word separately reversed when invoked.

// NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

// Examples:
// reverseStringWords("Hello World") 		-> "olleH dlroW"
// reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
// reverseStringWords("Hello") 		-> "olleH"
// reverseStringWords("") 			-> ""
// reverseStringWords("    ") 		-> ""

function reverseStringWords(str) {
  str = str.trim();

  if (str === '') {
    return '';
  }

  const words = str.split(/\s+/);
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  const reversedStr = reversedWords.join(' ');

  return reversedStr;
}

console.log(reverseStringWords("Hello World"));        // "olleH dlroW"
console.log(reverseStringWords("I like JavaScript"));  // "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello"));              // "olleH"
console.log(reverseStringWords(""));                   // ""
console.log(reverseStringWords("    "));               // ""


// Task - 18 ?
// Requirement:
// Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
// Assume you will not be given negative numbers.

// Examples:
// getEvens(2, 7)	-> [ 2, 4, 6 ]
// getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
// getEvens(4, 4)	-> [ 4 ]
// getEvens(3, 3)	-> [ ]

function getEvens(start, end) {
  const evenNumbers = [];

  if (start > end) {
    [start, end] = [end, start];
  }

  let current = start % 2 === 0 ? start : start + 1;

  for (; current <= end; current += 2) {
    evenNumbers.push(current);
  }

  return evenNumbers;
}

console.log(getEvens(2, 7));  // [ 2, 4, 6 ]
console.log(getEvens(17, 5)); // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4));  // [ 4 ]
console.log(getEvens(3, 3));  // [ ]

// Task - 19 ?
// Requirement:
// Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
// NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
// Assume you will not be given negative numbers.

// Examples:
// getMultipleOf5(3, 17)	-> [ 5, 10, 15]
// getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
// getMultipleOf5(5, 5)	-> [ 5 ]
// getMultipleOf5(2, 4)	-> [ ]

function getMultipleOf5(start, end) {
  const multiplesOf5 = [];

  const step = start <= end ? 1 : -1;

  for (let current = start; step > 0 ? current <= end : current >= end; current += step) {
    if (current % 5 === 0) {
      multiplesOf5.push(current);
    }
  }

  return multiplesOf5;
}

console.log(getMultipleOf5(3, 17));  // [ 5, 10, 15 ]
console.log(getMultipleOf5(23, 5));  // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5));   // [ 5 ]
console.log(getMultipleOf5(2, 4));   // [ ]

// Task - 20 ?
// Requirement:
// Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
// You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
// You will need to convert numbers divisible by 3 to 'Fizz'
// You will need to convert numbers divisible by 5 to 'Buzz'
// You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
// The rest will stay the same.
// NOTE: Make your code dynamic that works for any numbers.
// Assume you will not be given negative numbers.

// Examples:
// fizzBuzz(13, 18)	-> 13 | 14 | FizzBuzz | 16 | 17 | Fizz 
// fizzBuzz(12, 5)	-> Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
// fizzBuzz(5, 5)	-> Buzz
// fizzBuzz(9, 6)	-> Fizz | 7 | 8 | Fizz

function fizzBuzz(start, end) {
  const fizzBuzzArray = [];

  const step = start <= end ? 1 : -1;

  for (let current = start; step > 0 ? current <= end : current >= end; current += step) {
    let str = '';

    if (current % 3 === 0 && current % 5 === 0) {
      str = 'FizzBuzz';
    } else if (current % 3 === 0) {
      str = 'Fizz';
    } else if (current % 5 === 0) {
      str = 'Buzz';
    } else {
      str = current.toString();
    }

    fizzBuzzArray.push(str);
  }

  return fizzBuzzArray.join(' | ');
}

console.log(fizzBuzz(13, 18));  // 13 | 14 | FizzBuzz | 16 | 17 | Fizz
console.log(fizzBuzz(12, 5));   // Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
console.log(fizzBuzz(5, 5));    // Buzz
console.log(fizzBuzz(9, 6));    // Fizz | 7 | 8 | Fizz



const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    exam_scores:{
      midterm: 60,
      final: 90,
    }
}

for (const key in student) {
  if (key === 'hobbies') {
    console.log(student[key]);  // Output: ['Soccer', 'Watching Movies']
  }
}

console.log(student.hobbies);
console.log(values[2]);
console.log(examScores[3]);


const students = {
  firstName: 'Alex',
  lastName: 'Smith',
  hobbies: ['Soccer', 'Watching Movies'],
  exam_scores: {
      midterm: 60,
      final: 90
  },
  exam_average: function () {
      return (this.exam_scores.midterm + this.exam_scores.final) / 2;
  }
};

console.log(students);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print Soccer -> Soccer

Find and print average of exam scores -> 75
*/

console.log(student.hobbies); // [ 'Soccer', 'Watching Movies' ]
console.log(student.exam_scores); // { midterm: 60, final: 90 }
console.log(student.hobbies[0]); // Soccer

//const exam_average = (student.exam_scores.midterm + student.exam_scores.final) / 2;

console.log(student.exam_average()); // 75

const books = [
  {
      name: 'Amok',
      author: {
          fname: 'Stefan',
          lName: 'Zweig'
      },
      genre: 'Novella'
  },
  {
      name: 'My Name Is Red',
      author: {
          fname: 'Orhan',
          lName: 'Pamuk'
      },
      genre: 'Historical Novel'
  },
  {
      name: '1984',
      author: {
          fname: 'George',
          lName: 'Orwell'
      },
      genre: 'Dystopian Literature'
  }
];

// Count the books where Author first name has an 'a' -> 2

// const count = books.filter(book => book.author.fname.includes('a')).length;
// console.log(count);


// console.log(books.filter(book => book.author.fname.includes('a')).length);

// let counts = 0;

// for (let i = 0; i < books.length; i++) {
//   if (books[i].author.fname.includes('a')) {
//     count++;
//   }
// }

// console.log(counts);  


const count = books.reduce((acc, book) => {
  return acc + (book.author.fname.includes('a') ? 1 : 0);
}, 0);

console.log(count);  // Output: 2
