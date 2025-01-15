// reverse string

function reverseString(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    return reverseStr
}

console.log("rstr== ", reverseString("mamta"))
console.log("==============================")


function reverseStringArr(str) {
    let resStr = [];
    let strArr = str.split('');
    // using array inbuilt reverse method
    // let reverseStrRev ='';
    // reverseStrRev = strArr.reverse();
    // console.log("reverseStrRev ",reverseStrRev.join(''));

    // using array iteration
    for (let i = strArr.length - 1; i >= 0; i--) {
        resStr.push(strArr[i])
    }
    return resStr.join('')

}

console.log("reverse string using array itr== ", reverseStringArr("Dipak"))



function reverseRecursion(str) {
    if (str === '') {
        return str;
    }

    return reverseRecursion(str.substring(1)) + str[0];

}

console.log("revsers=== ", reverseRecursion("dipak"))


function reverseArr(arr) {
    if (arr.length === 0) {
        return arr
    }
    return reverseArr(arr.slice(1)).concat(arr[0])
}

console.log("revsersarrr=== ", reverseArr([1, 2, 3]))