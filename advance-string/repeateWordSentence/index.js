// 7. Repeating a Word in a Sentence Generator
// Create a function that takes a word and a count, returning a sentence using it multiple times.
// 🔹 Hint: Use .repeat() with proper sentence structure.

function repeatWordInSentence(word, count) {
    return `${word} `.repeat(count).trim() + '.';
}

console.log(repeatWordInSentence("hello", 3));