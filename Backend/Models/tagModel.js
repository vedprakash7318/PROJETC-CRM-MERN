const mongoose = require('mongoose')


const tagSchema=mongoose.Schema({
    tagName:{
        type:String,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const tag= mongoose.model('tags',tagSchema)

module.exports=tag;
