import express from "express";
const app=express();
app.get("/search",(req,res)=>{
    const Query=req.query.q;
    res.send(`You search for : ${Query}`)
})
app.listen(3000,()=>console.log("http://localhost:3000/search?q=learnExpress"))