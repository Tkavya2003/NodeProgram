import express from "express";
const app =express();
app.get('/ok',(req,res)=>{
    res.send("This is get requeste by express js")
})

app.use((req,res)=>{
    res.status(500).send("<H1>page is not found </H1>")
})
app.listen(3000,()=>console.log("http://localhost:3000"))