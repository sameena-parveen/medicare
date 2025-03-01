const mongoose=require("mongoose")
const appointmentSchema=new mongoose.Schema({

patientId: type.module.type.objectId(userschema),// Reference to User (patient)
doctorId: type.module.type.objectId(userSchema),//Reference to User (doctor)
appointmentDateTime: String,//DateTime
symptoms: String,
fees: Number, //(updated by doctor after appointment)
prescription: String ,//(updated by doctor after appointment)
isDiagnosisDone: Boolean //(updated by doctor after appointment)
})
const appointmentmodel=mongoose.model("appointment",appointmentSchema)
module.exports=appointmentmodel;