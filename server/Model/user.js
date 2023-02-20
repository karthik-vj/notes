const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    createdAt :{
        type: Date,
        default: new Date()
    }

})

module.exports = User = mongoose.model('user', userSchema)