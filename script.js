
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

  //ensure the clicked entity is a button *
   if (!target.matches('button')) {
    return; 
  }

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







