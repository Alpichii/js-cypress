const strings = ['abc', 'Alex', 'Chicago', 'james'];
// Alex, Chicago, abc, james

strings.sort();

console.log(strings); // [ 'Alex', 'Chicago', 'abc', 'james' ]


const salaries = [10000, 5000, 25, 0];
// 0, 25, 5000, 10000 -> ascending order

salaries.sort();

console.log(salaries); // [ 0, 10000, 25, 5000 ] it sorts is like a string

salaries.sort((n1, n2) => n1 - n2);

console.log(salaries); // [ 0, 25, 5000, 10000 ]