/**
 * Strict Mode
 *  JavaScript's strict mode, introduced in ECMAScript 5, 
    is a way to opt in to a restricted variant of JavaScript, 
    thereby implicitly opting-out of "sloppy mode". 
    Strict mode isn't just a subset: it intentionally has different semantics 
    from normal code. Browsers not supporting strict mode will run strict 
    mode code with different behavior from browsers that do, so don't rely
    on strict mode without feature-testing for support for the relevant 
    aspects of strict mode. Strict mode code and non-strict mode code can 
    coexist, so scripts can opt into strict mode incrementally.
  
 *  Strict mode makes several changes to normal JavaScript semantics:

   -> Eliminates some JavaScript silent errors by changing them to throw errors.
   -> Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
   -> Prohibits some syntax likely to be defined in future versions of ECMAScript.
 */

console.log("===First Example===");

foo = 5;
function func() {
  console.log(this.foo);
}
// func();

function func1() {
  "use strict";
  console.log(this.foo);
}
// func1();

console.log("===Second Example===");

// console.log("---Befor use strict---");

// function func2() {
//   console.log(this);
//   return this;
// }

// console.log(`func2() === undefined ::`, func2() === undefined);

// console.log(
//   `typeof func2.call(2) === 'object' ::`,
//   typeof func2.call(2) === "object"
// );

// console.log(
//   `func2.apply(null) === 'global' ::`,
//   func2.apply(null) === "global"
// );

// console.log(
//   `func2.apply(undefined) === 'global' ::`,
//   func2.apply(undefined) === "global"
// );

// console.log(
//   `typeof func2.bind(true)() === 'object' ::`,
//   typeof func2.bind(true)() === "object"
// );

console.log("---After use strict---");



function func2() {
    "use strict";
  console.log(this);
  return this;
}

// console.log(`func2() === undefined ::`, func2() === undefined);

// console.log(
//   `typeof func2.call(2) === 'number' ::`,
//   typeof func2.call(2) === "number"
// );

// console.log(
//   `func2.apply(null) === null ::`,
//   func2.apply(null) === null
// );

// console.log(
//   `func2.apply(undefined) === undefined ::`,
//   func2.apply(undefined) === undefined
// );

// console.log(
//   `typeof func2.bind(true)() === 'boolean' ::`,
//   typeof func2.bind(true)() === "boolean"
// );
