// define or create object
const ob={};
Object.create(ob)  // create method
let person = new Object(); // constructor method
let obj = { }; // Literal Notation


// we can add propertry in it dynamically by using .operator
obj.nama = "mamta";
obj.age = 30;

console.log(obj) //{nama: 'mamta', age: 30}
// by using sqr bracket with key
obj['city'] = 'Pune'

console.log(obj) //{nama: 'mamta', age: 30, city: 'Pune'}
