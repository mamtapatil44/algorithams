//1. Multidimensional array:
// - it is an array which contains object in it which have key value pairs of different type
// - each key is used to access sepcific element from the array


const MultDArray = [
    {
        name: "Mamta",
        age: 30,
        hobbies: ["reading", "dancing", "sketching"]
    }, {
        name: "DIpak",
        age: 32,
        hobbies: ["reading", "gaming", "cooking"]

    }, {
        name: "Patil",
        age: 30,
        hobbies: ["sketching", "gardening", "painting"]
    }
]

// accessing elements and values
console.log(MultDArray[0].name)
console.log(MultDArray[2].hobbies[0])

// ---------------------------------------------------------------

// 2.length or size:it is experssed in terms of rows,col and dept in case od 3D

const myArr = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

function getMlArrayLength(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }

    let length = arr.length;
    let maxLength = 0;

    for (let i = 0; i < length; i++) {
        let innerMaxLength = getMlArrayLength(arr[i]);
        console.log("innerMaxLength ", innerMaxLength)
        if (innerMaxLength > maxLength) {
            maxLength = innerMaxLength;

        }
    }

    return maxLength + 1;
}

const arryLength = getMlArrayLength(myArr)
console.log("arryLength== ", arryLength)


// count of elenents

function countEle(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count += countEle(arr[i])
        } else { count++ }
    }
 return count;
}
const arrC = countEle(myArr)
console.log("arrCount ",arrC)


