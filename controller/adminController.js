const User = require("../models/User");
const Appointment = require("../models/Appointment");
const ObjectsToCsv = require("objects-to-csv");

const getUsers = async(req,res)=>{
try{
const users=await User.find();
res.status(200).json({msg:"All Users",users});
}
catch(err){
    res.status(500).json({msg:"Error in Fetching Users",users});

}
};
//get by id
const getUserById = async(req,res)=>{
try{
const user = await User.findById(req.params.id);
if(user){
    return res.status(200).json({msg:user});
}
}catch(err){
    res.status(500).json({msg:"Error in Fetching Users by Id",user});
  
}
};
// delete user by id
const deleteUser = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
if(user){
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:"User Deleted Successfully"});
}
    }catch(err){
        res.status(200).json({msg:"User not found"});   
    }
};
//create appointments
const newAppointments = async(req,res)=>{
   try{
const{appointmentDate,symptoms}=req.body;
const {patientId,doctorId}=req.params
const appointments = await Appointment.create({...req.body,doctor:doctorId,patient:patientId});
res.status(200).json({msg:"appoinments created",appointments});   

   }catch(err) {
    res.status(500).json({msg:"Error in appoinments creation"});   

   }
}
//view all appointments
const getappointments = async(req,res)=>{
    try{
    const appointments=await appointments.find();
    res.status(200).json({msg:"All appointments",appointments});
    }
    catch(err){
        res.status(500).json({msg:"Error in Fetching appointments",appointments});
    
    }
    };
//Delete an appointment by id
const deleteappointment = async(req,res)=>{
    try{
        const appointment = await Appointment.findById(req.params.id);
if(appointment){
    await Appointment.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:"Appointment Deleted Successfully"});
}
    }catch(err){
        res.status(200).json({msg:"Appointment not found"});   
    }
};



//Download a CSV file containing system statistics
const generateReport = async(req,res)=>{
    try{
 const doctorsCount= await User.countDocuments({role:"doctor"});
 const patientsCount= await User.countDocuments({role:"patient"});
 const appoinmentsCount= await User.countDocuments({appointments});
const data = [{ role:"doctor",count:doctorsCount},
    {role:"patient",count:patientsCount},
{count:appoinmentsCount},
];
 const csv = new ObjectsToCsv(data);
 
  // Save to file:
  await csv.toDisk('./reports.csv');
  res.download('./reports.csv','report.csv',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File is downloading");
    }
  });
}
  catch(err){

  }
};

module.exports ={getUsers,getUserById,deleteUser,newAppointments,getappointments,deleteappointment,generateReport} ;
