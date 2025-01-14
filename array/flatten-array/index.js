// use reduce and concat method
const nestedArray =[[1,2],[3,4],[5,6,7]];
const flattenedArr = nestedArray.reduce((acc,current)=>{
    return acc.concat(current)
},[])

console.log("flattenedArr ",flattenedArr)