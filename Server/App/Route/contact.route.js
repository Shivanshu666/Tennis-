const express=require("express");
const router=express.Router();
const {insertUser} =require("../Controller/contact.controller")

router.get("/contact",(req,res)=>{
    console.log("Error");
    
    res.send("Contact Route is Working ........")
});

router.post("/insertUser",insertUser);

module.exports=router;