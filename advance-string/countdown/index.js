// 15. Time Countdown with Dots
// Display a countdown timer that visualizes remaining time using ..
// 🔹 Hint: Use .repeat() to update display dynamically.

function coundownDown(seconds){
    let remainingTime = seconds;

    const interval = setInterval(()=> {
        console.log(remainingTime + '.'.repeat(seconds - remainingTime));
        if(remainingTime <=0){
              clearInterval(interval)
        }else{
            remainingTime--;
        }
       
    },1000)  

}
console.log((coundownDown(30)))
