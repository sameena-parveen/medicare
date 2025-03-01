const mongoose=require("mongoose")
 const connectToDb= async ()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/empher")
    console.log("connect to db")
 }catch(err){
    console.log("not connected")
 }
}
module.exports=connectToDb;