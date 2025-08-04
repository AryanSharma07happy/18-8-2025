let si=0;
function simpleIntrest(p,r,t)   {
   let pr=new Promise((resolve,reject) => {
       setTimeout(()=>{
           if(t<0){
                reject("Time cannot be negative");  
           }
           si=(p*r*t)/100;
           resolve(si);
       },3000)
   });
   return pr;
}
simpleIntrest(1000,10,-1).
then((result)=>{
    console.log("Simple Interest ",result);
}).catch((err)=>{
    console.log(err);
})
    

