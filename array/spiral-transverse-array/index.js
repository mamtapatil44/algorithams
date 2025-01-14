// 2d array to be transevers
//
// 
//  // o/p :- 1,2,3,6,9,7,4.5

const tempAr =
[
[1,2,3],
[4,5,6],
[7,8,9] 
]
function transeversArray(array){
    let result = [];
    let left = 0;
    let right = array[0].length - 1;  // Corrected here: right = array[0].length - 1
    let top = 0;
    let bottom = array.length - 1;

    while(top <= bottom && left <= right ){

        //1st row right transvers

        for(let i =left ;i <=right;i++){
            result.push(array[top][i])
        }
        top++

        for(let i = top ; i<=bottom ;i++){
            result.push(array[i][right])
        }
        right--;

        if (top > bottom || left > right) break;
        for(let i = right; i >= left;i--){
            result.push(array[bottom][i])

        }
        bottom--;
        if (top > bottom || left > right) break; 
        for(let i = bottom ;i>=top ;i--){
            result.push(array[i][left])
        }
        left++;
    }
return result;
}

const tArr = transeversArray(tempAr);
console.log("tArr ",tArr)