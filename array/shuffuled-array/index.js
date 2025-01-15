function shuffuledArray(arr) {
    let shuffuledArray = [...arr];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffuledArray[i], shuffuledArray[j]] = [shuffuledArray[j], shuffuledArray[i]]

    }

    return shuffuledArray;
}

console.log("shuffledv array " ,shuffuledArray([1,4,2,6,8]))