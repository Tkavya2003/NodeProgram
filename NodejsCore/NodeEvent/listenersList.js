import {EventEmitter} from "events"
const emitter =new EventEmitter();
const f1=()=>console.log("Saving.....")
const f2=()=>console.log("Save Successfully")
emitter.on("sav",f1)
emitter.on("sav",f2)
console.log(emitter.listeners("sav"));
