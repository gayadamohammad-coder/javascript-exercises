/*so i need to make a function that takes a string and check if it reads from the back same as from the front so will turn
this string to array and read it from front and read it from the back and compare if its equal or no 
*/
const palindromes = function (word) {
   word =  word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
   const arrayWord = word.split('');
   const arrayRevWord = arrayWord.slice().reverse();

   const result = arrayWord.every((letter, index) => {
    return letter === arrayRevWord[index];
});

return result;
};
        

  


// Do not edit below this line
module.exports = palindromes;
