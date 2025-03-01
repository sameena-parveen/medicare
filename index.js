const express=require("express");
const connectToDb = require("./config/mongo.config");
const app=express();
app.use(express.json());
require("dotenv").config()
const adminRouter=require("./routes/admin.route")
const doctorRouter=require("./routes/doctor.route")
const patientRouter=require("./routes/patient.route")

app.use("admin",adminRouter)
app.use("doctor",doctorRouter)
app.use("patient",patientRouter)

app.listen(3000,(req,res)=>{
    connectToDb()
    console.log("server started")
})