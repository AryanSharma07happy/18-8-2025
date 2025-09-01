let emp={
    id:1,
    name: 'Ram kumar',
    mobNo: 1234567890,
    post: 'Software Engineer',
    }
    getEmp(1,(emp) => {
        console.log(emp);
         getBasicSalary(emp.post,(bs) => {
            console.log(bs);
            calculateSalary(bs, (gs) => {
                console.log(gs);
            })
          })
        });
    function getEmp(id, callback) {
        setTimeout(() => {
            console.log(id);
             callback({  
            id: 1,
            name: 'Ram kumar',
            mobNo: 1234567890,
            post: 'Software Engineer'
         });
        },3000);
        }
    function getBasicSalary(post, callback) {
        setTimeout(() => {
          if(post === 'Software Engineer') {
            callback (50000);
        }else if(post === 'lecturer') {
            callback (40000);       
        }
         else {
            callback (30000);                                                                     // Default basic salary
        } 
        }, 3000);
        }
    function calculateSalary(bs,callback) {
        callback (bs + (bs*.25+7000));
    }





    // movie =>  id name type time 