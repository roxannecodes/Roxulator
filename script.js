
function divide(a,b) {
  return a / b ;
}

function multiply(a,b) {
 return a * b ;
}

function add(a,b){
 
 console.log (a+b);
 return a + b ;
}

function subtract(a, b) {
  return a - b ;
}


function operate(a, operator, b) {
  if (operator==="+"){
    return add(a,b);
  }
  if (operator==="-"){
    return subtract(a,b);
  }

  if (operator==="÷"){
    return divide(a,b);
  }

 if (operator === "×"){
   return multiply(a,b)
 }
}

operate (2,"+",2);