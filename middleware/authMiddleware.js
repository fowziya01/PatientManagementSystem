const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{
    const token =req.headers.authorization?.split(' ')[1];
    if(!token)
        return res.status(401).json({msg:"Unathorized"});
    try{
        const decoded = jwt.verify(token,"shhhh");
        req.userId = decoded.userId;
        next();

    }catch(err){
        res.status(403).json({msg:"Not Allowed"});    
    }
    

};

const roleAuthMiddleware =(roles)=>(req,res,next)=>{
if(!roles.includes(req.user.role)){
    return res.status(401).json({msg:"permission is noy allowed "});

}
next();

};
module.exports = {authMiddleware,roleAuthMiddleware};