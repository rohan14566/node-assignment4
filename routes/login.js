const express=require("express");
const loginController=require("../controllers/login")

const router=express.Router();

router.post('/login', loginController.userLoginController);
router.get('/verify', loginController.userVerifyController);

module.exports=router;