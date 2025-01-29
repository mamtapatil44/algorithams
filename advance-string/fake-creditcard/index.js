// 14. Generating Fake Credit Card Numbers
// Create a function that generates dummy credit card numbers following a fixed pattern.
// 🔹 Hint: Use .repeat() to generate sections of digits.

function generateCreditCardNum(){
     function generateNumSection(length){
        return Math.floor(Math.random()* Math.pow(10,length)).toString().padStart(length,'0')
     }

    return Array(4).fill(null).map(()=>generateNumSection(4)).join('-')
    // crete empty array with 4 slots
    //  fill null values in array to iterate the array
    // map : reaplces each numm with 4 digit num
    // join to convert in string using-
}

 console.log(generateCreditCardNum())