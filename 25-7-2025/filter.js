let students = [
    {
        name: 'Ram',
        age: 20,
        marks: 85
    },
    {
        name: 'Shyam',
        age: 22,
        marks: 90
    },
    {
        name: 'Sita',
        age: 21,
        marks: 46
    }
]
// it is old approach
let results=[];
students.forEach((student) => {
    if (student.marks > 50) {
        results.push(student);
    }
});
//console.log('results:', results);
//Now using filter method
// let results1 = students.filter((student) => {
//     return student.marks > 50;
// });

let results1 = students.filter((student) => student.marks > 50);
console.log('results1:', results1);


