const mongoose=require('mongoose');
const timestamps=require('mongoose-timestamps');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    userType:{type:String,default:'student'},
    CreatedAt:Date,
    UpdatedAt:Date
})
userSchema.plugin(timestamps,{index: true});
const userModel=mongoose.model('User',userSchema);
module.exports=userModel;