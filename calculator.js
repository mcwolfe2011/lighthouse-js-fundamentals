//CALCULATOR
// function to add two numbers
function add(a, b) {
  return a + b;
}

// function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// function to divide two numbers
function divide(a, b) {
  return a / b;
}

// get user input
let num1 = parseInt(prompt("Enter a number: "));
let num2 = parseInt(prompt("Enter another number: "));

// get operation to perform
let operation = prompt("Enter an operation (+, -, *, /): ");

// perform calculation based on operation
let result;
if (operation === "+") {
  result = add(num1, num2);
} else if (operation === "-") {
  result = subtract(num1, num2);
} else if (operation === "*") {
  result = multiply(num1, num2);
} else if (operation === "/") {
  result = divide(num1, num2);
} else {
  result = "Invalid operation";
}

// display result
console.log(result);