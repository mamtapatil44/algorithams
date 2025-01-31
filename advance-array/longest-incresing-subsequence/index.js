// . Find the longest increasing subsequence.
// oHint: Use dynamic programming (O(n²)) or binary search (O(n log n)).
// [10, 9, 2, 5, 3, 7, 101, 18]  output means next element should be greater than previous one here after 10 ,9 is small then 2 so which is not incresing ,but after 2 there is 5 ,its incresing so we consider 2,5 after 5 we need next element will be greter than 5 so we skip 3and take 7
function longestSubSequence(arr) {
    let temp = [];

    for (let num of arr) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (temp[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }
        console.log("length ", temp.length)
        console.log("left ", left)
        if (left === temp.length) {
            temp.push(num)
        } else {
            temp[left] = num;
        }

    }
    console.log("temp ", temp)
}
longestSubSequence([10, 9, 2, 5, 3, 7, 101, 18])