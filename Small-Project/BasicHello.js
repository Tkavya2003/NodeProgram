import express from "express";
import path from 'path';
import url from 'url'
const __filename=url.fileURLToPath(import.meta.url)
const __directory=path.dirname(__filename);
const app=express();

app.use(express.static(path.join(__directory, 'public')));
app.use(express.json());

app.post('/calculate',( req , res )=>{
    const {a , b , op }=req.body;
    let result;
    switch(op){
        case '+' :result = a+b; break;
        case '-' :result = a-b; break;
        case '*' :result = a*b; break;
        case '/' :result = b!==0 ? a/b :"Error"; break;
        case '%' :result = b!==0 ? a%b :"Error"; break;
    }
    res.json({ result })
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__directory,'./public/Hello.html'))
})

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__directory,"./public/404Page.html"))
})
app.listen(3000,()=>console.log("http://localhost:3000"))