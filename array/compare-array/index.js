
function compareArray(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    arr1 = arr1.slice().sort();
    arr2 = arr2.slice().sort()

    for(let i =0 ;i< arr1.length;i++){
        if(arr1[i] === arr2[i]){
            return true
        }

    }

}
const array1 = [3, 1, 2];
const array2 = [1, 2, 3];
console.log("same array ===",compareArray(array1,array2))
console.log("==========================")


// use every method of array


function compareArrayEvery(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    arr1 = arr1.slice().sort();
    arr2 = arr2.slice().sort()

   const result = arr1.every((element,index)=> element === arr2[index]);
   return result

}

console.log("same  compareArrayEvery ===",compareArrayEvery(array1,array2))
console.log("==========================")