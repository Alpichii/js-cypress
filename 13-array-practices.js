const numbers = [0, 3, -9,  5, 8];

// Find first positive element -> 3
let firstPos; // undefined

for(const number of numbers){
   if(number > 0) {
    firstPos = number;
    break;
   }
}

console.log(firstPos);

// Find first negative element -> -9
// Find first odd element -> 3

// Putting all together
let firstPositive, firstNegative, firstOdd, firstPositiveFound = false, firstNegativeFound = false, firstOddFound = false;

for(const num of numbers){
    if(!firstPositiveFound && num > 0){
        firstPositive = num;
        firstPositiveFound = true;
    }
    if(!firstNegativeFound && num < 0){
        firstNegative = num;
        firstNegativeFound = true;
    }
    if(!firstOddFound && num % 2 !== 0){
        firstOdd = num;
        firstOddFound = true;
    }

    if(firstNegativeFound && firstPositiveFound && firstOddFound) break;
}

console.log(firstNegative);
console.log(firstPositive);
console.log(firstOdd);