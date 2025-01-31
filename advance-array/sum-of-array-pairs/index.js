// 4. Find all pairs in an array whose sum equals a target.
// Hint: Use a Set to track required complements.

function sumOfPairs(arr,target){
    let temp =[]
    for(let i =0 ; i <arr.length ;i++){
        for(let j =1;j <arr.length  ;j++){

            if(arr[i]+arr[j] === target){
                if(!temp.includes(arr[i]) && !temp.includes(arr[j])){
                    temp.push(arr[i])
                    temp.push(arr[j])
                }
              
            }

        }

    }
    return temp;
}

const result = sumOfPairs([1,2,3,4,5,6],9);
console.log("result ",result)




function sumOfPairsWIthComplements(arr,target){
    let collection = new Set();
    let pairs= [];

    for(let num of arr){
        let complements = target - num;

        if(collection.has(complements)){
            pairs.push([complements,num])

        }
        collection.add(num)
    }

    console.log("pairs ",pairs)
   
  return pairs;
}

const result2 =sumOfPairsWIthComplements([1,2,3,4,5,6],9);
console.log("sumOfPairsWIthComplements ",result2)