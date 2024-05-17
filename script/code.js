function appendToDisplay(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  var display = document.getElementById('result').value;
  var result = eval(display);
  document.getElementById('result').value = result;
}
