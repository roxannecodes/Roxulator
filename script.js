

let display = document.querySelector(".input");
let waitingForSecondOpperand=true;

//add click handlers to all number buttons
let numbers = document.querySelectorAll(".digit");

for (i of numbers) {
  i.addEventListener("click", function() {
    //update the display after each entry
    display.innerHTML += this.innerHTML; 
  });
}


//adding click handlers to all operator buttons
let operators= document.querySelectorAll(".operator");

for (i of operators) {
i.addEventListener("click", function() {

display.innerHTML=this.innerHTML;
});
}


let string=display.innerHTML;
let ar = [string];
let firstChar= ar[0];



/*-----------*/

let operator;
let num1;
let num2;



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


//clearing the calc screen 
let clear = document.querySelector(".clear");

clear.addEventListener("click", function() {
  display.innerHTML= " ";
});


// resetting the calc (all clear)
let allClear = document.querySelector(".all-clear");

allClear.addEventListener("click", function() {
  location.reload();
});



