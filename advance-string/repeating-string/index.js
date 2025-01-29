// 1. Repeating a Banner Message with repeat()
// Given a string message, repeat it 5 times and ensure it has proper spacing.
function repeatStrMsg(msg){
    let str = msg + ' ';
    let repeatedStrg = str.repeat(5).trim();
    return repeatedStrg ;
}
console.log("repetation===  " ,repeatStrMsg("Mamta"))