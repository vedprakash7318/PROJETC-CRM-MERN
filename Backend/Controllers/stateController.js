const State = require('../Models/stateModel')


const stateCreate = async(req,res)=>{
   try {
     const {stateName, addedby,countryId} = req.body

    if(!stateName  || !addedby  || !countryId){
        return res.status(500).json({succes:false,message:"All fields are required"})
    }

    const state = await State.create(req.body)
    return res.status(200).json({succes:true,message:"state created Successfully",state})
   } catch (error) {
    return res.status(500).json({succes:false,message:"Internal Server error",error})
   }
}



const getAllState = async(req,res)=>{
  try {
    const state=await State.find()
    .populate('countryId')
    .populate('addedby')
  return res.status(200).json({succes:true,message:"state found",state})
  } catch (error) {
    return res.status(500).json({succes:false,message:"state not found"})
  }
}

module.exports= {stateCreate,getAllState}