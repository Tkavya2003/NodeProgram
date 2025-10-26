import {EventEmitter} from "events";
const app=new EventEmitter();
app.on("effect",()=>{})
app.on("process",()=>{})
app.on("example",()=>{})
console.log(app.eventNames());
