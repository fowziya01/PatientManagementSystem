const loggerMiddleware = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const date = new Date().toISOString();
    console.log(`${method},${url},${date}`);
    next();

}
module.exports=loggerMiddleware;