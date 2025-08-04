let employees=[
    {
       name:'ram',
       age:56,
       salary:67504
    },
    {
       name:'kaam',
       age:36,
       salary:67504
    },
    {
      name:'nam',
       age:66,
       salary:67504
    }
]
let arr=[];
employees.forEach((employee)=>{
    let obj = {};
    obj.name=employee.name;
    obj.age=employee.salary;
    arr.push(obj)
    // console.log(`Name:${employee.name} Salary:${employee.salary}`);
    
})
//console.log(arr);

// let employee1=employee1.map(employee=> {
//     return {name:employee.name,salary:employee.salary}
// }
// )
 let student =[
      {
        Name:"afd",
        price:2999,
        age:17
    },
    {
        Name:"web",
        price:999,
        age:18
    },
    {
        Name:"aades",
        price:12999,
        age:32
    },
    {
        Name:"Dat",
        price:12999,
        age:24
    }
 ]
 let studentName =student.map(student=>`Master ${student.Name}`)
// console.log(studentName);

 const myNums=[10,20,30,40,50,60,70,80,90,100]
 const threeNum = myNums.map( (num)=> num*3);
 //console.log(threeNum);

 let faclties=[
    {
        name:'Naushad Sir',
        branch:'CSE',
        qualification:'M.Tech',
        subject:{
            subName:'C language',
            type:'regular'
        },
        mobNo:1234567890,
        Gender:'Male'
    },
    {
        name:'lav dixit Sir',
        branch:'CSE',
          qualification:'M.Tech',
        subject:{
            subName:'C language',
            type:'regular'
        },
        mobNo:1234567890,
        Gender:'Male'
    },
     {
        name:'pradhan Sir',
        branch:'CSE',
          qualification:'M.Tech',
        subject:{
            subName:'C language',
            type:'regular'
        },
        mobNo:1234567890,
        Gender:'Male'
    },
     {
        name:' shalbha mam',
        branch:'CSE',
          qualification:'M.Tech',
        subject:{
            subName:'C language',
            type:'regular'
        },
        mobNo:1234567890,
        Gender:'Male'
    }
 ];
 let facltiesData=faclties.map(faclty=> {
    if (faclty.Gender==='Male'){
        faclty.name=`Mr.${faclty.name}`
    }else{
        faclty.name=`Ms.${faclty.name}`
    }
    return {
              name:faclty.name,
        Qualifiction:faclty.qualification,
        subject:faclty.subject.subName

    }
 });

 console.log(facltiesData);
 