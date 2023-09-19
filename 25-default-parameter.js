function multiply(num1 = 0, num2 = 1) {
    return num1 * num2;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(4, 3)); // 12

console.log(multiply()); // 0
console.log(multiply(2)); // 2


console.log(multiply(2, 2, 3)); // 4
console.log(multiply(2, 2, 3, 4)); // 4
console.log(multiply(2, 2, 3, 4, 0)); // 4