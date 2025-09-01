let cunteries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
function cunteriesName(name){
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cunteries.includes(name)) {
                resolve(name);
            }else{
                reject( reseived );
            }
        },4000);
    });
    return pr;
    }
    cunteriesName('UK').
    then((result) => {
        console.log(result)
    });
        
                
