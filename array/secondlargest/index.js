// find 2nd largest element in 2d array

function secondLarge2D(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                secondLargest = largest;
                largest = arr[i][j];

            } else if (arr[i][j] > secondLargest && arr[i][j] < largest) {
                secondLargest = arr[i][j];
            }

        }

    }

    return secondLargest;
}

const arr1 =
    [
        [5, 6, 7],
        [3, 4, 1],
        [2, 99, 18]]
console.log("secondLarge2D ", secondLarge2D(arr1))