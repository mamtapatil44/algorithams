// bubble sort
// comparison based alogorith, which compares two adjecnet elements in n-1 iterations ,to move largest element at their correct positions.
// n should be legnth of array and iterations should be n-1
// here we use teo for loops, outer loop for number of passes and inner loop for comparsion and swapping
// if we dry run , we comes to know about after first iteration means at at j =o and j= 0, we got first lagrest element,so for next ietration we dont consider that element so 
//   j ietartes upto n-1-1 
//  next ieration i=2, and j =2 ietrates upto j= n-1-2 (bcz we gor second largest element also in previous iteration) , each itimes for outer iteration , inner iteration elemenets should be reduced as value of i so we got pattern n-1-i
// time complexity n  for outer * n for inner = O(n^2) : so its not optimum solution
function bubbleSort(arr) {
  const n = arr.length;
    for (let i = 0; i <= n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // ES6 feature of array destructuring for swapping
            }
        }

    }

    return arr;

}

const result = bubbleSort([5, 3, 8, 4, 2]);
console.log("asc bubble sort=== ",result)
console.log("===============================================================================")

// selection sort
// iterates array n-1 times, but swap only with smallest element only once for each ietration
// consider first element is small
//  here we inner loop will starts  j=i+1;

function selectionSort(arr){
    const n = arr.length;
    for(let i= 0 ; i <n-1;i++){
        let smallestIndex = i;

        for(let j =i+1; j<n;j++){
            if(arr[j] < arr[smallestIndex]){
                smallestIndex = j;
            }

        }

        if(smallestIndex !== i){
            [arr[i],arr[smallestIndex]]= [arr[smallestIndex],arr[i]]
        }
    }

    return arr;

}

const resSelectionsort = selectionSort([5, 3, 8, 4, 2])
console.log("asc slection sort=== ",resSelectionsort)
console.log("===============================================================================")


// insertion sort
// comparison alogorithm : it will work on sort or unsort array
// first index element should be considered as sorted for first iertion
// that element will compare with unsorted array and each elemt push back and small element should be at correct position of sorted array

function insertionSort(arr){
    const n = arr.length;

    for(let i =1 ; i < n;i++){
        key = arr[i];
        console.log("key ",key)
        while(j  >= 0 && key < arr[j]){
            arr[j+1] =arr[j];
            j--

        }
          arr[i] =key;
    }

    return arr;

}

const resInsertsort = selectionSort([5, 3, 8, 4, 2])
console.log("asc insrtion sort=== ",resInsertsort)
console.log("===============================================================================")
