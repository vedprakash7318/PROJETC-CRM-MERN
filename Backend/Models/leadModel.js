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
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state",
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city",
    },
    services: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
    },
    sources: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "source",
        required:true,
    },
    priority: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "priority",
        required:true,
    },
    tag: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
        required:true,
    }],
    status: {
        type: String,
        enum: ['closed', 'negative', 'active',],
        default: "active"
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    }
}, { timestamps: true })


const lead = mongoose.model('lead', LeadSchema)


module.exports = lead;