// define or create object
const ob={};
Object.create(ob)  // create method
let person = new Object(); // constructor method
let obj = { }; // Literal Notation


// we can add propertry in it dynamically by using .operator
obj.name = "mamta";
obj.age = 30;

console.log(obj) //{nama: 'mamta', age: 30}
// by using sqr bracket with key
obj['city'] = 'Pune'

console.log(obj) //{nama: 'mamta', age: 30, city: 'Pune'}

// create copy of object 
// 1.shallow copy
// a.
const original = { a: 1, b: 2, c: { d: 3 } };
const copy = Object.assign({}, original);
console.log(copy); // { a: 1, b: 2, c: { d: 3 } }
// b.spread operator
const originalObj = { a: 1, b: 2, c: { d: 3 } };
const copyObj = { ...originalObj };
console.log(copyObj);// { a: 1, b: 2, c: { d: 3 } }

// 2.deep clone
// JSON.parse()/JSON.stringify()

// object method:
console.log('obj keys=',Object.keys(obj))
console.log('obj values=',Object.values(obj))
console.log('obj keys=',Object.entries(obj)) //create nested array

// loop
for(let key in obj){
    console.log(key, obj[key]);
    // obj.hasOwnProperty(key) this gives boolean value
}

// find length of object
console.log("length==== ",     Object.keys(obj).length);

// merge two obj
let obj1 = {name:"mamta"} ;
let obj2 = {age:20} ;
let mergedObj = {...obj1, ...obj2};
console.log("mergedObj==== ",mergedObj);



