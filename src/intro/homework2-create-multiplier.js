// Create a multiplier function that takes a number and returns a function that multiplies its argument by that number.
const createMultiplier = (multiplier) => (number) => multiplier * number;

const multiplyBy2 = createMultiplier(2);

console.log(multiplyBy2(5));
console.log(multiplyBy2(10));

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));
