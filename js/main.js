let expression = "";

function insert(value) {
  expression += value;
  document.getElementById("screen").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("screen").value = expression;
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById("screen").value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById("screen").value = expression;
  } catch (error) {
    alert("Invalid expression");
  }
}
