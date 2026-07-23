const reverseString = function(text) {
    let word="";
       for (let i = text.length-1; i>=0 ;i--){
        word +=text[i];
            
       }
       return word;
};

// Do not edit below this line
module.exports = reverseString;
