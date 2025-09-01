const Student=require('../models/Student');
const cloudinary=require('cloudinary').v2;
async function addStudent(req,res){
    try{ 
    //    console.log(req.body);
    //    console.log(req.file,'req.file');
       let result;
       if(req.file){
          cloudinary.config({
            cloud_name: 'dti3azzhq',
            api_key:'712136599197172',
            api_secret:'L_-JzMURNn5GQGexLbC2UupjrNA'
        })
         result=await cloudinary.uploader.upload(req.file.path);
        // console.log(result,'result');
    }
       let student=new Student(req.body);
       if(req.file){
           student.studentImage=result?.secure_url;
       }
       await student.save();
    //    console.log("data base updated..");  
       let students=await Student.find({});
      res.render('studentlist',{students:students}); // Render the student list view after adding a student

    }catch(err){
        console.log(err);
    }
}
async function deleteStudent(req,res){
    try{
        let studentId=req.params.id;
        // console.log(studentId,'deleteStudent');
        
        await Student.findByIdAndDelete(studentId);
        let students=await Student.find({});
        res.render('welcomeadmin',{students:students});
    }catch(err){
        console.log(err);
    }
}
async function editStudentPage(req,res){
    try{
        let studentId=req.params._id;
        // console.log(studentId,'editStudentPage');
        let student=await Student.findOne({_id:studentId});
        if(student){
            res.render('studenteditpage',{
                student:student
            });
        }else{
            res.render('/')
         }
    }catch(err){
        console.log(err);
    }
}
async function editStudent(req,res){
    try{
        const studentId=req.params._id;
        // console.log(studentId);
    let student=await Student.findOne({_id:studentId});
    if(student){
        // console.log(req.body);
        student.rollNo=req.body.rollNo;
        student.studentname=req.body.studentname;
        student.fatherName=req.body.fatherName;
        student.course=req.body.course;
        student.branch=req.body.branch;
        student.yearOfAdmission=req.body.yearOfAdmission;
        await student.save();
        let students=await Student.find({});
        res.render('welcomeadmin',{
            students : students
        });
    }else{
        res.end("Student Not found......");
    }
    }catch(err){
        console.log(err);
    };
}
module.exports={
addStudent,
deleteStudent,
editStudentPage,
editStudent
}