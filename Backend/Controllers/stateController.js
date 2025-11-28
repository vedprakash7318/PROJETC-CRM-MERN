const State = require('../Models/stateModel')


const stateCreate = async(req,res)=>{
   try {
     const {stateName, addedby,stateId} = req.body

    if(!stateName  || !addedby  || !stateId){
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
    const state=await State.find();
  return res.status(200).json({succes:true,message:"state found",state})
  } catch (error) {
    return res.status(500).json({succes:false,message:"state not found"})
  }
}

module.exports= {stateCreate,getAllState}