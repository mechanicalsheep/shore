const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:String,
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('User', UserSchema);