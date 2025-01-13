// merged tow sorted array without using fun sort

function mergedSortedArray(arr1,arr2){
    console.log("arr1 ",arr1)
    console.log("arr2 ",arr2)
    let mergedArr =[];
    let i= 0;
    let j =0;
    while(i < arr1.length && j < arr2.length){
    //   here we compare first elements of both array and whichever is small push it into merged array
        if(arr1[i] < arr2[j]){
            mergedArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]){
            mergedArr.push(arr2[j]);
            j++;
        }
    }
  console.log("mergedArr 111",mergedArr)
    while(i< arr1.length ){
        mergedArr.push(arr1[i]);
        i++;
    }
    while(j <arr2.length ){
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;


}

console.log("mergedsorted arrayre=== ",mergedSortedArray([1,5,7,3,9],[2,4,6,8]))

console.log("mergedsorted arrayre=== ",mergedSortedArray([1,5,7,3,9,9],[2,4,6,8]))


function mergeSortedArrayWithRecursion(arr1,arr2){
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;

    if(arr1[0] <= arr2[0]){
        return [arr1[0],...mergeSortedArrayWithRecursion(arr1.slice(1),arr2)]
    } else{
        return [arr2[0],...mergeSortedArrayWithRecursion(arr1,arr2.slice(1))]
    }
}

const recursionMerge = mergeSortedArrayWithRecursion([1,3,5,7],[2,4,6,8]);
console.log("recursionMerge ",recursionMerge)
