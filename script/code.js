document.addEventListener("DOMContentLoaded", function() {
  let resultField = document.getElementById("result");
  let clearButton = document.getElementById("clear");
  let calculateButton = document.getElementById("calculate");

  // Clear display function
  clearButton.addEventListener("click", function() {
      resultField.value = "";
  });

  let appendToDisplay = function(value) {
      resultField.value += value;
  };

  // Calculating the result
  calculateButton.addEventListener("click", function() {
      let expression = resultField.value;
      let result = eval(expression);
      resultField.value = result;
  });

  const buttons = document.querySelectorAll(".btn:not(#clear):not(#calculate)");
  buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          appendToDisplay(button.value);
      });
  });
});