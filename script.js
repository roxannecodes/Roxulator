

let display = document.querySelector(".input");
let resultDisplayed=false;
let waitingForSecondOperand=false;

//add click handlers to all number buttons
let numbers = document.querySelectorAll(".digit");

for (i of numbers) {
  i.addEventListener("click", function(e) {
    
    let currentSTring = this.innerHTML;
    if (resultDisplayed===false){
    display.innerHTML += this.innerHTML;}


  });
}
 

//adding click handlers to all operator buttons
let operators= document.querySelectorAll(".operator");

for (i of operators) {
i.addEventListener("click", function (){
  display.innerHTML = this.value;
});
}


//adding click handler to equals btn and calling the main calculation function 

let result=document.querySelector (".equals");

result.addEventListener("click", function(){
operate (num1, operator,num2);
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

