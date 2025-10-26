import http from "http"
import fs from "fs"
const app=http.createServer((req,res)=>{
    if(req.url==="/text"){
        fs.readFile("folder/message.txt","utf-8",(err,data)=>{
            res.writeHead(200,"good",{"content-type":"text/html"})
            res.end(data);
        })
    }else if(req.url==="/json"){
        fs.readFile("folder/data.json","utf-8",(err,data)=>{
            res.writeHead(200,"good",{"content-type":"application/json"})
            res.end(data);
        })
    }else{
        res.end("use /text or /json")
    }
})
app.listen(5000,()=>console.log("http://localhost:5000"))