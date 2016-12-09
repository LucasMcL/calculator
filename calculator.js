// Create an HTML file that has two input fields to accept the
// two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical
// functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations,
// output the result to another DOM element of your choice.

function addNumbers(num1, num2) {
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function divideNumbers(num1, num2) {
  return num1 / num2;
}

function performOperation(num1, num2, operation) {
  return operation(num1, num2)
}

// An experiment in switch case
function onButtonClick(clickEvt) {
  var num1 = Number(document.getElementById('num1_inpt').value)
  var num2 = Number(document.getElementById('num2_inpt').value)
  var id = clickEvt.target.id
  var results = document.getElementById('results')
  switch (id) {
    case "add":
      results.innerText = performOperation(num1, num2, addNumbers); break
    case "subtract":
      results.innerText = performOperation(num1, num2, subtractNumbers); break
    case "multiply":
      results.innerText = performOperation(num1, num2, multiplyNumbers); break
    case "divide":
      results.innerText = performOperation(num1, num2, divideNumbers); break
  }
}

// Event listeners
document.getElementById('add').addEventListener('click', onButtonClick)
document.getElementById('subtract').addEventListener('click', onButtonClick)
document.getElementById('multiply').addEventListener('click', onButtonClick)
document.getElementById('divide').addEventListener('click', onButtonClick)









