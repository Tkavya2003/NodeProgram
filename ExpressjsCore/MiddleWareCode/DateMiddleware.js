import express from "express";
const app =express();
function date(req,res,next){
    console.log(`${new Date().toISOString()}`);
    req.requestTime=Date.now();
    next();
}
app.use(date)
app.get("/",(req,res)=>{
    res.send(`Check your code editor output ${req.requestTime}`)
    
})
app.listen(3000,()=>console.log("http://localhost:3000"))