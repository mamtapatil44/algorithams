// 20. Creating a Chessboard Pattern
// Write a function to create a chessboard-like pattern using # and spaces.
// 🔹 Hint: Use .repeat() and line breaks (\n).

// first lopp for row and 2nd loop for col ,here size means height
function chessboardPattern(size){
    chessboard ='';
     for(let i =0 ;i <size;i++){
        let row ='';
        for(let j= 0; j <size;j++){
            if((i+j)%2 === 0){
                row += "#"

            } else{
                row += " "
            }

        }
        chessboard +=  row  + "\n"
     }
    return chessboard
}

console.log(chessboardPattern(12))