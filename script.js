
//DOM variables
let display = document.querySelector("input");
let operator = document.querySelectorAll(".operator");
let number = document.querySelectorAll(".digit");
let clear = document.querySelector(".clear");

let decimal = document.querySelector(".decimal
");

let equals = document.querySelector(".equals");

let buttons = document.querySelectorAll("button");

//Main calculation function
function operate (num1, operator, num2) {
  if (operator==="+") {
    return add(num1, num2);
  }
  else if (operator==="-") {
    return subtract(num1, num2);
  }
 else if (operator==="÷") {
    return divide(num1, num2);
  }

 else if (operator === "×") {
   return multiply(num1,num2)
 }
}

//calculations
function divide(a,b) {
  return a / b ;
}

function multiply(a,b) {
 return a * b ;
}

function add(a,b) {
 return a + b ;
}

function subtract(a, b) {
  return a - b ;
} 
