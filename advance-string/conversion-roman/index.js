// 6. Converting Numbers into Roman Numerals
// Implement a function that repeats characters like I, V, X, etc., to form Roman numerals.


function convertToRoman(num){
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    result ='';
    for(let i =0 ; i< romanNumerals.length;i++){
        while(num >= romanNumerals[i].value){
            result += romanNumerals[i].numeral;
             num -= romanNumerals[i].value

        }

       

    }
    return result
}

console.log("roman conversion  ", convertToRoman(70))