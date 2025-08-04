let student =[
    {
        rollno: 1,
        name: 'Ravi',
        branch: 'CSE',
        marks: {
            sem1:70,
            sem2:80,
            sem3:90,        
            sem4:85
        }
    },
    {
        rollno: 2,
        name: 'Sita',
        branch: 'ECE',
        marks: {
            sem1:75,
            sem2:85,
            sem3:95,        
            sem4:80
        }
    },
    {
        rollno: 3,
        name: 'Gita',
        branch: 'ME',
        marks: {
            sem1:65,
            sem2:70,
            sem3:75,        
            sem4:80
        }
    },
    {
        rollno: 4,
        name: 'Mohan',
        branch: 'CSE',
        marks: {
            sem1:90,
            sem2:95,
            sem3:85,        
            sem4:80
        }
    },
    {
        rollno: 5,
        name: 'Ramesh',
        branch: 'CSE',
        marks: {
            sem1:80,
            sem2:85,
            sem3:90,        
            sem4:95
        }
    }
]
let newStudent = {
    rollno: 6,  
    name: 'Suresh',
    branch: 'CSE',
    marks: {
        sem1: 88,
        sem2: 92,
        sem3: 85,        
        sem4: 90
    }       
}
function addStudent(newStudent) {
    let pr=new Promise((resolve, reject) => {
        setTimeout(() => {
            if(newStudent.branch ===""){
                reject("Branch is invalid");
            }else{
            student.push(newStudent);
            resolve(newStudent);
            }
            
        }, 3000);
    });
    return pr;
}
function findStudent(rollno){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let stu = student.find((st) => st.rollno === rollno);
            if (stu) {
                resolve(stu);
            } else {
                reject("Rollno is not required");
            }
        }, 4000);
    });
    return pr;
}
function calculateMarks(students) {
    let pr = new Promise((resolve, reject) => {
        if(students){
            let totalMarks = students.marks.sem1 + students.marks.sem2 + students.marks.sem3 + students.marks.sem4;
            resolve(totalMarks);
        }
        else {
            reject("No students found");
        }
    });
    return pr;
}
addStudent(1)
.then((students)=>{
    console.log(students);
   return findStudent(5);
})
.then((students)=>{
    console.log(students);
    return calculateMarks(students);
}).then((totalMarks)=>{
    console.log("Total Marks: ", totalMarks);
})
.catch((error)=>{
    console.error("Error: ", error);
}); 
