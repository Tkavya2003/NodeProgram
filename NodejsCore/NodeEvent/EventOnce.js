import {EventEmitter} from "events"
const emitter=new EventEmitter();
emitter.once("Start",()=>console.log("Starting!"))
emitter.emit("Start")
emitter.emit("Start")