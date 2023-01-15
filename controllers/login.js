const jwt=require("jsonwebtoken")
const userData=require("../data/userData.json")

const userLoginController=function(req,res){
    console.log("user Loggin")
    const SECREAT_KEY="secreatkey@123"
    console.log("received userData=>",userData)
    const value=jwt.sign(userData,SECREAT_KEY)
    res.send({"token":value})
}
const userVerifyController=function(req,res){
    console.log("login page");
    const token=req.headers["authorization"].split(" ")[1];
    console.log("printing the token=>",token);
    const SECREAT_KEY="secreatkey@123";
    const decoded=jwt.verify(token,SECREAT_KEY);
    console.log("this is the decoded value=>",decoded);
     res.send(decoded);
 }
module.exports={userLoginController,userVerifyController}


