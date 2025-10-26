import {EventEmitter} from "events"
const emitted=new EventEmitter();
function greet(){
    console.log("Hello There!");
}
emitted.on("greet",greet)
emitted.off("greet",greet)
emitted.emit("greet")