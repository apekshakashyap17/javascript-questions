//create a function using the function keyword tht takes a string as an input and returns the number of vvowels in the string 

function countvowels(str) {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }

   return count;
}
 