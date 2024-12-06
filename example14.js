// take a number n as input from the user. create an array of numbers from 1 to n. use the reduce method to calculate the sum of all number in the array,
// use the reduce method to calculate product of all numbers in the array.

let n = prompt("enter a number");
let arr = [];

for(let i=1; i<=n; i++) {
    arr[i-1] = i;
    console.log(arr);
}

//reduce method to calculate the sum of arrays elements
let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum:", sum);

// reduce method to calculate the product of all array elements
let product = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial:", product);