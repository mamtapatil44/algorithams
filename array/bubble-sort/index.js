// bubble sort means swapping adject elements => i and i+1


function bubbleSort(array){
   let n = array.length;
   let swapped = true;

   while(swapped){
    swapped = false;
    let i =0;
    while(i < n-1 ){
         if(array[i] > array[i+1]){
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] =temp;
            swapped =true;
         }
         i++;
    }
    n--;
   }

return array;
}

const Bsort = bubbleSort([2, 5, 8, 1, 7, 3, 4, 6]);
console.log("Bsort=== ",Bsort)