import path from "path";
const filePath="C:\\project\\app\\index.js";
const filename=path.basename(filePath);
const filename1=path.basename(filePath, path.extname(filePath));
console.log(filename);
console.log(filename1);

