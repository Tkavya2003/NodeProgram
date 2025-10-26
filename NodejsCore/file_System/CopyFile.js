import fs from "fs";
if(!fs.existsSync("backup")){
    fs.mkdirSync("backup")
}
fs.cp("myFile", "backup",{recursive:true}, (err)=>{
    if(err) throw err;
    console.log("Folder is copied successfully"); 
})