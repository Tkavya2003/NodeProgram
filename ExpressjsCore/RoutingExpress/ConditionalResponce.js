import express from "express";
const app=express();
app.get("/status/:code",(req,res)=>{
    const code=parseInt(req.params.code);
    if(code===200) res.send("ok got it");
    else if(code===404) res.send("Not Found");
    else if(code===500) res.send("Server Error")
    else res.send('unknown status code')
})
app.listen(5000,()=>console.log("http://localhost:5000/status/200"))