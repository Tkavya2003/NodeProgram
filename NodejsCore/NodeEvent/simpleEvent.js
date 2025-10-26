import {EventEmitter} from "events"
const emitter=new EventEmitter();
emitter.on("Hello", ()=>console.log("welcome to Node.js event!"))
emitter.emit("Hello")