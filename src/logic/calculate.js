import operate from './operate';

export default function calculate(calculate = { total: null, next: null, operation: null }, btnName = '') {
  let total = parseFloat(calculate.total) || '';
  let next = parseFloat(calculate.next) || '';
  let { operation } = calculate;

  if (btnName === '+/-') {
    total = (total ? (total * -1).toString() : null);
    next = next ? (next * -1).toString() : null;
  } else if (btnName === '=') {
    total = operate(total, next, operation).toString();
    next = null;
    operation = null;
  }

  return { total, next, operation };
}
