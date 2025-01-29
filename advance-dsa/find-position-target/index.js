// Find the First and Last Position of a Number
// Given a sorted array, return the first and last occurrence of a target number
//  find means search we can use linear or binary search
function findPosition(arr, target) {

    function findFirst(arr1, target1) {
        let left = 0;
        let right = arr1.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] < target1) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return left;
    }


    function findLast(arr2, target2) {
        let left = 0;
        let right = arr2.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] <= target2) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return right;
    }

    let first = findFirst(arr, target);
    let last = findLast(arr, target);

    if (first > last) return [-1, -1];
    return [first, last];

}

const result = findPosition([5, 7, 7, 8, 8, 10],6);
console.log("first and last position== ",result)