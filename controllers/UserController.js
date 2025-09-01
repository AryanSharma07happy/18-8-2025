const User=require('../models/User');
const Student=require('../models/Student')
const bcrypt=require('bcrypt')
async function addUser(req,res){
    try{
    //    console.log(req.body,'req.body');
       let user=new User(req.body);
       let encryptedPassword=bcrypt.hashSync(req.body.password,10);
    //    console.log(encryptedPassword,'encryptedPassword');
        user.password=encryptedPassword;
       await user.save();
    //    console.log("data saved successfully");
       res.redirect('/');
    }catch(err){
        console.log(err);
    }
}
async function dologin(req,res){
    try{
        //  console.log("here")
        //  console.log(req.body,'req.body');
        let user= await User.findOne({email:req.body.email});
        // console.log(user);
        
         if(user){
             let validPassword= await bcrypt.compare(req.body.password,user.password);
             if(validPassword){
                if(user.userType === 'Admin'){
                    let students=await Student.find({});
                    res.render('welcomeadmin',{
                        students:students
                    });
                }else{
                    res.render('welcomestudent');
                }
             } else{
                res.end("invalid email/password");
             }
         }else{
            res.end("User does not exists....");
         }
    }catch(err){
        console.log(err);
    }
}
module.exports={
    addUser,
    dologin
}