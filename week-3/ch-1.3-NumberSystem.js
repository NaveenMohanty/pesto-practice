/**
 * Number in JS are 64-bit floating point.
 * special numbers are NaN and Infinity.
 * 0.1 + 0.2 = 0.3000000000004
 */

console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true), Number(false));
console.log(Number(56));
console.log(
  "When string is number only:",
  Number("56"),
  "  When sWhen string is not number only:",
  Number("56abc")
);

console.log(Number({ a: 123 }));

/**
 * NaN: Not a Number
 * Nan is the only value that is nt equal to itself
 */

// Ex:
console.log(
  "=====Nan is the only value that is not equal to itself Example 👇====="
);
console.log(NaN === NaN);
console.log([1, 2, NaN, 3].indexOf(NaN));
