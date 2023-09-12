let company = 'TechGlobal';

console.log(company.length); // 10
console.log(company.toUpperCase()); // TECHGLOBAL
console.log(company.toLowerCase()); // techglobal

console.log(company.charAt(0)); // T
console.log(company.charAt(3)); // h
console.log(company.charAt(3)); // h
console.log(company.charAt(company.length-1)); // l

console.log(company.charAt(-10)); // no error, you get empty
console.log(company.charAt(100)); // no error, you get empty

console.log(company[0]); // T
console.log(company[company.length-1]); // l

console.log(company[-10]); // undefined
console.log(company[100]); // undefined

console.log(company.charCodeAt(0)); // 84 which is ASCII decimal representation of letter T



console.log("Chicago".includes('C')); // true
console.log("Chicago".includes('c')); // true
console.log("Chicago".includes('A')); // false

console.log('Illinois'.startsWith('I')); // true
console.log('Illinois'.startsWith('i')); // false
console.log('Illinois'.endsWith('Illinois')); // true
console.log('Illinois'.startWith('Illinois')); // true

console.log('TechGlobal'.indexOf('l')); // 5
console.log('TechGlobal'.lastIndexOf('l')); // 9
console.log('TechGlobal'.search('l')); // 5

console.log('TechGlobal'.indexOf('Y')); // -1
console.log('TechGlobal'.lastIndexOf('Y')); // -1 
console.log('TechGlobal'.search('Y')); // -1


console.log('    John      '.trim()); // "John"
console.log('    John      '.trimStart()); // "John      "
console.log('    John      '.trimEnd()); // "    John"


let language = "JavaScript";

console.log(language.substring(0, 4)); // Java
console.log(language.substring(4)); // Script

console.log(language.slice(0, 4)); // Java
console.log(language.slice(4)); // Script

console.log(language.slice(-4, -2)); // ri
console.log(language.substring(-4, -2)); // empty