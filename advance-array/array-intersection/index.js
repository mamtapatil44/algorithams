// 3. Find the intersection of two arrays without duplicates.
// oHint: Use Set for fast lookups.

function arryIntersection(arr1,arr2){
    let intersectionArr =[];
    arr1.map((item)=>{
       if(arr2.includes(item) && !intersectionArr.includes(item)){
        intersectionArr.push(item)
       } 
    })

    return intersectionArr;

}

console.log(arryIntersection([1,3,4,5,7,7],[1,2,3,4,5,6]))