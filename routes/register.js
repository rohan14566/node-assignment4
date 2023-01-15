 const express=require("express");
 const router=express.Router();
  const userData=require("../data/userData.json")

const bcrypt=require("bcrypt");
//  const registerController=require('../controllers/register')

 router.post('/register',function(req,res){
    console.log("registering the user")
    console.log("received userdetail=>",userData)
    const password=userData.password;
    const roundsOfSalt=10;
    bcrypt.genSalt(roundsOfSalt,function(err,salt){

        if(err){
            console.log(err);
        }
        else{
        console.log("salt is generated =>",salt);
        

        bcrypt.hash(password,salt,function(err,hashedPassword){

            if(err){
                console.log("User has not registered,please try again");
            }
            else{
                console.log("here is the hashedPassword=>",hashedPassword)
                console.log("User sucessufully registered userData")
                res.send(hashedPassword)
            }
        })      
    }
   })  
})

// salt value=>"$2b$10$HFePh71I/sUgfnnZgpvAG"
// hashedPassword=>"$2b$10$1KTosfWaoD2evQJhUeEL5OM/OONxoBiRud0.xDy0NkpamSE9iDNqa"



 module.exports=router