// 11. Generate a Zigzag Pattern
// Write a function that creates a zigzag pattern using / and \ repeated alternatively.
// 🔹 Hint: Use .repeat() and modulo.

function zigzagPattern(count){
    let pattern ='';
    
    for(let i =0 ; i < count ;i++){
        pattern += ( i %2 === 0) ? '/':'\\'

    }
    return pattern;

}

console.log(zigzagPattern(12))