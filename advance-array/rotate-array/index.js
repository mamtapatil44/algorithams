// 2. Rotate an array k times to the right.
// oHint: Use slice() and concat() for an O(n) solution.

// k :number of steps
// first we use simple, we can remove last elements and push at begining;
function rotateArray(arr, k) {

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())

    }
    return arr;
}
const result = rotateArray([1, 2, 3, 4, 5, 6], 3)
console.log("result ", result)

console.log("=====================================================")

function rotateArrayWithSplice(arr, k) {
    let deletedArray = arr.splice(arr.length - k)//;[4,5,6] to remove we are using splice method ,from which position we need to remove
    for (let i = 0; i < deletedArray.length; i++) {
        arr.splice(i, 0, deletedArray[i]) // add deleted at at first position (first para,index ,2nd para how many items to be deleted and ,3rd value to add)

    }
    return arr;
}
const result1 = rotateArrayWithSplice([1, 2, 3, 4, 5, 6], 3)
console.log("result1 ", result1)

function rotateArrayWithSliceConcat(arr, k) {
    let n = arr.length;
    if (k > n) {
        k = k % n // to handle if k is more than length of array;
    }
    console.log("k" ,k)
    return arr.slice(-k).concat(arr.slice(0, n - k))
}
const result2 =  rotateArrayWithSliceConcat([1, 2, 3, 4, 5, 6], 7);
console.log("result2 ", result2)