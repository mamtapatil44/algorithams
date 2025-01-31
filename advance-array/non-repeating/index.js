// 1. Find the first non-repeating element in an array.
// oHint: Use Map for frequency counting.

function nonRepeatingEle(arr){
    let frequency ={};
arr.map((item)=>{
    if(frequency.hasOwnProperty(item)){
        frequency[item]++;
    } else{
        frequency[item] =1
    } 
})

for(let num in frequency){
    if(frequency[num] ===1){
    return num;
    }
}

return null
}
const result = nonRepeatingEle([1,2,3,2,4,5]);
console.log("result ",result)