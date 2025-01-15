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