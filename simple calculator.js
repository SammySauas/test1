function simplecalculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  }
  if (a !== 0) {
    return a / b;
  } else {
    return "Error";
  }
  return a, b, operator;
}
console.log(simplecalculator(2));
