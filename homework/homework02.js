//Task - 1
/*
Requirement:
Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

NOTE: expected results should exactly match!!!
*/

let str1 = "5";
let str2 = "2";

let num1 = Number(str1);
let num2 = Number(str2);

let sum = num1 + num2;
let product = num1 * num2;
let division = num1 / num2;
let subtraction = num1 - num2;
let remainder = num1 % num2;
let exponentiation = num1 ** num2;

console.log(`The sum of ${num1} and ${num2} is = ${sum}`); // 7 
console.log(`The product of ${num1} and ${num2} is = ${product}`); //10
console.log(`The division of ${num1} and ${num2} is = ${division}`); //2.5
console.log(`The subtraction of  ${num1} and ${num2} is = ${subtraction}`); //3
console.log(`The remainder of ${num1} and ${num2} is = ${remainder}`); //1
console.log(`The exponentiation of ${num1} and ${num2} is = ${exponentiation}`); //25

//Task - 2

/*
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!!
*/

let s1 = "200";
let s2 = "-50";

// assign Convert strings to numbers
let num1 = Number(s1);
let num2 = Number(s2);

let greatest = Math.max(num1, num2);
let smallest = Math.min(num1, num2);

let average = (num1 + num2) / 2;

let absoluteDifference = Math.abs(num1 - num2);

console.log(`The greatest value is = ${greatest}`);
console.log(`The smallest value is = ${smallest}`);
console.log(`The average is = ${average}`);
console.log(`The absolute difference is = ${absoluteDifference}`);

//Task - 3
/*
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included)
 
 Test Data: 5, 27
 Expected Output:
The absolute difference between numbers is = 22
*/

let number1 = Math.floor(Math.random() * 50) + 1;
let number2 = Math.floor(Math.random() * 50) + 1;

console.log(`Generated numbers: ${number1}, ${number2}`);

let absoluteDifferences = Math.abs(number1 - number2);

console.log(`The absolute difference between numbers is = ${absoluteDifferences}`);

//Task - 4
/*
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included)
 
 Test Data: 3, 15, 45, 20, 25
 Expected Output:
The max value = 45
The min value = 3
*/

let num1 = Math.floor(Math.random() * 50) + 1;
let num2 = Math.floor(Math.random() * 50) + 1;
let num3 = Math.floor(Math.random() * 50) + 1;
let num4 = Math.floor(Math.random() * 50) + 1;
let num5 = Math.floor(Math.random() * 50) + 1;

console.log(`Generated numbers: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`);

let maxValue = Math.max(num1, num2, num3, num4, num5);
let minValue = Math.min(num1, num2, num3, num4, num5);

console.log(`The max value = ${maxValue}`);
console.log(`The min value = ${minValue}`);

//Task - 5
/*
Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
 Test Data: 55, 67, 90
 Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/

// Generate three random numbers between 50 and 100
let num1 = Math.floor(Math.random() * 51) + 50;
let num2 = Math.floor(Math.random() * 51) + 50;
let num3 = Math.floor(Math.random() * 51) + 50;

console.log(`The number 1 = ${num1}`);
console.log(`The number 2 = ${num2}`);
console.log(`The number 3 = ${num3}`);

let sums = num1 + num2 + num3;

console.log(`The sum of numbers is = ${sums}`);

//Task - 6 
/*
Requirement:
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
*/

// Generate three random numbers between 1 and 100 (both inclusive)
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

console.log(`Generated numbers: ${num1}, ${num2}, ${num3}`);

let allGreaterThan25 = num1 > 25 && num2 > 25 && num3 > 25;

console.log(allGreaterThan25);

//Task - 7 
/*
Requirement:
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output: The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = "David";
let length = name.length;
let firstCharacter = name.charAt(0);
let lastCharacter = name.charAt(length - 1);
let firstThreeCharacters = name.substring(0, 3);
let lastThreeCharacters = name.substring(length - 3);

console.log(`The length of the name is = ${length}`);
console.log(`The first character in the name is = ${firstCharacter}`);
console.log(`The last character in the name is = ${lastCharacter}`);
console.log(`The first 3 characters in the name are = ${firstThreeCharacters}`);
console.log(`The last 3 characters in the name are = ${lastThreeCharacters}`);

