const course = {
    name: 'Cypress Automation with JS',
    participants: 20,
    isOnline: true
};

console.log(course);

// Accessing object key-value
console.log(course.participants); // 20
console.log(course.name); // Cypress Automation with JS
console.log(course.isOnline); // true

console.log(course['participants']); // 20
console.log(course['name']); // Cypress Automation with JS
console.log(course['isOnline']); // true

// Adding a new property
course.isFinished = false;
console.log(course);

// Remove an existing property
delete course.isFinished;
console.log(course);

// Update an exising property value
course["isOnline"] = false;

console.log(course);

// for...in loop
for(const variable in course){
    console.log(course[variable]);
}

for(const [key, value] of Object.entries(course)) {
    console.log(`${key} is ${value}`);
}