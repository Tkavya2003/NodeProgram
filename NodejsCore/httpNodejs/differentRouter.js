import http from "http"
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,"Good",{"content-type":"text/html"})
        res.end("Welcome to Home page")
    }else if(req.url==="/about"){
        res.writeHead(200,"Good",{"content-type":"text/html"})
        res.end("Welcome to about page")
    }else if(req.url==="/contant"){
        res.writeHead(200,"Good",{"content-type":"text/html"})
        res.end("Welcome to contant page")
    }else{
        res.writeHead(404,"Bad",{"content-type":"text/html"})
        res.end("404 page is notfound")
    }
})


server.listen(5000,()=>console.log("server is responce on http://localhost:5000/user"))
