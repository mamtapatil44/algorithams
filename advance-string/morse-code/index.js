
// 13. Simulating Morse Code
// Convert a message into Morse code where . and - are repeated for each letter.
// 🔹 Hint: Use a Morse dictionary and .repeat().
function textToMorseCode(text) {
    const morseDict = {
        'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
        'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
        'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
        'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
        'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
        'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '0': '-----', ' ': ' / ' 
    };

    return text.toUpperCase().split('').map(char => morseDict[char] || '').join(' ');
}

console.log(textToMorseCode("hellow mamta"))
console.log(textToMorseCode("Hi JS"))