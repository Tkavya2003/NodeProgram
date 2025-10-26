import fs from 'fs';
fs.readFile("create.txt", "utf-8" ,(err,data)=>{
    if(err) throw err;
    console.log("File data is : ",data);
    
})