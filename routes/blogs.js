const router = require("express").Router()

const verifyToken = require("../utils/jwt")

const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById
} = require("../controllers/blogs")

router.post("/",verifyToken,createBlog)
router.get("/",getAllBlogs)
router.get("/:id",getBlogById)
router.put("/:id",verifyToken,updateBlogById)
router.delete("/:id",verifyToken,deleteBlogById)

module.exports = router