import http from "http"
const server=http.createServer((req,res)=>{
    if(req.url==="/user"){
        const user={name:"amit soni" , city:"delhi",age:"45"}
        res.writeHead(200,"Good",{"content-type":"application/json"})
        res.end(JSON.stringify(user))
    }else{
        res.end("Try/user route")
    }
})
server.listen(5000,()=>console.log("server is responce on http://localhost:5000/user"))
