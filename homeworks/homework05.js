// Task - 1

// Requirement:
// Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
//  Examples:
// countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
// countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
// countPos([0, -1, -2, -3]) 		-> 0

function countPos(arr) {
  let count = 0; // Initialize counter to 0
  for (let num of arr) { // Loop through each number in the array
    if (num > 0) { // Check if the number is positive
      count++; // Increment the counter
    }
  }
  return count; // Return the final count of positive numbers
}

// Test the function
console.log(countPos([-45, 0, 0, 34, 5, 67]));  // Output should be 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));  // Output should be 4
console.log(countPos([0, -1, -2, -3]));  // Output should be 0
 
// Task - 2 
// Requirement:
// Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

// NOTE: Ignore case sensitivity. 

// Examples:
// countA("TechGlobal is a QA bootcamp") 	-> 4
// countA("QA stands for Quality Assurance") 	-> 5
// countA("Cypress") 			-> 0

function countA(str) {
  let count = 0; // Initialize counter to 0
  const lowerStr = str.toLowerCase(); // Convert the string to lowercase to ignore case sensitivity
  
  for (let char of lowerStr) { // Loop through each character in the string
    if (char === 'a') { // Check if the character is 'a'
      count++; // Increment the counter
    }
  }
  
  return count; // Return the final count of 'A's or 'a's
}

// Test the function
console.log(countA("TechGlobal is a QA bootcamp"));  // Output should be 4
console.log(countA("QA stands for Quality Assurance"));  // Output should be 5
console.log(countA("Cypress"));  // Output should be 0
console.log(countA("Alper AKartal"));

// Task - 3 
// Requirement: 
// Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

// NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
//  Examples:
// countVowels("Hello") 		-> 2
// countVowels("Hello World") 		-> 3
// countVowels("JavaScript is fun") 		-> 5
// countVowels("") 			-> 0

function countVowels(str){
 let vowels = 'AEIOaeiou';
 let count = 0;

 for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      count++;
    }
 }
  return count;
}

console.log(countVowels('I Love Chicago'));     //6
console.log(countVowels("Hello"));              // 2
console.log(countVowels("Hello World"));        // 3
console.log(countVowels("JavaScript is fun"));  // 5
console.log(countVowels(""));                   // 0

// Task - 4
// Requirement: 
// Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

// NOTE: A letter that is not vowel is considered as a consonant letter. Examples:
// countConsonants("Hello") 		-> 3
// countConsonants("Hello World") 		-> 8
// countConsonants("JavaScript is fun") 		-> 12
// countConsonants("") 			-> 0

function countConsonants(word) {
  let vowels = 'AEIOUaeiou';
  let count = 0;

  for(let i = 0; i < word.length; i++) {
      if (!vowels.includes(word[i]) && word[i].match(/[a-zA-Z]/)) {
          count++;
      }
  }
  
  return count;
}

console.log(countConsonants("Hello"));              // Output should be 3
console.log(countConsonants("Hello World"));        // Output should be 8
console.log(countConsonants("JavaScript is fun"));  // Output should be 12
console.log(countConsonants(""));                   // Output should be 0

// Task - 5 
// Requirement:
// Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

// NOTE: Be careful about the extra whitespaces before and after the string.
//  Examples:
// countWords("     Javascript is fun       ") 		-> 3
// countWords("Cypress is an UI automation tool.    ") 	-> 6 countWords("1 2 3 4") 			-> 4

function countWords(word){
  word = word.trim();

  if(word === ""){
    return 0;
  }
  return word.split(/\s+/).length;

}
console.log(countWords("     Javascript is fun      "));  // 3
console.log(countWords("Cypress is an UI automation tool.    "));  // 6
console.log(countWords("1 2 3 4"));  // 4
console.log(countWords(""));  // 0

// Task - 6 
// Requirement:
// Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

// NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1

// Assume you will not be given a negative number.
//  Examples:
// factorial(5) 		-> 120
// factorial(4)		-> 24
// factorial(0)		-> 1
// factorial(1)		-> 1

function factorial(n){
  let result = 1;

  for(let i = 1; i <= n; i++){
    result *= i;
  }

  return result;
}

console.log(factorial(5));  // 120
console.log(factorial(4));  // 24
console.log(factorial(0));  // 1
console.log(factorial(1));  // 1

// Task - 7 
// Requirement: 
// Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

// NOTE: Palindrome: It is a word that is read the same backward as forward
// Examples: kayak, civic, madam

// NOTE: your function should ignore case sensitivity

function isPalindrome(word){
    word = word.toLowerCase();

    return word === word.split('').reverse().join('');
}
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Kayak")); // true 

// Task - 8 
// Requirement: 
// Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.

// NOTE: Be careful about the extra whitespaces before and after the array element.
//  Examples:
// countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
// countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
// countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
// countMultipleWords([ ]) 					-> 0

function countMultipleWords(arr){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        let trimmedArr = arr[i].trim();
        if (trimmedArr.split(/\s+/.length > 1)){
          count++;
        }
    }
return count;
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));         
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));         
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));   
console.log(countMultipleWords([ ]));    

// Task - 9 
// Requirement: 
// Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.

//  Examples:
// count3OrLess("Hello") 			-> 0
// count3OrLess("Hi John") 			-> 1
// count3OrLess("JavaScript is fun") 		-> 2
// count3OrLess("My name is John Doe") 	-> 3
// count3OrLess("") 			-> 0   

function count3OrLess(sentence) {
  // Trim the string to remove leading and trailing whitespaces
  sentence = sentence.trim();

  // Check if the string is empty
  if (sentence === "") {
      return 0;
  }

  // Initialize the count
  let count = 0;

  // Split the string into words
  const words = sentence.split(/\s+/);

  // Iterate over the array and count words with 3 or fewer characters
  for (let word of words) {
      if (word.length <= 3) {
          count++;
      }
  }

  return count;
}

// Testing the function
console.log(count3OrLess("Hello"));               // Output should be 0
console.log(count3OrLess("Hi John"));             // Output should be 1
console.log(count3OrLess("JavaScript is fun"));   // Output should be 2
console.log(count3OrLess("My name is John Doe")); // Output should be 3
console.log(count3OrLess(""));                    // Output should be 0

// Task - 10 
// Requirement:
// Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.

// NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
// Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
// NOTE: The smallest prime number is 2 and there is no negative prime numbers.

//  Examples:
// isPrime(5) 		-> true
// isPrime(2) 		-> true
// isPrime(29) 		-> true
// isPrime(-5)		-> false
// isPrime(0)		-> false
// isPrime(1)		-> false

function isPrime(number){
if(number < 2){
  return false;
}
for (let i = 2; i <= Math.sqrt(number); i++){
if(number % i === 0){
  return false;
}
}
return true;
}

console.log(isPrime(5));  // Output should be true
console.log(isPrime(2));  // Output should be true
console.log(isPrime(29)); // Output should be true
console.log(isPrime(-5)); // Output should be false
console.log(isPrime(0));  // Output should be false
console.log(isPrime(1));  // Out

// Task - 11
// Requirement:
// Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

// NOTE: Be careful about the array sizes as they could be different.
//  Examples:
// add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
// add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
// add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]

function add(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
      const val1 = arr1[i] !== undefined? arr1[i] : 0;
      const val2 = arr2[i] !== undefined? arr2[i] : 0;
      result.push(val1 + val2);
  }

  return result;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); //[16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]

// Task - 12 
// Requirement: 
// Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

//  Examples:
// removeExtraSpaces("Hello") 		-> "Hello" 
// removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
// removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
// removeExtraSpaces("") 			-> "" 

function removeExtraSpaces(str){
    str =str.trim();

    return str.replace(/\s+/g, ' ');
}

console.log(removeExtraSpaces("Hello"));                       // Output should be "Hello"
console.log(removeExtraSpaces("      Hello    World     "));   // Output should be "Hello World"
console.log(removeExtraSpaces("     JavaScript is          fun")); // Output should be "JavaScript is fun"
console.log(removeExtraSpaces(""));                            // Output should be ""

// Task - 13
// Requirement: 
// Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

// NOTE: Assume that length of array is always more than zero.
// NOTE: Ignore the 10 itself.
// NOTE: If there are more than one numbers are close equally, return the smaller number.
//  Examples:
// findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
// findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
// findClosestTo10([0, -1, -2]) 		-> 0

function findClosestTo10(arr){
    let closestElement = arr[0];
    let closestDistance = Math.abs(10 - closestElement);

    if(closestElement === 10);{
    closestDistance = Infinity;
}

for(let i = 1; i < arr.length; i++){
  const currentElement = arr[i];
  const currentDistance = Math.abs(10 - currentElement);
      if(currentElement === 10) continue;
      
      if(currentDistance <closestDistance){
        closestElement = currentElement;
        closestDistance = currentDistance;
      }else if (currentDistance === closestDistance){
         closestElement = Math.min(closestElement, currentElement)
      }
    }

  return closestElement

  }

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));

// Task - 14 
// Requirement: 
// Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

// NOTE: A VALID EMAIL:
// should NOT have any space.
// should not have more than one “@” character.
// should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
// There should be at least characters before @ character.
// There should be at least 2 characters between @ and . Characters.
// There should be at least 2 characters after the . character.

//  Examples:
// isEmailValid("") 			-> false
// isEmailValid("@gmail.com") 		-> false
// isEmailValid("johndoe@yahoo") 		-> false
// isEmailValid("johndoe@.com") 		-> false
// isEmailValid("a@outlook.com") 		-> false
// isEmailValid("johndoe@a.com") 		-> false
// isEmailValid("johndoe@@gmail.com") 	-> false
// isEmailValid("johndoe@gmail.com") 		-> true

function isEmailValid(email){
  if(email.includes(" ")) return false;
  if(email.split("@").length - 1 !== 1) return false;

  const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

console.log(isEmailValid(""));                    // Output should be false
console.log(isEmailValid("@gmail.com"));          // Output should be false
console.log(isEmailValid("johndoe@yahoo"));       // Output should be false
console.log(isEmailValid("johndoe@.com"));        // Output should be false
console.log(isEmailValid("a@outlook.com"));       // Output should be false
console.log(isEmailValid("johndoe@a.com"));       // Output should be false
console.log(isEmailValid("johndoe@@gmail.com"));  // Output should be false
console.log(isEmailValid("johndoe@gmail.com"));

// Task - 15
// Requirement: 
// Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

// NOTE: A VALID PASSWORD:
// should have length of 8 to 16 (both inclusive).
// should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
// should NOT have any space.

//  Examples:
// isPasswordValid("") 			-> false
// isPasswordValid("abcd") 			-> false
// isPasswordValid("abcd1234") 		-> false
// isPasswordValid("Abcd1234") 		-> false
// isPasswordValid("Chicago12345US!#$%") 	-> false
// isPasswordValid("Abcd1234$") 		-> true
// isPasswordValid("Chicago123$") 		-> true
// isPasswordValid("Test1234#") 		-> true

function isPasswordValid(password){
if(password.length < 8 || password.length > 16) return false;

if(password.includes( " ")) return false;

const digitRegex = /[0-9]/;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const specialCharRegex =  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if(
    digitRegex.test(password) &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    specialCharRegex.test(password)
){
  return true;
}else {
  return false;
}
}

console.log(isPasswordValid(""));                  // Output should be false
console.log(isPasswordValid("abcd"));              // Output should be false
console.log(isPasswordValid("abcd1234"));          // Output should be false
console.log(isPasswordValid("Abcd1234"));          // Output should be false
console.log(isPasswordValid("Chicago12345US!#$%"));// Output should be false
console.log(isPasswordValid("Abcd1234$"));         // Output should be true
console.log(isPasswordValid("Chicago123$"));       // Output should be true
console.log(isPasswordValid("Test1234#"));         // Output should be true