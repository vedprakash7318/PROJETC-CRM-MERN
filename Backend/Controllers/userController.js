const User = require('../Models/userModel');


const createUser=async(req,res)=>{
    try {
        const user=await User.create(req.body);
        res.status(200).json({success:true,message:"User Created Successfully",user});
    } catch (error) {
        res.status(500).json({success:false,message:"Error creating User",error})
    }
}

module.exports={createUser}