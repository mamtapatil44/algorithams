// how to check given obj is array or not array without built in func of array
// 1.use instanceof  and splice method also
const myObj ={
    name:"Mamta",
    age:30,
    hobbies:["dancing","sketching"]
}
const arr =["1",2]

if(myObj.hobbies instanceof Array){
    console.log("this is array")
} else{
    console.log("this is not array")
}

// here hobbies are array and other two properties name and age are not array