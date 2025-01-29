

// binary search : array should be sorted
// complexity :0(logn)
function binary(arr, search){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
    let mid = Math.floor((left+right)/2 );
    console.log(left ,right ,mid)
    if(arr[mid] === search){
        return 1;
    } else if (arr[mid] < search){
        left = mid +1;
    } else{
        right = mid -1;
    }
    
}
return -1
}

console.log(binary([1,2,3,4,5,6,7,8,9,10],6))