const articleRoute = require('./articleRoute')
const userRoute = require('./userRoute')

//to make things look smoother, all routes are combined here
//this is what the server router will take at the end.
module.exports = [].concat(articleRoute,userRoute);