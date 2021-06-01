const Article = require('../models/Article')
const mongoose = require('mongoose')

module.exports=[
    {
        method: 'GET',
        path:'/article/', 
        handler:async(request,response)=>
        {
            let allArticles = await Article.find({});
            return allArticles;
        }
    },
    {
        method:'POST',
        path:'/article/',
        handler: async(request, response)=>{
            articleData = request.payload;
            let newArticle = new Article({
                userId: mongoose.Types.ObjectId(articleData.userId),
                title: articleData.title,
                summary: articleData.summary,
            })
            await newArticle.save();
            return response.response(newArticle)
        }

    }
]