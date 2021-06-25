
//DOM calculator variables
let display = document.querySelector("input");
let operator = document.querySelectorAll(".operator");
let number = document.querySelectorAll(".digit");
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let result = document.querySelector(".equals");

// starting from scratch :(
  
//adding event listeners to the buttons (using parent)

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (e){
  input.value = event.target.innerHtml;
})



//clearing
clear.addEventListener("click", function() {
  input.innerHtml = "";
});


// *** Main calculation function ***
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