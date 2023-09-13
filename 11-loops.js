let sum = 0;
let factorial = 1;

let i = 1;

while(i <= 5){
    sum += i;
    factorial *= i;
    i++;
}

// for(let i = 1; i <= 5; i++){
//     sum += i;
//     factorial *= i;
// }

console.log(sum); // 15
console.log(factorial); // 120



// while and do-while

let str = 'TechGlobal';
let reversed = '';

for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
}

console.log(reversed); // labolGhceT


const numbers = [ 15, 23, 32 ]; // Sum = 70 SumOfEvenNumbers = 32

let sumNumbers = 0;
let sumEvenNumbers = 0;

for(let number of numbers){
    sumNumbers += number;
}

for(let number of numbers){
    if(number % 2 === 0) sumEvenNumbers += number;
    // else continue;
}

// for(let i = 0; i < numbers.length; i++){
//     sumNumbers += numbers[i];
// }

console.log(sumNumbers); // 70
console.log(sumEvenNumbers); // 32


for(let i = 1; i <= 3; i++){
    console.log('OUTER', i);
    for(let j = 1; j <= 5; j++){
        console.log('\tINNER', j);
    }
}


