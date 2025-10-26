
import fs from "fs"
const data=`
This text is added by a addtext.js file by node js`
fs.appendFile("create.txt",data,(err)=>{
    if(err) throw err;
    console.log("Add data successfully!");
    
})