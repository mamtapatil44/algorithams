Object.defineProperty(Array.prototype,'duplicate' ,{
    enumerable:false,
    writable:true,
    configurable: true,
    value : function(){
        var duplicateArray =[];

        for(let i =0 ;i < this.length;i++){
            duplicateArray.push(this[i])
        }

        return duplicateArray
    }
})

var originalArr =[1,2,3,4]
var duplicateArray = originalArr.duplicate()

console.log("originalArr==== ",originalArr);
console.log("duplicateArray==== ",duplicateArray)