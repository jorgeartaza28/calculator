function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var c = document.querySelector("#Operator").value;
  var calculate;

  if (c == "add") {
    calculate = a + b;
  }else if (c == "subtract") {
    calculate = a - b;
  }else if (c == "multiply") {
    calculate = a * b;
  }else if (c == "divide") {
    calculate = a / b;
  }

document.querySelector("#result").innerHTML = calculate;
}
