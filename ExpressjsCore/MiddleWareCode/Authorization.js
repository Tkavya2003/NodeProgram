import express from "express"
const app=express();
function auth(req, res, next){
    const token=req.headers['pass'];
    if(token==="secure") next();
    else res.status(403).json({message: "forbidden"})
}
app.get("/private", auth, (req, res)=>{
    res.send("Welcome you to my Private web page")
})
app.listen(5000,()=>console.log("http://localhost:5000/private"))

/*

Here’s how to access your token-protected /private route step by step 👇


1> Set up the request

 Method: GET

 URL: http://localhost:3000/private

2> Add the Authorization header

 Click on the Headers tab.

 Add:

    Key	             Value
    Authorization	secret123


Send the request

Click Send (the blue ▶ button).

You should see the response:

    Welcome to the private route!


If you remove or change the token, you’ll get:

    { "message": "Forbidden" }
     
 */