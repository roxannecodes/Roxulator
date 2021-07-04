
let display = document.querySelector(".input");
let numbers = document.querySelectorAll(".digit");
let operators= document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clear");
let allClear = document.querySelector(".all-clear");
let operator = " ";
let num1 =" ";
let num2 =" ";
let result;

//add click handlers to all number buttons
for (i of numbers) {
  i.addEventListener("click", function() {
   let number = this.innerHTML;
   inputNumber(number);
  });
}
//adding click handlers to all operator buttons
for (i of operators) {
i.addEventListener ("click", function() {
 operator =this.innerHTML;
 display.innerHTML = operator;
});
}

//equals button ** calls main calculation function with the values of parameters
equals.addEventListener("click", function (){
 operate (num1, operator, num2);
 updateDisplay(result);
 num1 = result;
 num2 = "";
 operator = "";
});

//clearing the calc screen 
clear.addEventListener("click", function() {
  display.innerHTML= " ";
});

// resetting the calc (all clear)
allClear.addEventListener("click", function() {
  location.reload();
});

//update display
function updateDisplay (number) {
  display.innerHTML = number;
}

//update/store numbers
function inputNumber(number) {
 if (operator === " ") {
   num1 += number;
   updateDisplay(num1);      
 } else {
   num2 += number
   updateDisplay(num2);
   }
}

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
  result = parseFloat(a) / parseFloat (b) ;
}
function multiply(a,b) {
 result = parseFloat(a) * parseFloat(b);
}
function add(a,b) {
 result = parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
 result = parseFloat(a) - parseFloat(b);
} 