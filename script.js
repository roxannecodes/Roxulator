
function divide(a,b) {
  return a / b ;
}

function multiply(a,b) {
 return a * b ;
}

function add(a,b){
 
 console.log (a+b);
 return a + b ;
}

function subtract(a, b) {
  return a - b ;
}


function operate(a, operator, b) {
  if (operator==="+"){
    return add(a,b);
  }
  if (operator==="-"){
    return subtract(a,b);
  }

  if (operator==="÷"){
    return divide(a,b);
  }

 if (operator === "×"){
   return multiply(a,b)
 }
}

//object holding data for expression
let calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

let display=document.querySelector(".calc-screen");
display.value = calculator.displayValue;



document.querySelectorAll(".calc-button").addEventListener.click = function (e) {
  
}

let displayValue = 