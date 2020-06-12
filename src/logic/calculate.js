import operate from './operate';

export default function calculate(calculate = { total: null, next: null, operation: null }, btnName = '') {
  const operators = ['+', '-', 'X', '÷', '%'];
  let total = parseFloat(calculate.total) || '';
  let next = parseFloat(calculate.next) || '';
  const { operation } = calculate;

  if (btnName === '+/-') {
    total = (total ? (total * -1).toString() : null);
    next = next ? (next * -1).toString() : null;
  }

  // if (btnName === '+/-') {
  //   newCalculate.total = calculate.total * -1;
  //   newCalculate.next = calculate.next * -1;
  //   newCalculate.operation = calculate.operation;
  // } else if (operators.includes(btnName)) {
  //   newCalculate.total = operate(calculate.total, calculate.next, btnName);
  // }
  //
  return { total, next, operation };
}
