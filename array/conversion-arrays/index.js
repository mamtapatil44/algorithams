// conversion of 1d array to 2d array :we use map for it
const arry1d = [1, 2, 3, 4, 5, 6];
const arry2D = arry1d.map((item) => [item]);
console.log("array2D ", arry2D) // output : array2D  [[1], [2], [3], [4], [5], [6]]


// we can use reduce and Array.from method also, for that we need subarray length

const myArray = [1, 2, 3, 4, 5, 6];
const subarraylength = 3;
function convetInto2D(myArray, subarraylength) {
    const twoDArr = Array.from({ length: Math.ceil(myArray.length / subarraylength) }, (v, i) => {
        return myArray.slice(i * subarraylength, i * subarraylength + subarraylength)
    });

    return twoDArr;
}


console.log("twoDArr==== ", convetInto2D(myArray, 2));
console.log("twoDArr==== ", convetInto2D(myArray, 3))
console.log("twoDArr==== ", convetInto2D(myArray, 4))




// conver 2D to one D array
const Arr2D = [[1,2],[3,4],[5]]
const arr1D = Arr2D.flat();
console.log("onde d array ",arr1D)