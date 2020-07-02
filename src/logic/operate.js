import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result = null;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);

  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;

    case '-':
      result = num1.minus(num2);
      break;

    case 'X':
      result = num1.times(num2);
      break;

    case '÷':
      result = num1.div(num2);
      break;

    case '%':
      result = num1.times(num2.div(100));
      break;

    default:
      result = 0;
      break;
  }

  return result;
}
