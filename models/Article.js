const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    title:String,
    summary:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Article", ArticleSchema)