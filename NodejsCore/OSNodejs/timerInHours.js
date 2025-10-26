import os from "os";
const uptimeHours=os.uptime()/3600;
console.log(uptimeHours.toFixed(2));
