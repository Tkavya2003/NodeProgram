import fs from "fs";
fs.rename('create.txt' ,"note.txt",(err)=>{
    if(err) throw err
    console.log("Rename is successfully");
    
})