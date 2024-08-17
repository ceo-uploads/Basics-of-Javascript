const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = "";

for (const row of rows) {
  result = result + rows;
}

console.log(result);

// chapter 42 - You can do a similar thing with a string value, by appending
// a new string to an existing string. For example, hello = hello + " World";
// would add the string " World" to the existing string stored in the hello variable. This is called concatenation.

// In your for...of loop, use the addition operator to concatenate the row value to the result value.