const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
    countryName:{
        type:String,
        unique:true,
        required:true
    },
    addedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})

const country = mongoose.model('country',countrySchema);

module.exports=country