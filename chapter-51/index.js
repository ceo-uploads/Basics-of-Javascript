const character = "#";
const count = 8;
const rows = [];

function padRow() {
  return "Hello!";
}
const call = padRow();
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapter 51 - Use the return keyword to have your function return the string "Hello!".