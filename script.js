

let display = document.querySelector(".input");


//add event listeners to numbers
let numbers = document.querySelectorAll('.digit');

for (i of numbers) {
  i.addEventListener('click', function(e) {
    display.innerHTML=e.target.innerHTML;
  });
}


//adding event listeners to all operators
let operators= document.querySelectorAll(".operator");

for (i of operators) {
i.addEventListener("click", function (){
  display.innerHTML = this.value;
});
}

//adding event listener to decimal btn
let decimal = document.querySelector(".decimal");

decimal.addEventListener("click",function(){
  display.innerHTML= this.innerHTML;
} )


//adding event listener to equals btn

let result=document.querySelector (".equals");

result.addEventListener("click", function(){
operate (num1, operator,num2);
});

//clearing the calc screen

let clear = document.querySelector(".clear");

clear.addEventListener("click", function() {
  location.reload();
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