const mongoose = require('mongoose')


const followupStatusSchema=mongoose.Schema({
    statusName:{
        type:String,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const followUpStatus= mongoose.model('followUpStatus',followupStatusSchema)

module.exports=followUpStatus;
