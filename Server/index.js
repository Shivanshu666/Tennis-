const express=require("express");
const mongoose=require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app =express();
const cors=require("cors");
require("dotenv").config();
const contactRouter=require('./App/Route/contact.route');
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello World");
});

console.log("Contact Router Loaded ✅");
app.use("/api",contactRouter);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongoose is connected");
    app.listen(process.env.PORT,()=>{
    console.log("Server is Running on port 4000");
    
});
    
}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});