// 3. Generating a Unique Divider Line
// Create a function that generates a line separator of - characters of given length.
// 🔹 Hint: Use .repeat() and template literals.

function createDividerLine(length){
     return `-${'-'.repeat(length-2)}-`
}

console.log("divider ",createDividerLine(8))
