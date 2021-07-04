let display = document.querySelector(".input");
let numbers = document.querySelectorAll(".digit");
let operators= document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clear");
let allClear = document.querySelector(".all-clear");
let operator = " ";
let num1 =" ";
let num2 =" ";

//add click handlers to all number buttons
for (i of numbers) {
  i.addEventListener("click", function() {
   inputNumber(this.innerHTML);
  });
}
//adding click handlers to all operator buttons
for (i of operators) {
i.addEventListener ("click", function() {
 display.innerHTML = this.innerHTML;
 operator =this.innerHTML;
});
}

//equals button ** calls main calculation function with the values of parameters **
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

//Update display
function updateDisplay(number) {
  display.innerHTML = number;
}

//store and update numbers
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
  answer = parseFloat(a) / parseFloat (b) ;
  result=answer.toFixed(3);
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


