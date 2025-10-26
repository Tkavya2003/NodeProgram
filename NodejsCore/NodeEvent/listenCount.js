import {EventEmitter} from "events";
const emitted=new EventEmitter();
emitted.on("update",()=>{})
emitted.on("update",()=>{})
emitted.on("update",()=>{})
emitted.on("update",()=>{})
emitted.on("update",()=>{})
console.log(emitted.listenerCount("update"));
