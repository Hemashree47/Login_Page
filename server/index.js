const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Login')

const userSchema=new mongoose.Schema({
    username:String,
    password:String
})

const UserModel=mongoose.model("users",userSchema)

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    UserModel.findOne({username:username})
    .then(user=>{
        if(user){
            if(password==user.password){
                res.json("success")

            }else{
                 res.json("Invalid" )
            }
        }else{
            res.json("Username not found")
        }
    })
})
app.listen(3001,()=>{
    console.log("Server is Connected")
})