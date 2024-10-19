let currentInput = "";
let previousInput = "";
let operator = "";
let memory = 0;
let resultDisplayed = false;

function updateDisplay(value) {
    $("#display").val(value);
}

$(".btn").not(".operator, .btm, .memory, #dp").click(function() {
  if (resultDisplayed){
    currentInput = "";
    resultDisplayed = false;
  }
    currentInput += $(this).data("value");
    updateDisplay(currentInput);
});

$(".operator").click(function(){
  if (currentInput === "") return;

  operator = $(this).data("value");
  previousInput = currentInput;
  currentInput = "";
  resultDisplayed = false;
});


$("#equals").click(function(){
  previousInput = parseFloat(previousInput);
  currentInput = parseFloat(currentInput);

  if (operator === ""){
    resultDisplayed =  true;
    //currentInput = "";
    return;
  }

  let result;

  switch(operator){
      case "+":
        result = previousInput + currentInput;
        break;
      case '-':
        result = previousInput - currentInput;
        break;
      case '*':
         result = previousInput * currentInput;
         break;
      case '/':
        result = previousInput / currentInput;
         break;
      case '%':
         result = previousInput % currentInput;
        break;
  }
  updateDisplay(result);
  //currentInput = "";
  currentInput = result.toString();
  operator = "";
  resultDisplayed = true;
});


$('#clear').click(function() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay(''); 
});


$('#memory-clear').click(function() {
    memory = 0;
});

$('#memory-recall').click(function() {
    currentInput = memory.toString();
    updateDisplay(currentInput);
});

$('#memory-add').click(function() {
    memory += parseFloat(currentInput);
});

$('#memory-subtract').click(function() {
    memory -= parseFloat(currentInput);
});


$('#dp').click(function() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
});
