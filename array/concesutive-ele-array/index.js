function isConsecative(arr) {
    // array should be sorted in asc order
    // no dupliaction,no non inetgers values
    // if diff between tow adjecnt element is 1 then it is consecetive
   
    arr.sort((a, b) => a - b);
    console.log("sorted arr" ,arr)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) {
            return false
        }
        
    }
    return true
}

console.log("is consecutive ",isConsecative([5, 3, 2, 1, 6, 7]))
console.log("is consecutive ",isConsecative([5, 3, 2, 1, 6,4,7]))