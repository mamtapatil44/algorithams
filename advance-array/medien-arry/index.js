// 8. Find the median of two sorted arrays.
// oHint: Use binary search for O(log n) approach.
// here we have two sorted array : combine thses array,find the median
// if number of elements even then take two mid elementsanf ind mid of that
// if num of elemet is odd then mid will be median

function medianBinarySerach(arr1, arr2) {
    // arr1 should be small, if not then swap it
    console.log("in median serch")
    m = arr1.length;
    n = arr2.length;

    left = 0;
    right = m;

    while (left <= right) {
        let partition1 = Math.floor((left + right) / 2);
        let partition2 = Math.floor(((m + n + 1) / 2) - partition1);

        let maxLeft1 = (partition1 === 0) ? -Infinity : arr1[partition1 - 1];
        let maxLeft2 = (partition2 === 0) ? -Infinity : arr2[partition2 - 1];

        let minRight1 = (partition1 === m) ? Infinity : arr1[partition1];
        let minRight2 = (partition2 === n) ? Infinity : arr2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 1) {  // odd condition
                return Math.max(maxLeft1, maxLeft2)
            }
            else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }

        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else if (maxLeft2 > minRight1) {
            left = partition1 + 1;
        }
    }
}

console.log("median",medianBinarySerach([3],[1, 2]))
console.log("========================")
console.log("median",medianBinarySerach([1, 2],[3, 4]))
console.log("========================")
//  