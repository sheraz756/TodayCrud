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

exports.getAllUser = async (req,res)=>{
    try{
        const user = await User.find()
        return res.status(200).json(user)
    }catch(e)
    {
        console.log(e)
    }
}
exports.updateUser = async(req,res)=>{
  
    try{
        const {userId} = req.params
        const {name,password,email} = req.body;

        const user = await User.findByIdAndUpdate(userId)
        if(!user){
            return res.status(401).json('no such user')
        }
        user.name = name
        user.email = email
        user.password = password
        user.save()
        res.status(200).json(user)
    }catch(e){console.log(e)}
}
exports.deleteUser = async(req,res)=>{
    try{
        const {userId} = req.params
        const user = await User.findByIdAndDelete(userId)
        if(!user){
            return res.status(401).json('no such user')
        }
        res.status(200).json('user deleted')
    }catch(e){console.log(e)}
}