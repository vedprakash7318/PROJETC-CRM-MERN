const mongoose = require('mongoose')


const prioritySchema=mongoose.Schema({
    priorityName:{
        type:String,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const priority= mongoose.model('prioritys',prioritySchema)

module.exports=priority;
