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


// find 2nd largest element in array

function secondLargestNumber(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && largest > arr[i]) {
            secondLargest = arr[i];
        }

    }

    return secondLargest;
}

const arr2 = [1, 3, 5, 7, 9, 4]

console.log("secondLarge1d", secondLargestNumber(arr2))

function seconLargeWIthSort(arr) {
    let sortedarray = arr.sort((a, b) => a - b);
    let scondlarge = sortedarray.length - 2;
    return sortedarray[scondlarge];

}

console.log("seconLargeWIthSort", seconLargeWIthSort(arr2))



function seconLargeWIthReduce(arr) {
    const [largest, secondLargest] = arr.reduce(([largest, secondLargest], current) => {
        if (current > largest) {
            return [current ,largest]

        } else if (current > secondLargest && current < largest) {
            return [largest,current]
        }
        return [largest, secondLargest];
    }, [arr[0], arr[0]])

    
    return secondLargest;
}

console.log("seconLargeWIthReduce", seconLargeWIthReduce(arr2))