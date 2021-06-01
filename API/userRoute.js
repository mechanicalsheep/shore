const User = require("../models/User");
module.exports=[
    {
        method: 'GET',
        path:'/user/', 
        handler:async(request,h)=>
        {
            let allUsers = await User.find({});
            return allUsers;
        }
    },
    {
        method: 'POST', 
        path:'/user/', 
        handler: async(req,res)=>{
            try{
                let userData = req.payload;
                let duplicateUser = await User.find({username: userData.username})
                console.log(duplicateUser);
                if(duplicateUser.length>0){
                    
                   return res.response("username already taken").code(400);
                  
                }
                let user = new User({
                    username: userData.username,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                })
                await user.save();
                return res.response(user);
            }
            catch(err){
                console.log(err)
                return res.response("An error has occured.")

            }

        }
    }
]