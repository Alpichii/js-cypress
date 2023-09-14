const person = {
    fName: 'John',
    lName: 'Doe',
    age: 25,
    address: 'Chicago',
    fullName: function() {
        return `${this.fName} ${this.lName}`;
    },
    info: function() {
        return `${this.fullName()}'s age is ${this.age} and address is ${this.address}.`;
    }
};

//console.log(person);
console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe's age is 25 and address is Chicago

