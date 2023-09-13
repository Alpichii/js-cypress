/*
Write a function that takes 2 arguments and returns their sum

*/

function sum(a, b) {
    return a + b;
}


let var1 = sum(3, 5);
let var2 = sum(10, 5);

console.log(var1); // 8
console.log(var2); //  15

console.log(sum(4, 12)); //16

/*
Write a function that takes an array and returns the max value from the array

max([2, 5])             -> 5
max([2, 5, 100])        -> 100
max([200, 5, 100])      -> 200
*/

function max(arr) {
    if(arr.length === 0) console.error('This array does not have element');
    let max = -Infinity;

    for(const number of arr){
        if(number > max) max = number;
    }    

    return max;
}

console.log(max([2, 5])); // 5
console.log(max([2, 5, 100])); // 100
console.log(max([200, 5, 100])); // 200