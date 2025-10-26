import fs from "fs";
const file="note.txt";
if(fs.existsSync(file)){
    const data=fs.readFileSync(file, "utf-8");
    console.log("File Content : " ,data);
}else{
    console.log("File is not found ");
    
}