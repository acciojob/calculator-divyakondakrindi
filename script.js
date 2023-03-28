//your code here
const input = document.getElementById('input');
const blocks = document.querySelectorAll('.block');
const operators = document.querySelectorAll('.operator');
const ansBtn = document.getElementById('ans');
const clrBtn = document.getElementById('clr');

let temp = '';
let operator = '';

// Clear the input field
function clear() {
  input.value = '';
  temp = '';
  operator = '';
}

// Perform the calculation and display the result
function calculate() {
  let result = 0;
  switch (operator) {
    case '+':
      result = parseFloat(temp) + parseFloat(input.value);
      break;
    case '-':
      result = parseFloat(temp) - parseFloat(input.value);
      break;
    case '*':
      result = parseFloat(temp) * parseFloat(input.value);
      break;
    case '/':
      if (input.value === '0') {
        result = 'Infinity';
      } else if (temp === '0' && input.value === '0') {
        result = 'NaN';
      } else {
        result = parseFloat(temp) / parseFloat(input.value);
      }
      break;
    default:
      break;
  }
  input.value = result;
  temp = result.toString();
  operator = '';
}

// Add event listeners to the number buttons
blocks.forEach(block => {
  block.addEventListener('click', () => {
    input.value += block.textContent;
  });
});

// Add event listeners to the operator buttons
operators.forEach(op => {
  op.addEventListener('click', () => {
    operator = op.textContent;
    temp = input.value;
    input.value = '';
  });
});

// Add event listener to the decimal button
dot.addEventListener('click', () => {
  if (!input.value.includes('.')) {
    input.value += '.';
  }
});

// Add event listener to the clear button
clrBtn.addEventListener('click', clear);

// Add event listener to the equals button
ansBtn.addEventListener('click', calculate);