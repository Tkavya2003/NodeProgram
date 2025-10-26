import fs from "fs";
fs.unlink("note.txt", (err)=>{
    if(err) throw err;
    console.log("File is deleted successfully!");
    
})