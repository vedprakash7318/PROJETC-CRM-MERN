const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    cityName:{
        type:String,
    },
    stateId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'state',
        required:true
    },
    addedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})

const city = mongoose.model('city',citySchema);

module.exports=city