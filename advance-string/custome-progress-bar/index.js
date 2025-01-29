// 9. Custom Progress Bar
// Build a function that displays a progress bar using █ and - based on a given percentage.
// 🔹 Hint: Use .repeat() for █ and -.


function createProgressbar(percentage){

    const filled = '█'.repeat(Math.floor(percentage/10));
    const unfilled = '-'.repeat(Math.floor(10-filled.length)) 
    return `[${filled}${unfilled}] ${percentage}%`
}

console.log(createProgressbar(50));
console.log(createProgressbar(30))