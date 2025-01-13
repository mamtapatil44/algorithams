// Combine two array and remove duplicate items from the array
// 1. Take two arrays which you want to combine
// 2. Create new empty array whcih holds combinational value of two array withou duplicay
// 3.loop through first array each item and check it is present in 2nd array, if its not push in new array
// 4.loop through 2nd array each item and check it is present in 1st array, if its not push in new array

function combinedArray(arr1, arr2) {
    let combinedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i]) && !combinedArray.includes(arr1[i])) {
            combinedArray.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i]) && !combinedArray.includes(arr2[i])) {
            combinedArray.push(arr2[i])
        }
    }
    console.log("combinedArray ", combinedArray)

    return combinedArray;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const comArray = combinedArray(array1, array2);
console.log("combined array by remove duplication==== ", comArray)

function combinedArrayWithRemovingDuplication(arr1, arr2) {
    let combinedArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (!combinedArray.includes(arr1[i])) {
            combinedArray.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!combinedArray.includes(arr2[i])) {
            combinedArray.push(arr2[i])
        }
    }
    return combinedArray;
}

const newCombinedArray = combinedArrayWithRemovingDuplication(array1, array2);
console.log("combined array by remove duplication only==== ", newCombinedArray)



// combine two array with srpread poerator:
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let newCArray = [...arr1, ...arr2]
console.log("newCArray ", newCArray)
let arr3 = [7,8];
let arr4 =[9]
let array = [...arr1,...arr2,...arr3,...arr4];
console.log("array ", array)

// array without duplicates with set methods
const arrWithDuplicates =[1,2,3,1,2,4,5,7,6]
const arrWithoutDuplicates = [...new Set(arrWithDuplicates)];
console.log("arrWithoutDuplicates ",arrWithoutDuplicates)



// remove duplicate arrays form single array without set method

let duplicateArr = [1,2,3,1,2,4,5,6,6]
const uniqueArr = duplicateArr.filter((item,index)=>{
    return duplicateArr.indexOf(item) === index;
})

console.log("uniqueArr==== ",uniqueArr)