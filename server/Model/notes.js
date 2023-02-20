const mongoose = require("mongoose");

const Schema = mongoose.Schema

const notesSchema = new Schema({

    title : {
        type: String,
        required: false
    },
    content:{
        type: String,
        required: false
    },
    createdAt :{
        type: Date,
        default: new Date()
    }
})

module.exports = notes = mongoose.model('notes', notesSchema)