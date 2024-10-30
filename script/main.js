let multipyNumbers = document.getElementById("multiply");
let result = document.getElementById("result");

function multiply() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  const value = number1 * number2;
  result.innerHTML = "The result is " + value;
}
multipyNumbers.onclick = multiply;
