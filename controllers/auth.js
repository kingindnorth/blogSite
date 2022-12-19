const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const register = async(req,res) => {
    try{
        const salt = await bcrypt.genSalt(10)
        const hassPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({
            username:req.body.username,
            email:req.body.email,
            password:hassPassword
        })

        const newUser = await user.save()
        res.status(200).json({
            success:true,
            msg:"user saved successfully",
            payload:newUser
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

const login = async(req,res) => {
    try{
        const user = await User.findOne({username:req.body.username})
        if(!user) return res.status(400).json({
            success:false,
            msg:"Enter a valid username"
        })
        
        const validate = await bcrypt.compare(req.body.password, user.password)
        if(!validate) return res.status(400).json({
            success:false,
            msg:"Incorrect password"
        })

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        const {password, ...others} = user._doc
        
        res.cookie("access_token",token).status(200).json({
            success:true,
            msg:"You are now loged in!",
            payload:others
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

module.exports = {
    register,
    login
}