const add = function(a,b) {
	   return a+b;
};

const subtract = function(a,b) {

	return a-b;
};

const sum = function(array) {
	// first computes the sum of an empty array
  if(array.length===0){
    return 0;
  }
     return array.reduce((a,b)=> a+b );
};
  
 

const multiply = function(array) {
    return array.reduce((a,b)=> a*b);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if (n <= 1) {
        
        return 1;
    }else{
      return n * factorial(n - 1);
    }
    
}



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
