
// calculate frequnecy sum


function frequencySum(arr1) {
    let frequnecy = {}
    arr1.map((item) => {
        if (frequnecy.hasOwnProperty(item)) {
            frequnecy[item]++
        } else {
            frequnecy[item] = 1
        }
    }
    )
    console.log("frequnecy ", frequnecy)
    let sum = 0;
    for (let key in frequnecy) {
        sum = sum + frequnecy[key]

    }
    return sum;


}

const arr1 = [1, 2, 3, 2, 1, 3, 1, 2, 5, 3,1]
const sum = frequencySum(arr1);
console.log("sum of frequncy==== ", sum);
console.log("===============================")