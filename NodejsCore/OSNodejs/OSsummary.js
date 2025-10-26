import os from "os";

const report = {
  OS: os.type(),
  Platform: os.platform(),
  Architecture: os.arch(),
  Hostname: os.hostname(),
  CPUs: os.cpus().length,
  Uptime_Hours: (os.uptime() / 3600).toFixed(2),
  Total_Memory_MB: (os.totalmem() / 1024 / 1024).toFixed(2),
  Free_Memory_MB: (os.freemem() / 1024 / 1024).toFixed(2),
  Home_Dir: os.homedir()
};

console.log("=== System Information Report ===");
console.log(report);
