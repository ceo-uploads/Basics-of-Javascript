const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

// loop for printing pyramid

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapter 76 - In JavaScript, you can use // to leave a single-line comment in your code..