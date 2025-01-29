// 1. Find a Missing Number in an Array of Consecutive Numbers
// Given an array of n-1 unique numbers from 1 to n, find the missing number

function findMissingNum(arr){
    const n =  arr.length +1;
    const expectedSum = Math.floor(n*(n+1)/2);
    const actualSum = arr.reduce((sum ,current)=> sum+ current,0)
    console.log("expectedSum ",expectedSum);
    console.log("actualSum ",actualSum)
    return expectedSum -actualSum;

}

console.log("mssing num === " ,findMissingNum([1, 2, 4, 5, 6]))