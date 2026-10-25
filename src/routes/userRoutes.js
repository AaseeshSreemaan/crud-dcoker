const {createUser,getAllUsers,getUserById,updateUser,deleteUser}=require("../controllers/userController")
const validateUser=require('../middlewares/inputValidator.js');

const express=require("express");

const router=express.Router();

router.post("/user",validateUser,createUser);
router.get("/user",getAllUsers);
router.get("/user/:id",getUserById);
router.put("/user/:id",validateUser,updateUser);
router.delete("/user/:id",deleteUser);

module.exports=router;



