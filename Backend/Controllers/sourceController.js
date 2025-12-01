const Source = require('../Models/sourceModel');

const createSource = async(req,res)=>{
   try {
     const {sourceName , addedBy}=req.body

    if(!addedBy || !sourceName){
        return res.status(500).json({succes:false,message:"All fields are required"})
    }
    const sources = await Source.create(req.body)
    return res.status(200).json({success:true,message:"source created successfully",sources})
   } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server error", error })
   }
}

module.exports ={createSource}