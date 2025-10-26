import {EventEmitter} from "events";
const emitter=new EventEmitter;
emitter.on("user", (name)=>console.log("my name is",name));
emitter.emit("user","Alice")