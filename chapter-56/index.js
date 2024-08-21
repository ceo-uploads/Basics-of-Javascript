const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum)


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

// chapter 56 - With that quick review complete, you should
// remove your addTwoNumbers function, sum variable, and log statement.