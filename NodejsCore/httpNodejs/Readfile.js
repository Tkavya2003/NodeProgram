import http from "http";
import fs from "fs";
const server =http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("folder/index.html",(err,data)=>{
            if(err){
                res.writeHead(500,'bad')
                res.end("Error in loading file")
            }else{
                res.writeHead(200,{"content-type":"text/html"})
                res.end(data)
            }
        })
    }else{
        res.end("Other File")
    }
})
server.listen(5000,()=>console.log("server is responce on http://localhost:5000/"))