
function divide(a,b) {
  return a / b ;
}

function multiply(a,b) {
 return a * b ;
}

function add(a,b){

 return a + b ;
}

function subtract(a, b) {
  return a - b ;
}


function operate(num1, operator, num2) {
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


//DOM calc variables
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

//the calculator object (initial state)
let calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};


function updateDisplay(){

display.value = calculator.displayValue;


}



//add event listeners to all buttons

