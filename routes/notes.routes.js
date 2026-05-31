import express from 'express';

const router = express.Router();

let notes = [];
let id = 1;

router.get("/", (req,res)=>{
    return res.status(200).json({notes,message:"Success"});
})

router.get("/:id",(req,res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({message: "Please provide ID"});
    }

    const note = notes.find(
        n => n.id == id
    )

    if(note){
        return res.status(200).json({notes,message:"Successfully got notes using ID"});
    }
    return res.status(404).json({message:"Notes with provided id does not exists"});
})

router.post("/",(req,res,next)=>{
    try{
        const {title, body} = req.body;

        if(!title || !body){
            return res.status(400).json({message: "Title and body are required"});
        }

        const note = {id: id++, title, body};
        notes.push(note);

        return res.status(201).json({notes,message:"Created"});
    }catch(err){
        next(err);
    }
})

router.put("/:id",(req,res)=>{

    const {id} = req.params;
    const {title,body} = req.body;

    if(!id){
        return res.status(400).json({message: "Please provide ID"});
    }

    const note = notes.find(
        n => n.id == id
    )

    if(!note){
        return res.status(404).json({message:"Notes with provided id does not exists"});
    }
    
    note.title = title ?? note.title;
    note.body = body ?? note.body;

    return res.status(200).json({notes,message:"Updated"});
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params;

    const noteIndex = notes.findIndex(
        n => n.id == id
    );

    if(noteIndex === -1){
        return res.status(404).json({message:"Notes with provided id does not exists"});
    }
    const deleted = notes.splice(noteIndex,1);

    return res.status(200).json({deleted,message:"Deleted"});
})

export default router;