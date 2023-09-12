console.log(3 == 3); // true
console.log(3 == 10); // false

console.log(3 == '3'); // true as == compares only values
console.log(3 === '3'); // false as === compares both values and data types

let var1 = '123';
let var2 = 123;

if(var1 !== var2){
    console.log('WELL DONE');
}
else {
    console.log("NOT GOOD");
}

console.log(parseInt('3') * parseInt("12")); // 36
console.log('3' * "12"); // 36
console.log('3' ** "2"); // 9
console.log('3' % "2"); // 1

console.log("Hello " + 3 + 5); // Hello 35
console.log("Hello " + (3 + 5)); // Hello 8
console.log(3 + 5 + "Hello"); // 8Hello

console.log("Hello" + 5 - 3); // NaN - Not a Number
console.log("Hello" + (5 - 3)); // Hello 2
console.log(5 - 3 + "Hello"); // 2Hello

// isNaN
console.log(isNaN(25)); // false
console.log(isNaN(25 + "abc")); // true
console.log(isNaN("25")); // false
console.log(isNaN("25abc")); // true
