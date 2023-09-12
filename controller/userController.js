const User = require('../model/userModel')


exports.createUser= async (req,res)=>{

    try{
        const {name,email,password} = req.body


    const user = new User({
        name,
        email,
        password
    })
    await user.save()
    res.status(200).json(user)
}
    
    catch(error){
        console.log(error)
    }
}