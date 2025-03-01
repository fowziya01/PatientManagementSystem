const mongoose = require("mongoose");
//User  schema
const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true},
    mobileNumber:{type:String},
    password:{type:String},
    role:{type:String,enum:["admin","doctor","patient"]},
    specialization:{type:String,enum:["nerves","heart","lungs","skin"]},
    availableDays:{type:String,enum:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}
});

const User = new mongoose.model("User",userSchema);
module.exports=User;