const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  const test = "Testing";
  console.log(test);
  return character + name;
}



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

// chapter 58 - To see this in action, use const to declare a test variable in your padRow function.
// Initialise it with the value "Testing".

// Then, below your function, try to log test to the console. You will see an error because it is not
// defined outside of the function's local scope. Remove that console.log to pass the tests and continue