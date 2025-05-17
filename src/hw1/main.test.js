import parser from './utils/parser.js';
import math from './utils/math.js';

describe('Sum Calculation Strategies', () => {
  test('Recursive strategy sums flat and nested arrays', () => {
    math.setSummCalculationStrategy(math.callculateArraySummRecursive);

    expect(math.callculateArraySumm([1, [2, 3], 4])).toBe(10);
    expect(math.callculateArraySumm([1, 2, [3, 4, [5]], 6])).toBe(21);
  });

  test('Operator-based strategy sums flat and nested arrays', () => {
    math.setSummCalculationStrategy(math.callculateArraySummByOpperators);

    expect(math.callculateArraySumm([1, [2, 3], 4])).toBe(10);
    expect(math.callculateArraySumm([1, 2, [3, 4, [5]], 6])).toBe(21);
  });
});

describe('Array Parsing Strategies', () => {
  test('JSON strategy parses simple nested array', () => {
    parser.setDeserializationStrategy(parser.deserializeArrayByJSON);
    const result = parser.deserializeArray('[1, [2, 3], 4]');
    expect(result).toEqual([1, [2, 3], 4]);
  });

  test('Recursive parser handles simple and deeply nested arrays', () => {
    parser.setDeserializationStrategy(parser.deserializeNestedArrayByRecursive);

    expect(parser.deserializeArray('[1,[2,3],4]')).toEqual([1, [2, 3], 4]);
    expect(parser.deserializeArray('[1,[2,[3,[4]]]]')).toEqual([1, [2, [3, [4]]]]);
  });
});

describe('End-to-End Flow', () => {
  test('Recursive sum with recursive parser', () => {
    const input = '[1, 2, [3, 4, [5]], 6]';

    math.setSummCalculationStrategy(math.callculateArraySummRecursive);
    parser.setDeserializationStrategy(parser.deserializeNestedArrayByRecursive);

    const parsedArray = parser.deserializeArray(input);
    const result = math.callculateArraySumm(parsedArray);

    expect(result).toBe(21);
  });

  test('Operator-based sum with JSON parser', () => {
    const input = '[1, 2, [3, 4, [5]], 6]';

    math.setSummCalculationStrategy(math.callculateArraySummByOpperators);
    parser.setDeserializationStrategy(parser.deserializeArrayByJSON);

    const parsedArray = parser.deserializeArray(input);
    const result = math.callculateArraySumm(parsedArray);

    expect(result).toBe(21);
  });
});