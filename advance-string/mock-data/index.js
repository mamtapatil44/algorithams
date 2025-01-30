// 18. Repeating Test Data for API
// Generate a mock API response with repeated data items.
// 🔹 Hint: Use .repeat() inside an array.
//  from fetch api whatever data we get , that will be oject of each elemet and we cant repete object , for that we want to use Aarry.fill()

const mockData ={
    message:"Data fetched successfully",
    data:Array(5).fill({
        id:1,
        name:"Mamta",
        email:"mnp@gmail.com",
        city:"atlanta"
    })
}

