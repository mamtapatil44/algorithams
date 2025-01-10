const mymap = new Map([["apple",3],["banana",2],["cherry",1],["date",5]]);
const sortedArray = Array.from(mymap).sort((a,b)=>a[1]-b[1]);
console.log("sortedArray=== ",sortedArray);
const sortedMap = new Map(sortedArray)
console.log("sortedMap=== ",sortedMap);


// convert map to array using entries ie ES6 map
const entriesArray = new Map(mymap.entries())
