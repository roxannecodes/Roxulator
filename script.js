
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

let string=display.innerHTML;
let ar = [string];
let firstChar= ar[0];

/*-----------*/
let operators= document.querySelectorAll(".operator");
let operator;
let num1;
let num2;

//adding click handlers to all operator buttons
for (i of operators) {
i.addEventListener("click", function() {

  if ( firstChar === "1" || "2" ||"3"  ) {

      //update display with operator that was clicked
      display.innerHTML = this.innerHTML;
      //store num1 
      num1=string;
      waitingForSecondOpperand=false;
     }

  else if (firstChar==="+") {
        //first extract operator
        //  operator = ;

        //then extract num2
        // num2= ;
       
      }
});

    display.innerHtml= operate(num1, operator, num2);
    waitingForSecondOpperand=true;
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



