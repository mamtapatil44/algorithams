// 7. Find the majority element in an array (appears more than n/2 times).
// oHint: Use Map or Moore’s Voting Algorithm.
// Moore’s Voting Algorithm : there are two problems comes under this algo 1.pair sum 2. majority element

// 1.pair sum : given is sorted array ,also we have target sum : here we have to return pair of two numbers whose sum is equal to target
function brutForcePairs(arr,target){
    let n = arr.length;
    let pairs = [];
    for(let i =0 ;i <n ;i++){
        for(let j= i+1; j <n ;j++){
            if(arr[i]+arr[j] === target){
                pairs.push([arr[i], arr[j]]);
            }
        }

    }

    console.log("pairs ",pairs)

}
brutForcePairs([2,7,11,15],9)

// majority elements:n/2 times
function majorityElementsBrutForce(arr){
    n= arr.length;

    for(let value of arr){
        let frequency =0
        for (let i = 0; i < n; i++) {
            if (arr[i] === value) {
                frequency++;
            }
        }

       if(frequency > Math.floor(n/2)){
        console.log("frequency ",frequency)
        return {value:frequency}
       }
    }
    return 0

}
majorityElementsBrutForce([3,2,3])

function majorityElementsMooreVoting(arr){
   let n = arr.length;
   let frequency =0;
   let ans = 0;
   for(let i =0; i <n ;i++){
    if(ans === frequency){
        ans = arr[i]
    }
    if(ans === arr[i]){
        frequency++

    }else{
        frequency--
    }

   }

   return ans ;
}
const result = majorityElementsMooreVoting([1,2,3,4])
console.log("result=== ",result)