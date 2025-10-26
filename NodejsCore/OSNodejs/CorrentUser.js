
import os from "os";
const user =os.userInfo();
Object.keys(user).map((key,index)=>{
    console.log(index , '>.' ,key," ----- ",user[key]);
    
})
console.log(os.hostname());
console.log(os.homedir());

