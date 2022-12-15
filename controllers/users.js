const bcrypt = require("bcryptjs")
const User = require("../models/User")

//get all users
const getAllUser = async(req,res) => {
    try{
        const users = await User.find()
        if(!users) return res.status(400).json({
            success:false,
            msg:"no user found"
        })

        res.status(200).json({
            success:true,
            msg:`${users.length} users found`,
            payload:users
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

//get user by id
const getUserById = async(req,res) => {
    try{
        const param = req.params.id
        const user = await User.findById(param)
        if(!user) return res.status(400).json({
            success:false,
            msg:"user not found"
        })

        res.status(200).json({
            success:true,
            msg:"user found",
            payload:user
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }

}

//update user
const updateUserById = async(req,res) => {
    try{
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const param = req.params.id
        const user = await User.findByIdAndUpdate(param,{$set:req.body},{new:true})
        if(!user) return res.status(400).json({
            success:false,
            msg:"user not found"
        })

        res.status(200).json({
            success:true,
            msg:"user updated",
            payload:user
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

//delete user
const deleteUserById = async(req,res) => {
    try{
        const param = req.params.id
        const user = await User.findByIdAndDelete(param)
        if(!user) return res.status(400).json({
            success:false,
            msg:"user not found"
        })

        const users = await User.find()
        res.status(200).json({
            success:true,
            msg:"user deleted",
            payload:users
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
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
}