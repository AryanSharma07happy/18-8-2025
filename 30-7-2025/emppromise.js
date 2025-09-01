let employees=[
    {
        id: 1,
        name: 'Ram',
        mobNo: '1234567890'
    },
    {
        id: 2,
        name: 'Mohan',
        mobNo: '1234567890'
    },
    {
        id: 3,
        name: 'Sita',
        mobNo: '1234567890'
    }
]
function findemployee(id){
    let pr =new Promise((resolve, reject) => {
        setTimeout(() => {
        let emp =employees.find((employee) => employee.id === id);
        if(emp){
            resolve(emp);
        }
        else{
            reject("Employee not found");
        }
        }, 3000);
    });
    return pr;
}
findemployee(5).
then((Employee)=>{
    console.log(Employee);
}).catch((err)=>{
    console.log(err);
    })