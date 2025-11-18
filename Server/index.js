const express = require('express');
const app = express();
const dotenv =require('dotenv');
dotenv.config();
const port =process.env.PORT || 4000;

app.get('/', (req,res)=>{
    res.send('Hello Tennis world!');
});

app.listen(port, ()=>{
    console.log(`Sever is running on ${process.env.PORT}`);
    
})