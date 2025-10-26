import express from "express";
const app=express();
app.get("/user/:name",(req,res)=>{
    const name=req.params.name;
    res.send(`Hello this is me ${name}`)
})
app.get("/user/:name/:age",(req,res)=>{
    const name=req.params.name;
    const age=req.params.age;
    res.send(`Hello my name is ${name} and my age is ${age}`)
})
app.use((req,res)=>{
    res.status(404).send("<h1> 404 Page is not found</h1>")
})
app.listen(3000,()=>console.log("http://localhost:3000"))