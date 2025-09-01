const User=require('./models/User');
const bcrypt=require('bcrypt');
async function makeAdmin(req,res){
    try{
        let user = await User.findOne({email:"jhon@example.com"});
        if(user){
            console.log("User already exists");
        }else{
        user=new User();
        user.firstName="John";
        user.lastName="Pandat";
        user.email="johndoe@example.com";
        let encryptedPassword=bcrypt.hashSync("123456",10);
        user.password=encryptedPassword;
        user.userType="Admin";
        await user.save();
        console.log("User created successfully");
        }
    }catch(err){
        console.log(err);
    }
}
module.exports=makeAdmin;