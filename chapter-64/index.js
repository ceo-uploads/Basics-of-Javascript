const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {

}


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapter 64 - The best way to do this is by creating function parameters for them.
// Give your padRow function a rowNumber and rowCount parameter. Multiple parameters are separated by a comma: