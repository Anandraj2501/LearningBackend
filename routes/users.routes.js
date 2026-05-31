import express from "express";

const router = express.Router();

router.get('/user/:id', (req,res) => {
    const {id} = req.params;
    res.send(`user id is ${id}`);
})

router.get('/search', (req,res)=>{
    const {q} = req.query;

    res.send(`Search query is ${q}`);
})

router.post("/user", (req,res)=>{
    res.send(`User created successfully with name ${req.body.name}`);
})

router.get("/dashboard", (req,res)=>{
    res.send("dashboard access");
})

router.get("/error",(req,res,next)=>{
    next(new Error("Something Wrong"));
})

export default router;