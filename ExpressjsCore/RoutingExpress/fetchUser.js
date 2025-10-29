import express from "express";
const app=express();
app.get('/user/:id', (req,res)=>{
    //const id=req.params.id;
    const {id}=req.params;
    res.statusMessage='perfect'
    res.status(211)
    res.json({id, name:"amrita"})
})
app.use((req,res)=>{
    res.status(404).send("<h1> 404 Page is not found</h1>")
})
app.listen(3000,()=>console.log("http://localhost:3000"))