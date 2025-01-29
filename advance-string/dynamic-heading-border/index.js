// 5. Creating a Dynamic Heading Border
// Create a function that takes a string and returns a border made of * characters of the same 
// length.
// 🔹 Hint: Use str.length and .repeat().

function createHeadingBorder(str) {
    const border = '*'.repeat(str.length);
    return border;
}

console.log(createHeadingBorder("Heading"));