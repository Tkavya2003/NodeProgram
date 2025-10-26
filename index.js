import {greet} from "./Practice/greet.js";
import mathUtils from "./Practice/mathUtils.js";
import {sayHello,hi, bye} from './Practice/multipleCom.js'

console.log("I am inside of my index.jsx");
console.log(greet("Amit Gupta"));

let sum=mathUtils(5,6,"+")
let grater=mathUtils(15,7,">")
let Smaller=mathUtils(15,7,"<")
console.log(sum);
console.log(grater);
console.log(Smaller);

const time=new Date()
let mi=time.getHours();
console.log(mi);

console.log(sayHello("Alex"));
console.log(hi("Alex"));
console.log(bye("Alex"));





