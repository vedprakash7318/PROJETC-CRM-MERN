const Services = require('../Models/servicesModel');

const createServices = async(req,res)=>{
   try {
     const {serviceName , addedBy}=req.body

    if(!addedBy || !serviceName){
        return res.status(500).json({succes:false,message:"All fields are required"})
    }
    const services = await Services.create(req.body)
    return res.status(200).json({success:true,message:"Service created successfully",services})
   } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server error", error })
   }
}

module.exports ={createServices}