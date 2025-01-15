// find interation means same elements form diffreent array

function findIntersectionItr(arr1, arr2) {
    let intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                intersection.push(arr1[i])
            }
        }

    }

    return intersection;

}
const array1 = [1,2,3,4,5];
const array2 = [3,4,5,6,7];
console.log("intersection thr iteration === ",findIntersectionItr(array1,array2))
console.log("====================================================")


function findIntersectionFilter(arr1, arr2) {
    let intersection = arr1.filter((ele)=>arr2.includes(ele));
    return intersection;
}

console.log("intersection thr findIntersectionFilter === ",findIntersectionFilter(array1,array2))
console.log("=======================================")





function findIntersectionReduce(arr1, arr2) {
   const inter= arr1.reduce((acc,current)=>{
        if(arr2.includes(current)){
            acc.push(current)
        }
        return acc
    },[])
  return inter;
}

console.log("intersection thr findIntersectionReduce === ",findIntersectionReduce(array1,array2))
console.log("=======================================")