import express from 'express';
const app=express();
app.get(/^\/user\/?(\d+)?$/ , (req,res)=>{
    const id=req.params[0];
    res.send(id ? `The user id is ${id}`:"The user id is not defined")
})
app.listen(5550,()=>console.log("http://localhost:5550"))