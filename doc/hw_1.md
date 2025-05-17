# Recursive Sum CLI — Node.js Homework

Write a Node.js program that accepts a nested array of numbers as a string from the command line and calculates the total sum using recursion.

---

## Resources

### Node.js Basics

* Node.js `process.argv`
* Handling Command-Line Arguments

### JavaScript Recursion & Arrays

* [MDN: Recursion in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
* [MDN: Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
* [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
* [MDN: reduce() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [MDN: flat() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
* [FreeCodeCamp: Understanding Recursion](https://www.freecodecamp.org/news/recursion-in-javascript/)
* [MDN: String parsing and manipulation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### JSON & Manual Parsing

* [MDN: JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* Manual Parsing with Stacks in JS (for advanced use)

### Testing & Tooling

* [Jest: JavaScript Testing Framework](https://jestjs.io/)
* Using Jest in Node.js Projects
* [MDN: Unit testing in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Testing/Unit_testing_JavaScript)
* Node.js Unit Testing Best Practices
* [npx Documentation](https://docs.npmjs.com/cli/v10/commands/npx)

---

## Requirements

* The input is passed as a single command-line argument.
* The argument must be a JSON-like string representing a nested array of numbers, for example:
  `"[1, 2, [3, 4, [5]], 6]"`
* The program should:

  * Parse the input string.
  * Recursively traverse the nested structure.
  * Output the total sum of all numbers.

---

## Implementation Hints

You’re encouraged to try two different approaches:

### Parsing Approaches

* Use `JSON.parse()` for fast prototyping.
* Try writing a manual parser:

  * Traverse character-by-character.
  * Convert bracket structure into nested arrays.
  * Practice understanding array syntax and nesting.

### Summing Approaches

* Recursively walk through the array:

  * If the item is a number — add it.
  * If the item is an array — recurse into it.
* Try a “flatten + sum” approach using recursion or functional tools like `flatMap` + `reduce`.

---

## Example Usage

```bash
node sum.js "[1, 2, [3, 4, [5]], 6]"
# Output: 21
```

---

## Tests

You can write tests in a separate file like `sum.test.js`, or manually run them in your terminal:

### 🔍 Manual test cases:

```bash
node sum.js "[1, 2, 3]"                  # Output: 6
node sum.js "[[1, 2], [3, 4]]"           # Output: 10
node sum.js "[1, [2, [3, [4]]]]"         # Output: 10
node sum.js "[]"                         # Output: 0
node sum.js "[[[]]]"                     # Output: 0
node sum.js "[1, -1, [2, -2]]"           # Output: 0
```

### Optional automated test setup:

Install Jest:

```bash
npm install --save-dev jest
```

Create a `sum.test.js` file:

```js
const { sumNestedArray } = require('./sum');

test('flat array', () => {
  expect(sumNestedArray([1, 2, 3])).toBe(6);
});

test('nested array', () => {
  expect(sumNestedArray([1, [2, [3, 4]], 5])).toBe(15);
});

test('empty array', () => {
  expect(sumNestedArray([])).toBe(0);
});
```

Run tests with:

```bash
npx jest
```

---

## Tip

Structure your code clearly by separating **parsing logic** and **summing logic** into reusable functions.
