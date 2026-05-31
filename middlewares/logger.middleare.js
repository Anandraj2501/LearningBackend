const Logger = (req,res,next)=>{
    console.log(`Req method is ${req.method} and req url is ${req.url} and time accessed is ${req.requestTime}`);
    next();
}

export default Logger;