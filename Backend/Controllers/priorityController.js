const Priority = require('../Models/priorityModel');

const createPriority = async(req,res)=>{
   try {
     const {priorityName , addedBy}=req.body

    if(!addedBy || !priorityName){
        return res.status(500).json({succes:false,message:"All fields are required"})
    }
    const Priorities = await Priority.create(req.body)
    return res.status(200).json({success:true,message:"Priority created successfully",Priorities})
   } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server error", error })
   }
}

module.exports ={createPriority}