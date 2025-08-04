let students=[
    {
      name:'Ram kumar ',
      age:14,
      marks:45
     },

    {
      name:'aadesh kumar ',
      age:14,
      marks:67
     },

    {
      name:'mohit kumar ',
      age:14,
      marks:56
     },
    {
      name:'rohit kumar ',
      age:18,
      marks:98
     },
    {
      name:'mohit kumar ',
      age:28,
      marks:76
     },
]
function findMaxMarks(){
    let pr=new Promise((resolve,)=>{
        setTimeout(()=>{
            let maxMarks=students[0].marks;
            let student;
            for (let i = 0; i < students.length; i++) {
                if (students[i].marks> maxMarks) {
                    maxMarks=students[i].marks;
                    student=students[i];
                }
             }
             resolve(student);
        },4000);
    })
    return pr;
}
findMaxMarks().
then((student)=>{
    console.log(student);
})
