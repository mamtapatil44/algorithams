

function sumOfArrayEl(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;

}

console.log("sum using loop=== ",sumOfArrayEl([1,2,3,4,5,6,7,8,9]))
console.log("----------------------------------------")
function sumWIthReduce(arr){
    const sum = arr.reduce((acc,current)=>acc+current,0)
   return sum;
}

console.log("sum using reduce=== ",sumWIthReduce([1,2,3,4,5,6,7,8,9]))