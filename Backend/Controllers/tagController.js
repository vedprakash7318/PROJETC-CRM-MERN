const Tag = require('../Models/tagModel');

const createTag = async(req,res)=>{
   try {
     const {tagName , addedBy}=req.body

    if(!addedBy || !tagName){
        return res.status(500).json({succes:false,message:"All fields are required"})
    }
    const tags = await Tag.create(req.body)
    return res.status(200).json({success:true,message:"tag created successfully",tags})
   } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server error", error })
   }
}

module.exports ={createTag}