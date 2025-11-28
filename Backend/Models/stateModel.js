const mongoose = require('mongoose')

const stateSchema = mongoose.Schema({
    stateName:{
        type:String,
    },
    countryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'country',
        required:true
    },
    addedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})

const state = mongoose.model('state',stateSchema);

module.exports=state