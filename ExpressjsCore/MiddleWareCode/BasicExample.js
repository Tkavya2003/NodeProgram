import express from "express";
const app =express();
function logic(req, res, next){
    console.log(`${req.method} , ${req.url}`);
    // res.send("<h1>This is a logic function </h1>")
    next();
}
app.use(logic);
app.get("/",(req,res)=>{
    res.send("Hello from Express!")
})
app.listen(3000,()=>console.log("http://localhost:3000"))