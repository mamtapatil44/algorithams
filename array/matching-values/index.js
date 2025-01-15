// iterate array

function matchingValues(arr1, arr2) {
    var matchingValue = []
    arr1.forEach(element => {
        arr2.forEach((ele) => {
            if (element === ele) {
                matchingValue.push(ele)
            }
        })

    });

    return matchingValue;
}

const array1 = [3, 1, 4];
const array2 = [1, 2, 4];

console.log("matching values== ", matchingValues(array1, array2));
console.log("=========================== ")


// array filter with includes methods
function matchingValuesFilter(arr1, arr2) {
    const match = arr1.filter((ele) => arr2.includes(ele))
    return match;
}
console.log("matchingValuesFilter ", matchingValuesFilter(array1, array2));
console.log("=========================== ")

// reduce function
function matchingValuesReduce(arr1, arr2) {
    const matching = arr1.reduce((acc, current) => {
        if (arr2.includes(current)) {
            acc.push(current)
        }
        return acc;
    }, [])
    return matching;
}

console.log("matchingValuesReduce ", matchingValuesReduce(array1, array2));
console.log("=========================== ");




