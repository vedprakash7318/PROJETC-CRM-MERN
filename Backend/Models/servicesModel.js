const mongoose = require('mongoose')


const serviceSchema=mongoose.Schema({
    serviceName:{
        type:String,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const services= mongoose.model('services',serviceSchema)

module.exports=services;
