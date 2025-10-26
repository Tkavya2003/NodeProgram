import os from "os";
const cpu=os.cpus();
cpu.forEach((cpu,index)=>{
    console.log(`CPU ${index +1} : ${cpu.model} - ${cpu.speed} MHz`);
});