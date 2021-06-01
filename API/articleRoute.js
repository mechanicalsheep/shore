const Article = require('../models/Article')

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
            articleData = response.payload;
            let newArticle = new Article({
                userId: articleData.userId,
                title: articleData.title,
                summary: articleData.summary,
            })
        }

    }
]