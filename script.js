
//DOM calc variables
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let keys=document.querySelector(".calc-btns");

//the calculator object (initial state)
let calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};


function updateDisplay() {
display.value = calculator.displayValue;
}

updateDisplay();

//add event listeners to all buttons (using container class ".calc-btns")

keys.addEventListener("click", function (event) {
//access the clicked element
let { target } = event;

//make sure the clicked element is a button (or exit fxn)
if (!target.matches("button")) {
  return;
}



});


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
