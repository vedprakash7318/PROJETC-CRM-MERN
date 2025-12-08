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



const getAllTag = async (req, res) => {
    try {
        const {addedBy} = req.params
        const tag = await Tag.find({addedBy}).populate("addedBy", "name");

        return res.status(200).json({
            success: true,
            message: "All tags fetched",
            tag
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    }
};

module.exports ={createTag,getAllTag}