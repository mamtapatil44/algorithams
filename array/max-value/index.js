
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


function maxvalueWIthreduce(arr){
    const maxValue = arr.reduce((max,current)=>{
        return current >max ? current :max;
    },0
    )
 return maxValue
}

console.log("maxvaluein reduce ===",maxvalueWIthreduce([2,3,6,4,1,8,34,26]))