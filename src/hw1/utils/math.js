let currentSummStrategy = calculateSumRecursive;

function setSummCalculationStrategy(strategy) {
  currentSummStrategy = strategy;
}

function callculateArraySumm(array) {
  return currentSummStrategy(array);
}

function calculateSumRecursive(array) {
  console.log("[Info] Strategy: Recursive → Using manual recursion for summ");
  return calculateSumRecursiveCore(array)
}

function calculateSumRecursiveCore(array) {
  let acum = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNumber(array[i])) {
      acum += array[i];
    } else {
      acum += calculateSumRecursiveCore(array[i]);
    }
  }
  return acum;
}

function callculateArraySummByOpperators(array) {
  console.log("[Info] Strategy: Flat Operators → Using flat + filter + reduce for summ");

  return array.flat(Infinity).filter((it) => isNumber(it)).reduce((acum, it) => acum + it)
}

function isNumber(value) {
  return typeof value === 'number';
}

export default {
  callculateArraySumm,
  setSummCalculationStrategy,
  callculateArraySummRecursive: calculateSumRecursive,
  callculateArraySummByOpperators,
};
