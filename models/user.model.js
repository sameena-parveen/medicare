const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
name: String,
email: {type:String ,Unique:true},
mobileNumber: String,
password: String, //(hashed using bcrypt)
role: {type:String,Enum: [admin, doctor, patient]},
specialization: {type:String,Enum:[erves, heart, lungs, skin]},// (only for doctors)
availableDays:{type:stringify, Enum :[Sun, Mon, Tue, Wed, Thu, Fri, Sat]}// (only for doctors)
})

 const usermodel=mongoose.model("user",userSchema)
 module.exports=usermodel;