import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(202,"Good",{"content-type":"text/html"});
    res.write("Hello , This is node js first program")
    res.end();
})
server.listen(8080,()=>console.log("http://localhost:8080"));
