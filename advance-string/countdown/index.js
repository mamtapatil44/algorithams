// 15. Time Countdown with Dots
// Display a countdown timer that visualizes remaining time using ..
// 🔹 Hint: Use .repeat() to update display dynamically.

// function coundownDown(seconds){
//     let remainingTime = seconds;

//     const interval = setInterval(()=> {
//         console.log(remainingTime + '.'.repeat(seconds - remainingTime));
//         if(remainingTime <=0){
//               clearInterval(interval)
//         }else{
//             remainingTime--;
//         }
       
//     },1000)  

// }
// console.log((coundownDown(3)))


function typerwriter(text,speed){
  console.log("typerwriter")
   let index =0;
     function textWrite(){
        if(index <= text.length){
           let displaytext = text.slice(0,index) + '-'.repeat(text.length -index);
           console.log(displaytext)
            index++;
        setTimeout(textWrite ,speed)
        }else{
            console.log(text)
        }
    }


    textWrite()

}
typerwriter("hi Mamta",120);


function tWriterWIthSetInterval(text,speed){
    let index = 0;
    const interval = setInterval(()=>{
        if(index <= text.length){
            let displaytext = text.slice(0,index) + '-'.repeat(text.length -index);
            console.log(displaytext);
            index++;

        }else{
            console.log(text);
        }
        if(index > text.length){
         clearInterval(interval)
        }


    },speed)

}

tWriterWIthSetInterval("hey dipak",150)