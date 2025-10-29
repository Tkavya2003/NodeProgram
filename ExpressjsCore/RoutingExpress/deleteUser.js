import express from "express";
const app=express();
app.delete("/user/delete" , (req,res)=>{
    res.status(200).send("User deleted successfully")
})
app.use((req,res)=>{
    res.status(404).send("<h1> 404 Page is not found</h1>")
})
app.listen(3000,()=>console.log("http://localhost:3000"))