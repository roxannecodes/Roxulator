

let display = document.querySelector(".input");


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

display.innerHTML = this.innerHTML;
});
}

let string=display.innerHTML;
let ar = [string];
let firstChar= ar[0];

let operator;
let num1;
let num2;


//function that stores/displays values for variables above and passes them to main calc function as parameters.
function prepCalc (){

   if (firstChar==="+" || "-"|| "&divide;" || "&times;") {
       //get operator
        operator = ar[0];
        //then extract num2
        num2 = parseFloat(string);
        //update display
        display.innerHTML=this.innerHTML;
   }
      
   else {
      //store num1 
      num1= parseFloat(string);
      //update display with operator that was clicked
      display.innerHTML = this.innerHTML;
 
   }

  display.innerHtml= operate(num1, operator, num2);

}

//prepCalc();


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
  display.innerHTML = a / b ;
}

function multiply(a,b) {
 display.innerHTML =  a * b ;
}

function add(a,b) {
 display.innerHTML =  a + b ;
}

function subtract(a, b) {
  display.innerHTML = a - b ;
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

/*
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
let operators = document.querySelectorAll(".operator");
for (i of operators) {
  i.addEventListener("click", function() {
  display.innerHTML = this.innerHTML;
  });
}

let string=display.innerHTML;
let ar = [string];
let firstChar= ar[0];

let operator;
let num1;
let num2;

//function that gets values of the above variables and passes them to the main calculation fxn as parameters
function getValues () {

   if (firstChar ==="+" || "-"|| "&divide;" || "&times;") {

     if (waitingForSecondOpperand=true) {
       //store operator  
        operator = firstChar;
        //store num2
        num2 = parseFloat(string);
        //update display with operator that was clicked
        display.innerHTML=this.innerHTML; 
     }
    if (waitingForSecondOpperand=false) {

    }
    return operator;
    return num2;
   }


 else {
      //store num1 
      num1 = parseFloat(string);
      //update display 
      display.innerHTML = this.innerHTML;
      return num1;
    
   }
   
  display.innerHtml= operate(num1, operator, num2);

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

//equals button
let equals =document.querySelector(".equals");
equals.addEventListener("click", function(){
 display.innerHTML= operate (num1, operator,num2);
});

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


*/

