import fs from "fs";
const contante = `fist line of contant 
second line of contant
third line of contant
forth line of contant`
if (!fs.existsSync("myFile")) {
    fs.mkdirSync("myFile")
}

/* for creating a single file inside a myFile folder

    fs.writeFile(`myFile/create.txt`, contante, (err) => {
        if (err) {                        //throw err;
            console.log("The error is occur in this code :", err.message);
            return;
        }
        console.log("file is created successfully !");

    })
*/

//Create multiple file inside myFile folder
for (let i = 1; i <= 5; i++) {
    fs.writeFile(`myFile/create${i}.txt`, contante, (err) => {
        if (err) {                        //throw err;
            console.log("The error is occur in this code :", err.message);
            return;
        }
        console.log("file is created successfully !");

    })
}