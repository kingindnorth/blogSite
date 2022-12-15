const Blog = require("../models/Blog")

//create post
const createBlog = async(req,res) => {
    try{
        const blog = await new Blog({
            title:req.body.title,
            desc:req.body.desc
        })

        const newBlog = await blog.save()
        res.status(200).json({
            success:true,
            msg:"blog created",
            payload:newBlog
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
    
}

//get all blogs
const getAllBlogs = async(req,res) => {
    try{
        const blogs = await Blog.find()
        if(!blogs) return res.status(400).json({
            success:false,
            msg:"no blog found"
        })

        res.status(200).json({
            success:true,
            msg:`${blogs.length} blogs found`,
            payload:blogs
        })

    }catch(err){
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

//get blog by id
const getBlogById = async(req,res) => {
    try{
        const param = req.params.id
        const blog = await Blog.findById(param)
        if(!blog) return res.status(400).json({
            success:false,
            msg:"blog not found"
        })

        res.status(200).json({
            success:true,
            msg:"blog found",
            payload:blog
        })

    }catch(err){
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

//update blog by id
const updateBlogById = async(req,res) => {
    try{
        const param = req.params.id
        const blog = await Blog.findByIdAndUpdate(param,{$set:req.body},{new:true})
        if(!blog) return res.status(400).json({
            success:false,
            msg:"blog can not be updated"
        })

        res.status(200).json({
            success:true,
            msg:"blog updated",
            payload:blog
        })

    }catch(err){
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

//delete blog by id
const deleteBlogById = async(req,res) => {
    try{
        const param = req.params.id
        const blog = await Blog.findByIdAndDelete(param)
        if(!blog) return res.status(400).json({
            success:false,
            msg:"blog can not be deleted"
        })

        const blogs = await Blog.find()
        res.status(200).json({
            success:true,
            msg:"blog deleted",
            payload:blogs
        })

    }catch(err){
        res.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById
}