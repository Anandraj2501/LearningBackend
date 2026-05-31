const addrequestTime = (req,res,next) =>{
    req.requestTime = new Date().toISOString();
    next();
}

export default addrequestTime;