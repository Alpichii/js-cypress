console.log(Math.max(3, 5)); // 5
console.log(Math.min(3, 5)); // 3


/*
Find max and min of the below numbers
3
4
10
-2
*/

let max = Math.max(3, 4, 10, -2);
let min = Math.min(3, 4, 10, -2);

console.log(max);
console.log(min);

let abs1 = Math.abs(2 - 3);
let abs2 = Math.abs(-35);

console.log(abs1); // 1
console.log(abs2); // 35

console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

console.log(Math.random()); // it returns a decimal number between 0 and 1 (0 is included but 1 is excluded)

/*
Generate random number bt 1 and 10 both inclusive

0.0 - 0.9
0 - 10
*/

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));

/*
Can you generate a random number bt 10 and 20 (both inclusive)
10 11 12 13 14 15 16 17 18 19 20

20 - 10 + 1 = 11 numbers

0.0 - 0.9

0 and 10 both included
10      20

Math.floor(Math.random() * (max - min + 1)) + min

*/

console.log(Math.floor(Math.random() * 11) + 10); 




