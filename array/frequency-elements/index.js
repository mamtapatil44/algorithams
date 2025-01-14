// using map and object method: here we use map for iteration and object to count the frequency
// this uses hastable algo :where elements becomes key and count becomes values
function countFrequencyOfEle(arr){
    let frequency = {};
    arr.map((item)=>{
        if(frequency.hasOwnProperty(item)){
            frequency[item]++;

        }else{
            frequency[item]=1;
        }

    })

    return frequency;

}

const arr1 = [1,2,3,2,1,3,1,2,2,3]
const obj = countFrequencyOfEle(arr1);

console.log("frequency obj=== ",obj);

console.log("--------------------------------------------------")



// 2. we can use indexOf when we have to count specific element occurance

function indexOfOcuurance(arr, value){
    let count =0;
    let index = arr.indexOf(value);

    while(index !== -1){
        count++;
        index = arr.indexOf(value,index+1) // it will check occurance of that value start with next index

    }
  return count;
}
const arr2 = [1,2,3,5,1,3,6,2,2,3]
const spEl = indexOfOcuurance(arr2,2)
console.log("frequency of specific element=== ",spEl);

console.log("--------------------------------------------------")




// if we have to use map :we can use set and get () also 

function mapFrequencyCount(arr){
    const map = new Map();

    for(let element of arr){
        console.log("element ",element)
        if(element !== undefined && element !== null){
            console.log("map.get(element) ",map.get(element))
          const count = map.get(element) || 0;
          map.set(element,count+1)
        }
    }

    return map;

}

const mapFCount = mapFrequencyCount(arr2)

console.log("mapFCount=== ",mapFCount);

console.log("--------------------------------------------------")

// sparse array: array hase empty and undefined values at certain indices
// dense array : array has non-empty values