import input from './utils/input.js';
import parser from './utils/parser.js';
import math from './utils/math.js';

math.setSummCalculationStrategy(math.callculateArraySummRecursive)
parser.setDeserializationStrategy(parser.deserializeNestedArrayByRecursive)

console.log("[Info] Operation parameters:");
const rawInput = input.getArguments()
const parsedArray = parser.deserializeArray(rawInput)
const summ = math.callculateArraySumm(parsedArray)

console.log("\n[Output] Result of array summation:");
console.log(summ)
