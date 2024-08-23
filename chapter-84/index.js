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
let continueLoop = false;
let done = 0;
/*if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
} */

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapterv84 - Once you complete that, use let to declare a continueLoop variable and assign it the boolean false.
// Then use let to declare a done variable and assign it the value 0.