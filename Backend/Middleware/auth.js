const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token) return res.status(500).json({success:false,message:"token not found"})
        try {
            
            const decode=jwt.verify(token,process.env.SCREATE)
            req.user=decode;
            next()
        } catch (error) {
            return res.status(500).json({success:false,message:"Invalid Token"})
        }
}


module.exports=auth