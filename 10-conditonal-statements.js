if(true === (4 * 2 === 8)){
    console.log('Block 1');
}
else {
    console.log('Block 2');
}

let number = Math.floor(Math.random() * 10) - 5;
console.log(number);


if(number < 0) console.log('NEGATIVE');
else if(number > 0) console.log('POSITIVE');
else console.log('ZERO');

let result1 = true === (4 * 2 === 8) ? 'Block 1' : 'Block 2';
let result2 = number < 0 ? 'NEGATIVE' : number > 0 ? 'POSITIVE' : 'ZERO';
console.log(result1); // Block1
console.log(result2); // 


let age = 30;

switch(true) {
    case age > 0 && age < 16:
        console.log('YOU ARE NOT ALLOWED TO GET DL');
        break;
    case age > 16:
        console.log('YOU ARE ALLOWED TO GET DL');
        break;
    default:
    console.error('AGE CANNOT BE NEGATIVE');
}
