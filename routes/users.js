const router = require("express").Router()

const verifyToken = require("../utils/jwt")

console.log(verifyToken);

const {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
} = require("../controllers/users")

router.get("/",verifyToken,getAllUser)
router.get("/:id",getUserById)
router.put("/:id",updateUserById)
router.delete("/:id",deleteUserById)

module.exports = router