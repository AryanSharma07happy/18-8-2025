let employees=[
    {
        empid: 1,
        name: 'John',
        post: 'Manager',
    },
    {
        empid: 2,
        name: 'Ram',
        post: 'professor',
    },
    {
        empid: 3,
        name: 'Shyaam',
        post: 'lecturer',
    },
    {
        empid: 4,
        name: 'Mohan',
        post: 'Accountant'
    }
]
function getEmp(empid) {
    let pr =new Promise((resolve,reject)=>{
        setTimeout(() => {
            let emp = employees.find((employee) => employee.empid === empid);
            if(emp) {
                resolve(emp);
            }else{
                reject("Employee not found");
            }
        }, 3000);
    });
    return pr;
}
function getBasicSalary(post){
    let pr =new Promise((resolve, reject) => {
        setTimeout(() => {
            let basicSalary;
            if(post=== 'Manager') {
                basicSalary = 50000;
            }else if (post === 'professor') {
                basicSalary = 40000;
            } else if (post === 'lecturer') {
                basicSalary = 30000;    
            }else{
                basicSalary = 20000;
            }   
            resolve(basicSalary);
        }, 3000);
    });
    return pr;
}
function calculateSalary(bs) {
    let pr =new Promise((resolve, reject) => {
        setTimeout(() => {
            let grossSalary = bs + bs * 0.8 + 8000;                                                                                   // Adding 20% bonus
            resolve(grossSalary);
        }, 3000);
    });
    return pr;
}
getEmp(1)
.then((emp)=>getBasicSalary(emp.post))
.then((basicSalary)=> calculateSalary(basicSalary))
.then((grossSalary)=> console.log("Gross Salary: ", grossSalary))
.catch((err)=> console.log(err));
