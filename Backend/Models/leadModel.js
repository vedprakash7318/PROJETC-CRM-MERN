const mongoose = require('mongoose')

const LeadSchema = new mongoose.Schema({
    name: { type: String, },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: { type: String, },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "country",
        default:null,
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state",
        default:null,
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city",
        default:null,
    },
    services: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
        default:null,
    },
    sources: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sources",
        required:true,
    },
    priority: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "prioritys",
        required:true,
    },
    tag: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tags",
        required:true,
    }],
    status: {
        type: String,
        enum: ['closed', 'negative', 'active',],
        default: "active",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        default:null,  
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        default:null,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required:true
    }
}, { timestamps: true })


const lead = mongoose.model('lead', LeadSchema)


module.exports = lead;