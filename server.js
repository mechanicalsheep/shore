require('dotenv').config()
const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')
const routeIndex = require('./API/index')

const init = async()=>{
    const server = new Hapi.server({
        port:process.env.PORT || 3000,
        host:process.env.HAPI_HOST || 'localhost',
    })

    server.route(routeIndex);
    
    //start server
    await server.start();
    console.log("Shore backend running on %s", server.info.uri)
    
    //start mongo
    console.log(`Starting mongo at ${process.env.MONGO_URL}`)
    mongoose.connect(
        process.env.MONGO_URL,
        {useNewUrlParser:true,useUnifiedTopology:true, useFindAndModify:false}
    )
    .then(console.log("Connected to db."))

   
   
}

process.on('unhandledRejection', (err)=>{
    console.error("Error in shore backend.")
    console.error(err);
    process.exit(1);
})

init();