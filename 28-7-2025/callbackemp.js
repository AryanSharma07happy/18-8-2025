let emp={
    id:1,
    name: 'Ram kumar',
    mobNo: 1234567890,
    post: 'Software Engineer',
    }
    let emp1=getEmp(1);
    console.log(emp1,'emp1');
    let bs=getBasicSalary(emp1.post);
    console.log('Basic Salary:', bs);
    let grossSalary=calculateSalary(bs);
    console.log(grossSalary);
    function getEmp(id) {
        setTimeout(() => {
       return {  
            id: 1,
            name: 'Ram kumar',
            mobNo: 1234567890,
            post: 'Software Engineer'
         };
        },3000);
       
    }
    function getBasicSalary(post) {
        if(post === 'Software Engineer') {
            return 50000;
        }else if(post === 'lecturer') {
            return 40000;       
        }
         else {
            return 30000;                                                                     // Default basic salary
        }
    }
    function calculateSalary(bs) {
        return bs + (bs*.25+7000);
    }