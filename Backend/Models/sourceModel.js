const mongoose = require('mongoose')


const sourceSchema=mongoose.Schema({
    sourceName:{
        type:String,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const sources= mongoose.model('sources',sourceSchema)

module.exports=sources;
