const router = require("express").Router()

const verifyToken = require("../utils/jwt")

const {
    register,
    login,
    createBlog,
    blogs
} = require("../controllers/render")

router.get("/register",register)
router.get("/login",login)
router.get("/createBlog",verifyToken,createBlog)
router.get("/blogs",blogs)

module.exports = router