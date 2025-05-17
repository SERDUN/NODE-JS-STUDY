export function callculateArraySumm(array) {
  return callculateArraySummRecursive(array)
}

function callculateArraySummRecursive(array) {
  let acum = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNumber(array[i])) {
      acum += array[i];
    } else {
      acum += callculateArraySummRecursive(array[i]);
    }
  }
  return acum;
}

function callculateArraySummByOpperators(array) {
  return array.flat(Infinity).filter((it) => isNumber(it)).reduce((acum, it) => acum + it)
}

function isNumber(value) {
  return typeof value === 'number';
}

export default {
  calculateArraySum: callculateArraySumm,
};
