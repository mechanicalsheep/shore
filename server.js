require('dotenv').config()
const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')
const routeIndex = require('./API/index')

const { startSession } = require('mongoose')

const init = async()=>{
    const server = Hapi.server({
        port:3001,
        host:'localhost'
    })

    server.route(routeIndex);

    await server.start();
    console.log("Shore backend running on %s", server.info.uri)
    
    //start mongo
    mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(console.log("Connected to db."))
   
}

process.on('unhandledRejection', (err)=>{
    console.error(err);
    process.exit(1);
})

init();