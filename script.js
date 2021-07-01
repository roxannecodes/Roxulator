
let display = document.querySelector(".input");
let resultDisplayed=false;
let waitingForSecondOpperand=true;

//add click handlers to all number buttons
let numbers = document.querySelectorAll(".digit");

for (i of numbers) {
  i.addEventListener("click", function() {
    
 //display num1 
    if (resultDisplayed===false ){
    display.innerHTML += this.innerHTML;
    }

    
  });
}

//store num1 for later (main calc function)
let num1 = display.innerHTML;

//adding click handlers to all operator buttons
let operators= document.querySelectorAll(".operator");

for (i of operators) {
i.addEventListener("click", function() {

  if (waitingForSecondOpperand===true) {
  display.innerHTML = this.value;
  }
  else if (waitingForSecondOpperand===false) {
    display.innerHTML=this.value;
    let operator=this.value;
   //nest if statements for all 4 operators
   if (operator=== "+") {

   }
     
  

   
    display.innerHtml= operate(num1, operator, num2);
  }
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



