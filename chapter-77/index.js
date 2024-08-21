const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
*/   

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapter 77 - Use /* and */ to turn your current for loop, including the body, into a multi-line comment...