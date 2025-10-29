import express from "express";
const app=express();
app.post('/user',(req,res)=>{
    const newuser=req.body;
    res.status(201).json({message:"user created", user:newuser})
})
app.use((req,res)=>{
    res.status(404).send("<h1> 404 Page is not found</h1>")
})
app.listen(3000,()=>console.log("http://localhost:3000"))