import fs from "fs";
const contante=`fist line of contant 
second line of contant
third line of contant
forth line of contant`
fs.writeFile("create.txt", contante, (err)=>{
    if(err){                        //throw err;
        console.log("The error is occur in this code :", err.message);
        return;
    }
    console.log("file is created successfully !");
    
})