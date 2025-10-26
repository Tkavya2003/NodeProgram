import os from "os";
const totalMemory=os.totalmem()/(1024*1024)

const freeMemory=os.freemem()/(1024*1024)
console.log(totalMemory , "-------", freeMemory);
