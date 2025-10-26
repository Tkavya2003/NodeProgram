import express from "express";
const app=express();
app.get("/info",(req,res)=>{
    res.json({
        name: 'Express App',
        version: '1.0.0',
        author: 'Kavya Tomar'
    })
})
app.listen(5000,()=>console.log("http://localhost:5000/info"))