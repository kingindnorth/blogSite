const router = require("express").Router()

const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById
} = require("../controllers/blogs")

router.post("/",createBlog)
router.get("/",getAllBlogs)
router.get("/:id",getBlogById)
router.put("/:id",updateBlogById)
router.delete("/:id",deleteBlogById)

module.exports = router