// iterating and 
function findMissingNumber(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return arr.length + 1;
}



console.log("missing num====>", findMissingNumber([1, 2, 3, 5, 6]))


// when acual length and array is given use expectedsum and actaulsum logic
function missingNum(arr,n){
  let expectedSum = n*(n+1)/2;
  let sum=0;
  let missing =0;

  for(let i =0 ;i <= arr.length-1;i++){
    sum = sum + arr[i]
  }
console.log("expectedSum" ,expectedSum)
console.log("sum" ,sum)
  if(expectedSum !== sum){
    missing = expectedSum - sum;
  }
 return missing;
}


console.log("missing num2====>", missingNum([1, 2, 3, 5, 6],6))



function moreMissingNum(arr){
  let left =0;
  let right = arr.length -1;
  while(left <= right){
    let mid = Math.floor((right+left) /2);
    if(arr[mid] === arr[0]+ mid){
      left = mid +1
    }else{
      right = mid -1
    }
  }

  return arr[left]-1

}

console.log("more missing num2====>", moreMissingNum([1, 2, 3, 5, 7,9]))