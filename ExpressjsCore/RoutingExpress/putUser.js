import express from "express";
const app=express();
app.put('/user/data',(req,res)=>{
    res.send("<h1> this is a http put method in express js</h1>")
})
app.use((req,res)=>{
    res.status(404).send("<h1> 404 Page is not found</h1>")
})
app.listen(3000,()=>console.log("http://localhost:3000"))