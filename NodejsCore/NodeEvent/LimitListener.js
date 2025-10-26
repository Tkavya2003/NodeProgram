import {EventEmitter} from "events";
const emitter=new EventEmitter();
emitter.setMaxListeners(20);
for(let i=1;i<=15;i++){
    emitter.on("test",()=>console.log(i))
}
// console.log(emitter.listeners("test"));
emitter.emit("test");
console.log("The no. of listener in a EventEmitter are :",emitter.getMaxListeners());

