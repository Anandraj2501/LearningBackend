
const checkAuth = (req, res, next)=>{
    const headers = req.headers['x-auth-token'];;
    if(headers){
        next();
    }else{
        res.status(401).json({message: "Unauthorized"});
    }
}

export default checkAuth;