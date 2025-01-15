// sort the array by name or age
// use bubble sort or merge sort


function sortingPara(arr, sortBy) {
    const newArr = [...arr];
    newArr.sort((a, b) => {
        if (sortBy === 'age') {
            console.log("if")
            return a.age - b.age;
        } else if (sortBy === 'name') {
            console.log("elseif")
            return a.name.localeCompare(b.name)
        }
        return 0;
    })

    return newArr;

}

const arr1 = [{ name: "Mamta", age: 33 },
{ name: "Dipak", age: 32 },
{ name: "Patil", age: 28 }
]

const sortByage = sortingPara(arr1,"age");
console.log("sort by age ",sortByage)
const sorByName = sortingPara(arr1,"name");
console.log("sort by name=== ",sorByName)