import parser from './utils/parser.js';
import math from './utils/math.js';

describe('Sum Calculation Strategies', () => {
  test('calculateSumRecursive correctly sums nested array', () => {
    math.setSummCalculationStrategy(math.callculateArraySummRecursive);
    const input = [1, [2, 3], 4];
    const result = math.callculateArraySumm(input);
    expect(result).toBe(10);
  });

  test('callculateArraySummByOpperators correctly sums nested array', () => {
    math.setSummCalculationStrategy(math.callculateArraySummByOpperators);
    const input = [1, [2, 3], 4];
    const result = math.callculateArraySumm(input);
    expect(result).toBe(10);
  });
});

describe('Array Parsing Strategies', () => {
  test('deserializeArrayByJSON parses valid JSON string', () => {
    parser.setDeserializationStrategy(parser.deserializeArrayByJSON);
    const input = '[1, [2, 3], 4]';
    const result = parser.deserializeArray(input);
    expect(result).toEqual([1, [2, 3], 4]);
  });

test('deserializeNestedArrayByRecursive parses valid string recursively', () => {
  parser.setDeserializationStrategy(parser.deserializeNestedArrayByRecursive);
  const input = '[1,[2,3],4]';
  const result = parser.deserializeArray(input);
  console.log('Actual result:', JSON.stringify(result, null, 2));
  expect(result).toEqual([1, [2, 3], 4]);
});

  test('deserializeNestedArrayByRecursive handles deeply nested input', () => {
    parser.setDeserializationStrategy(parser.deserializeNestedArrayByRecursive);
    const input = '[1,[2,[3,[4]]]]';
    const result = parser.deserializeArray(input);
    expect(result).toEqual([1, [2, [3, [4]]]]);
  });
});
