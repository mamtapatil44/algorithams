Array.prototype.sortEvenNum = function(){
    const evenNumber = this.filter((num)=> num %2 ===0)
    const sortedEvenNumbers = evenNumber.sort((a,b)=>a-b);
    let evenIndex = 0;
    //    replace even numbers with sorted even num form original array
    this.forEach((item, index) => {
        if (item % 2 === 0) {
            // Replace even numbers with sorted ones
            this[index] = sortedEvenNumbers[evenIndex++];
        }
    });

    return this;
}
const arr =[1,8,6,10,2,5,7]
console.log("sorteven=== ",arr.sortEvenNum())