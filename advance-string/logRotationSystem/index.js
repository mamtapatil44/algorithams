// 8. Log Rotation System
// Simulate a log file where each entry is repeated n times before being archived.
// 🔹 Hint: Store repeated log entries in an array and use .repeat().

function logRotation(logEntry,n){

    return `${logEntry} \n`.repeat(n).trim();

}

console.log(logRotation("error!!!!",3))