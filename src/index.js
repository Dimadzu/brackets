module.exports = function check(str, bracketsConfig) {
    let brackets =('()[]{}||').split("");
    let stack=[];
    let arrStr =str.split("");
    for (let i=0;i<=brackets.length;i++){
        for (let s=0;s<=arrStr.length;s++){
            if (i%2==0 && arrStr[s]==brackets[i]){
                stack.push(arrStr[s]);
            }else 
            if (i%2!==0 && arrStr[s]==brackets[i]){
                stack.pop();
            }




        }

    }
    for(let z=0;z<=stack.length;z++){
        if(stack[z]==undefined){
            stack.splice(z,1);
        }
    }
    if (stack.length>0 && stack.length<0){
        return false
    }else{return true}

}