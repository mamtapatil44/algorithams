let myARray =[{id:1,name:"MAMTA"},{id:2,name:"DIPAK"},{id:3,name:"PATIL"}]
myARray.sort((a,b)=> a.id - b.id)

let serchObj = {id:2,name:"kkkk"};

const binarySeach =(arr,obj)=>{
    let low =0 ;
    let high = arr.length -1;
   
  console.log("in binary search")
    while(low <= high){
        let mid = Math.floor((high + low)/2)
        if(arr[mid].id === obj.id){
            console.log("in mid")
            return true
        } else if(arr[mid].id < obj.id){
            console.log("in right")
           low = mid +1;
        } else{
            console.log("in left")
            high = mid - 1;
        }

    }
    return false;

}

if(binarySeach(myARray,serchObj)){
    console.log("serached obj is present ")
} else{
    console.log("serached obj is Not present ")
}