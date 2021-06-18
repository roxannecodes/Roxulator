
// DOM calc variables
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let keys = document.querySelector('.calc-buttons');


//the calculator object (initial state)

let calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//keep calculator screen updated
function updateDisplay() {
  display.value = calculator.displayValue;
}
updateDisplay();

//add event listeners to all buttons via parent (container)
keys.addEventListener('click', function (event) {

  //access the clicked element (destructuring assignment-- {target}=event )
  let target = event.target;


  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});

//study break:figure out the hard stuff on paper and study mdn

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
