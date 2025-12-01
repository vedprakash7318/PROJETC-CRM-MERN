const Country = require('../Models/countryModel')


const countryCreate = async(req,res)=>{
   try {
     const {countryName, addedby} = req.body

    if(!countryName  || !addedby){
        return res.status(500).json({succes:false,message:"Name and addedby is required"})
    }

    const country = await Country.create(req.body)
    return res.status(200).json({succes:true,message:"Country created Successfully",country})
   } catch (error) {
    return res.status(500).json({succes:false,message:"Internal Server error",error})
   }
}



const getAllCountry = async(req,res)=>{
  try {
    const country=await Country.find()
    .populate('addedby','name')
  return res.status(200).json({succes:true,message:"Country found",country})
  } catch (error) {
    return res.status(500).json({succes:false,message:"Country not found"})
  }
}

module.exports= {countryCreate,getAllCountry}