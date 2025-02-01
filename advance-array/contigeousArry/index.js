// 6. Find the contiguous subarray with the maximum sum (Kadane’s Algorithm).
// oHint: Keep track of current and max sums.
// subarray means part of array,array itself is subarray
// brute force algotithen 

function brutForceSubArray(arr) {
    let n = arr.length;
    maxSum = 0;

    for (let start = 0; start < n; start++) {
        let currentSum = 0;
        for (let end = start; end < n; end++) {
            currentSum += arr[end];
            maxSum = Math.max(maxSum, currentSum)
        }

    }

    console.log("maxSum== ", maxSum)

    return 0;

}
brutForceSubArray([3, -4, 5, 4, -1, 7, -8])

console.log("===============================================")
// dynamic programming algortham :time complexity O(N) :its linear so optimized
function kadaneAlgorithamArray(arr) {
    let n = arr.length;
    maxSum = 0;
    let curSUm = 0;

    for(let i =0 ;i<n;i++){
        curSUm += arr[i];
        maxSum = Math.max(curSUm,maxSum);
        if(curSUm < 0){ // we are handing if case after calculating maxsum bcz it all elements are -ve and max aswer should be negetive,
            curSUm =0
        }

    }

    console.log("maxsumkadane== ",maxSum)

}
kadaneAlgorithamArray([3, -4, 5, 4, -1, 7, -8])