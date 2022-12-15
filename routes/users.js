const router = require("express").Router()

const {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
} = require("../controllers/users")

router.get("/",getAllUser)
router.get("/:id",getUserById)
router.put("/:id",updateUserById)
router.delete("/:id",deleteUserById)

module.exports = router