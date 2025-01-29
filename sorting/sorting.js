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

