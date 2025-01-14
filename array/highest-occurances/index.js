
// use map function

function highestOccuenaceEle(arr) {
    let occurances = {}
    arr.map((item) => {
        if (occurances.hasOwnProperty(item)) {
            occurances[item]++;
        } else {
            occurances[item] = 1
        }
    })

    let maxOccCount = 0;
    let maxOccEL;
    console.log("occurances ", occurances)
    for (var ele in occurances) {
        // occurances[ele]  : value of that ele key in occurances obj
        if (occurances[ele] > maxOccCount) {
            maxOccCount = occurances[ele];
            maxOccEL = ele;
        }
    }

    return maxOccEL
}
const arr1 = [1, 3, 2, 5, 1, 3, 6, 2, 2, 3];
const highestOccEle = highestOccuenaceEle(arr1);
console.log("highest ocuu ele ", highestOccEle)