const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    },
    exam_average: function () {
        return (this.exam_scores.midterm + this.exam_scores.final) / 2;
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print Soccer -> Soccer

Find and print average of exam scores -> 75
*/

console.log(student.hobbies); // [ 'Soccer', 'Watching Movies' ]
console.log(student.exam_scores); // { midterm: 60, final: 90 }
console.log(student.hobbies[0]); // Soccer

//const exam_average = (student.exam_scores.midterm + student.exam_scores.final) / 2;

console.log(student.exam_average()); // 75

const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lName: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            fname: 'Orhan',
            lName: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lName: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];

// Count the books where Author first name has an 'a' -> 2