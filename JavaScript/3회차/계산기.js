let expression = '0';

function updateDisplay() {
  const expressionElement = document.getElementById('expression');
  const resultElement = document.getElementById('result');
  expressionElement.textContent = expression;
  try {
    const result = eval(expression);
    resultElement.textContent = result.toString();
  } catch (error) {
    resultElement.textContent = 'Error';
  }
}

function appendCharacter(char) {
  if (expression === '0' && !'+-*/'.includes(char)) {
    expression = char;
  } else {
    expression += char;
  }
  updateDisplay();
}

function clearResult() {
  expression = '0';
  updateDisplay();
}

function deleteCharacter() {
  if (expression.length > 1) {
    expression = expression.slice(0, -1);
  } else {
    expression = '0';
  }
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    expression = 'Error';
    updateDisplay();
  }
}

updateDisplay();
