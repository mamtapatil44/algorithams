// 1.fetch method
async function makeApiCall(url){
    const data = await fetch(url);
    const result = await data.json();
     return data
}

// 2.authentication and authorization

const makeAuthRequest = async(url,method,data,token)=>{
    let requestOptions ={
        method:method,
        body :JSON.stringify(data),
        headers:{
            "Authorization" :`Bearer ${token}`,
            "Content-Type"  :"application/json"
        }
    }

    const res = await fetch(url,requestOptions);
    const resData = await res.json();
    return resData

}

// here method : get,post ,put ,delete

// get: retrive data
// post : add new data ,body is mandatory
// put :update data ,body is mandatory
// delete :delete data