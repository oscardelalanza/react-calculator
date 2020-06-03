export default function calculate(calculate = { total: null, next: null, operation: null }, btnName = '') {
  let newCalculate = {
    total: null,
    next: null,
    operation: null,
  };

  if (btnName === '+/-') {
    newCalculate.total = calculate.total * -1;
    newCalculate.next = calculate.next * -1;
    newCalculate.operation = calculate.operation;
  } else {
    newCalculate = calculate;
  }

  return newCalculate;
}
