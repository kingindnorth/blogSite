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
router.get("/:id",verifyToken,getUserById)
router.put("/:id",verifyToken,updateUserById)
router.delete("/:id",verifyToken,deleteUserById)

module.exports = router