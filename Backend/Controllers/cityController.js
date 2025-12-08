const City = require('../Models/cityModel')


const cityCreate = async(req,res)=>{
   try {
     const {cityName, addedby,stateId} = req.body

    if(!cityName  || !addedby  || !stateId){
        return res.status(500).json({succes:false,message:"All fields are required"})
    }

    const city = await City.create(req.body)
    return res.status(200).json({succes:true,message:"city created Successfully",city})
   } catch (error) {
    return res.status(500).json({succes:false,message:"Internal Server error",error})
   }
}



const getAllCity = async(req,res)=>{
  try {
    const city=await City.find()
    .populate('stateId')
    .populate('addedby')
  return res.status(200).json({succes:true,message:"city found",city})
  } catch (error) {
    return res.status(500).json({succes:false,message:"city not found"})
  }
}

module.exports= {cityCreate,getAllCity}