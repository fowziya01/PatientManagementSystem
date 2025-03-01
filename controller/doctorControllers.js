const Appointment = require("../models/Appointment");
const Redis = require("ioredis");
const redis= new Redis();
const cron = require ("node-cron");

const getappointments = async(req,res)=>{
    try{
let appointmentId = req.params.id;
let cacheappointments = await redis.get(`appointment:${appointmentId}`);
if(cacheappointments){
    await JSON.parse(appointments);
    res.json({msg:"cacheAppointments"})
}
const appoinments = await Appointment.findById(appointmentId);
if(!appoinments){
  return res.status(404).json({msg:"Appointments not found"})
}
await  redis.setEx(appointmentId,3600,JSON.stringify(appointments));

    }catch(err){

    }
}