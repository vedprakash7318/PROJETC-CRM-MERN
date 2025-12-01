const Lead = require('../Models/leadModel');
const User =require ('../Models/userModel');
const AddLead= async(req,res)=>{
    try {
        
    const {phoneNumber,sources,priority,tag,addedBy}= req.body
    if(!phoneNumber || !sources || !priority || !tag || !addedBy){
        return res.status(400).json({success:false,message:"All fields are required"});
    }

    const existAddedBy = await User.findById(addedBy)
    if(!existAddedBy){
        return res.status(400).json({success:false,message:"AddedBy Id is Invalid"});
    }

    const existPhone = await Lead.findOne({phoneNumber})
    if(existPhone){
        return res.status(400).json({success:false,message:"Phone number is already exist "});
    }

    const newLead = await Lead.create(req.body)
    return res.status(200).json({success:true,message:"Lead Added",newLead})
    } catch (error) {
        return res.status(500).json({success:true,message:"Internal Server Error"})
    }
}


module.exports ={AddLead}