const express=require("express")
const bodyParser=require("body-parser");

const registerRouter=require("./routes/register")
const loginRouter=require("./routes/login")
const app=express()
app.use(bodyParser.json());
app.use(registerRouter);
app.use(loginRouter);




app.listen(5000,function(){
    console.log("server is starting")
})