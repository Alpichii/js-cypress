// Destructuring arrays
const tshirt_sizes = ['Small', 'Medium', 'Large', 'X-Large'];

// const small = tshirt_sizes[0];
// const medium = tshirt_sizes[1];
// const large = tshirt_sizes[2];

const [small, medium, large] = tshirt_sizes;

console.log(small, medium, large); // Small Medium Large


const[s, ...rest] = tshirt_sizes; // Small, [ 'Medium', 'Large', 'X-Large' ]

console.log(s);
console.log(rest);

const[, m, , x] = tshirt_sizes;

console.log(m); // Medium
console.log(x); // X-Large

// Destructuring objects
const person = {
    fName: 'John',
    lName: 'Doe',
    age: 25
}

// const firstName = person.fName;
// const lastName = person.lName;
// const age = person.age;

const {fName, lName, age} = person;

if(fName.startsWith('J')) console.log('JAYYY');
else console.log('YAYYYY');

for(const letter of fName.split('')) {
    console.log(letter);
}

console.log(`${fName} ${lName} is ${age}.`);
