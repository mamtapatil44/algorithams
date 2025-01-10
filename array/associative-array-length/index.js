// Determine length/size of associative array
// 1. use Object.keys  and length
const myArray = {
    key1:"value1",
    key2:"value2",
    key3:"value3",
}
const size =  Object.keys(myArray).length;
console.log("Size=== ",size)

// 2.for.....in and hasOwnProperty
let  sizeCount =0;
for (let key in myArray){
    if(myArray.hasOwnProperty(key)){
        sizeCount++;
    }
}

console.log("sizeCount=== ",sizeCount)