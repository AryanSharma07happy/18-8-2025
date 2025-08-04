// console.log("Callback Problem Solution");
// setTimeout(() => {
//     console.log("payment in process");
// }, 2000);
// console.log("payment done");
// we are going to handle async code using callback
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
let newstudent={
    name: 'Mohan',
    age: 23,
    marks: 75
}
console.log("students");
console.log(students);

function addStudent(newstudent, callback) {
    setTimeout(()=>{
      console.log("Adding new student...");
        students.push(newstudent);
      callback();
        console.log("New student added successfully");
    }, 3000)
}
console.log("after adding new student");
function showstudents() {
console.log(students);
}
//addStudent(newstudent, showstudents);
addStudent(newstudent, () => {
    console.log(students);
});    
