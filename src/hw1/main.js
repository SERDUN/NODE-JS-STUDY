import input from './utils/input.js';
import parser from './utils/parser.js';
import math from './utils/math.js';

const rawInput = input.getArguments()
const parsedArray = parser.deserializeArray(rawInput)
const summ = math.calculateArraySum(parsedArray)

console.log(summ)
