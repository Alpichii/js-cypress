const car = {
    color: 'red',
    make: 'BMW',
    model: 'X6',
    year: 2023
};

console.log(car); // { color: 'red', make: 'BMW', model: 'X6', year: 2023 }

/*
All keys: [ 'color', 'make' , 'model', 'year' ]
All values: [ 'red', 'BMW' , 'X6', '2023' ]
All key-value pairs: [ [ 'color', 'red' ], [ 'make', 'BMW' ], [ 'model', 'X6' ], [ 'year', '2023' ] ]
*/

const keys = Object.keys(car); //  returns the keys as an array

console.log(keys); // [ 'color', 'make', 'model', 'year' ]

console.log(Object.values(car)); // [ 'red', 'BMW' , 'X6', '2023' ]

console.log(Object.entries(car)); 

for(const key of Object.keys(car)) {
    console.log(key);
}

for(const value of Object.values(car)) {
    console.log(value);
}

for(const [x, y] of Object.entries(car)) {
    console.log(x, y);
}