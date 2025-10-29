import express from "express";
const app =express();
function handle(err,req, res, next){
    console.error(err.message);
    res.status(500).json({error : err.message})
}

app.get("/",(req,res)=>{
    throw new Error("Something Went Wrong");
})
app.use(handle)

app.listen(3000,()=>console.log("http://localhost:3000"))