import * as math from "./math.js";
import mathUtils from "../Practice/mathUtils.js"
import welcome from "./welcome.js";
import * as data from "./data.js"

//---------------------------------------------------------------------
let sum=math.add(4,8)
console.log("The sum of a two no. is "+ sum);
let lessthen=math.sub(50,12);
console.log("The subtrace of two no. is "+lessthen);
//---------------------------------------------------------------------

welcome("Welcome on the browser dear admin")
//----------------------------------------------------------------------

let grater = mathUtils(15,28,">")
console.log(`The grater no. is ${grater} `);

let smallNO=mathUtils(48,25,"<")
console.log(`The smaller no. is ${smallNO} `);

const admin=math.default(20);
console.log(admin);
//-----------------------------------------------------------------------

const array=data.number
console.log(array);

//------------------------------------------------------------------------

if(data.user.age>=18){
    console.log(`${data.user.name} can vote`); 
}else{
    console.log(`${data.user.name} can't vote`); 
}

//---------------------------------------------------------------------------

const info=data.students.filter(s=> s.marks>=50);
console.log(info);
const info1=data.students.filter(s=> s.name=="Tom");
console.log(info1);

//---------------------------------------------------------------------------

console.log(data.num(5)?"Even":"Odd");
console.log(data.num(86)?"Even":"Odd");

//---------------------------------------------------------------------------

const list=data.adultList(data.people)
console.log(list);
