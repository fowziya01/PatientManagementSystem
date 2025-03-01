const mongoose = require("mongoose");

//appointment schema
const appointmentSchema= new mongoose.Schema({
    patientId:{type:mongoose.Schema.Types.ObjectId,Ref:"patient"} ,
    doctorId:{type:mongoose.Schema.Types.ObjectId,Ref:"doctor"},
    appointmentDateTime:{type:Date,default:Date.now},
    symptoms:{type:String},
    fees:{type:Number},
    prescription:{type:String},
    isDiagnosisDone:{type:String,default:false}
    


});
//model
const Appointment = new mongoose.model("Appointment",appointmentSchema);
module.exports = Appointment;
