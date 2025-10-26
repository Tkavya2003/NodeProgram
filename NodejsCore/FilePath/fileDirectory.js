import url from "url"
import path from "path"
const __filepath=url.fileURLToPath(import.meta.url);
const __directoryname=path.dirname(__filepath);
const __filename=path.basename(__filepath)
console.log(__filename);

console.log(__filepath);
console.log(__directoryname);

