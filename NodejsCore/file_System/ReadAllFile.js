import fs from "fs";
fs.readdir("myFile",(err,file)=>{
    if(err) throw err;
    console.log("Files : ",file);
    
})