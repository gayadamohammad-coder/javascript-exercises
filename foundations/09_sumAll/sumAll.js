const sumAll = function(firstInt,secondInt) {
    let sum=0;
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt) || firstInt < 0 ||
    secondInt <0){
         return "ERROR";
    }

    let start = Math.min(firstInt,secondInt);
    let end = Math.max(firstInt,secondInt);
    
    for (let i = start; i<=end;i++){
        sum+=i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
