// 4. Generating a Password Mask
// Convert a given password into * of the same length.
// 🔹 Hint: Convert each character into * using .repeat().
 function passwordMasking(password){

    return '*'.repeat(password.length);

 }

 console.log("paswword mask ",passwordMasking("abc123"))