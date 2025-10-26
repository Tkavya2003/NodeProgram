import url from "url";
const filePath="/home/user/project/index.js";
const fileurl=url.pathToFileURL(filePath);
console.log("This is browser URL ",fileurl);
console.log("This is file URL ",url.fileURLToPath(fileurl))
