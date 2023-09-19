function multiply(...args) {
    let result = 1;
    for(const number of args) {
        result *= number;
    }
    return result;
}

console.log(multiply(1)); // 1
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 10)); // 20
console.log(multiply(1, 2, 10, 5)); // 100
console.log(multiply(1, 2, 10, 5, 3)); // 300

function sum(num1, ...rest) {
    let result = num1;
    for(const number of rest) {
        result += number;
    }
    return result;
}

console.log(sum(1)); // 1
console.log(sum(1, 5)); // 6
console.log(sum(1, 5, 10)); // 16
console.log(sum(1, 5, 10, 25)); // 41