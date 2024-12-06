//create a function using the rrow function keyword tht takes a string as an input and returns the number of vvowels in the string 

let arrowcount = (str) => {let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}