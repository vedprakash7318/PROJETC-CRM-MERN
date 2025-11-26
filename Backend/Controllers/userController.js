const User = require('../Models/userModel');
const jwt = require('jsonwebtoken')


const createUser=async(req,res)=>{
    try {
        const user=await User.create(req.body);
        res.status(200).json({success:true,message:"User Created Successfully",user});
    } catch (error) {
        res.status(500).json({success:false,message:"Error creating User",error})
    }
}



const userLogin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email})
        if(!user) return res.status(404).json({success:false,message:"User not exist"})
        if(user.password!=password) return res.status(500).json({success:false,message:"Invalid Credential"})

        const token= jwt.sign({userId:user._id,role:user.role},process.env.SCREATE)


        return res.status(200).json({success:true,message:"User Login success",user,token})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Error Login User",error})
    }
}

module.exports={createUser,userLogin}