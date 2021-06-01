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

    },
    {
        method:'POST',
        path:'/article/remove/',
        handler: async(request, response)=>{
            let id = request.query.id;
            console.log(id);
            let articleToDelete = await Article.findByIdAndDelete(id);
            return response.response("ok.");
        }

    },
    {
        method:'PATCH',
        path:'/article/modify/',
        handler: async(request, response)=>{
            let id = request.query.id;
            let article_modified = request.payload;

            console.log(id);
            let article =await Article.findOneAndUpdate({_id:id},article_modified,{returnOriginal:false, useFindAndModify:false});
            await article.save();
            return response.response(article);
        }

    }
]