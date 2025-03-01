const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// user register
const register= async(req,res)=>{
    try{
const {name,email,mobileNumber,password,role}=req.body;
const existingUser= await User.findOne({email});
if(existingUser){
    return res.status(400).json({msg:"User alreday registered"});

}
const hashedPassword = await bcrypt.hash(password,10);
const user=await User.create({name,email,mobileNumber,password:hashedPassword,role});
res.status(200).json({msg:"User created successfully",user});
    }catch(err){
res.status(500).json({msg:"Server error", err})
    }
};


//login
const login = async(req,res)=>{
    try{
const {email,password}=req.body;
const user= await User.findOne({email});
if(!user){
    return res.status(400).json({msg:"User not found, Please signUp"});

}
const checkPassword = await bcrypt.compare(password,user.password);
if(!checkPassword){
    return res.status(400).json({msg:"Invalid Password!"});

}
const token= jwt.sign({userId:user._id,role:user.role},"shhhh",{expiresIn:"1h"});
return res.status(200).json({msg:"Login Success!",token});

    }catch(err){
        res.status(500).json({msg:"Server error", err})

    }
};

module.exports = {register,login};

