console.log(this); // It refers to the global object

const instructor = {
    fName: 'John',
    lName: 'Doe',
    field: 'Science',
    info: function () {
        return this;
    },
    fullName: function () {
        return `${this.fName} ${this.lName}`;
    }
}

console.log(instructor.info()); // 
console.log(instructor.fullName()); // John Doe

console.log(this);