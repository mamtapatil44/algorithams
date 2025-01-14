
function findMaxValue(arr){
    var maxValue = arr[0]
    for(var i =1; i < arr.length;i++){
        if(arr[i] > maxValue){
            maxValue = arr[i]
        }
    }
    let index = arr.indexOf(maxValue)
    console.log("index ",index)
    return maxValue;
}

console.log("max value=== ",findMaxValue([3,5,7,8,6,9]))