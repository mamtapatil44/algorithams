// 2. Create a Dynamic Loading Indicator
// Build a function that shows a . character repeating based on loading percentage (e.g., 
//     loading(3) → "...").
//     🔹 Hint: Use .repeat() for visual indicators.


function loadingIndicator(num){
    const percentage = Math.floor(num/10);
    let str = '.'
    return str.repeat(percentage)
}

console.log("loading==== ",loadingIndicator(60))