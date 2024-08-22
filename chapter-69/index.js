const character = "#";
const count = 8;
const rows = [];
const space = " ";
function padRow(rowNumber, rowCount) {
  return space.repeat(rowCount - rowNumber) + character.repeat(rowNumber) + space.repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapter 69 - Update your blank space strings to be repeated rowCount - rowNumber times.