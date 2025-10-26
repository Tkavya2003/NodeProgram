import { log } from "console";
import path from "path"

const filePath = '/users/data/report.pdf';
const ext = path.extname(filePath).slice(1); // remove the dot
console.log(ext); // pdf
const ext1=path.extname(filePath) //It dot't remove the dot
console.log(ext1); //.pdf

