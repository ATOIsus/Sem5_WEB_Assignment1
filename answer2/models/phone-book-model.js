const mongoose = require('mongoose')


const phoneBookSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true,

    },

    name: {
        type: String,
        required: true,
    },
    
    number: {
        type: Number,
        default: "0"
    },

}, { timestamps: true })



module.exports = mongoose.model('PhoneBook', phoneBookSchema)