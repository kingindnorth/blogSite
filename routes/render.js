const router = require("express").Router()

const {
    register,
    login,
    createBlog,
    blogs
} = require("../controllers/render")

router.get("/register")
router.get("/login")
router.get("/createBlog")
router.get("/blogs")

module.exports = router