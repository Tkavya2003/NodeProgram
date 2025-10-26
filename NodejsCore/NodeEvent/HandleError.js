import {EventEmitter} from "events";
const emitter =new EventEmitter();
emitter.on("error",(err)=>{
    console.log("Caught Error : ",err.message);
})
emitter.emit("error" , new Error("SomeThing went wrong"))