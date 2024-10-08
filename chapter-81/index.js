const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

if ("") {
  console.log("Condition is true");
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapter 81 - A falsy value is the opposite - a value considered false when evaluated as a boolean.
// JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.

// Try changing your if condition to an empty string "", which is a falsy value.