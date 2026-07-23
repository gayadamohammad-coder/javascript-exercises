const removeFromArray = function(arr,...removeArguments) {
    let result = [];
    for(let i =0;i<=arr.length-1;i++){
        if (removeArguments.includes(arr[i])){
              continue;
             
        }
        result.push(arr[i]);
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
