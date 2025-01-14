
function fiboseries(n) {

    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [0]
    }
    if (n === 2) {
        return [0, 1];
    }
    const series = fiboseries(n - 1);
    const nextEle = series[n - 2] + (series[n - 3] || 0)
    series.push(nextEle)
    return series

}

console.log("fiboseries== ", fiboseries(6))

console.log("==============================================================")

function fiboserieswithloop(num) {

    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib

}

console.log("fib in loop",fiboserieswithloop(9))