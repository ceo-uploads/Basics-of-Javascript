const character = "#";
const count = 8;
const rows = [];

function padRow() {
  const test = "Testing";  
  return test;
}

const capturedReturnedValue = padRow();

console.log(capturedReturnedValue);

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// chapter 59 - To use your "Testing" value, return it out of the padRow
// function by updating your return statement to return only the test variable.