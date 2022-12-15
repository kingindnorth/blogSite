const router = require("express").Router()

const {
    register,
    login
} = require("../controllers/auth")

router.post("/",register)
router.post("/",login)

module.exports = router