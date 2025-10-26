export default function mathUtils(num1, num2,ope){
    if(ope==="+"){
        return num1 + num2
    }else if(ope==="-"){
        return num1 - num2
    }else if (ope==="*"){
        return num1 *num2
    }else if (ope==="/"){
        if(num1!=0 && num2!=0){
            return "invalid input given by you"
        }else{
            return num1 /num2
        }
    }else if(ope==="%")  return num1% num2
     else if(ope===">"){
        if(num1>num2) return num1
        else return num2
     }
     else if(ope==="<"){
        if(num1>num2) return num2
        else return num1
     }else return "given invalid operator"
}