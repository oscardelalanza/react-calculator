import operate from 'operate';

export default function calculate(calculate = { total: null, next: null, operation: null }, btnName = '') {
  const operators = ['+', '-', 'X', '÷', '%'];
  const newCalculate = calculate;

  if (btnName === '+/-') {
    newCalculate.total = calculate.total * -1;
    newCalculate.next = calculate.next * -1;
    newCalculate.operation = calculate.operation;
  } else if (operators.includes(btnName)) {
    newCalculate.total = operate(calculate.total, calculate.next, btnName);
  }

  return newCalculate;
}
