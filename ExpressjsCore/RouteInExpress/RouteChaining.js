import express from "express";
const app =express();
app.route('/book')
    .get((req,res)=>res.send('get the book'))
    .post((req,res)=>res.send('post the book'))
    .put((req,res)=>res.send('put the book'))
    .delete((req,res)=>res.send('delete the book'))
app.listen(3001,()=>console.log("http://localhost:3001"))