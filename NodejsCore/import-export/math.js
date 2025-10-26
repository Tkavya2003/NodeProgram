export const add=(a,b)=>a+b;
export const sub=(a,b)=>a-b;
export const mul=(a,b)=>a*b;
export const div=(a,b)=>{
    if(a>0 && b>0) return a/b;
    else return "Divide is not possible becaue one of them is zero"
}
export const mod=(a,b)=>a%b;

export default function valid(age){
    if(age>17){
        return `Now you can vote in this election your age is ${age}`
    }else{
        return `you can't vote in this election because your age is ${age}`
    }
}