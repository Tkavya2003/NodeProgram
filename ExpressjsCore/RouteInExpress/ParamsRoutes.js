import express from "express";
const app =express();
app.get('/user/:id',(req,res)=>{
    const id=req.params.id;
    res.send(`User id is ${id}`)
})
app.get('/user/:id/name/:name',(req,res)=>{
    const {id, name}=req.params;
    res.send(`User id is ${id} and name is ${name}`)
})
app.use((req,res)=>{
    res.status(404).send("<H1>404 page is not found </H1>")
})
app.listen(3000,()=>console.log("http://localhost:3000"))